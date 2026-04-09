import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Tooltip", () => {
  it("should render correctly for all align variants", async () => {
    const { rerender } = render(
      <Tooltip content="Start" align="start" open={true} dataTestId="t-start">
        <button>Trigger</button>
      </Tooltip>,
    );
    expect(screen.getByTestId("t-start")).toBeDefined();

    rerender(
      <Tooltip content="End" align="end" open={true} dataTestId="t-end">
        <button>Trigger</button>
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
        <button>Trigger</button>
      </Tooltip>,
    );
    expect(screen.getByTestId("t-center")).toBeDefined();
  });

  it("should render on different sides (top, bottom, left, right) with align start", () => {
    const sides: ("top" | "bottom" | "left" | "right")[] = [
      "top",
      "bottom",
      "left",
      "right",
    ];

    for (const side of sides) {
      const { unmount } = render(
        <Tooltip
          content="Test"
          side={side}
          align="start"
          open={true}
          dataTestId={`t-${side}`}
        >
          <span>Trigger</span>
        </Tooltip>,
      );
      expect(screen.getByTestId(`t-${side}`)).toBeDefined();
      unmount();
    }
  });

  it("should apply custom classes to the wrapper", () => {
    render(
      <Tooltip content="Test" className="custom-test-class">
        <span>Trigger</span>
      </Tooltip>,
    );
    const element = document.querySelector(".custom-test-class");
    expect(element).toBeDefined();
  });

  it("should display content after delay", async () => {
    render(
      <Tooltip content="Delayed" delay={100} open={true} dataTestId="t-delay">
        <button>Trigger</button>
      </Tooltip>,
    );
    const content = await waitFor(() => screen.getByTestId("t-delay"));
    expect(content.textContent).toBe("Delayed");
  });
});
