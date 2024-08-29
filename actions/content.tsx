"use server";

import z from "zod";
import { repoSchema } from "@/lib/zod/owner";

export const content = async (username = "97revenge") => {
  const repos = await fetch(`https://api.github.com/users/${username}/repos`);

  const userRepos: Array<z.infer<typeof repoSchema>> = await repos.json();

  let treatmentData: { [index: string]: Array<any> } = {
    description: userRepos.map((item) => item.description),
    language: userRepos.map((item) => item.language),
    name: userRepos.map((item) => item.name),
    code: [],
  };

  const codeData = await Promise.all(
    treatmentData.name.map(async (repoName) => {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/languages`
      );
      return response.json();
    })
  );

  treatmentData.code = codeData;

  return {
    treatmentData,
  };
};
