"use server";

import { streamUI } from "ai/rsc";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import z from "zod";
import { SimpleLoader } from "@/components/SimpleLoader";
import { CoreMessage } from "ai";

const model = createGoogleGenerativeAI({
  apiKey: process.env.API_GEMINI_KEY!,
});

type UserProps = {
  username: string;
  review: string;
};

const getUser = async (user: { username: string }) => {
  const response = await fetch(`https://api.github.com/users/${user.username}`);

  const data = await response.json();

  return data;
};

const UserComponent = async (user: UserProps) => {
  return (
    <>
      <div className="text-3xl font-bold">{user.username}</div>
      <div className="text-3xl font-bold">{user.review}</div>
    </>
  );
};

export async function streamComponent(messages: CoreMessage[]) {
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
        generate: async function* ({ username }) {
          yield <SimpleLoader />;
          const user = await getUser({ username });
          return <UserComponent username={user} review="" />;
        },
      },
    },
  });

  return result.value;
}
