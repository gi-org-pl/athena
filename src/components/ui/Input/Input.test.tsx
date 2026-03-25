import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders correctly with label", () => {
    render(<Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("calls onChange with string value when typing", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    
    fireEvent.change(input, { target: { value: "typing test" } });
    expect(handleChange).toHaveBeenCalledWith("typing test");
  });

  it("replaces helper with errorText when isError is true", () => {
    render(
      <Input
        helper="Normal helper"
        errorText="Critical error"
        isError={true}
      />,
    );
    expect(screen.getByText("Critical error")).toBeInTheDocument();
    expect(screen.queryByText("Normal helper")).not.toBeInTheDocument();
  });

  it("renders icons when provided", () => {
    const Left = <span data-testid="left-icon">L</span>;
    const Right = <span data-testid="right-icon">R</span>;
    render(<Input LeftIcon={Left} RightIcon={Right} />);
    
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("renders prefix and suffix when not focused", () => {
    render(<Input prefix="$" suffix="USD" value="100" />);
    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("shows 'some text' and hides helper when disabled", () => {
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

  it("triggers focus and blur handlers", () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    
    render(<Input onFocus={handleFocus} onBlur={handleBlur} />);
    const input = screen.getByRole("textbox");

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });
});