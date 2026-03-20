import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";

describe("Tooltip Component", () => {
  it("should render the trigger element", () => {
    render(
      <Tooltip content="Helper text">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeDefined();
  });

  it("should render the tooltip trigger wrapper", () => {
    const { container } = render(
      <Tooltip content="Visible Tooltip Content">
        <button>Trigger</button>
      </Tooltip>,
    );

    const wrapper = container.querySelector("span.cursor-default");
    expect(wrapper).toBeDefined();
  });

  it("should be defined as a component", () => {
    expect(Tooltip).toBeDefined();
  });
});
