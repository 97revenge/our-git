import { model } from "@/actions/user";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";
import { generateText } from "ai";

export const getResumeByAi = async (
  data: any[],
  login: string,
  incharge: string
) => {
  const prompt = getPromptAndSystem(incharge as any, {
    systemResource: data,
    login,
  })?.summary.prompt;

  const system = getPromptAndSystem(incharge as any, {
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
