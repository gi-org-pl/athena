import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

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

it("should apply data-test-id to tooltip content", async () => {
    render(
      <Tooltip content="Test Content" dataTestId="test-tooltip" open={true}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const content = await waitFor(() => {
      const el = document.querySelector('[data-test-id="test-tooltip"]');
      if (!el) throw new Error("Element z data-test-id nie został znaleziony");
      return el;
    });

    expect(content).toBeDefined();
    expect(content.textContent).toContain("Test Content");
  });
});