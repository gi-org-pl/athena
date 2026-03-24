import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders correctly with label", () => {
    render(<Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders with required asterisk when isRequired is true", () => {
    render(<Input label="Password" isRequired />);
    expect(screen.getByText("*")).toHaveClass("text-red-500");
  });

  it("shows helper text when no error is present", () => {
    render(<Input helperText="Enter your name" />);
    expect(screen.getByText("Enter your name")).toHaveClass("text-gi-ash");
  });

  it("shows error text and hides helper text when isError is true", () => {
    render(
      <Input
        helperText="Helper Text"
        errorText="Error Message"
        isError={true}
      />
    );
    const errorNode = screen.getByText("Error Message");
    expect(errorNode).toBeInTheDocument();
    expect(errorNode).toHaveClass("text-red-500");
    expect(screen.queryByText("Helper Text")).not.toBeInTheDocument();
  });

  it("renders LeftIcon and applies flex logic", () => {
    render(<Input LeftIcon={<span data-testid="left-icon">L</span>} />);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders prefix correctly", () => {
    render(<Input prefix="$" />);
    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("renders RightIcon and suffix correctly", () => {
    const { rerender } = render(
      <Input RightIcon={<span data-testid="right-icon">R</span>} />
    );
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();

    rerender(<Input suffix="USD" />);
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("calls onChange handler when typing", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("is disabled when isDisabled prop is true", () => {
    render(<Input isDisabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("cursor-not-allowed");
  });

  it("passes dataTestId correctly to the input element", () => {
    render(<Input dataTestId="test-input-id" />);
    const input = screen.getByTestId("test-input-id");
    expect(input).toBeInTheDocument();
  });

  it("renders as different type like password", () => {
    render(<Input type="password" dataTestId="pass-input" />);
    const input = screen.getByTestId("pass-input");
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders both prefix and suffix simultaneously and checks their alignment", () => {
    render(<Input prefix="Start" suffix="End" />);
    
    const prefixNode = screen.getByText("Start");
    const suffixNode = screen.getByText("End");
    
    expect(prefixNode).toBeInTheDocument();
    expect(suffixNode).toBeInTheDocument();
    
    expect(prefixNode.closest('div')).toHaveClass("text-gi-ash");
    expect(suffixNode.closest('div')).toHaveClass("text-gi-ash");
  });

  it("renders both LeftIcon and RightIcon and checks for correct classes", () => {
    render(
      <Input 
        LeftIcon={<span data-testid="l-icon">L</span>} 
        RightIcon={<span data-testid="r-icon">R</span>} 
      />
    );
    
    expect(screen.getByTestId("l-icon")).toBeInTheDocument();
    expect(screen.getByTestId("r-icon")).toBeInTheDocument();
    
    expect(screen.getByTestId("l-icon").parentElement).toHaveClass("mr-2");
    expect(screen.getByTestId("r-icon").parentElement).toHaveClass("ml-2");
  });
});