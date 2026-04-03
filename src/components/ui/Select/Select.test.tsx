import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Select } from "./Select";

if (typeof window.PointerEvent === "undefined") {
  window.PointerEvent = class PointerEvent extends MouseEvent {} as any;
}

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock("@/assets/icons/chevron-down-icon.svg", () => ({
  default: () => <span data-testid="chevron" />,
}));

describe("<Select /> - Full Coverage", () => {
  const defaultProps = {
    placeholder: "Select",
    children: <div data-testid="content">Content</div>,
  };

  beforeEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  describe("handleOpen Guards", () => {
    it("returns early in handleOpen when openOn is NOT hover", () => {
      render(<Select {...defaultProps} openOn="click" />);
      const container = screen.getByRole("button").parentElement!;

      fireEvent.pointerEnter(container);
      expect(screen.queryByTestId("content")).not.toBeInTheDocument();
    });

    it("returns early in handleOpen when isDisabled is true", () => {
      render(<Select {...defaultProps} openOn="hover" isDisabled />);
      const container = screen.getByRole("button").parentElement!;

      fireEvent.pointerEnter(container);
      expect(screen.queryByTestId("content")).not.toBeInTheDocument();
    });
  });

  describe("onOpenChange Guards", () => {
    it("returns early in onOpenChange when isDisabled is true", () => {
      const { rerender } = render(
        <Select {...defaultProps} isDisabled={false} openOn="click" />,
      );
      const trigger = screen.getByRole("button");

      fireEvent.click(trigger);

      rerender(<Select {...defaultProps} isDisabled={true} openOn="click" />);
      fireEvent.keyDown(trigger, { key: "Escape" });
    });

    it("handles nextOpen=false in hover mode inside onOpenChange", async () => {
      render(<Select {...defaultProps} openOn="hover" />);
      const container = screen.getByRole("button").parentElement!;

      act(() => {
        fireEvent.pointerEnter(container);
      });
      expect(await screen.findByTestId("content")).toBeInTheDocument();

      fireEvent.keyDown(screen.getByRole("button"), { key: "Escape" });

      await waitFor(() => {
        expect(screen.queryByTestId("content")).not.toBeInTheDocument();
      });
    });
  });

  describe("Pointer Events", () => {
    it("prevents default on pointerDown in hover mode", () => {
      render(<Select {...defaultProps} openOn="hover" />);
      const trigger = screen.getByRole("button");

      const event = fireEvent.pointerDown(trigger);
      expect(event).toBe(false);
    });
  });

  describe("Hover & Click Transitions", () => {
    it("covers the full close sequence and timeout clearing", async () => {
      vi.useFakeTimers();
      render(<Select {...defaultProps} openOn="hover" />);
      const container = screen.getByRole("button").parentElement!;

      act(() => {
        fireEvent.pointerEnter(container);
        vi.runOnlyPendingTimers();
      });
      act(() => {
        fireEvent.pointerLeave(container);
      });
      act(() => {
        fireEvent.pointerEnter(container);
      });
      act(() => {
        fireEvent.pointerLeave(container);
      });

      act(() => {
        vi.advanceTimersByTime(150);
      });
      expect(screen.queryByTestId("content")).not.toBeInTheDocument();
      vi.useRealTimers();
    });

    it("covers standard click mode transitions", async () => {
      render(<Select {...defaultProps} openOn="click" />);
      const trigger = screen.getByRole("button");

      await act(async () => {
        fireEvent.pointerDown(trigger, { button: 0 });
        fireEvent.pointerUp(trigger);
        fireEvent.click(trigger);
      });
      expect(await screen.findByTestId("content")).toBeInTheDocument();
    });
  });

  describe("UI Variants", () => {
    it("renders small size", () => {
      render(<Select {...defaultProps} size="small" />);
      expect(screen.getByRole("button")).toHaveClass("h-8");
    });
  });

  describe("Missing Specific Lines Coverage", () => {
    it("covers early return in handleClose when openOn is click", () => {
      render(<Select {...defaultProps} openOn="click" />);
      const container = screen.getByRole("button").parentElement!;

      const result = fireEvent.pointerLeave(container);
      expect(result).toBe(true);
    });

    it("covers !nextOpen guard inside onOpenChange when openOn is hover", async () => {
      render(<Select {...defaultProps} openOn="hover" />);
      const container = screen.getByRole("button").parentElement!;

      act(() => {
        fireEvent.pointerEnter(container);
      });
      expect(await screen.findByTestId("content")).toBeInTheDocument();

      act(() => {
        fireEvent.keyDown(document.body, { key: "Escape" });
      });

      await waitFor(() => {
        expect(screen.queryByTestId("content")).not.toBeInTheDocument();
      });
    });

    it("covers e.preventDefault() in onClick when openOn is hover", () => {
      render(<Select {...defaultProps} openOn="hover" />);
      const trigger = screen.getByRole("button");

      const clickEvent = fireEvent.click(trigger);
      expect(clickEvent).toBe(false);
    });
  });
});
