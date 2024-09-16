import { model } from "@/actions/user";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";
import { generateText } from "ai";

// Function to get insights for all prompts in the 'insights' array
export const getInsightsByAi = async (data: any[], login: string) => {
  const inchargePrompts = getPromptAndSystem("front", {
    systemResource: data,
    login,
  });

  if (!inchargePrompts || !inchargePrompts.insights) {
    throw new Error("No insights found for the given incharge.");
  }

  const insightsResults: string[] = [];

  // Iterate through each insight in the 'insights' array
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
    const prompt = insight.title.prompt;
    const system = insight.title.system;

    // Generate the text for each insight
    const { text } = await generateText({
      model: model("gemini-1.5-flash-latest"),
      prompt,
      system,
      temperature: 0.8,
    });

    insightsResults.push(text);
  }

  // Return the array of insights results
  return insightsResults;
};
