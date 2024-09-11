import type { RebootIncharges } from "..";

export const getPromptAndSystemByIncharge = (
  incharge: "front",
  data?: {
    systemResource: any[];
  }
) => {
  let inchargePrompts: RebootIncharges;

  if (incharge === "front") {
    inchargePrompts = {
      front: {
        note: {
          prompt: `Give me a 4-digit numeric score based on this matrix that represents the number of lines of code
           for each programming language that user has. His role is front-end developer and use references from successful developers
            to base the result:${JSON.stringify(data?.systemResource)} `,
          system: `You are a data evaluator that only delivers numerical 
          results and nothing more, based only on 4 digits. `,
        },
        summary: {
          prompt: "",
          system: "",
        },
        insights: [{ prompt: "", system: "" }],
        improvment: [{ prompt: "", system: "" }],
      },
    };

    return inchargePrompts.front;
  }

  return null;
};
