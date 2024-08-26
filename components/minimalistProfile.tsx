import { userSchema } from "@/lib/zod/user";
import z from "zod";

export const MinimalistProfile = (props: z.infer<typeof userSchema>) => {
  "use client";
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-start text-pretty font-bold">{props?.review}</p>
    </div>
  );
};
