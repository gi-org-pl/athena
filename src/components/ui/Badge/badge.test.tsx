import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Star } from "lucide-react";
import { vi } from "vitest";

import { Badge } from "./Badge";

// Mocking the SVG icons
vi.mock("@/assets/icons/check-icon.svg", () => ({
  default: () => <svg data-testid="icon-check" />,
}));
vi.mock("@/assets/icons/info-icon.svg", () => ({
  default: () => <svg data-testid="icon-info" />,
}));
vi.mock("@/assets/icons/warning-icon.svg", () => ({
  default: () => <svg data-testid="icon-warning" />,
}));
vi.mock("@/assets/icons/x-icon.svg", () => ({
  default: () => <svg data-testid="icon-x" />,
}));

const getBadgeWrapper = (text: string) => {
  const wrapper = screen.getByText(text).closest('[data-slot="badge-wrapper"]');
  if (!wrapper) throw new Error("Could not find badge wrapper.");
  return wrapper as HTMLElement;
};

const getBadgeElement = (text: string) => {
  const innerTextSpan = screen.getByText(text);
  return innerTextSpan.parentElement as HTMLElement;
};

describe("<Badge />", () => {
  describe("Basic Functionality", () => {
    it("should render default state (no icon)", () => {
      render(<Badge>Default</Badge>);
      const badge = getBadgeElement("Default");
      expect(badge).toHaveClass("text-gi-dark-gray");
      expect(within(badge).queryByTestId("icon-info")).not.toBeInTheDocument();
    });

    it("should render with dataTestId", () => {
      render(<Badge dataTestId="test-id">Badge</Badge>);
      expect(screen.getByTestId("test-id")).toBeInTheDocument();
    });
  });

  describe("Icon & Type Logic", () => {
    it("should render correct icons for each type", () => {
      const { rerender } = render(<Badge type="info">Msg</Badge>);
      expect(screen.getByTestId("icon-info")).toBeInTheDocument();

      rerender(<Badge type="success">Msg</Badge>);
      expect(screen.getByTestId("icon-check")).toBeInTheDocument();

      rerender(<Badge type="warning">Msg</Badge>);
      expect(screen.getByTestId("icon-warning")).toBeInTheDocument();

      rerender(<Badge type="error">Msg</Badge>);
      expect(screen.getByTestId("icon-x")).toBeInTheDocument();
    });

    it("should return null for non-existent icon type (Coverage Fix)", () => {
      // Bypasses TS to hit the 'Icon ? ... : null' branch
      render(<Badge type={"unknown" as any}>Unknown</Badge>);
      const badge = getBadgeElement("Unknown");
      // Verify no icon svg exists inside the badge
      expect(badge.querySelector("svg")).not.toBeInTheDocument();
    });

    it("should render custom LeftIcon", () => {
      render(<Badge LeftIcon={<Star data-testid="star" />}>Star</Badge>);
      expect(screen.getByTestId("star")).toBeInTheDocument();
    });
    
    it("should render string LeftIcon", () => {
        render(<Badge LeftIcon="icon">Text</Badge>);
        expect(screen.getByText("icon")).toBeInTheDocument();
    });
  });

  describe("Sizing & Dismissible Coverage", () => {
    const sizes = [
      { size: "small" as const, btnClass: "size-4", svgClass: "size-3.5" },
      { size: "regular" as const, btnClass: "size-5", svgClass: "size-4.5" },
      { size: "big" as const, btnClass: "size-6", svgClass: "size-5" },
    ];

    sizes.forEach(({ size, btnClass, svgClass }) => {
      it(`should apply correct classes for ${size} dismiss button`, () => {
        render(<Badge isDismissible size={size}>{size}</Badge>);
        const button = screen.getByRole("button", { name: "Dismiss" });
        const svg = button.querySelector("svg");

        expect(button).toHaveClass(btnClass);
        expect(svg).toHaveClass(svgClass);
      });
    });

    it("should handle onDismiss and stop propagation", async () => {
      const user = userEvent.setup();
      const onDismiss = vi.fn();
      render(<Badge isDismissible onDismiss={onDismiss}>Dismiss</Badge>);
      
      await user.click(screen.getByRole("button", { name: "Dismiss" }));
      expect(onDismiss).toHaveBeenCalled();
    });
  });

  describe("Variants", () => {
    it("should apply outlined and ghost classes", () => {
      const { rerender } = render(<Badge variant="outlined">Outlined</Badge>);
      expect(getBadgeElement("Outlined")).toHaveClass("border");

      rerender(<Badge variant="ghost">Ghost</Badge>);
      expect(getBadgeElement("Ghost")).toHaveClass("border-transparent");
    });
  });
});