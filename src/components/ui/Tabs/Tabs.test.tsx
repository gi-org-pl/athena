import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Tabs } from "./Tabs";

const defaultItems = [
  { value: "tab1", label: "First Tab" },
  { value: "tab2", label: "Second Tab" },
  { value: "tab3", label: "Third Tab" },
];

describe("<Tabs />", () => {
  it("should render the correct number of tab items", () => {
    render(
      <Tabs
        items={defaultItems}
        value="tab1"
        onValueChange={vi.fn()}
        dataTestId="test-tabs"
      />,
    );

    const tablist = screen.getByRole("tablist");
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveAttribute("data-test-id", "test-tabs");

    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(3);
    expect(tabs[0]).toHaveTextContent("First Tab");
  });

  describe("Keyboard Navigation", () => {
    it("should shift focus and change value to the next tab on ArrowRight", () => {
      const handleValueChange = vi.fn();
      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={handleValueChange}
        />,
      );

      const tablist = screen.getByRole("tablist");
      const tabs = screen.getAllByRole("tab");

      fireEvent.keyDown(tablist, { key: "ArrowRight" });

      expect(handleValueChange).toHaveBeenCalledWith("tab2");
      expect(tabs[1]).toHaveFocus();
    });

    it("should wrap focus to the first tab when ArrowRight is pressed on the final tab", () => {
      const handleValueChange = vi.fn();
      render(
        <Tabs
          items={defaultItems}
          value="tab3"
          onValueChange={handleValueChange}
        />,
      );

      const tablist = screen.getByRole("tablist");
      const tabs = screen.getAllByRole("tab");

      fireEvent.keyDown(tablist, { key: "ArrowRight" });

      expect(handleValueChange).toHaveBeenCalledWith("tab1");
      expect(tabs[0]).toHaveFocus();
    });

    it("should shift focus and change value to the previous tab on ArrowLeft", () => {
      const handleValueChange = vi.fn();
      render(
        <Tabs
          items={defaultItems}
          value="tab2"
          onValueChange={handleValueChange}
        />,
      );

      const tablist = screen.getByRole("tablist");
      const tabs = screen.getAllByRole("tab");

      fireEvent.keyDown(tablist, { key: "ArrowLeft" });

      expect(handleValueChange).toHaveBeenCalledWith("tab1");
      expect(tabs[0]).toHaveFocus();
    });

    it("should wrap focus to the final tab when ArrowLeft is pressed on the first tab", () => {
      const handleValueChange = vi.fn();
      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={handleValueChange}
        />,
      );

      const tablist = screen.getByRole("tablist");
      const tabs = screen.getAllByRole("tab");

      fireEvent.keyDown(tablist, { key: "ArrowLeft" });

      expect(handleValueChange).toHaveBeenCalledWith("tab3");
      expect(tabs[2]).toHaveFocus();
    });

    it("should immediately shift focus to the first tab when Home is pressed", () => {
      const handleValueChange = vi.fn();
      render(
        <Tabs
          items={defaultItems}
          value="tab3"
          onValueChange={handleValueChange}
        />,
      );

      const tablist = screen.getByRole("tablist");
      const tabs = screen.getAllByRole("tab");

      fireEvent.keyDown(tablist, { key: "Home" });

      expect(handleValueChange).toHaveBeenCalledWith("tab1");
      expect(tabs[0]).toHaveFocus();
    });

    it("should immediately shift focus to the final tab when End is pressed", () => {
      const handleValueChange = vi.fn();
      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={handleValueChange}
        />,
      );

      const tablist = screen.getByRole("tablist");
      const tabs = screen.getAllByRole("tab");

      fireEvent.keyDown(tablist, { key: "End" });

      expect(handleValueChange).toHaveBeenCalledWith("tab3");
      expect(tabs[2]).toHaveFocus();
    });

    it("should ignore unsupported keys and not trigger changes", () => {
      const handleValueChange = vi.fn();
      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={handleValueChange}
        />,
      );

      const tablist = screen.getByRole("tablist");

      fireEvent.keyDown(tablist, { key: "Enter" });
      fireEvent.keyDown(tablist, { key: "Space" });
      fireEvent.keyDown(tablist, { key: "Tab" });

      expect(handleValueChange).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility and ARIA attributes", () => {
    it("should correctly set aria-selected based on the active value", () => {
      render(
        <Tabs items={defaultItems} value="tab2" onValueChange={vi.fn()} />,
      );

      const tabs = screen.getAllByRole("tab");

      expect(tabs[0]).toHaveAttribute("aria-selected", "false");
      expect(tabs[1]).toHaveAttribute("aria-selected", "true");
      expect(tabs[2]).toHaveAttribute("aria-selected", "false");
    });
  });

  describe("Layout Calculation Mocking", () => {
    let originalOffsetLeft: PropertyDescriptor | undefined;
    let originalOffsetWidth: PropertyDescriptor | undefined;

    beforeAll(() => {
      originalOffsetLeft = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "offsetLeft",
      );
      originalOffsetWidth = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "offsetWidth",
      );
    });

    afterAll(() => {
      if (originalOffsetLeft)
        Object.defineProperty(
          HTMLElement.prototype,
          "offsetLeft",
          originalOffsetLeft,
        );
      if (originalOffsetWidth)
        Object.defineProperty(
          HTMLElement.prototype,
          "offsetWidth",
          originalOffsetWidth,
        );
    });

    it("should calculate indicator style based on active element dimensions", () => {
      Object.defineProperty(HTMLElement.prototype, "offsetLeft", {
        configurable: true,
        get: () => 120,
      });
      Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
        configurable: true,
        get: () => 85,
      });

      const { container, rerender } = render(
        <Tabs items={defaultItems} value="tab1" onValueChange={vi.fn()} />,
      );

      rerender(
        <Tabs items={defaultItems} value="tab2" onValueChange={vi.fn()} />,
      );

      const indicator = container.querySelector('div[aria-hidden="true"]');

      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveStyle({ left: "120px", width: "85px" });
    });
  });

  describe("Interaction and Controlled State", () => {
    it("should call onValueChange with the correct value when a tab is clicked", () => {
      const handleValueChange = vi.fn();

      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={handleValueChange}
        />,
      );

      const secondTab = screen.getByText("Second Tab");
      fireEvent.click(secondTab);

      expect(handleValueChange).toHaveBeenCalledTimes(1);
      expect(handleValueChange).toHaveBeenCalledWith("tab2");
    });

    it("should not update internal state or aria attributes automatically on click", () => {
      const handleValueChange = vi.fn();

      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={handleValueChange}
        />,
      );

      const secondTab = screen.getByText("Second Tab");
      fireEvent.click(secondTab);
      expect(handleValueChange).toHaveBeenCalledWith("tab2");
      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
      expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    });
  });

  describe("Styling modifiers", () => {
    it("should apply large size classes when size is large", () => {
      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={vi.fn()}
          size="large"
        />,
      );

      const firstTab = screen.getAllByRole("tab")[0];
      expect(firstTab).toHaveClass("text-lg");
    });

    it("should apply full width flex classes when isFullWidth is true", () => {
      render(
        <Tabs
          items={defaultItems}
          value="tab1"
          onValueChange={vi.fn()}
          isFullWidth={true}
        />,
      );

      const tablist = screen.getByRole("tablist");
      const firstTab = screen.getAllByRole("tab")[0];

      expect(tablist).toHaveClass("w-full");
      expect(firstTab).toHaveClass("flex-1");
    });
  });
  describe("Edge Cases and Fallbacks", () => {
    it("should default indicator style to zero when the active tab is not found", () => {
      const { container } = render(
        <Tabs
          items={defaultItems}
          value="non-existent-tab"
          onValueChange={vi.fn()}
        />,
      );

      const indicator = container.querySelector('div[aria-hidden="true"]');

      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveStyle({ left: "0px", width: "0px" });
    });
  });
});
