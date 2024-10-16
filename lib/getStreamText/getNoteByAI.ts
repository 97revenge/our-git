import { model } from "@/actions/user";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";
import { generateObject, streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export const getNoteStream = async (data: any[], login?: string) => {
  const prompt = getPromptAndSystem("front", {
    systemResource: data,
    login,
  })?.note.prompt;

  const system = getPromptAndSystem("front", {
    systemResource: data,
  })?.note.system;

  const { textStream } = await streamText({
    model: model("gemini-1.5-flash-latest"),
    prompt,
    system,
    maxTokens: 2,
    temperature: 0.8,
  });

  const result = createStreamableValue(textStream);

  return result;
};
