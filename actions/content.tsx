"use server";

import z from "zod";
import { repoSchema } from "@/lib/zod/owner";
import { streamText, CoreTool, type StreamTextResult } from "ai";
import { model } from "./user";
import { createStreamableValue } from "ai/rsc";
import { getPromptAndSystemByIncharge as getPromptAndSystem } from "@/lib/getStreamText/getPromptAndSystemByIncharge";

export const content = async (
  username: string,
  role?: "front" | "back" | "fullstack" | "data" | "design"
) => {
  const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

  if (!GITHUB_API_KEY) {
    throw new Error("GitHub API key is missing");
  }

  const response: Response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repos for user ${username}`);
  }

  const repos: Promise<object> = await response.json();

  if (!Array.isArray(repos)) {
    throw new Error("GitHub API did not return an array");
  }

  const userRepos: Array<z.infer<typeof repoSchema>> = repos.map((repo) =>
    repoSchema.parse(repo)
  );

  let treatmentData: { [index: string]: any[] } = {
    description: userRepos.map((item) => item.description),
    name: userRepos.map((item) => item.name),
    code: [],
  };

  const codeData = await Promise.all(
    treatmentData.name.map(async (repoName) => {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/languages`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch languages for repo ${repoName}`);
      }

      return response.json();
    })
  );

  // Combine all language data into a single array of objects
  const languageMap = codeData.reduce((acc, curr) => {
    for (const [language, value] of Object.entries(curr)) {
      if (acc[language]) {
        acc[language] += value;
      } else {
        acc[language] = value;
      }
    }
    return acc;
  }, {} as { [language: string]: number });

  // Convert the combined language data into an array of objects
  treatmentData.code = Object.entries(languageMap).map(([language, value]) => ({
    [language]: value,
  }));

  const prompt = getPromptAndSystem("front", {
    systemResource: treatmentData.code,
  })?.note.prompt;

  const system = getPromptAndSystem("front", {
    systemResource: treatmentData.code,
  })?.note.system;

  console.log("this a prompt =>" + prompt);
  console.log("this a system =>" + system);

  const { textStream } = await streamText({
    model: model("gemini-1.5-flash-latest", {
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
      ],
    }),
    prompt,
    system,
    maxTokens: 2,
    temperature: 0.8,
  });

  const result = createStreamableValue(textStream);

  return {
    treatmentData,
    treatMentNoteData: result.value,
  };
};
