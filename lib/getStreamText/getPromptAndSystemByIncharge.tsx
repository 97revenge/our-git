import type { RebootIncharges } from "..";
import { recourse } from "../recourse/resource";

const { front } = recourse;

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
          prompt: `based on this content that I will give you and providing it with post-training:${front},  Give me a 4-digit numeric score based on this matrix that represents the number of lines of code
           for each programming language that user has. His role is front-end developer and use references from successful developers
            to base the result:${JSON.stringify(data?.systemResource)} `,
          system: `You are a data evaluator that only delivers numerical 
          results and nothing more, based only on 4 digits. `,
        },
        summary: {
          prompt: `Give me a PRO summary based on this matrix that represents the number of lines of code
           for each programming language that user has. His role is front-end developer and use references from successful developers
            to base the result:${JSON.stringify(data?.systemResource)}`,
          system:
            "You are an assistant who brings a summary regarding your prompt, and is committed to providing professional content that impacts your results",
        },
        insights: [{ prompt: "", system: "" }],
        improvment: [{ prompt: "", system: "" }],
      },
    };

    return inchargePrompts.front;
  }

  return null;
};
