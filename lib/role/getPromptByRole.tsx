// Define the possible roles as a union type

import type { StandartRoles } from "..";

interface Props extends StandartRoles<string> {
  [index: string]: string;
}

export const getPromptByRole = (
  role: string,
  { topK, topP }: { topK?: string; topP?: string }
): typeof role => {
  const rolePrompts: Props = {
    front: "You have frontistrative privileges.",
    back: "Welcome back, back!",
    fullstack: "Please sign up or log in.",
    data: "This is a specific case for 'data'.",
    design: "Superfront access granted.",
  };

  return rolePrompts[role] || "Role not recognized.";
};
