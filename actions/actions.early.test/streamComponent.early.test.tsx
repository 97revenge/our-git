// Unit tests for: streamComponent

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamUI } from "ai/rsc";
// import { streamComponent } from "../actions";

// Mock dependencies
jest.mock("ai/rsc", () => ({
  streamUI: jest.fn(),
}));

jest.mock("@ai-sdk/google", () => ({
  createGoogleGenerativeAI: jest.fn(() => jest.fn()),
}));

describe("LLM client is working", () => {
  test("asdas", () => {
    let toBeExpected = jest.mock("@ai-sdk/google", () => ({
      createGoogleGenerativeAI: jest.fn(() => jest.fn()),
    }));

    expect(createGoogleGenerativeAI).toBe(toBeExpected);
  });
});

// describe("streamComponent() streamComponent method", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   describe("Edge Cases", () => {
//     it("should handle API key missing scenario", async () => {
//       // Arrange
//       process.env.API_GEMINI_KEY = ""; // Simulate missing API key
//       (createGoogleGenerativeAI as jest.Mock).mockImplementation(() => {
//         throw new Error("API key is missing");
//       });

//       await expect(streamComponent()).rejects.toThrow("API key is missing");
//     });
//   });
// });

// End of unit tests for: streamComponent
