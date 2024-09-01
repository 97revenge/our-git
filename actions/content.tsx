"use server";

import z from "zod";
import { repoSchema } from "@/lib/zod/owner";

export const content = async (username: string) => {
  const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

  if (!GITHUB_API_KEY) {
    throw new Error("GitHub API key is missing");
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repos for user ${username}`);
  }

  const repos = await response.json();

  if (!Array.isArray(repos)) {
    throw new Error("GitHub API did not return an array");
  }

  const userRepos: Array<z.infer<typeof repoSchema>> = repos.map((repo) =>
    repoSchema.parse(repo)
  );

  let treatmentData: { [index: string]: Array<any> } = {
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

  treatmentData.code = codeData;

  console.log(treatmentData.code);

  return {
    treatmentData,
  };
};
