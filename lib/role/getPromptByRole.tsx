// Define the possible roles as a union type

import type { CommunityIncharges } from "..";

export const getPromptByRole = (role: keyof CommunityIncharges, data: any) => {
  const rolePrompts: Partial<CommunityIncharges> = {
    front: {
      prompt:
      {
        note:"adfjafka", 
        summary:"dkfjfskfjskfjd",
        insights:[{"best insight":{
          system:"sdksgjsgk",
          prompt:"sdkgjskgj",
        }}], 
        improvment:[{:{
          system:"sdksgjsgk",
          prompt:"sdkgjskgj",
        }}]


      }
      system: `${JSON.stringify(
        data
      )} understand this matrix, it is the amount of content that a developer has coded over the years on github, give a score from 0 to 1000 and nothing more than that, always provide only 4 digits maximum in the answer.`,
    },
    back: {
      prompt: "You have back-end privileges.",
      system: "You have back-end privileges.",
    },
    fullstack: {
      prompt: "You have full-stack privileges.",
      system: "You have full-stack privileges.",
    },
    data: {
      prompt: "You have data privileges.",
      system: "You have data privileges.",
    },
    design: {
      prompt: "You have design privileges.",
      system: "You have design privileges.",
    },
  };

  return {
    prompt: rolePrompts[role]?.prompt || "Role not recognized.",
    system: rolePrompts[role]?.system || "Role not recognized.",
  };
};
