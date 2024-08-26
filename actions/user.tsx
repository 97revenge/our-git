"use server";

import { createStreamableValue, readStreamableValue, streamUI } from "ai/rsc";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import z from "zod";
import { SimpleLoader } from "@/components/SimpleLoader";
import { CoreMessage, streamText } from "ai";
import { ConfettiComponent } from "@/components/confetti";
import React from "react";
import { EnchancedCard } from "@/components/EnchancedCard";
import { userSchema } from "@/lib/zod/user";
import { MinimalistProfile } from "@/components/minimalistProfile";

let textContext: string;

const model = createGoogleGenerativeAI({
  apiKey: process.env.API_GEMINI_KEY!,
});

type UserProps = {
  username: string;
  review: string;
};

const getUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  const data: z.infer<typeof userSchema> = await response.json();

  const { textStream } = await streamText({
    model: model("gemini-1.5-flash-latest"),
    prompt: `reviewing this username on  the github ${username}`,
    system: "you are a assistant reviewer of github profiles.",
  });

  let value;

  for await (const textPart of textStream) {
    value = textPart;
  }

  return { data, value };
};

const UserComponent = (props: UserProps) => {
  "use client";

  return (
    <>
      <div className="border border-neutral-200 p-4 rounded-lg max-w-fit">
        <ul>
          <li> The profile is : {props.username}</li>
          <li> The review is : {props.review}</li>
        </ul>
      </div>
    </>
  );
};

export async function streamComponent(message: string) {
  const result = await streamUI({
    model: model("gemini-1.5-flash-latest", {
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
      ],
    }),
    prompt:
      "get the username and search for information on github about and make a personalized review on how they can be a better developer",
    text: ({ content }) => <div>{content}</div>,
    tools: {
      getWeather: {
        description:
          "Get the user in the Git Hub using the username and generate a review about this profile. ",
        parameters: z.object({
          username: z.string(),
        }),
        generate: async function* () {
          yield <SimpleLoader />;
          const user = await getUser(message);

          const { value } = user;

          return (
            <MinimalistProfile
              name={user.data?.name as string}
              bio={user.data?.bio as string}
              repos_url={user.data?.repos_url as string}
              gists_url={user.data?.gists_url as string}
              followers={user.data?.followers as number}
              following={user.data?.following as number}
              created_at={user.data?.created_at as string}
              updated_at={user.data?.updated_at as string}
              login={""}
              id={0}
              node_id={""}
              avatar_url={""}
              gravatar_id={""}
              url={""}
              html_url={""}
              followers_url={""}
              following_url={""}
              starred_url={""}
              subscriptions_url={""}
              organizations_url={""}
              events_url={""}
              received_events_url={""}
              type={"User"}
              site_admin={false}
              company={null}
              blog={""}
              location={""}
              email={null}
              hireable={null}
              twitter_username={null}
              public_repos={0}
              public_gists={0}
            />
          );
        },
      },
    },
  });

  return result.value;
}
