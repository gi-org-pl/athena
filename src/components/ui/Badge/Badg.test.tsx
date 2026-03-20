import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Badge } from "./Badge";

vi.mock("@/assets/icons/check-icon.svg", () => ({
  default: () => <svg data-testid="check-icon" />,
}));
vi.mock("@/assets/icons/info-icon.svg", () => ({
  default: () => <svg data-testid="info-icon" />,
}));
vi.mock("@/assets/icons/warning-icon.svg", () => ({
  default: () => <svg data-testid="warning-icon" />,
}));
vi.mock("@/assets/icons/x-icon.svg", () => ({
  default: () => <svg data-testid="x-icon" />,
}));

describe("Badge Component", () => {
  describe("Core Rendering", () => {
    it("should render the children correctly", () => {
      const { container } = render(
        <Badge dataTestId="badge-root">Active Status</Badge>,
      );

      const badge = container.querySelector('[data-test-id="badge-root"]');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveTextContent("Active Status");
    });

    it("should apply default styling variants", () => {
      const { container } = render(
        <Badge dataTestId="badge-default">Default</Badge>,
      );

      const badge = container.querySelector('[data-test-id="badge-default"]');
      expect(badge).toHaveClass("bg-gi-dark-gray/10", "text-gi-dark-gray");
    });
  });
  describe("Icon Injection Logic", () => {
    it("should render the correct default icon based on the type property", () => {
      render(<Badge type="success">Success</Badge>);
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    });

    it("should take the element branch and inject classes when LeftIcon is a valid React node", () => {
      render(
        <Badge
          LeftIcon={<svg data-testid="valid-element" className="original" />}
        >
          Valid
        </Badge>,
      );

      const icon = screen.getByTestId("valid-element");
      expect(icon).toHaveClass("original");
      expect(icon).toHaveClass("shrink-0");
    });

    it("should take the fallback branch and wrap the input when LeftIcon is not a React element", () => {
      const { container } = render(
        <Badge LeftIcon="🔥" dataTestId="fallback-test">
          Fallback
        </Badge>,
      );

      const badge = container.querySelector('[data-test-id="fallback-test"]');
      const iconWrapper = badge?.querySelector("span:first-child");

      expect(iconWrapper).toHaveTextContent("🔥");
      expect(iconWrapper).toHaveClass("shrink-0", "flex", "items-center");
    });
  });

  describe("Type Icon Mapping Branch", () => {
    it("should render the mapped icon inside a span wrapper when a valid type is provided", () => {
      const {  } = render(<Badge type="info">Info</Badge>);
      const svg = screen.getByTestId("info-icon");
      const iconWrapper = svg.parentElement;

      expect(iconWrapper).toBeInTheDocument();
      expect(iconWrapper).toHaveClass("flex", "items-center", "justify-center");
    });

    it("should return null (render no icon) when type is 'default'", () => {
      render(<Badge type="default">No Icon</Badge>);

      expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
      expect(screen.queryByTestId("info-icon")).not.toBeInTheDocument();
      expect(screen.queryByTestId("warning-icon")).not.toBeInTheDocument();
      expect(screen.queryByTestId("x-icon")).not.toBeInTheDocument();

      const textSpan = screen.getByText("No Icon");
      expect(textSpan.previousSibling).toBeNull();
    });
  });

  describe("Dismiss Button Sizing Branches", () => {
    it("should apply small size classes to the dismiss button and icon", () => {
      render(
        <Badge isDismissible size="small">
          Small
        </Badge>,
      );
      const button = screen.getByRole("button", { name: "Dismiss" });
      const icon = button.querySelector("svg");

      expect(button).toHaveClass("size-4");
      expect(icon).toHaveClass("size-3.5");
    });

    it("should apply big size classes to the dismiss button and icon", () => {
      render(
        <Badge isDismissible size="big">
          Big
        </Badge>,
      );
      const button = screen.getByRole("button", { name: "Dismiss" });
      const icon = button.querySelector("svg");

      expect(button).toHaveClass("size-6");
      expect(icon).toHaveClass("size-5");
    });
  });

  describe("Dismissible Functionality", () => {
    it("should not render the dismiss button by default", () => {
      render(<Badge>Standard Badge</Badge>);

      const button = screen.queryByRole("button", { name: "Dismiss" });
      expect(button).not.toBeInTheDocument();
    });

    it("should render the dismiss button when isDismissible is true", () => {
      render(<Badge isDismissible>Dismissible Badge</Badge>);

      const button = screen.getByRole("button", { name: "Dismiss" });
      expect(button).toBeInTheDocument();
    });

    it("should fire the onDismiss callback when the button is clicked", () => {
      const handleDismiss = vi.fn();
      render(
        <Badge isDismissible onDismiss={handleDismiss}>
          Dismiss
        </Badge>,
      );

      const button = screen.getByRole("button", { name: "Dismiss" });
      fireEvent.click(button);

      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

    it("should prevent event propagation when clicking the dismiss button", () => {
      const parentClick = vi.fn();
      const dismissClick = vi.fn();

      render(
        <div onClick={parentClick} data-testid="parent-container">
          <Badge isDismissible onDismiss={dismissClick}>
            Isolated
          </Badge>
        </div>,
      );

      const button = screen.getByRole("button", { name: "Dismiss" });
      fireEvent.click(button);

      expect(dismissClick).toHaveBeenCalledTimes(1);
      // Proves the event did not bubble up to the parent container
      expect(parentClick).not.toHaveBeenCalled();
    });
  });
});
