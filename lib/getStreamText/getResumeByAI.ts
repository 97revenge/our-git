import { model } from "@/actions/user";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export const getResumeByAi = async (data: any[]) => {
  const prompt = getPromptAndSystem("front", {
    systemResource: data,
  })?.summary.prompt;

  const system = getPromptAndSystem("front", {
    systemResource: data,
  })?.summary.system;

  const { textStream } = await streamText({
    model: model("gemini-1.5-flash-latest"),
    prompt,
    system,
    temperature: 0.8,
    maxTokens: 203,
  });

  const result = createStreamableValue(textStream);

  return result;
};
