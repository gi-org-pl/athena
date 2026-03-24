import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";
import React from "react";
import { Select } from "./Select";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Select Component", () => {
  const mockOnClick = vi.fn();

  const DemoContent = (
    <>
      <DropdownMenu.Item onSelect={() => mockOnClick()}>
        Action 1
      </DropdownMenu.Item>
      <DropdownMenu.Item>Action 2</DropdownMenu.Item>
    </>
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render placeholder correctly", () => {
    render(<Select placeholder="Choose option">{DemoContent}</Select>);
    expect(screen.getByText("Choose option")).toBeInTheDocument();
  });

  it("should open menu on pointer down when openOn is click", async () => {
    render(<Select placeholder="Trigger">{DemoContent}</Select>);

    const trigger = screen.getByRole("button");
    fireEvent.pointerDown(trigger, { button: 0 });

    const item = await screen.findByText("Action 1");
    expect(item).toBeInTheDocument();
  });

  it("should not open menu when disabled", () => {
    render(
      <Select isDisabled placeholder="Disabled">
        {DemoContent}
      </Select>,
    );

    const trigger = screen.getByRole("button");
    fireEvent.pointerDown(trigger, { button: 0 });

    expect(screen.queryByText("Action 1")).toBeNull();
    expect(trigger).toHaveAttribute("tabindex", "-1");
  });

  it("should call action callback when an item is selected", async () => {
    render(<Select placeholder="Trigger">{DemoContent}</Select>);

    fireEvent.pointerDown(screen.getByRole("button"), { button: 0 });

    const item = await screen.findByText("Action 1");
    fireEvent.click(item);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should rotate chevron when dropdown is open", async () => {
    render(<Select placeholder="Trigger">{DemoContent}</Select>);

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("data-state", "closed");

    fireEvent.pointerDown(trigger, { button: 0 });
    expect(trigger).toHaveAttribute("data-state", "open");
  });

  it("should handle hover state when openOn is hover", async () => {
    render(
      <Select openOn="hover" placeholder="Hover">
        {DemoContent}
      </Select>,
    );

    const container = screen.getByTestId("select-container");
    fireEvent.pointerEnter(container);

    const item = await screen.findByText("Action 1");
    expect(item).toBeInTheDocument();
  });
});

describe("Select Component – additional coverage", () => {
  const mockOnClick = vi.fn();

  const DemoContent = (
    <>
      <DropdownMenu.Item onSelect={() => mockOnClick()}>
        Action 1
      </DropdownMenu.Item>
      <DropdownMenu.Item>Action 2</DropdownMenu.Item>
    </>
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should close menu after mouse leave with delay when openOn='hover'", async () => {
    render(
      <Select openOn="hover" placeholder="Hover me">
        {DemoContent}
      </Select>,
    );

    const container = screen.getByTestId("select-container");

    fireEvent.pointerEnter(container);
    expect(await screen.findByText("Action 1")).toBeInTheDocument();

    vi.useFakeTimers();

    fireEvent.pointerLeave(container);

    expect(screen.getByText("Action 1")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.queryByText("Action 1")).not.toBeInTheDocument();
  });

  it("should clear timer on mouse enter when openOn='hover' and timer is pending", async () => {
    render(
      <Select openOn="hover" placeholder="Hover me">
        {DemoContent}
      </Select>,
    );

    const container = screen.getByTestId("select-container");

    fireEvent.pointerEnter(container);
    expect(await screen.findByText("Action 1")).toBeInTheDocument();

    vi.useFakeTimers();

    fireEvent.pointerLeave(container);
    expect(screen.getByText("Action 1")).toBeInTheDocument();

    fireEvent.pointerEnter(container);
    expect(screen.getByText("Action 1")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(screen.getByText("Action 1")).toBeInTheDocument();
  });

  it("should prevent default click when openOn='hover'", () => {
    render(
      <Select openOn="hover" placeholder="Hover me">
        {DemoContent}
      </Select>,
    );

    const trigger = screen.getByRole("button");

    expect(screen.queryByText("Action 1")).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.queryByText("Action 1")).not.toBeInTheDocument();
  });

  it("should handle click when disabled (prevent default and return)", () => {
    render(
      <Select isDisabled placeholder="Disabled">
        {DemoContent}
      </Select>,
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("tabindex", "-1");

    fireEvent.click(trigger);
    expect(screen.queryByText("Action 1")).not.toBeInTheDocument();
  });

  it("should not open menu on mouse enter when openOn='click'", () => {
    render(
      <Select openOn="click" placeholder="Click me">
        {DemoContent}
      </Select>,
    );

    const container = screen.getByTestId("select-container");
    fireEvent.pointerEnter(container);
    expect(screen.queryByText("Action 1")).not.toBeInTheDocument();
  });
});
