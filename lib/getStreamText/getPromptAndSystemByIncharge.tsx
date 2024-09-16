import type { RebootIncharges } from "..";
import { recourse } from "../recourse/resource";

const { front } = recourse;

export const getPromptAndSystemByIncharge = (
  incharge: "front",
  data?: {
    systemResource: any[];
    login?: string;
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
          prompt: `Task: Generate a comprehensive and professional summary highlighting the user's expertise in the front-end development job market.

User Details:

Username: ${data?.login}
Role: Front-End Developer
Objective:
Using the provided Array, which represents the number of lines of code written by the user for each programming language, generate a structured and insightful summary. This summary should showcase the user’s proficiency and experience in key front-end technologies, emphasizing the specific languages and tools they have mastered.

Requirements:

Use the array data ${JSON.stringify(
            data?.systemResource
          )} to emphasize the user's technical depth and coding experience.
Align the summary with the qualities and skill sets commonly seen in successful front-end developers, including modern frameworks, responsive design, and performance optimization.
Present the content in a clean and well-organized Markdown (.md) format, ensuring clarity and professionalism.
Tone:
  The summary should be geared toward potential employers or recruiters in the job market, highlighting both technical skills and practical experience. Focus on making the profile stand out through clear metrics, relevant technologies, and the user's key achievements.`,
          system:
            "You are an assistant who brings a summary regarding your prompt, and is committed to providing professional content that impacts your results",
        },
        insights: [
          {
            title: {
              prompt: `
          based on this information: 
          ${JSON.stringify(data?.systemResource)}
Give me a title of just 2 words seeking a positive insight into this profile
          `,
              system:
                "You are a super competent assistant who only delivers 2 words about programming insights and super growth among programmers",
            },
            content: {
              prompt: "",
              system: "",
            },
          },
        ],
        improvment: [],
      },
    };

    return inchargePrompts.front;
  }

  return null;
};
