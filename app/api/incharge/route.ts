import { RebootIncharges } from "@/lib";

export const GET = async () => {
  const inchargePrompts: RebootIncharges = {
    front: {
      note: {
        prompt: "",
        system: "",
      },
      summary: {
        prompt: "",
        system: "",
      },
      insights: [{ prompt: "", system: "" }],
      improvment: [{ prompt: "", system: "" }],
    },
  };

  Response.json({ message: 200 });
};
