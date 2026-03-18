import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders with label and placeholder", () => {
    render(<Input label="Test Label" placeholder="Test Placeholder" />);
    expect(screen.getByText("Test Label")).toBeDefined();
    expect(screen.getByPlaceholderText("Test Placeholder")).toBeDefined();
  });

  it("calls onChange when text is typed", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledWith("Hello");
  });

  it("shows error text when isError is true", () => {
    render(<Input isError errorText="Error occurred" helper="Help text" />);
    expect(screen.getByText("Error occurred")).toBeDefined();
    // Sprawdza czy error zastąpił helpera
    expect(screen.queryByText("Help text")).toBeNull();
  });
});
