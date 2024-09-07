"use server";

import z from "zod";
import { repoSchema } from "@/lib/zod/owner";
import { streamText, CoreTool, type StreamTextResult } from "ai";
import { model } from "./user";
import { createStreamableValue } from "ai/rsc";
import { getPromptByRole } from "@/lib/role/getPromptByRole";

export const content = async (username: string, role?: string) => {
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

  const { textStream } = await streamText({
    model: model("gemini-1.5-flash-latest", {
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
      ],
    }),
    prompt:
      "Your answer cannot be more than 3 numbers!!! always keep that in mind. You are a very accurate and professional assistant evaluator who receives various types of values ​​and gives an evaluation of great quality.",
    system: `${JSON.stringify(
      treatmentData
    )} understand this matrix, it is the amount of content that a developer has coded over the years on github, give a score from 0 to 1000 and nothing more than that, always provide only 3 digits maximum in the answer.`,
    maxTokens: 2,
  });

  const result = createStreamableValue(textStream);

  return {
    treatmentData,
    treatMentNoteData: result.value,
  };
};
