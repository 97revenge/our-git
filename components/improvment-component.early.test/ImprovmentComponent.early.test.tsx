// Unit tests for: ImprovmentComponent

import ImprovmentComponent from "../improvment-component";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ImprovmentComponent() ImprovmentComponent method", () => {
  // Happy Path Tests
  describe("Happy Path", () => {
    test("renders the component with all improvement areas", () => {
      // This test checks if all improvement areas are rendered correctly
      render(<ImprovmentComponent />);
      const titles = ["Code Quality", "Debug Efficiently", "Optimize Workflow"];
      titles.forEach((title) => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    test("displays the correct description for each improvement area", () => {
      // This test checks if the descriptions for each area are displayed correctly
      render(<ImprovmentComponent />);
      const descriptions = [
        "Improve your code quality by focusing on clean code principles and best practices.",
        "Sharpen your debugging skills to quickly identify and resolve issues in your code.",
        "Streamline your development process and improve collaboration with better Git practices.",
      ];
      descriptions.forEach((description) => {
        expect(screen.getByText(description)).toBeInTheDocument();
      });
    });

    test("shows action button on hover", () => {
      // This test checks if the action button appears when an area is hovered over
      render(<ImprovmentComponent />);
      const firstArea = screen.getByText("Code Quality");
      fireEvent.mouseOver(firstArea);
      expect(screen.getByText("Enhance")).toBeVisible();
    });
  });

  // Edge Case Tests
});

// End of unit tests for: ImprovmentComponent
