import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ActionList } from "./ActionList";
import { DropdownMenu, DropdownMenuContent } from "./ActionList.methods";

vi.mock("@/assets/icons/check-icon.svg", () => ({
  default: () => <svg data-testid="check-icon" />,
}));

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

  describe("Selected State", () => {
    const choiceItems = [
      { label: "Under 18", isSelected: false },
      { label: "18-24", isSelected: true },
      { label: "25-34", isSelected: false },
    ];

    it("should keep plain menu items when no item says whether it is selected", () => {
      renderActionList(mockItems);

      expect(screen.getAllByRole("menuitem")).toHaveLength(2);
      expect(screen.queryByRole("menuitemradio")).not.toBeInTheDocument();
      expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
    });

    it("should expose the selected item as checked and the others as not checked", () => {
      renderActionList(choiceItems);

      expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();
      expect(
        screen.getByRole("menuitemradio", { name: "18-24" }),
      ).toBeChecked();
      expect(
        screen.getByRole("menuitemradio", { name: "Under 18" }),
      ).not.toBeChecked();
      expect(
        screen.getByRole("menuitemradio", { name: "25-34" }),
      ).not.toBeChecked();
    });

    it("should show the check mark on the selected item only", () => {
      renderActionList(choiceItems);

      const marks = screen.getAllByTestId("check-icon");
      expect(marks).toHaveLength(1);
      expect(
        screen.getByRole("menuitemradio", { name: "18-24" }),
      ).toContainElement(marks[0]);
    });

    it("should expose every item as not checked when none is selected", () => {
      renderActionList(
        choiceItems.map((item) => ({ ...item, isSelected: false })),
      );

      for (const item of screen.getAllByRole("menuitemradio")) {
        expect(item).not.toBeChecked();
      }
      expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
    });

    it("should treat the first of several selected items as the selected one", () => {
      renderActionList(
        choiceItems.map((item) => ({ ...item, isSelected: true })),
      );

      expect(
        screen.getByRole("menuitemradio", { name: "Under 18" }),
      ).toBeChecked();
      expect(
        screen.getByRole("menuitemradio", { name: "18-24" }),
      ).not.toBeChecked();
      expect(screen.getAllByTestId("check-icon")).toHaveLength(1);
    });

    it("should show the check mark instead of the icon of a selected item", () => {
      renderActionList([
        {
          label: "Edit",
          icon: <span data-testid="edit-icon">Icon</span>,
          isSelected: true,
        },
        {
          label: "Add",
          icon: <span data-testid="add-icon">Icon</span>,
          isSelected: false,
        },
        { label: "Plain", isSelected: false },
      ]);

      expect(screen.queryByTestId("edit-icon")).not.toBeInTheDocument();
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
      expect(screen.getByTestId("add-icon")).toBeInTheDocument();
      expect(screen.getByText("Plain").nextElementSibling).toHaveClass(
        "size-4 shrink-0",
      );
    });

    it("should move focus to the selected item after the list opens", async () => {
      renderActionList(choiceItems);

      await waitFor(() =>
        expect(
          screen.getByRole("menuitemradio", { name: "18-24" }),
        ).toHaveFocus(),
      );
    });

    it("should leave focus where the menu puts it when no item is selected", async () => {
      renderActionList(
        choiceItems.map((item) => ({ ...item, isSelected: false })),
      );
      await new Promise((resolve) => requestAnimationFrame(resolve));

      for (const item of screen.getAllByRole("menuitemradio")) {
        expect(item).not.toHaveFocus();
      }
    });

    it("should not move focus once the list is gone before the next frame", () => {
      const cancel = vi.spyOn(window, "cancelAnimationFrame");
      const { unmount } = renderActionList(choiceItems);

      unmount();

      expect(cancel).toHaveBeenCalledTimes(1);
      cancel.mockRestore();
    });

    it("should call onClick of a selectable item and keep the danger variant", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      renderActionList([
        { label: "Keep", isSelected: true },
        {
          label: "Remove",
          variant: "danger" as const,
          isSelected: false,
          onClick,
        },
      ]);

      const remove = screen.getByRole("menuitemradio", { name: "Remove" });
      expect(remove).toHaveAttribute("data-variant", "danger");
      expect(
        screen.getByRole("menuitemradio", { name: "Keep" }),
      ).toHaveAttribute("data-variant", "default");

      await user.click(remove);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should pass the ref, the class name and other props to the group of a choice list", () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <DropdownMenu open={true}>
          <DropdownMenuContent>
            <ActionList
              items={choiceItems}
              ref={ref}
              className="custom-test-class"
              {...{ id: "age-list" }}
            />
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveAttribute("role", "group");
      expect(ref.current).toHaveAttribute("id", "age-list");
      expect(ref.current).toHaveClass("custom-test-class");
      expect(ref.current).toHaveClass("flex flex-col gap-0.5");
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
