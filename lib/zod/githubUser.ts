import z from "zod";

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

export const githubUser = z.object({
  username: z
    .string()
    .min(5, { message: "Minimum of characters is 5" })
    .max(35, { message: "Maximum of characters is 35" })
    .refine(
      async (val) => {
        const response = await fetch(`https://api.github.com/users/${val}`);
        return response.ok && response.status === 200;
      },
      {
        message: "This user does not exist on GitHub",
      }
    ),
  developer: z.array(optionSchema).min(1),
});
