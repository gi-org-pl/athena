import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Badge } from "./Badge";

// Clean mocks to prevent JSDOM parsing errors
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
vi.mock("@/assets/icons/dismiss-circle-icon.svg", () => ({
  default: () => <svg data-testid="dismiss-icon" />,
}));

describe("Badge Component", () => {
  describe("Core Rendering", () => {
    it("should apply default styling variants", () => {
      render(<Badge dataTestId="badge-default">Default</Badge>);

      const wrapper = document.querySelector('[data-test-id="badge-default"]');
      const styledSpan = wrapper?.firstElementChild;

      expect(styledSpan).toHaveClass("bg-gi-ash", "text-gi-primary");
    });
  });

  describe("Icon Injection Logic", () => {
    it("should render the correct default icon based on the type property", () => {
      render(<Badge type="success">Success</Badge>);
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    });

    it("should render LeftIcon inside the icon wrapper", () => {
      render(
        <Badge
          LeftIcon={<svg data-testid="valid-element" className="original" />}
        >
          Valid
        </Badge>,
      );

      const icon = screen.getByTestId("valid-element");
      const iconWrapper = icon.parentElement;
      expect(icon).toHaveClass("original");
      expect(iconWrapper).toHaveClass("flex", "items-center", "justify-center");
    });

    it("should render string LeftIcon inside the icon wrapper", () => {
      render(
        <Badge LeftIcon="🔥" dataTestId="fallback-test">
          Fallback
        </Badge>,
      );

      const iconWrapper = screen.getByText("🔥").parentElement;
      expect(iconWrapper).toHaveTextContent("🔥");
      expect(iconWrapper).toHaveClass("inline-flex", "items-center");
    });

    it("should render the mapped icon inside a span wrapper when a valid type is provided", () => {
      render(<Badge type="info">Info</Badge>);
      const icon = screen.getByTestId("info-icon");
      expect(icon.parentElement).toHaveClass(
        "flex",
        "items-center",
        "justify-center",
      );
    });
  });

  describe("Dismiss Button Sizing Branches", () => {
    it("should apply small size classes to the dismiss button icon via the wrapper", () => {
      render(
        <Badge isDismissible size="small">
          Small
        </Badge>,
      );
      const button = screen.getByRole("button", { name: /dismiss/i });
      expect(button).toHaveClass("size-3");
    });

    it("should apply regular size classes to the dismiss button icon via the wrapper", () => {
      render(
        <Badge isDismissible size="regular">
          Regular
        </Badge>,
      );
      const button = screen.getByRole("button", { name: /dismiss/i });
      expect(button).toHaveClass("size-3.5");
    });

    it("should fallback to regular dismiss icon sizing when size is undefined", () => {
      render(
        <Badge isDismissible size={undefined}>
          Fallback Size
        </Badge>,
      );
      const button = screen.getByRole("button", { name: /dismiss/i });
      expect(button).toHaveClass("size-3.5");
    });

    it("should fallback to regular dismiss icon sizing when size is invalid string", () => {
      render(
        // @ts-expect-error - testing runtime fallback
        <Badge isDismissible size={"random"}>
          Fallback Size
        </Badge>,
      );
      const button = screen.getByRole("button", { name: /dismiss/i });
      expect(button).toHaveClass("size-3.5");
    });

    it("should apply big size classes to the dismiss button icon via the wrapper", () => {
      render(
        <Badge isDismissible size="big">
          Big
        </Badge>,
      );
      const button = screen.getByRole("button", { name: /dismiss/i });
      expect(button).toHaveClass("size-5");
    });
  });

  describe("Icon Mapping Branch Coverage", () => {
    it("should return null and render no icon when type is 'default'", () => {
      const { container } = render(<Badge type="default">No Icon</Badge>);
      const iconWrapper = container.querySelector(".shrink-0.h-\\[0\\.8em\\]");
      expect(iconWrapper).toBeNull();
    });

    it("should return null and render no icon when an invalid type is provided at runtime", () => {
      render(
        // @ts-expect-error - Simulating invalid runtime prop
        <Badge type="non-existent-type">Invalid Type</Badge>,
      );
      expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
      expect(screen.getByText("Invalid Type")).toBeInTheDocument();
    });
  });

  describe("Dismissible Functionality", () => {
    it("should fire the onDismiss callback when the button is clicked", () => {
      const handleDismiss = vi.fn();
      render(
        <Badge isDismissible onDismiss={handleDismiss}>
          Dismiss
        </Badge>,
      );

      const button = screen.getByRole("button", { name: /dismiss/i });
      fireEvent.click(button);
      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

    it("should prevent event propagation when clicking the dismiss button", () => {
      const parentClick = vi.fn();
      const dismissClick = vi.fn();

      render(
        <div onClick={parentClick}>
          <Badge isDismissible onDismiss={dismissClick}>
            Isolated
          </Badge>
        </div>,
      );

      const button = screen.getByRole("button", { name: /dismiss/i });
      fireEvent.click(button);

      expect(dismissClick).toHaveBeenCalledTimes(1);
      expect(parentClick).not.toHaveBeenCalled();
    });
  });
});
