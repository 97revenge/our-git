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

  // const data: {
  //   response: z.infer<typeof userSchema>;
  //   repo: z.infer<typeof repoSchema>;
  // } = {
  //   response: await response.json(),
  //   repo: await newResponse.repo.json(),
  // };

  const data: z.infer<typeof userSchema> = await response.json();

  const brewRepos: Array<z.infer<typeof repoSchema>> = await repos.json();

  const description = brewRepos.map((item) => item.description);

  const { text, toolResults } = await generateText({
    model: model("gemini-1.5-flash-latest"),
    prompt: `Generate a a title based on the content of the prompt, approximately 12 to 50 words : DESCRIPTIONS OF YOUR REPOS ${description} YOUR INFORMATION ${data} `,
    system: `You are an AI model designed to review code on GitHub with the expertise and insight of a seasoned human reviewer. Your mission is to deliver high-quality, professional, and insightful reviews that embody a blend of creativity, technical proficiency, and unbiased analysis. Your feedback should be tailored for the specific code submission and be suitable for sharing publicly, if desired.

    `,

    tools: {
      getTitle: {
        description:
          "based on the content of the prompt and also on this content, create a quality title on the subject",
        parameters: z.object({
          title: z
            .string()
            .describe(
              "a title based on the content of the prompt, approximately 12 to 50 words"
            ),
        }),
        execute: async ({ title }) => {
          return `${title}`;
        },
      },
    },
  });

  let value;

  const content: any =
    text || toolResults.map((toolResult) => toolResult.result).join("\n");

  return { data, content };
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
          yield <SimpleLoader />;
          const user = await getUser(message);

          const { content, data } = user;

          return (
            <ArticleAI
              titleGen={content}
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
