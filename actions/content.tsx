"use server";

import z from "zod";
import { repoSchema } from "@/lib/zod/owner";

export const content = async (username: string) => {
  const repos = await fetch(`https://api.github.com/users/${username}/repos`);

  const userRepos: Array<z.infer<typeof repoSchema>> = await repos.json();

  let treatmentData: { [index: string]: Array<any> } = {
    description: userRepos.map((item) => item.description),
    language: userRepos.map((item) => item.language),
    name: userRepos.map((item) => item.name),
  };

  treatmentData.code = Array.from([treatmentData.name]).map(async (item) => {
    const response = await fetch(
      `https://api.github.com/repos/shadcn/${item}/languages`
    );

    const data = await response.json();

    treatmentData.code = [...treatmentData.code, data];
  });

  return {
    treatmentData,
  };
};
