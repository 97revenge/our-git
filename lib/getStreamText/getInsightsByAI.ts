import { model } from "@/actions/user";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";
import { generateText } from "ai";

export const getInsightsByAi = async (data: any[], login: string) => {
  const inchargePrompts = getPromptAndSystem("front", {
    systemResource: data,
    login,
  });

  if (!inchargePrompts || !inchargePrompts.insights) {
    throw new Error("No insights found for the given incharge.");
  }

  const insightsResults: string | object[] = [];

  for (const insight of inchargePrompts.insights as Array<{
    title: {
      system: string;
      prompt: string;
    };
    content: {
      system: string;
      prompt: string;
    };
  }>) {
    const generateTitle = async () => {
      const prompt = insight.title.prompt;
      const system = insight.title.system;

      console.log({ prompt: prompt, system: system });

      const { text } = await generateText({
        model: model("gemini-1.5-flash-latest"),
        prompt,
        system,
        temperature: 0.8,
      });

      return text;
    };
    const generateContent = async () => {
      const prompt = insight.content.prompt;
      const system = insight.content.system;

      const { text } = await generateText({
        model: model("gemini-1.5-flash-latest"),
        prompt,
        system,
        temperature: 0.5,
      });

      return text;
    };

    const title = await generateTitle();
    const content = await generateContent();
    insightsResults.push({ title, content });
  }

  // Return the array of insights results
  return insightsResults;
};
