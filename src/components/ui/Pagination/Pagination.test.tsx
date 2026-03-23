import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("<Pagination />", () => {
  const defaultProps = {
    page: 1,
    totalPages: 10,
    onChange: vi.fn(),
  };

  describe("Rendering Logic", () => {
    it("should render the correct number of page buttons for a small range", () => {
      render(<Pagination {...defaultProps} totalPages={5} />);

      // 5 page buttons + 2 chevron buttons
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(7);
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("should render ellipsis when there are many pages", () => {
      render(<Pagination {...defaultProps} page={5} totalPages={20} />);

      const dots = screen.getAllByText("…");
      expect(dots.length).toBeGreaterThan(0);
    });

    it("should highlight the active page", () => {
      render(<Pagination {...defaultProps} page={3} />);

      const activeBtn = screen.getByRole("button", { name: "3" });
      expect(activeBtn).toHaveAttribute("aria-current", "page");
    });

    it("should hide page numbers when isOnlyActions is true", () => {
      render(<Pagination {...defaultProps} isOnlyActions />);

      expect(screen.queryByRole("list")).not.toBeInTheDocument();
      expect(screen.queryByText("1")).not.toBeInTheDocument();
      // Should still show Previous and Next chevrons
      expect(screen.getAllByRole("button")).toHaveLength(2);
    });
  });

  describe("Interactions", () => {
    it("should call onChange with the next page when right chevron is clicked", () => {
      const onChange = vi.fn();
      render(<Pagination {...defaultProps} page={1} onChange={onChange} />);

      const buttons = screen.getAllByRole("button");
      const nextButton = buttons[buttons.length - 1];

      fireEvent.click(nextButton);
      expect(onChange).toHaveBeenCalledWith(2);
    });

    it("should call onChange with the previous page when left chevron is clicked", () => {
      const onChange = vi.fn();
      render(<Pagination {...defaultProps} page={5} onChange={onChange} />);

      const prevButton = screen.getAllByRole("button")[0];

      fireEvent.click(prevButton);
      expect(onChange).toHaveBeenCalledWith(4);
    });

    it("should call onChange when a specific page number is clicked", () => {
      const onChange = vi.fn();
      render(<Pagination {...defaultProps} onChange={onChange} />);

      const pageThree = screen.getByRole("button", { name: "3" });
      fireEvent.click(pageThree);

      expect(onChange).toHaveBeenCalledWith(3);
    });
  });

  describe("Boundary Constraints", () => {
    it("should disable the previous button when on the first page", () => {
      render(<Pagination {...defaultProps} page={1} />);
      const prevButton = screen.getAllByRole("button")[0];
      expect(prevButton).toBeDisabled();
    });

    it("should disable the next button when on the last page", () => {
      render(<Pagination {...defaultProps} page={10} />);
      const buttons = screen.getAllByRole("button");
      const nextButton = buttons[buttons.length - 1];
      expect(nextButton).toBeDisabled();
    });
    it("should not call onChange when previous button is clicked on the first page", () => {
      const onChange = vi.fn();
      render(<Pagination {...defaultProps} page={1} onChange={onChange} />);

      const prevButton = screen.getAllByRole("button")[0];
      fireEvent.click(prevButton);

      expect(onChange).not.toHaveBeenCalled();
    });

    it("should not call onChange when next button is clicked on the last page", () => {
      const onChange = vi.fn();
      render(
        <Pagination
          {...defaultProps}
          page={10}
          totalPages={10}
          onChange={onChange}
        />,
      );

      const buttons = screen.getAllByRole("button");
      const nextButton = buttons[buttons.length - 1];
      fireEvent.click(nextButton);

      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("Layout Props", () => {
    it("should apply full width classes when isFullWidth is true", () => {
      render(<Pagination {...defaultProps} isFullWidth />);
      const nav = screen.getByRole("navigation");
      expect(nav).toHaveClass("w-full", "justify-between");
    });
  });
});
