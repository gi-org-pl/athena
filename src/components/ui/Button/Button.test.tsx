import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

vi.mock("@/assets/icons/loading-spinner.svg", () => ({
  default: () => <svg data-testid="loading-spinner" className="animate-spin" />,
}));

describe("<Button />", () => {
  describe("when all provided props are valid", () => {
    it("should render with default props", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button", { name: "Click me" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    });

    it("should render with custom className", () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    it("should respect the custom htmlType property", () => {
      render(<Button htmlType="submit">Submit</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "submit");
    });
  });

  describe("when variants and sizes are provided", () => {
    it("should render primary type", () => {
      render(<Button type="primary">Primary</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render danger variant", () => {
      render(<Button variant="danger">Danger</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render small size", () => {
      render(<Button size="small">Small</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("when rendering with icons", () => {
    it("should render as an icon button", () => {
      render(
        <Button isIconButton aria-label="Launch">
          🚀
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("p-0");
    });

    it("should render LeftIcon and apply accessibility attributes", () => {
      render(<Button LeftIcon={<svg data-testid="left-icon" />}>Text</Button>);
      const icon = screen.getByTestId("left-icon");
      expect(icon).toHaveAttribute("aria-hidden", "true");
      expect(icon).toHaveAttribute("focusable", "false");
    });

    it("should render RightIcon", () => {
      render(
        <Button RightIcon={<span data-testid="right">R</span>}>Text</Button>,
      );
      expect(screen.getByTestId("right")).toBeInTheDocument();
    });
  });

  describe("when loading state is active", () => {
    it("should show loading indicator and set disabled attributes", () => {
      render(<Button isLoading>Submit</Button>);
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-disabled", "true");
      expect(button).toHaveAttribute("data-disabled", "true");
      expect(button).toHaveClass("cursor-wait");

      // Verify the mocked spinner is present
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });

    it("should hide children when loading as an icon button", () => {
      render(
        <Button isIconButton isLoading aria-label="Loading action">
          <span data-testid="hidden-child">Hidden</span>
        </Button>,
      );
      expect(screen.queryByTestId("hidden-child")).not.toBeInTheDocument();
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });
  });

  describe("Interaction and handleInteraction logic", () => {
    let preventDefaultSpy: any;
    let stopPropagationSpy: any;

    beforeEach(() => {
      // Setup spies on the prototype to catch calls regardless of event wrapping
      preventDefaultSpy = vi.spyOn(MouseEvent.prototype, "preventDefault");
      stopPropagationSpy = vi.spyOn(MouseEvent.prototype, "stopPropagation");
    });

    afterEach(() => {
      preventDefaultSpy.mockRestore();
      stopPropagationSpy.mockRestore();
    });

    it("should call onClick handler when clicked", () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      screen.getByRole("button").click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should possess native disabled attribute when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("should not call onClick when disabled", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>,
      );
      screen.getByRole("button").click();
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("should stop propagation and prevent default when isLoading is true", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} isLoading asChild>
          <div role="button">Loading...</div>
        </Button>,
      );

      fireEvent.click(screen.getByRole("button"));

      expect(handleClick).not.toHaveBeenCalled();
      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(stopPropagationSpy).toHaveBeenCalled();
    });

    it("should stop propagation and prevent default when disabled is true", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} disabled asChild>
          <div role="button">Disabled</div>
        </Button>,
      );

      fireEvent.click(screen.getByRole("button"));

      expect(handleClick).not.toHaveBeenCalled();
      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(stopPropagationSpy).toHaveBeenCalled();
    });
  });

  describe("when asChild is provided", () => {
    it("should render as child element when asChild is true", () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>,
      );
      expect(
        screen.getByRole("link", { name: "Link Button" }),
      ).toBeInTheDocument();
    });

    it("should apply loading attributes when asChild and isLoading are true", () => {
      render(
        <Button asChild isLoading className="custom-slot-class">
          <button>Custom Child</button>
        </Button>,
      );

      const childBtn = screen.getByRole("button");
      expect(childBtn).toHaveClass("custom-slot-class");
      expect(childBtn).toHaveClass("cursor-wait");
      expect(childBtn).toHaveAttribute("aria-disabled", "true");
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });
  });
});
