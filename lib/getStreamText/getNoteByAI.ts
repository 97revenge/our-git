import { model } from "@/actions/user";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export const getNoteStream = async (data: any[]) => {
  const prompt = getPromptAndSystem("front", {
    systemResource: data,
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
