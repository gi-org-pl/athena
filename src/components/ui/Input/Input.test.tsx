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
    render(<Input onChange={handleChange} dataTestId="input-field" />);
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
      />
    );
    expect(screen.getByText("Critical error")).toBeInTheDocument();
    expect(screen.queryByText("Normal helper")).not.toBeInTheDocument();
  });

  it("applies correct border classes for focus state", () => {
    render(<Input dataTestId="focus-test" />);
    const container = screen.getByTestId("focus-test").querySelector('.rounded-full');
    expect(container).toHaveClass("focus-within:border-[#004554]/33");
  });

  it("applies 2px border on focus state", () => {
    render(<Input dataTestId="focus-test" />);
    const container = screen.getByTestId("focus-test").querySelector('.rounded-full');
    expect(container).toHaveClass("focus-within:border-2");
    expect(container).toHaveClass("focus-within:border-[#004554]/33");
  });
});