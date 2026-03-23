import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Button } from "./Button";

describe("<Button />", () => {
  describe("when all provided props are valid", () => {
    it("should render with default props", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button", { name: "Click me" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("data-slot", "button");
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

  describe("when type is provided as a prop", () => {
    it("should render primary type", () => {
      render(<Button type="primary">Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should render outlined type", () => {
      render(<Button type="outlined">Outlined</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should render ghost type", () => {
      render(<Button type="ghost">Ghost</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("when variant is provided as a prop", () => {
    it("should render primary variant", () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should render secondary variant", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should render danger variant", () => {
      render(<Button variant="danger">Danger</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("when size is provided as a prop", () => {
    it("should render regular size", () => {
      render(<Button size="regular">Regular</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should render small size", () => {
      render(<Button size="small">Small</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("when rendering with icons", () => {
    it("should render as an icon button", () => {
      render(<Button isIconButton>🚀</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("p-0");
    });

    it("should render LeftIcon", () => {
      render(
        <Button LeftIcon={<span data-testid="left">L</span>}>Text</Button>,
      );
      expect(screen.getByTestId("left")).toBeInTheDocument();
    });

    it("should render RightIcon", () => {
      render(
        <Button RightIcon={<span data-testid="right">R</span>}>Text</Button>,
      );
      expect(screen.getByTestId("right")).toBeInTheDocument();
    });
  });

  describe("when loading state is active", () => {
    it("should be disabled and show loading indicator", () => {
      render(<Button isLoading>Submit</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass("cursor-wait");
      // The spinner has the animate-spin class
      expect(button.querySelector(".animate-spin")).toBeInTheDocument();
    });

    it("should hide children when loading as an icon button", () => {
      render(
        <Button isIconButton isLoading>
          <span data-testid="hidden-child">Hidden</span>
        </Button>,
      );
      expect(screen.queryByTestId("hidden-child")).not.toBeInTheDocument();
      expect(
        screen.getByRole("button").querySelector(".animate-spin"),
      ).toBeInTheDocument();
    });
  });

  describe("when is clicked", () => {
    it("should call onClick handler when clicked", () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole("button");
      button.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should be disabled when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });

    it("should not call onClick when disabled", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>,
      );
      const button = screen.getByRole("button");
      button.click();
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("when asChild is provided as a prop", () => {
    it("should render as child element when asChild is true", () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>,
      );

      const link = screen.getByRole("link", { name: "Link Button" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("data-slot", "button");
    });

    it("should apply loading classes and disabled state when asChild and isLoading are true", () => {
      render(
        <Button asChild isLoading className="custom-slot-class">
          <button>Custom Child</button>
        </Button>,
      );

      const childBtn = screen.getByRole("button");

      expect(childBtn).toHaveClass("custom-slot-class");
      expect(childBtn).toHaveClass("cursor-wait");

      expect(childBtn).toBeDisabled();

      expect(childBtn.querySelector(".animate-spin")).toBeInTheDocument();
    });
  });
});
