"use server";

import { createStreamableValue, readStreamableValue, streamUI } from "ai/rsc";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import z from "zod";
import { SimpleLoader } from "@/components/SimpleLoader";
import { CoreMessage, streamText, generateText } from "ai";
import { ConfettiComponent } from "@/components/confetti";
import React from "react";
import { EnchancedCard } from "@/components/EnchancedCard";
import { userSchema } from "@/lib/zod/user";
import { MinimalistProfile } from "@/components/minimalistProfile";
import { repoSchema } from "@/lib/zod/owner";
import { ArticleAI } from "@/components/ArticleAI";
import { createStreamableUI } from "ai/rsc";
import { ProfileCardSkeleton } from "@/components/Skeletons/ProfileSkeleton";

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
  const repos = await fetch(`https://api.github.com/users/${username}/repos`);

  const data: z.infer<typeof userSchema> = await response.json();

  const brewRepos: Array<z.infer<typeof repoSchema>> = await repos.json();

  const description = brewRepos.map((item) => item.description);

  return { data };
};

export async function streamComponent(message: string) {
  const stream = createStreamableUI();
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
          yield <ProfileCardSkeleton />;
          const user = await getUser(message);

          const { data } = user;

          return (
            <ArticleAI
              titleGen={"este é o texto..."}
              updated_at={data?.updated_at}
              avatar_url={data?.avatar_url}
              name={data?.name}
              login={data?.login}
              bio={data?.bio}
              location={data?.location}
              followers={data?.followers}
              email={data?.email}
              twitter_username={data?.twitter_username}
              hireable={data?.hireable}
              url={data?.url}
            />
          );
        },
      },
    },
  });

  return result.value;
}
