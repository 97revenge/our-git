"use server";

import { streamText } from "ai";
import { model } from "./user";
import { getPromptByRole } from "@/lib/role/getPromptByRole";
import { createStreamableValue } from "ai/rsc";

export const getResponseFromAI = async () => {
  // para cada chamada ai que eu tiver
  // nao importa de onde ou quando
  // eu terei uma resposta com um system e prompt personalizado.
};

export const resume = async (username: string, role: string) => {
  const { textStream } = await streamText({
    model: model("gemini-1.5-flash-latest", {
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
      ],
    }),
    system:
      "Your answer cannot be more than 4 numbers, always keep that in mind. You are a very accurate and professional assistant evaluator who receives various types of values ​​and gives an evaluation of great quality.",
    prompt: getPromptByRole(role as any, "").prompt,
  });

  const result = createStreamableValue(textStream);

  return {
    resume: result.value,
  };
};
