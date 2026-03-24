import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { Avatar } from "./Avatar";

vi.mock("../../../assets/icons/gi-male.svg", () => ({
  default: () => <svg data-testid="male-icon" />,
}));
vi.mock("../../../assets/icons/gi-female.svg", () => ({
  default: () => <svg data-testid="female-icon" />,
}));

describe("<Avatar />", () => {
  describe("when all provided props are valid", () => {
    it("should render with default props (medium size)", () => {
      const { container } = render(<Avatar dataTestId="avatar-root" />);
      const root = container.querySelector('[data-test-id="avatar-root"]');

      expect(root).toBeInTheDocument();
      expect(root).toHaveAttribute("data-slot", "avatar");
      expect(root).toHaveClass("h-10", "w-10");
      expect(screen.getByTestId("male-icon")).toBeInTheDocument();
    });

    it("should render with custom className", () => {
      const { container } = render(
        <Avatar className="custom-class" dataTestId="avatar" />,
      );
      const root = container.querySelector('[data-test-id="avatar"]');
      expect(root).toHaveClass("custom-class");
    });
  });

  describe("when image handling", () => {
    it("should render an image when src is valid", () => {
      render(<Avatar src="valid.jpg" alt="Test User" />);
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("src", "valid.jpg");
      expect(img).toHaveAttribute("alt", "Test User");
    });

    it("should use name as alt if alt is not provided", () => {
      render(<Avatar src="valid.jpg" name="John Doe" />);
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("alt", "John Doe");
    });

    it("should use default alt text when alt and name are missing", () => {
      render(<Avatar src="valid.jpg" />);
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("alt", "User avatar");
    });

    it("should fallback to icon when image triggers an error", () => {
      render(<Avatar src="broken.jpg" name="John Doe" />);
      const img = screen.getByRole("img");

      fireEvent.error(img);

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
      expect(screen.getByLabelText("John Doe")).toBeInTheDocument();
      expect(screen.getByTestId("male-icon")).toBeInTheDocument();
    });
  });

  describe("when initials logic is called", () => {
    it("should extract correct initials for complex names", () => {
      render(<Avatar name="O'Connor Smith Jones" fallback="initials" />);
      expect(screen.getByText("OJ")).toBeInTheDocument();
    });

    it("should handle single name", () => {
      render(<Avatar name="John" fallback="initials" />);
      expect(screen.getByText("J")).toBeInTheDocument();
    });

    it("should handle names with extra whitespace", () => {
      render(<Avatar name="   Jane   Doe   " fallback="initials" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("should render nothing for empty/special char names", () => {
      render(<Avatar name="!@#" fallback="initials" />);
      const fallback = screen.getByLabelText("!@#");
      expect(fallback.textContent).toBe("");
    });
  });

  describe("when gender and colors are applied", () => {
    it("should apply female icon when gender is female", () => {
      render(<Avatar gender="female" />);
      expect(screen.getByTestId("female-icon")).toBeInTheDocument();
    });

    it("should apply the color class to the icon wrapper", () => {
      render(<Avatar color="text-blue-500" />);
      const icon = screen.getByTestId("male-icon");
      const wrapper = icon.parentElement;
      expect(wrapper).toHaveClass("text-blue-500");
    });
  });

  describe("when sizing variants are used", () => {
    it("should apply small sizing", () => {
      const { container } = render(
        <Avatar size="small" dataTestId="avatar-small" />,
      );
      const root = container.querySelector('[data-test-id="avatar-small"]');
      expect(root).toHaveClass("h-8", "w-8");
    });

    it("should apply large sizing", () => {
      const { container } = render(
        <Avatar size="large" dataTestId="avatar-large" />,
      );
      const root = container.querySelector('[data-test-id="avatar-large"]');
      expect(root).toHaveClass("h-14", "w-14");
    });
  });
});
