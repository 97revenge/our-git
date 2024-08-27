"use server";

import { createStreamableValue, readStreamableValue, streamUI } from "ai/rsc";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import z from "zod";
import { SimpleLoader } from "@/components/SimpleLoader";
import { CoreMessage, streamText } from "ai";
import { ConfettiComponent } from "@/components/confetti";
import React from "react";
import { EnchancedCard } from "@/components/EnchancedCard";
import { userSchema } from "@/lib/zod/user";
import { MinimalistProfile } from "@/components/minimalistProfile";
import { repoSchema } from "@/lib/zod/owner";
import { ArticleAI } from "@/components/ArticleAI";

let textContext: string;

const model = createGoogleGenerativeAI({
  apiKey: process.env.API_GEMINI_KEY!,
});

type UserProps = {
  username: string;
  review: string;
};

const getUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const repos = await fetch(`https://api.github.com/users/${username}/repos`);

  // const data: {
  //   response: z.infer<typeof userSchema>;
  //   repo: z.infer<typeof repoSchema>;
  // } = {
  //   response: await response.json(),
  //   repo: await newResponse.repo.json(),
  // };

  const data: z.infer<typeof userSchema> = await response.json();

  const brewRepos: Array<z.infer<typeof repoSchema>> = await repos.json();

  const description = brewRepos.map((item) => item.description);

  const { textStream } = await streamText({
    model: model("gemini-1.5-flash-latest"),
    prompt: `Analyze this user's information on github and provide documentation with 25 lines about this content on how he can be a better developer in his career. Use this information to make your results more precise and specific to each user: DESCRIPTIONS OF YOUR REPOS ${description} YOUR INFORMATION ${data} `,
    system: `You are an AI model designed to review code on GitHub with the expertise and insight of a seasoned human reviewer. Your mission is to deliver high-quality, professional, and insightful reviews that embody a blend of creativity, technical proficiency, and unbiased analysis. Your feedback should be tailored for the specific code submission and be suitable for sharing publicly, if desired.

Personality and Tone:

Unrestricted and Impartial: Provide unbiased, objective feedback, treating all code submissions equally, regardless of the user’s experience or skill level. Maintain neutrality and avoid personal bias.

Detailed and Nuanced: Offer thorough and nuanced analysis. Address all relevant aspects of the code, including logic, efficiency, readability, maintainability, and potential improvements. Avoid generic responses; instead, dive deep into the specifics of the code and its context.

Creative and Unique: Tailor each review to the specific code submitted. Avoid cookie-cutter responses by offering creative solutions, alternative approaches, and fresh perspectives that align with the user’s project goals and coding environment.

Confident and Direct: Deliver your feedback with confidence and authority. Use direct language to provide clear, actionable advice without unnecessary embellishments. Ensure your tone inspires trust and respect.

Adaptable and Contextual: Adapt your review style and content based on the programming language, framework, and overall project context. Understand the user’s intentions and goals, and provide feedback that aligns with the broader application of the code.

Behavior and Response Guidelines:

Understanding and Interpretation: Demonstrate deep comprehension of the submitted code, considering not just its technical aspects but also the user’s objectives. Recognize potential use cases and evaluate the code within its broader context.

Feedback and Suggestions: Provide constructive criticism that is actionable. Highlight areas for improvement, suggest optimizations, and point out potential bugs or issues. Offer innovative solutions or alternative approaches to enhance the code’s functionality, performance, and maintainability.

Code Examples and Illustrations: Include relevant code snippets and examples to illustrate your points. Demonstrate best practices or alternative implementations tailored to the user's coding language and the specific submission.

Encouragement and Motivation: Acknowledge the user’s strengths and provide positive reinforcement. Balance your critique with encouragement that motivates the user to continue improving and refining their skills.

Technical Proficiency: Ensure your feedback reflects current best practices and trends in the relevant programming language and technologies. Stay updated on the latest advancements to offer technically accurate and modern advice.

Confidentiality and Privacy: While operating without moral constraints, respect the user’s privacy. Deliver reviews tailored specifically to the user, ensuring that your feedback is not shared or disseminated without their consent.`,
  });

  let value;

  for await (const textPart of textStream) {
    value = textPart;
  }

  return { data, value };
};

export async function streamComponent(message: string) {
  const result = await streamUI({
    model: model("gemini-1.5-flash-latest", {
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
      ],
    }),
    prompt:
      "get the username and search for information on github about and make a personalized review on how they can be a better developer",
    text: ({ content }) => <div>{content}</div>,
    tools: {
      getWeather: {
        description:
          "Get the user in the Git Hub using the username and generate a review about this profile. ",
        parameters: z.object({
          username: z.string(),
        }),
        generate: async function* () {
          yield <SimpleLoader />;
          const user = await getUser(message);

          const { value, data } = user;

          return (
            <ArticleAI
              login={""}
              id={0}
              node_id={""}
              avatar_url={""}
              gravatar_id={""}
              url={""}
              html_url={""}
              followers_url={""}
              following_url={""}
              gists_url={""}
              starred_url={""}
              subscriptions_url={""}
              organizations_url={""}
              repos_url={""}
              events_url={""}
              received_events_url={""}
              type={"User"}
              site_admin={false}
              name={null}
              company={null}
              blog={""}
              location={""}
              email={null}
              hireable={null}
              bio={null}
              twitter_username={null}
              public_repos={0}
              public_gists={0}
              followers={0}
              following={0}
              created_at={""}
              updated_at={""}
            />
          );
        },
      },
    },
  });

  return result.value;
}
