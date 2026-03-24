import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { type ButtonOption, ButtonSelect } from "./ButtonSelect";

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
  };

  describe("rendering", () => {
    it("should render all provided options", () => {
      render(<ButtonSelect {...defaultProps} />);

      for (const option of mockOptions) {
        expect(
          screen.getByRole("button", { name: option.text }),
        ).toBeInTheDocument();
      }
    });

    it("should apply primary styles to the selected option and outlined styles to others", () => {
      render(<ButtonSelect {...defaultProps} selectedOptionId="2" />);

      const selectedButton = screen.getByRole("button", { name: "Option 2" });
      const unselectedButton = screen.getByRole("button", { name: "Option 1" });

      expect(selectedButton).toHaveClass("bg-gi-primary");
      expect(unselectedButton).toHaveClass(
        "border-gi-primary",
        "bg-transparent",
      );
    });
  });

  describe("layout and styling", () => {
    it("should apply full width classes when isFullWidth is true", () => {
      const { container } = render(
        <ButtonSelect {...defaultProps} isFullWidth={true} />,
      );
      const wrapper = container.firstChild;

      expect(wrapper).toHaveClass("w-full");

      const buttons = screen.getAllByRole("button");
      for (const btn of buttons) {
        expect(btn).toHaveClass("flex-1");
      }
    });

    it("should apply custom className to the wrapper", () => {
      const { container } = render(
        <ButtonSelect {...defaultProps} className="custom-wrapper" />,
      );
      expect(container.firstChild).toHaveClass("custom-wrapper");
    });
  });

  describe("interaction and guard logic", () => {
    it("should call onSelectedOptionIdChange when a NEW option is clicked", () => {
      const handleChange = vi.fn();
      render(
        <ButtonSelect
          {...defaultProps}
          onSelectedOptionIdChange={handleChange}
        />,
      );

      const secondOption = screen.getByRole("button", { name: "Option 2" });
      fireEvent.click(secondOption);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith("2");
    });

    it("should NOT call onSelectedOptionIdChange when the ALREADY SELECTED option is clicked", () => {
      const handleChange = vi.fn();
      render(
        <ButtonSelect
          {...defaultProps}
          selectedOptionId="1"
          onSelectedOptionIdChange={handleChange}
        />,
      );

      const firstOption = screen.getByRole("button", { name: "Option 1" });
      fireEvent.click(firstOption);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
