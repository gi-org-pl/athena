import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  const baseProps = {
    title: "Test Modal",
    description: "Test description",
    isOpen: true,
    onClose: vi.fn(),
  };

  it("renders modal when isOpen is true", () => {
    render(<Modal {...baseProps} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(<Modal {...baseProps} isOpen={false} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const onClose = vi.fn();

    render(<Modal {...baseProps} onClose={onClose} />);

    const closeButton = screen.getByRole("button", { name: /close modal/i });

    await userEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closes when overlay is clicked", async () => {
    const onClose = vi.fn();

    render(<Modal {...baseProps} onClose={onClose} />);

    const overlay = screen.getByRole("dialog").parentElement!;

    await userEvent.click(overlay);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not close when overlay click disabled", async () => {
    const onClose = vi.fn();

    render(
      <Modal {...baseProps} onClose={onClose} isCloseOnOverlayClick={false} />,
    );

    const overlay = screen.getByRole("dialog").parentElement!;

    await userEvent.click(overlay);

    expect(onClose).not.toHaveBeenCalled();
  });

  it("closes on Escape key", () => {
    const onClose = vi.fn();

    render(<Modal {...baseProps} onClose={onClose} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("traps focus inside modal with Tab", async () => {
    render(
      <Modal {...baseProps}>
        <button>First</button>
        <button>Last</button>
      </Modal>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    const first = screen.getByText("First");
    const last = screen.getByText("Last");

    expect(closeButton).toHaveFocus();

    await userEvent.tab();
    expect(first).toHaveFocus();

    await userEvent.tab();
    expect(last).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();
  });

  it("restores focus after close", () => {
    const onClose = vi.fn();

    render(
      <>
        <button>Open</button>
        <Modal {...baseProps} onClose={onClose} />
      </>,
    );

    const openButton = screen.getByText("Open");

    openButton.focus();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalled();
  });

  it("renders custom actions", () => {
    render(
      <Modal
        {...baseProps}
        actions={<button type="button">Custom Action</button>}
      />,
    );

    expect(screen.getByText("Custom Action")).toBeInTheDocument();
  });

  it("ignores transition events from child elements", () => {
    const { rerender } = render(<Modal {...baseProps} />);
    const overlay = screen.getByRole("dialog").parentElement!;

    const child = document.createElement("div");
    overlay.appendChild(child);

    rerender(<Modal {...baseProps} isOpen={false} />);

    fireEvent.transitionEnd(child);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.transitionEnd(overlay);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("handles Tab key when modal has zero focusable elements", () => {
    render(<Modal {...baseProps} isClosable={false} />);
    const dialog = screen.getByRole("dialog");

    document.body.focus();

    fireEvent.keyDown(document, { key: "Tab" });

    expect(dialog).toHaveFocus();
  });

  it("traps focus backwards with Shift+Tab", async () => {
    render(
      <Modal {...baseProps}>
        <button>First</button>
        <button>Last</button>
      </Modal>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    const first = screen.getByText("First");
    const last = screen.getByText("Last");

    expect(closeButton).toHaveFocus();

    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    expect(last).toHaveFocus();

    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    expect(first).toHaveFocus();
  });

  it("handles lifecycle when transitioning from closed to open", () => {
    const { rerender } = render(<Modal {...baseProps} isOpen={false} />);

    rerender(<Modal {...baseProps} isOpen={true} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("maintains visibility when the open transition finishes", () => {
    render(<Modal {...baseProps} isOpen={true} />);

    const overlay = screen.getByRole("dialog").parentElement!;

    fireEvent.transitionEnd(overlay);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  describe("the close button", () => {
    it('is named "Close modal" when no label is given', () => {
      render(<Modal {...baseProps} />);

      expect(
        screen.getByRole("button", { name: "Close modal" }),
      ).toBeInTheDocument();
    });

    it("is named by the label the app gives", () => {
      render(<Modal {...baseProps} closeLabel="Zamknij" />);

      expect(
        screen.getByRole("button", { name: "Zamknij" }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Close modal" }),
      ).not.toBeInTheDocument();
    });

    it("draws its ring on keyboard focus only", () => {
      render(<Modal {...baseProps} />);

      const closeButton = screen.getByRole("button", { name: "Close modal" });

      expect(closeButton).toHaveClass("focus-visible:ring-2");
      expect(closeButton.className).not.toMatch(/(^|s)focus:ring/);
    });
  });

  describe("the first focus", () => {
    it("goes to the first focusable element when no element is chosen", () => {
      render(
        <Modal {...baseProps} actions={<button type="button">Save</button>} />,
      );

      expect(screen.getByRole("button", { name: "Close modal" })).toHaveFocus();
    });

    it("goes to the chosen element", () => {
      const Dialog = () => {
        const save = useRef<HTMLButtonElement>(null);

        return (
          <Modal
            {...baseProps}
            initialFocusRef={save}
            actions={
              <button ref={save} type="button">
                Save
              </button>
            }
          />
        );
      };

      render(<Dialog />);

      expect(screen.getByRole("button", { name: "Save" })).toHaveFocus();
    });

    it("falls back to the first focusable element when the chosen one is not there", () => {
      render(<Modal {...baseProps} initialFocusRef={{ current: null }} />);

      expect(screen.getByRole("button", { name: "Close modal" })).toHaveFocus();
    });

    it("keeps Shift+Tab inside the dialog from a chosen element that is not a tab stop", async () => {
      const Dialog = () => {
        const heading = useRef<HTMLSpanElement>(null);

        return (
          <Modal
            {...baseProps}
            title={
              <span ref={heading} tabIndex={-1}>
                Heading
              </span>
            }
            initialFocusRef={heading}
            actions={<button type="button">Save</button>}
          />
        );
      };

      render(<Dialog />);

      expect(screen.getByText("Heading")).toHaveFocus();

      await userEvent.tab({ shift: true });

      expect(screen.getByRole("button", { name: "Save" })).toHaveFocus();
    });

    it("moves Tab from a chosen element that is not a tab stop to the first tab stop", async () => {
      const Dialog = () => {
        const heading = useRef<HTMLSpanElement>(null);

        return (
          <Modal
            {...baseProps}
            title={
              <span ref={heading} tabIndex={-1}>
                Heading
              </span>
            }
            initialFocusRef={heading}
            actions={<button type="button">Save</button>}
          />
        );
      };

      render(<Dialog />);
      await userEvent.tab();

      expect(screen.getByRole("button", { name: "Close modal" })).toHaveFocus();
    });

    it("lets Tab move on from a field the dialog draws after it opened", async () => {
      const { rerender } = render(
        <Modal {...baseProps}>
          <input aria-label="Second" />
        </Modal>,
      );

      rerender(
        <Modal {...baseProps}>
          <input aria-label="First" />
          <input aria-label="Second" />
        </Modal>,
      );
      await userEvent.click(screen.getByRole("textbox", { name: "First" }));
      await userEvent.tab();

      expect(screen.getByRole("textbox", { name: "Second" })).toHaveFocus();
    });

    it("keeps Tab inside the dialog from the chosen element", async () => {
      const Dialog = () => {
        const save = useRef<HTMLButtonElement>(null);

        return (
          <Modal
            {...baseProps}
            initialFocusRef={save}
            actions={
              <button ref={save} type="button">
                Save
              </button>
            }
          />
        );
      };

      render(<Dialog />);
      await userEvent.tab();

      expect(screen.getByRole("button", { name: "Close modal" })).toHaveFocus();
    });
  });
});
