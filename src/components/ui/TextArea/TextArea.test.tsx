import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  const defaultProps = {
    value: "",
    onChange: vi.fn(),
  };

  it("renders a textarea element", () => {
    render(<TextArea {...defaultProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with the provided value", () => {
    render(<TextArea {...defaultProps} value="Hello" />);
    expect(screen.getByRole("textbox")).toHaveValue("Hello");
  });

  it("renders with a label", () => {
    render(<TextArea {...defaultProps} label="Label" />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders without a label when not provided", () => {
    render(<TextArea {...defaultProps} />);
    expect(screen.queryByText("Label")).not.toBeInTheDocument();
  });

  it("renders placeholder text", () => {
    render(<TextArea {...defaultProps} placeholder="Placeholder" />);
    expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
  });

  it("calls onChange with the new value when user types", () => {
    const onChange = vi.fn();
    render(<TextArea {...defaultProps} onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "New text" },
    });
    expect(onChange).toHaveBeenCalledWith("New text");
  });

  it("does not call onChange when disabled", () => {
    const onChange = vi.fn();
    render(<TextArea {...defaultProps} onChange={onChange} isDisabled />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "New text" },
    });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders helper text", () => {
    render(<TextArea {...defaultProps} helper="Helper text" />);
    expect(screen.getByText("Helper text")).toBeInTheDocument();
  });

  it("renders error text when isError is true", () => {
    render(<TextArea {...defaultProps} isError errorText="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("replaces helper text with error text when isError is true", () => {
    render(
      <TextArea
        {...defaultProps}
        helper="Helper text"
        isError
        errorText="Error message"
      />,
    );
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("does not show error text when isError is false", () => {
    render(
      <TextArea {...defaultProps} errorText="Error message" isError={false} />,
    );
    expect(screen.queryByText("Error message")).not.toBeInTheDocument();
  });

  it("shows helper text when isError is false even if errorText is provided", () => {
    render(
      <TextArea
        {...defaultProps}
        helper="Helper text"
        errorText="Error message"
        isError={false}
      />,
    );
    expect(screen.getByText("Helper text")).toBeInTheDocument();
    expect(screen.queryByText("Error message")).not.toBeInTheDocument();
  });

  it("renders character count when characterLimit is provided", () => {
    render(<TextArea {...defaultProps} value="Hi" characterLimit={100} />);
    expect(screen.getByText("2/100")).toBeInTheDocument();
  });

  it("shows 0/limit when value is empty and characterLimit is set", () => {
    render(<TextArea {...defaultProps} characterLimit={500} />);
    expect(screen.getByText("0/500")).toBeInTheDocument();
  });

  it("correctly counts Unicode characters (e.g., surrogate pairs)", () => {
    const value = "𐐀";
    render(<TextArea {...defaultProps} value={value} characterLimit={10} />);
    expect(screen.getByText("1/10")).toBeInTheDocument();
  });

  it("renders a required asterisk when isRequired is true", () => {
    render(<TextArea {...defaultProps} label="Label" isRequired />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("does not render required asterisk when isRequired is false", () => {
    render(<TextArea {...defaultProps} label="Label" isRequired={false} />);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("passes required to the textarea element", () => {
    render(<TextArea {...defaultProps} isRequired />);
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("passes disabled to the textarea element", () => {
    render(<TextArea {...defaultProps} isDisabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("passes aria-invalid when isError is true", () => {
    render(<TextArea {...defaultProps} isError />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("sets data-test-id on the textarea", () => {
    render(<TextArea {...defaultProps} dataTestId="my-textarea" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "data-test-id",
      "my-textarea",
    );
  });

  it("sets aria-describedby when helper or characterLimit is present", () => {
    const { rerender } = render(<TextArea {...defaultProps} helper="Helper" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute(
      "aria-describedby",
      "textarea-description",
    );
    const descriptionDiv = document.getElementById("textarea-description");
    expect(descriptionDiv).toBeInTheDocument();
    expect(descriptionDiv).toHaveTextContent("Helper");

    rerender(<TextArea {...defaultProps} characterLimit={100} />);
    expect(textarea).toHaveAttribute(
      "aria-describedby",
      "textarea-description",
    );
    const countDiv = document.getElementById("textarea-description");
    expect(countDiv).toBeInTheDocument();
    expect(countDiv).toHaveTextContent("0/100");

    rerender(
      <TextArea {...defaultProps} dataTestId="custom" helper="Helper" />,
    );
    expect(textarea).toHaveAttribute("aria-describedby", "custom-description");
    const customDiv = document.getElementById("custom-description");
    expect(customDiv).toBeInTheDocument();
    expect(customDiv).toHaveTextContent("Helper");
  });

  it("does not render description element when no helper, errorText or characterLimit", () => {
    const { container } = render(<TextArea {...defaultProps} />);
    expect(
      container.querySelector('[id$="-description"]'),
    ).not.toBeInTheDocument();
  });

  it("forwards ref to the textarea element", () => {
    const ref = vi.fn();
    render(<TextArea {...defaultProps} ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement));
  });

  it("passes extra props to the textarea element", () => {
    render(<TextArea {...defaultProps} maxLength={200} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "200");
  });

  it("applies correct wrapper classes for default state", () => {
    render(<TextArea {...defaultProps} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea.className).toContain("border-gi-primary/10");
    expect(textarea.className).toContain("rounded-3xl");
    expect(textarea.className).toContain("p-4");
    expect(textarea.className).toContain("h-[122px]");
  });

  it("applies correct wrapper classes for disabled state", () => {
    render(<TextArea {...defaultProps} isDisabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea.className).toContain("border-gi-ash");
    expect(textarea.className).toContain("cursor-not-allowed");
  });

  it("applies correct wrapper classes for error state", () => {
    render(<TextArea {...defaultProps} isError />);
    const textarea = screen.getByRole("textbox");
    expect(textarea.className).toContain("border-gi-red");
  });

  it("applies correct label classes for default state", () => {
    render(<TextArea {...defaultProps} label="Label" />);
    const label = screen.getByText("Label");
    expect(label.className).toContain("text-gi-primary");
    expect(label.className).toContain("mb-2");
  });

  it("applies correct label classes for disabled state", () => {
    render(<TextArea {...defaultProps} label="Label" isDisabled />);
    const label = screen.getByText("Label");
    expect(label.className).toContain("text-gi-gray");
    expect(label.className).toContain("mb-2");
  });

  it("applies correct helper classes for default state", () => {
    render(<TextArea {...defaultProps} helper="Helper" />);
    const helper = screen.getByText("Helper");
    expect(helper.className).toContain("text-gi-gray");
    expect(helper.className).toContain("mt-2");
  });

  it("applies correct helper classes for error state", () => {
    render(<TextArea {...defaultProps} isError errorText="Error" />);
    const error = screen.getByText("Error");
    expect(error.className).toContain("text-gi-red");
    expect(error.className).toContain("mt-2");
  });

  it("applies correct character count classes for default state", () => {
    render(<TextArea {...defaultProps} value="Hi" characterLimit={100} />);
    const count = screen.getByText("2/100");
    expect(count.className).toContain("text-gi-gray");
  });

  it("applies correct character count classes for error state", () => {
    render(
      <TextArea {...defaultProps} value="Hi" characterLimit={100} isError />,
    );
    const count = screen.getByText("2/100");
    expect(count.className).toContain("text-gi-red");
  });

  it("applies correct character count classes for disabled state", () => {
    render(
      <TextArea {...defaultProps} value="Hi" characterLimit={100} isDisabled />,
    );
    const count = screen.getByText("2/100");
    expect(count.className).toContain("text-gi-ash");
  });
});
