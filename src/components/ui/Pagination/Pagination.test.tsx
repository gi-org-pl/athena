import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("<Pagination />", () => {
  const defaultProps = {
    page: 1,
    totalPages: 10,
    onChange: vi.fn(),
  };

  vi.mock("@/assets/icons/chevron-left-icon.svg", () => ({
    default: () => <span data-testid="chevron-left" />,
  }));

  vi.mock("@/assets/icons/chevron-right-icon.svg", () => ({
    default: () => <span data-testid="chevron-right" />,
  }));
  const getPrevButton = () => screen.getByRole("button", { name: /previous/i });
  const getNextButton = () => screen.getByRole("button", { name: /next/i });

  describe("Rendering Logic", () => {
    it("should render the correct number of page buttons for a small range", () => {
      render(<Pagination {...defaultProps} totalPages={5} />);

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
      expect(screen.getAllByRole("button")).toHaveLength(2);
    });
  });

  describe("Interactions", () => {
    it("should call onChange with the next page when right chevron is clicked", () => {
      const onChange = vi.fn();
      render(<Pagination {...defaultProps} page={1} onChange={onChange} />);

      fireEvent.click(getNextButton());
      expect(onChange).toHaveBeenCalledWith(2);
    });

    it("should call onChange with the previous page when left chevron is clicked", () => {
      const onChange = vi.fn();
      render(<Pagination {...defaultProps} page={5} onChange={onChange} />);

      fireEvent.click(getPrevButton());
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
      expect(getPrevButton()).toBeDisabled();
    });

    it("should disable the next button when on the last page", () => {
      render(<Pagination {...defaultProps} page={10} totalPages={10} />);
      expect(getNextButton()).toBeDisabled();
    });

    it("should not call onChange when previous button is clicked on the first page", () => {
      const onChange = vi.fn();
      render(<Pagination {...defaultProps} page={1} onChange={onChange} />);

      fireEvent.click(getPrevButton());
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

      fireEvent.click(getNextButton());
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
