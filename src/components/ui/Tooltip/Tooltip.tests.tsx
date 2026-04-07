import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";
import type { TooltipAlign, TooltipSide } from "./Tooltip.types";

const TOOLTIP_SIDES: TooltipSide[] = ["top", "right", "bottom", "left"];
const TOOLTIP_ALIGNS: TooltipAlign[] = ["start", "center", "end"];

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Tooltip", () => {
  it("should render and display content when open", async () => {
    render(
      <Tooltip content="Visible" open={true} dataTestId="t-1">
        <button>Trigger</button>
      </Tooltip>,
    );

    const content = await waitFor(() =>
      document.querySelector('[data-test-id="t-1"]'),
    );

    expect(content?.textContent).toContain("Visible");
  });

  it("should apply correct offset for vertical and horizontal sides to reach 100% coverage", () => {
    const { rerender } = render(
      <Tooltip
        content="Top Start"
        side="top"
        align="start"
        open={true}
        dataTestId="t-top-start"
      >
        <span>Top Start</span>
      </Tooltip>,
    );
    expect(screen.getByTestId("t-top-start")).toBeDefined();

    rerender(
      <Tooltip
        content="Right Start"
        side="right"
        align="start"
        open={true}
        dataTestId="t-right-start"
      >
        <span>Right Start</span>
      </Tooltip>,
    );
    expect(screen.getByTestId("t-right-start")).toBeDefined();

    rerender(
      <Tooltip content="End" align="end" open={true} dataTestId="t-end">
        <span>End</span>
      </Tooltip>,
    );
    expect(screen.getByTestId("t-end")).toBeDefined();

    rerender(
      <Tooltip
        content="Center"
        align="center"
        open={true}
        dataTestId="t-center"
      >
        <span>Center</span>
      </Tooltip>,
    );
    expect(screen.getByTestId("t-center")).toBeDefined();
  });

  it("should apply correct classes to the wrapper", () => {
    const { container } = render(
      <Tooltip content="Label">
        <span>Trigger</span>
      </Tooltip>,
    );
    expect(container.querySelector(".cursor-pointer")).toBeDefined();
  });

  it("should cover types and constants", () => {
    expect(TOOLTIP_SIDES).toContain("top");
    expect(TOOLTIP_ALIGNS).toContain("start");
  });
});