// import { model } from "@/actions/user";
// import { streamText } from "ai";
// import { getPromptByRole } from "../role/getPromptByRole";
// import { createStreamableValue, type StreamableValue } from "ai/rsc";

// export const getResumeByAI = async (
//   content: object,
//   role: string | undefined
// ): Promise<object> => {
//   const { textStream } = await streamText({
//     model: model("gemini-1.5-flash-latest", {
//       safetySettings: [
//         {
//           category: "HARM_CATEGORY_HATE_SPEECH",
//           threshold: "BLOCK_LOW_AND_ABOVE",
//         },
//       ],
//     }),
//     system: "", // getSystemByRole().
//     prompt: getPromptByRole(role as any, content),
//   });

//   const stream = createStreamableValue(textStream);

//   return stream.value;
// };
