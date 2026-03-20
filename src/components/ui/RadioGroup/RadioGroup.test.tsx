import { render, screen } from "@testing-library/react";
import { RadioGroup } from "./RadioGroup";
import { RadioGroupItem } from "./RadioGroupItem/RadioGroupItem";

describe("<RadioGroup />", () => {
  it("should render with default props", () => {
    render(<RadioGroup>Children</RadioGroup>);
    const group = screen.getByRole("radiogroup");
    expect(group).toBeInTheDocument();
    expect(group).toHaveAttribute("data-slot", "radio-group");
  });

  it("should render with custom className", () => {
    render(<RadioGroup className="custom-class">Children</RadioGroup>);
    const group = screen.getByRole("radiogroup");
    expect(group).toHaveClass("custom-class");
  });


  describe("Orientation", () => {
    it("should apply vertical styles by default", () => {
      render(<RadioGroup>Children</RadioGroup>);
      const group = screen.getByRole("radiogroup");
    
      expect(group).toHaveAttribute("aria-orientation", "vertical");
      expect(group).toHaveClass("grid-cols-1");
      expect(group).not.toHaveClass("grid-flow-col");
    });

    it("should apply horizontal styles when orientation is set to horizontal", () => {
      render(<RadioGroup orientation="horizontal">Children</RadioGroup>);
      const group = screen.getByRole("radiogroup");
      
      expect(group).toHaveAttribute("aria-orientation", "horizontal");
      expect(group).toHaveClass("grid-flow-col", "auto-cols-max");
      expect(group).not.toHaveClass("grid-cols-1");
    });

    it("should pass the orientation prop to the underlying Radix primitive", () => {
      render(<RadioGroup orientation="horizontal">Children</RadioGroup>);
      const group = screen.getByRole("radiogroup");
      expect(group).toHaveAttribute("aria-orientation", "horizontal");
    });
  });

  it("should render children correctly", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="1" />
        <RadioGroupItem value="2" />
      </RadioGroup>,
    );
    const radioItems = screen.getAllByRole("radio");
    expect(radioItems).toHaveLength(2);
  });
});
