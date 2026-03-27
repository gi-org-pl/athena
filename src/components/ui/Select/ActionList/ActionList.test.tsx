import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, afterEach } from "vitest";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  ActionList,
} from "./ActionList";

describe("DropdownMenu & ActionList Full Coverage", () => {
  afterEach(() => {
    cleanup();
  });

  const renderActionList = (items: any[], props = {}) => {
    return render(
      <DropdownMenu open={true}>
        <DropdownMenuContent>
          <ActionList items={items} {...props} />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  describe("<ActionList /> Logic", () => {
    const mockItems = [
      { label: "Edit", onClick: vi.fn(), icon: <span data-testid="edit-icon" /> },
      { label: "Delete", variant: "danger" as const, onClick: vi.fn() },
    ];

    it("should render all items with labels and icons", () => {
      renderActionList(mockItems);
      expect(screen.getByText("Edit")).toBeInTheDocument();
      expect(screen.getByTestId("edit-icon")).toBeInTheDocument();
      expect(screen.getByText("Delete")).toBeInTheDocument();
    });

    it("should call onClick when an item is clicked", async () => {
      const user = userEvent.setup();
      renderActionList(mockItems);
      
      await user.click(screen.getByText("Edit"));
      expect(mockItems[0].onClick).toHaveBeenCalledTimes(1);
    });

    it("should apply custom className to the ActionList container", () => {
      renderActionList(mockItems, { className: "custom-list-class" });
      const listContainer = document.querySelector('.custom-list-class');
      expect(listContainer).toBeInTheDocument();
    });
  });

  describe("Sub-components Coverage (Radix Wrappers)", () => {
    it("should render all sub-components to ensure 100% coverage", () => {
      render(
        <DropdownMenu open={true}>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent className="content-class">
              <DropdownMenuLabel inset className="label-class">
                My Label
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="sep-class" />
              
              <DropdownMenuGroup>
                <DropdownMenuCheckboxItem checked className="check-class">
                  Checkbox
                  <DropdownMenuShortcut className="shortcut-class">⌘K</DropdownMenuShortcut>
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>

              <DropdownMenuRadioGroup value="a">
                <DropdownMenuRadioItem value="a" className="radio-class">
                  Radio A
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger inset className="sub-trigger-class">
                  Submenu
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="sub-content-class">
                  <DropdownMenuItem>Sub Item</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      );

      expect(screen.getByText("My Label")).toHaveClass("label-class");
      expect(screen.getByText("My Label")).toHaveAttribute("data-inset", "true");
      
      expect(document.querySelector(".sep-class")).toBeInTheDocument();
      
      const checkbox = screen.getByText("Checkbox").closest(".check-class");
      expect(checkbox).toBeInTheDocument();
      expect(screen.getByText("⌘K")).toHaveClass("shortcut-class");

      const radio = screen.getByText("Radio A").closest(".radio-class");
      expect(radio).toBeInTheDocument();

      const subTrigger = screen.getByText("Submenu").closest(".sub-trigger-class");
      expect(subTrigger).toHaveAttribute("data-slot", "dropdown-menu-sub-trigger");
    });

    it("should render Item with danger variant", () => {
      render(
        <DropdownMenu open={true}>
          <DropdownMenuContent>
            <DropdownMenuItem variant="danger">Danger Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
      const item = screen.getByText("Danger Item").closest('[data-slot="dropdown-menu-item"]');
      expect(item).toHaveAttribute("data-variant", "danger");
      expect(item).toHaveClass("text-gi-red");
    });
  });

  describe("Technical Integration", () => {
    it("should render Trigger with correct data-slot even when menu is open", () => {
      render(
        <DropdownMenu open={true}>
          <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
          <DropdownMenuContent>Content</DropdownMenuContent>
        </DropdownMenu>
      );
      
      const trigger = screen.getByRole("button", { name: /trigger/i, hidden: true });
      expect(trigger).toHaveAttribute("data-slot", "dropdown-menu-trigger");
    });
  });
});