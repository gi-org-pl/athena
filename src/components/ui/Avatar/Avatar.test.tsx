import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";
import * as React from "react";

describe("Avatar Component", () => {
  describe("Default Rendering and Fallbacks", () => {
    it("should render the male icon by default when no props are provided", () => {
      const { container } = render(<Avatar dataTestId="avatar-root" />);
      
      const rootDiv = container.querySelector('[data-test-id="avatar-root"]');
      expect(rootDiv).toBeInTheDocument();
      
      const svgElement = container.querySelector("svg");
      expect(svgElement).toBeInTheDocument();
      
      const fallbackContainer = screen.getByLabelText("User avatar fallback");
      expect(fallbackContainer).toBeInTheDocument();
    });

    it("should render the female icon when the gender property is set to female", () => {
        const { container } = render(<Avatar gender="female" dataTestId="avatar-female" />);
        
        const rootDiv = container.querySelector('[data-test-id="avatar-female"]');
        expect(rootDiv).toBeInTheDocument();
        
        const fallbackContainer = screen.getByLabelText("User avatar fallback");
        expect(fallbackContainer).toBeInTheDocument();
        
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
    });

    it("should apply the correct color class to the icon wrapper", () => {
      render(<Avatar color="text-blue-500" />);
      
      const fallbackContainer = screen.getByLabelText("User avatar fallback");
      const iconWrapper = fallbackContainer.querySelector("div");
      
      expect(iconWrapper).toHaveClass("text-blue-500");
    });
  });

  describe("Image Handling", () => {
    it("should render an image when a valid src is provided", () => {
      render(<Avatar src="https://example.com/image.jpg" alt="Valid Image" />);
      
      const imageElement = screen.getByRole("img");
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", "https://example.com/image.jpg");
      expect(imageElement).toHaveAttribute("alt", "Valid Image");
    });
    
    it("should fallback to the name property for the image alt text when alt is omitted", () => {
      render(<Avatar src="https://example.com/image.jpg" name="John Doe" />);
      
      const imageElement = screen.getByRole("img");
      expect(imageElement).toHaveAttribute("alt", "John Doe");
    });

    it("should fallback to the default string for the image alt text when both alt and name are omitted", () => {
      render(<Avatar src="https://example.com/image.jpg" />);
      
      const imageElement = screen.getByRole("img");
      expect(imageElement).toHaveAttribute("alt", "User avatar");
    });

    it("should fallback to the icon when the image triggers an error", () => {
      render(<Avatar src="https://example.com/broken.jpg" name="Broken Image" fallback="icon" />);
      
      const imageElement = screen.getByRole("img");
      expect(imageElement).toBeInTheDocument();
      
      fireEvent.error(imageElement);
      
      expect(screen.queryByRole("img")).not.toBeInTheDocument();
      
      const fallbackContainer = screen.getByLabelText("Broken Image");
      expect(fallbackContainer).toBeInTheDocument();
    });
  });

  describe("Initials Generation Logic", () => {
    it("should extract standard first and last initials", () => {
      render(<Avatar name="John Doe" fallback="initials" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("should extract a single initial for a single word name", () => {
      render(<Avatar name="Alice" fallback="initials" />);
      expect(screen.getByText("A")).toBeInTheDocument();
    });

    it("should strip special characters and extract clean initials", () => {
      render(<Avatar name="O'Connor Smith Jones" fallback="initials" />);
      expect(screen.getByText("OJ")).toBeInTheDocument();
    });

    it("should handle excessive whitespace correctly", () => {
      render(<Avatar name="   Jane    Smith   " fallback="initials" />);
      expect(screen.getByText("JS")).toBeInTheDocument();
    });

    it("should render nothing if the name resolves to completely empty after stripping", () => {
      const { container } = render(<Avatar name="@#$% ^&*" fallback="initials" dataTestId="empty-avatar" />);
      
      const rootDiv = container.querySelector('[data-test-id="empty-avatar"]');
      expect(rootDiv).toHaveTextContent("");
    });
  });

  describe("Sizing Variants", () => {
    it("should apply medium sizing classes by default", () => {
      const { container } = render(<Avatar dataTestId="size-default" />);
      const rootDiv = container.querySelector('[data-test-id="size-default"]');
      expect(rootDiv).toHaveClass("h-10", "w-10", "text-sm");
    });

    it("should apply small sizing classes when specified", () => {
      const { container } = render(<Avatar size="small" dataTestId="size-small" />);
      const rootDiv = container.querySelector('[data-test-id="size-small"]');
      expect(rootDiv).toHaveClass("h-8", "w-8", "text-xs");
    });

    it("should apply large sizing classes when specified", () => {
      const { container } = render(<Avatar size="large" dataTestId="size-large" />);
      const rootDiv = container.querySelector('[data-test-id="size-large"]');
      expect(rootDiv).toHaveClass("h-14", "w-14", "text-base");
    });
  });

  describe("Attribute Passthrough", () => {
    it("should pass standard HTML attributes down to the root element", () => {
      const { container } = render(
        <Avatar 
          dataTestId="passthrough" 
          aria-hidden="true" 
          title="User Avatar Profile" 
        />
      );
      
      const rootDiv = container.querySelector('[data-test-id="passthrough"]');
      expect(rootDiv).toHaveAttribute("aria-hidden", "true");
      expect(rootDiv).toHaveAttribute("title", "User Avatar Profile");
    });
  });
});