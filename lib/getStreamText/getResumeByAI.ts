import { model } from "@/actions/user";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";
import { generateText } from "ai";

export const getResumeByAi = async (data: any[], login: string) => {
  const prompt = getPromptAndSystem("front", {
    systemResource: data,
    login,
  })?.summary.prompt;

  const system = getPromptAndSystem("front", {
    systemResource: data,
  })?.summary.system;

  const { text } = await generateText({
    model: model("gemini-1.5-flash-latest"),
    prompt,
    system,
    temperature: 0.8,
  });

  return text;
};
