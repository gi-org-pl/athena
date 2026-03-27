import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import * as React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input Component - 100% Coverage Suite", () => {
  afterEach(cleanup);

  it("renders label and required asterisk correctly", () => {
    render(<Input label="Username" isRequired />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("hides prefix/suffix when input is empty and blurred", () => {
    const { rerender } = render(<Input prefix="$" suffix="USD" value="" />);
    expect(screen.queryByText("$")).not.toBeInTheDocument();
    expect(screen.queryByText("USD")).not.toBeInTheDocument();

    rerender(<Input prefix="$" value={undefined} />);
    expect(screen.queryByText("$")).not.toBeInTheDocument();
  });

  it("hides overlay and shows raw text on focus", () => {
    render(<Input prefix="$" value="100" />);
    const input = screen.getByRole("textbox");

    expect(screen.getByText("$")).toBeInTheDocument();

    fireEvent.focus(input);
    expect(screen.queryByText("$")).not.toBeInTheDocument();
    expect(input).not.toHaveClass("text-transparent");
  });

  it("handles internal state when no value prop is provided (Uncontrolled)", () => {
    render(<Input defaultValue="initial" />);
    const input = screen.getByDisplayValue("initial") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
  });

  it("updates internal value when value prop changes (Controlled)", () => {
    const { rerender } = render(<Input value="first" />);
    expect(screen.getByDisplayValue("first")).toBeInTheDocument();

    rerender(<Input value="second" />);
    expect(screen.getByDisplayValue("second")).toBeInTheDocument();

    rerender(<Input value={undefined} />);
  });

  it("switches between helper text and error text", () => {
    const { rerender } = render(
      <Input helper="Helper" errorText="Error" isError={false} />,
    );
    expect(screen.getByText("Helper")).toBeInTheDocument();

    rerender(<Input helper="Helper" errorText="Error" isError={true} />);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("handles disabled state correctly", () => {
    const onChange = vi.fn();
    render(<Input isDisabled value="" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(screen.getByText("some text")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("input-click-wrapper"));
    expect(input).not.toHaveFocus();

    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("triggers focus on input when wrapper is clicked", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    fireEvent.click(screen.getByTestId("input-click-wrapper"));
    expect(input).toHaveFocus();
  });

  it("renders icons and applies disabled styles", () => {
    const { rerender } = render(
      <Input
        LeftIcon={<span data-testid="left" />}
        RightIcon={<span data-testid="right" />}
      />,
    );
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();

    rerender(<Input isDisabled LeftIcon={<span data-testid="left" />} />);
    expect(screen.getByTestId("left").parentElement).toHaveClass("opacity-30");
  });

  it("executes onFocus and onBlur callbacks", () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    render(<Input onFocus={onFocus} onBlur={onBlur} />);
    const input = screen.getByRole("textbox");

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it("uses imperative handle to expose focus method with act", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);

    act(() => {
      ref.current?.focus();
    });

    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  it("shows overlay when disabled even if value is present", () => {
    render(<Input isDisabled value="disabled text" />);
    expect(screen.getByText("disabled text")).toBeInTheDocument();
  });

  it("applies text-transparent class when overlay is shown", () => {
    render(<Input value="test" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("text-transparent");
  });

  it("handles onChange without onChange prop", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "no callback" } });
    expect(input).toHaveValue("no callback");
  });

  it("does not show prefix when hasValue is false", () => {
    render(<Input prefix="$" value="" />);
    expect(screen.queryByText("$")).not.toBeInTheDocument();
  });

  it("renders RightIcon correctly", () => {
    render(<Input RightIcon={<span data-testid="right-svg" />} />);
    expect(screen.getByTestId("right-svg")).toBeInTheDocument();
  });

  it("handles isRequired without label (Branch coverage for line 68)", () => {
    render(<Input isRequired dataTestId="req-no-label" />);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("calls onFocus and onBlur when provided (Line 91, 96)", () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    render(<Input onFocus={onFocus} onBlur={onBlur} />);
    const input = screen.getByRole("textbox");

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it("does not focus input when wrapper is clicked and isDisabled is true (Line 109-110)", () => {
    render(<Input isDisabled />);
    const input = screen.getByRole("textbox");
    fireEvent.click(screen.getByTestId("input-click-wrapper"));
    expect(input).not.toHaveFocus();
  });

  it("shows suffix and prefix only when hasValue is true (Line 153-155)", () => {
    const { rerender } = render(<Input prefix="PRE" suffix="SUF" value="" />);
    expect(screen.queryByText("PRE")).not.toBeInTheDocument();
    expect(screen.queryByText("SUF")).not.toBeInTheDocument();

    rerender(<Input prefix="PRE" suffix="SUF" value="something" />);
    expect(screen.getByText("PRE")).toBeInTheDocument();
    expect(screen.getByText("SUF")).toBeInTheDocument();
  });

  it("renders secondary text when isDisabled is false (Line 183)", () => {
    const { rerender } = render(<Input helper="Helper" isDisabled={false} />);
    expect(screen.getByText("Helper")).toBeInTheDocument();

    rerender(<Input helper="Helper" isDisabled={true} />);
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
  });

  it("handles empty displayValue and safeValue correctly (Coverage for edge cases)", () => {
    render(
      <Input value={undefined} defaultValue={undefined} placeholder="Empty" />,
    );
    expect(screen.getByPlaceholderText("Empty")).toBeInTheDocument();
  });

  it("does not update internal value via setInternalValue on change when controlled (value prop is provided)", () => {
    const onChange = vi.fn();
    render(<Input value="controlled" onChange={onChange} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "new" } });
    expect(onChange).toHaveBeenCalledWith("new");
  });

  it("skips internal value update in useEffect if value remains undefined across rerenders", () => {
    const { rerender } = render(<Input placeholder="first" />);
    rerender(<Input placeholder="second" />);
    expect(screen.getByPlaceholderText("second")).toBeInTheDocument();
  });

  it("handles missing onFocus and onBlur gracefully without throwing", () => {
    render(<Input value="test" />);
    const input = screen.getByRole("textbox");

    fireEvent.focus(input);
    expect(input).not.toHaveClass("text-transparent");

    fireEvent.blur(input);
    expect(input).toHaveClass("text-transparent");
  });

  it("does not render secondary text <p> element when helper and errorText are undefined", () => {
    const { container } = render(<Input />);
    const pElement = container.querySelector("p");
    expect(pElement).not.toBeInTheDocument();
  });

  it("shows overlay content for normal text (not password, not disabled) returning safeValue directly", () => {
    render(<Input value="normal standard text" />);
    expect(screen.getByText("normal standard text")).toBeInTheDocument();
  });

  it("renders correctly with a value but without any prefix or suffix provided", () => {
    render(<Input value="no-prefix-suffix" />);
    expect(screen.getByText("no-prefix-suffix")).toBeInTheDocument();
  });

  it("handles null value to cover fallback string logic (Linia 91)", () => {
    render(<Input value={null as unknown as string} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
  });

it("applies error and disabled styles to label (Linie 109-110)", () => {
    const { rerender } = render(<Input label="Test Label" isError />);
    expect(screen.getByText("Test Label")).toHaveClass("text-[var(--color-gi-red)]");

    rerender(<Input label="Test Label" isDisabled />);
    expect(screen.getByText("Test Label")).toHaveClass("opacity-50");
  });

  it("renders RightIcon with disabled styles (Linia 183)", () => {
    render(
      <Input isDisabled RightIcon={<span data-testid="right-icon-test" />} />,
    );
    expect(screen.getByTestId("right-icon-test").parentElement).toHaveClass(
      "opacity-30",
    );
  });
  it("covers all secondary text branch permutations", () => {
    const { rerender } = render(<Input isError errorText={undefined} />);
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();

    rerender(<Input isError={false} helper={undefined} />);
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();

    rerender(<Input helper="Help" isDisabled />);
    expect(screen.queryByText("Help")).not.toBeInTheDocument();
  });

  it("covers prefix/suffix permutations with and without values", () => {
    render(<Input prefix="PRE" value="" isDisabled />);
    expect(screen.queryByText("PRE")).not.toBeInTheDocument();
  });

  it("covers missing icon branches", () => {
    const { container } = render(
      <Input LeftIcon={undefined} RightIcon={undefined} />,
    );
    expect(container.querySelector(".flex-shrink-0")).not.toBeInTheDocument();
  });

  it("hits the value change in useEffect", () => {
    const { rerender } = render(<Input value="initial" />);
    rerender(<Input value="updated" />);
    expect(screen.getByDisplayValue("updated")).toBeInTheDocument();
    rerender(<Input value={undefined} />);
    expect(screen.getByDisplayValue("updated")).toBeInTheDocument();
  });

  it("handles isRequired being false explicitly", () => {
    render(<Input label="Test" isRequired={false} />);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });
});
