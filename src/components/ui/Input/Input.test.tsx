import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders correctly with label", () => {
    render(<Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("shows helper text when no error is present", () => {
    render(<Input helperText="Enter your name" />);
    expect(screen.getByText("Enter your name")).toBeInTheDocument();
  });

  it("shows error text and hides helper text when isError is true", () => {
    render(
      <Input 
        helperText="Helper" 
        errorText="Error Message" 
        isError={true} 
      />
    );
    expect(screen.getByText("Error Message")).toBeInTheDocument();
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
  });

  it("renders left icon and applies padding class", () => {
    render(<Input leftIcon={<span data-testid="left-icon">L</span>} />);
    const input = screen.getByRole("textbox");
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(input).toHaveClass("pl-10");
  });

  it("renders prefix and applies padding class", () => {
    render(<Input prefix="$" />);
    const input = screen.getByRole("textbox");
    expect(screen.getByText("$")).toBeInTheDocument();
    expect(input).toHaveClass("pl-10");
  });

  it("renders right icon or suffix and applies padding class", () => {
    const { rerender } = render(<Input rightIcon={<span>R</span>} />);
    expect(screen.getByRole("textbox")).toHaveClass("pr-10");
    
    rerender(<Input suffix="USD" />);
    expect(screen.getByRole("textbox")).toHaveClass("pr-10");
  });

  it("calls onChange handler when typing", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies focus classes when focused", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    input.focus();
    expect(input).toHaveClass("focus-visible:ring-2");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled:opacity-50");
  });

  it("renders as different type like password", () => {
    render(<Input type="password" data-testid="pass-input" />);
    const input = screen.getByTestId("pass-input");
    expect(input).toHaveAttribute("type", "password");
  });
});