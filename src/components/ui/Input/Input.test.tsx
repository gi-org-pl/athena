import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders correctly with label", () => {
    render(<Input label="Username" isRequired={true} />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("calls onChange with string value when typing", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "typing test" } });
    expect(handleChange).toHaveBeenCalledWith("typing test");
  });

  it("replaces helper with errorText when isError is true", () => {
    const { rerender } = render(<Input helper="Normal" errorText="Error" isError={false} />);
    expect(screen.getByText("Normal")).toBeInTheDocument();
    
    rerender(<Input helper="Normal" errorText="Error" isError={true} />);
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.queryByText("Normal")).not.toBeInTheDocument();
  });

  it("renders icons and handles disabled state styles", () => {
    const { rerender } = render(<Input LeftIcon={<span>L</span>} RightIcon={<span>R</span>} />);
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("R")).toBeInTheDocument();

    rerender(<Input LeftIcon={<span>L</span>} isDisabled={true} />);
    expect(screen.getByText("L").parentElement).toHaveClass("opacity-30");
  });

  it("shows 'some text' and hides helper only when disabled", () => {
    render(<Input isDisabled={true} helper="Should be hidden" />);
    expect(screen.getByText("some text")).toBeInTheDocument();
    expect(screen.queryByText("Should be hidden")).not.toBeInTheDocument();
  });

  it("is not interactable when disabled", () => {
    const handleChange = vi.fn();
    render(<Input isDisabled={true} onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("triggers focus and blur handlers and toggles overlay", () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    render(<Input onFocus={handleFocus} onBlur={handleBlur} prefix="$" value="100" />);
    
    const input = screen.getByRole("textbox");
    
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    expect(screen.queryByText("$")).not.toBeInTheDocument();

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("covers all prefix/suffix and value branch combinations", () => {
    const { rerender } = render(<Input prefix="P" suffix="S" value="" />);
    
    expect(screen.queryByText("P")).not.toBeInTheDocument();
    expect(screen.queryByText("S")).not.toBeInTheDocument();

    rerender(<Input suffix="S" value="val" />);
    expect(screen.getByText("S")).toBeInTheDocument();
    expect(screen.queryByText("P")).not.toBeInTheDocument();

    render(<Input defaultValue="default" prefix="P" />);
    expect(screen.getByText("P")).toBeInTheDocument();
  });

  it("covers all prefix/suffix and value branch combinations", () => {
    const { rerender } = render(<Input prefix="P" suffix="S" value="" />);
    expect(screen.queryByText("P")).not.toBeInTheDocument();
    expect(screen.queryByText("S")).not.toBeInTheDocument();

    rerender(<Input suffix="S" value="val" />);
    expect(screen.getByText("S")).toBeInTheDocument();
    expect(screen.queryByText("P")).not.toBeInTheDocument();

    render(<Input defaultValue="default" prefix="P" data-testid="uncontrolled-input" />);
    expect(screen.getByText("P")).toBeInTheDocument();
  });
});