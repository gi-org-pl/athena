import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ButtonSelect } from "./ButtonSelect";
import { type ButtonOption } from "./ButtonSelect.types";

const mockOptions: ButtonOption[] = [
  { id: "1", text: "Option 1" },
  { id: "2", text: "Option 2" },
  { id: "3", text: "Option 3" },
];

describe("<ButtonSelect />", () => {
  const defaultProps = {
    options: mockOptions,
    selectedOptionId: "1",
    onSelectedOptionIdChange: vi.fn(),
    "aria-label": "Test Select",
  };

  describe("Rendering & Accessibility", () => {
    it("should render the container with the radiogroup role", () => {
      render(<ButtonSelect {...defaultProps} />);
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("should render all options as radio roles with correct checked states", () => {
      render(<ButtonSelect {...defaultProps} selectedOptionId="1" />);

      const first = screen.getByRole("radio", { name: "Option 1" });
      const second = screen.getByRole("radio", { name: "Option 2" });

      expect(first).toHaveAttribute("aria-checked", "true");
      expect(first).toHaveAttribute("tabindex", "0");

      expect(second).toHaveAttribute("aria-checked", "false");
      expect(second).toHaveAttribute("tabindex", "-1");
    });

    it("should return null when options list is empty", () => {
      const { container } = render(
        <ButtonSelect {...defaultProps} options={[]} />,
      );
      expect(container.firstChild).toBeNull();
    });
  });

  describe("Interaction Logic", () => {
    it("should trigger onSelectedOptionIdChange only when a new option is clicked", () => {
      const handleChange = vi.fn();
      render(
        <ButtonSelect
          {...defaultProps}
          selectedOptionId="1"
          onSelectedOptionIdChange={handleChange}
        />,
      );

      // Click already selected
      fireEvent.click(screen.getByRole("radio", { name: "Option 1" }));
      expect(handleChange).not.toHaveBeenCalled();

      // Click new option
      fireEvent.click(screen.getByRole("radio", { name: "Option 2" }));
      expect(handleChange).toHaveBeenCalledWith("2");
    });

    it("should react to external selectedOptionId prop changes", () => {
      const { rerender } = render(
        <ButtonSelect {...defaultProps} selectedOptionId="1" />,
      );

      expect(screen.getByRole("radio", { name: "Option 1" })).toHaveAttribute(
        "aria-checked",
        "true",
      );

      rerender(<ButtonSelect {...defaultProps} selectedOptionId="2" />);

      expect(screen.getByRole("radio", { name: "Option 1" })).toHaveAttribute(
        "aria-checked",
        "false",
      );
      expect(screen.getByRole("radio", { name: "Option 2" })).toHaveAttribute(
        "aria-checked",
        "true",
      );
    });
  });

  describe("Layout & Styling", () => {
    it("should apply full-width classes and flex-1 to children", () => {
      const { container } = render(
        <ButtonSelect {...defaultProps} isFullWidth />,
      );
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass("w-full");

      const buttons = screen.getAllByRole("radio");
      for (const btn of buttons) {
        expect(btn).toHaveClass("flex-1");
      }
    });

    it("should pass through standard HTML attributes and custom className", () => {
      render(
        <ButtonSelect
          {...defaultProps}
          data-testid="custom-id"
          className="extra-class"
        />,
      );

      const wrapper = screen.getByTestId("custom-id");
      expect(wrapper).toHaveClass("extra-class");
    });
  });
});
