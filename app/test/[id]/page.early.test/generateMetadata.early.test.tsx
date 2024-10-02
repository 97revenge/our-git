// @ts-no-check

// Unit tests for: generateMetadata

import { model } from "@/actions/user";
import type { GenerateMetadataProps } from "@/lib";
import { generateText } from "ai";
import { generateMetadata } from "../page";

// Mocking the dependencies
jest.mock("ai", () => ({
  generateText: jest.fn(),
}));

jest.mock("@/actions/user", () => ({
  model: jest.fn(),
}));

// Mocking the fetch API
global.fetch = jest.fn();

// Mocking the userSchema

// Mocking ResolvingMetadata
class MockResolvingMetadata {
  public openGraph = {
    images: [],
  };
}

// Test suite for generateMetadata
describe("generateMetadata() generateMetadata method", () => {
  const mockGenerateMetadataProps: GenerateMetadataProps = {
    params: { id: "testuser" },
    searchParams: {},
  };

  const mockParentMetadata = new MockResolvingMetadata() as any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy Path Test
  it("should generate metadata correctly for a valid GitHub user", async () => {
    // Arrange
    const mockUserData = {
      login: "testuser",
      id: 12345,
    };

    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockUserData),
    } as any);

    (generateText as jest.Mock).mockResolvedValue({
      text: "Inspiring sentence",
    } as any);

    (model as jest.Mock).mockReturnValue("gemini-1.5-flash-latest");

    // Act
    const metadata = await generateMetadata(
      mockGenerateMetadataProps,
      mockParentMetadata
    );

    // Assert
    expect(metadata.title).toBe("Inspiring sentence");
    expect(metadata.openGraph.images.length).toBeGreaterThan(0);
    expect(metadata.openGraph.images[0].url).toContain("testuser");
  });

  // Edge Case Test: Invalid User ID
  it("should handle invalid GitHub user ID gracefully", async () => {
    // Arrange
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(null),
    } as any);

    // Act
    const metadata = await generateMetadata(
      mockGenerateMetadataProps,
      mockParentMetadata
    );

    // Assert
    expect(metadata.title).toBe("");
    expect(metadata.openGraph.images.length).toBe(0);
  });

  // Edge Case Test: API Failure
  it("should handle API failure gracefully", async () => {
    // Arrange
    (fetch as jest.Mock).mockRejectedValue(new Error("API Error"));

    // Act
    const metadata = await generateMetadata(
      mockGenerateMetadataProps,
      mockParentMetadata
    );

    // Assert
    expect(metadata.title).toBe("");
    expect(metadata.openGraph.images.length).toBe(0);
  });

  // Edge Case Test: Empty Text Generation
  it("should handle empty text generation gracefully", async () => {
    // Arrange
    const mockUserData = {
      login: "testuser",
      id: 12345,
    };

    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockUserData),
    } as any);

    (generateText as jest.Mock).mockResolvedValue({
      text: "",
    } as any);

    // Act
    const metadata = await generateMetadata(
      mockGenerateMetadataProps,
      mockParentMetadata
    );

    // Assert
    expect(metadata.title).toBe("");
    expect(metadata.openGraph.images.length).toBeGreaterThan(0);
  });
});

// End of unit tests for: generateMetadata
