import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { createRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ActionList } from "./ActionList";
import { DropdownMenu, DropdownMenuContent } from "./ActionList.methods";

describe("<ActionList />", () => {
  afterEach(() => {
    cleanup();
  });

  const renderActionList = (items: any[], props = {}) => {
    return render(
      <DropdownMenu open={true}>
        <DropdownMenuContent>
          <ActionList items={items} {...props} />
        </DropdownMenuContent>
      </DropdownMenu>,
    );
  };

  const mockItems = [
    {
      label: "Edit",
      onClick: vi.fn(),
      icon: <span data-testid="edit-icon">Icon</span>,
    },
    {
      label: "Delete",
      variant: "danger" as const,
      onClick: vi.fn(),
    },
  ];

  describe("Rendering Logic", () => {
    it("should render all item labels correctly", () => {
      renderActionList(mockItems);
      expect(screen.getByText("Edit")).toBeInTheDocument();
      expect(screen.getByText("Delete")).toBeInTheDocument();
    });

    it("should render an icon when provided (true path)", () => {
      renderActionList(mockItems);
      expect(screen.getByTestId("edit-icon")).toBeInTheDocument();
    });

    it("should render a placeholder div when no icon is provided (false path)", () => {
      renderActionList([{ label: "No Icon Item", onClick: vi.fn() }]);

      const label = screen.getByText("No Icon Item");
      const placeholder = label.nextElementSibling;

      expect(placeholder).toHaveClass("size-4 shrink-0");
      expect(placeholder?.tagName).toBe("DIV");
    });
  });

  describe("User Interactions", () => {
    it("should trigger the onClick callback when an item is clicked", async () => {
      const user = userEvent.setup();
      renderActionList(mockItems);

      const editButton = screen.getByText("Edit");
      await user.click(editButton);

      expect(mockItems[0].onClick).toHaveBeenCalledTimes(1);
      expect(mockItems[1].onClick).not.toHaveBeenCalled();
    });
  });

  describe("Technical Integration & Props", () => {
    it("should merge custom classNames using the cn utility", () => {
      renderActionList(mockItems, {
        className: "custom-test-class",
        "data-testid": "container",
      });

      const container = screen.getByTestId("container");
      expect(container).toHaveClass("custom-test-class");
      expect(container).toHaveClass("flex flex-col gap-0.5");
    });

    it("should pass a functional ref to the outer div (forwardRef)", () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <DropdownMenu open={true}>
          <DropdownMenuContent>
            <ActionList items={mockItems} ref={ref} />
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.className).toContain("flex-col");
    });

    it("should spread additional props (like id or role) to the container", () => {
      renderActionList(mockItems, {
        id: "unique-list-id",
        role: "menu",
        "data-testid": "container",
      });

      const container = screen.getByTestId("container");
      expect(container).toHaveAttribute("id", "unique-list-id");
      expect(container).toHaveAttribute("role", "menu");
    });
  });
});
