import z from "zod";
import { login } from "./githubUser";

export const formSchema = z.object({
  username: login,
  role: z
    .array(z.string())
    .min(1, {
      message: "Please select a role.",
    })
    .max(1, {
      message: "You can only select one role.",
    }),
});
