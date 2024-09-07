// Define the possible roles as a union type

import type { StandartRoles } from "..";

interface RolePrompt {
  prompt: string;
  system: string;
}

interface Props extends StandartRoles<RolePrompt> {}

export const getPromptByRole = (
  role: keyof Props,
  data: any,
  { topK, topP }: { topK?: string; topP?: string } = {} // funcionalidade arquivada
) => {
  const rolePrompts: Props = {
    front: {
      prompt:
        "Your answer cannot be more than 4 numbers, always keep that in mind. You are a very accurate and professional assistant evaluator who receives various types of values ​​and gives an evaluation of great quality.",
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
