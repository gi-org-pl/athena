import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Table } from "./Table";
import type { TableColumn } from "./Table.types";

vi.mock("../Checkbox/Checkbox", () => ({
  Checkbox: ({ checked, onCheckedChange }: any) => (
    <input
      type="checkbox"
      data-testid="mock-checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
    />
  ),
}));

vi.mock("../Badge/Badge", () => ({
  Badge: ({ children }: any) => <div data-testid="mock-badge">{children}</div>,
}));

vi.mock("../Pagination/Pagination", () => ({
  Pagination: ({ page, totalPages, onChange }: any) => (
    <nav data-testid="mock-pagination">
      <button
        type="button"
        data-testid="mock-pagination-next"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </nav>
  ),
}));

interface TestData {
  id: string;
  name: string;
  status?: string;
}

describe("<Table />", () => {
  const mockData: TestData[] = [
    { id: "row_1", name: "John Doe" },
    { id: "row_2", name: "Jane Smith" },
  ];

  const mockColumns: TableColumn<TestData>[] = [
    { key: "name", header: "Name" },
  ];

  const defaultProps = {
    columns: mockColumns,
    data: mockData,
    getRowKey: (row: TestData) => row.id,
  };

  describe("Branch Coverage", () => {
    it("handles row click when onSelectedRowKeysChange is missing", () => {
      render(<Table {...defaultProps} isSelectable />);
      const checkboxes = screen.getAllByTestId("mock-checkbox");

      expect(() => fireEvent.click(checkboxes[1])).not.toThrow();
    });

    it("handles header click when onSelectedRowKeysChange is missing", () => {
      render(<Table {...defaultProps} isSelectable />);
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      expect(() => fireEvent.click(checkboxes[0])).not.toThrow();
    });

    it("does not render action cells if actions prop is undefined", () => {
      const { container } = render(
        <Table {...defaultProps} actions={undefined} />,
      );
      const headerCells = container.querySelectorAll("thead tr:first-child th");
      const bodyCells = container.querySelectorAll("tbody tr:first-child td");
      expect(headerCells).toHaveLength(1);
      expect(bodyCells).toHaveLength(1);
      expect(screen.queryByText("(actions)")).not.toBeInTheDocument();
    });

    it("renders default empty text when data is empty and emptyState missing", () => {
      render(<Table {...defaultProps} data={[]} />);
      expect(screen.getByText("No data available")).toBeInTheDocument();
    });

    it("renders custom empty state when provided", () => {
      render(
        <Table
          {...defaultProps}
          data={[]}
          emptyState={<div>Custom empty</div>}
        />,
      );
      expect(screen.getByText("Custom empty")).toBeInTheDocument();
    });

    it("renders raw value when column.render is missing", () => {
      render(<Table {...defaultProps} />);
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    it("renders custom content when column.render is provided", () => {
      const columnsWithRender: TableColumn<TestData>[] = [
        {
          key: "name",
          header: "Name",
          render: (row) => (
            <span data-testid="custom-render">{row.name.toUpperCase()}</span>
          ),
        },
      ];
      render(
        <Table
          columns={columnsWithRender}
          data={mockData}
          getRowKey={(row) => row.id}
        />,
      );
      const customElements = screen.getAllByTestId("custom-render");
      expect(customElements).toHaveLength(2);
      expect(customElements[0]).toHaveTextContent("JOHN DOE");
    });

    it("handles isMobileScrollable false", () => {
      const { container } = render(
        <Table {...defaultProps} isMobileScrollable={false} />,
      );
      const scrollContainer = container.querySelector(".overflow-hidden");
      expect(scrollContainer).toBeInTheDocument();
    });

    it("applies column align and width", () => {
      const columns: TableColumn<TestData>[] = [
        { key: "name", header: "Name", align: "center", width: "200px" },
      ];
      render(
        <Table columns={columns} data={mockData} getRowKey={(row) => row.id} />,
      );
      const th = screen.getByRole("columnheader", { name: /name/i });
      expect(th).toHaveStyle({ width: "200px" });
      expect(th).toHaveClass("text-center");
    });

    it("renders actions header and cells when actions provided", () => {
      const actions = vi.fn(() => <button>Edit</button>);
      render(<Table {...defaultProps} actions={actions} />);
      const headerCells = screen.getAllByRole("columnheader");
      expect(headerCells).toHaveLength(2);
      const editButtons = screen.getAllByText("Edit");
      expect(editButtons).toHaveLength(2);
    });

    it("shows loading skeleton when isLoading is true", () => {
      render(<Table {...defaultProps} isLoading />);
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(document.querySelector(".animate-pulse")).toBeInTheDocument();
      expect(document.querySelector("tbody td.border-b")).toBeInTheDocument();
    });
  });

  describe("Selection & Badge Logic", () => {
    it("renders checkboxes when isSelectable is true", () => {
      render(<Table {...defaultProps} isSelectable />);
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      expect(checkboxes).toHaveLength(3);
    });

    it("handles row selection correctly", () => {
      const onSelectedRowKeysChange = vi.fn();
      render(
        <Table
          {...defaultProps}
          isSelectable
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );
      const checkboxes = screen.getAllByTestId("mock-checkbox");

      fireEvent.click(checkboxes[1]);
      expect(onSelectedRowKeysChange).toHaveBeenCalledWith(["row_1"]);
    });

    it("unselects a row when checkbox is unchecked", () => {
      const onSelectedRowKeysChange = vi.fn();
      render(
        <Table
          {...defaultProps}
          isSelectable
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      fireEvent.click(checkboxes[0]);
      fireEvent.click(checkboxes[1]);
      expect(onSelectedRowKeysChange).toHaveBeenCalledWith(["row_2"]);
    });

    it("selects all rows when header checkbox is checked", () => {
      const onSelectedRowKeysChange = vi.fn();
      render(
        <Table
          {...defaultProps}
          isSelectable
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      fireEvent.click(checkboxes[0]);
      expect(onSelectedRowKeysChange).toHaveBeenCalledWith(["row_1", "row_2"]);
    });

    it("deselects all rows when header checkbox is unchecked and all are selected", () => {
      const onSelectedRowKeysChange = vi.fn();
      render(
        <Table
          {...defaultProps}
          isSelectable
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      fireEvent.click(checkboxes[0]);
      fireEvent.click(checkboxes[0]);
      expect(onSelectedRowKeysChange).toHaveBeenCalledWith([]);
    });

    it("keeps header checkbox unchecked when only some rows are selected", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          onSelectedRowKeysChange={vi.fn()}
        />,
      );
      const rowCheckbox = screen.getAllByTestId("mock-checkbox")[1];
      fireEvent.click(rowCheckbox);
      const headerCheckbox = screen.getAllByTestId("mock-checkbox")[0];
      expect(headerCheckbox).not.toBeChecked();
    });

    it("shows checked state when all rows are selected", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          onSelectedRowKeysChange={vi.fn()}
        />,
      );
      const headerCheckbox = screen.getAllByTestId("mock-checkbox")[0];
      fireEvent.click(headerCheckbox);
      expect(headerCheckbox).toBeChecked();
    });

    it("shows unchecked state when no rows are selected", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          onSelectedRowKeysChange={vi.fn()}
        />,
      );
      const headerCheckbox = screen.getAllByTestId("mock-checkbox")[0];
      expect(headerCheckbox).not.toBeChecked();
    });

    it("does nothing on select-all when onSelectedRowKeysChange is missing", () => {
      render(<Table {...defaultProps} isSelectable />);
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      expect(() => fireEvent.click(checkboxes[0])).not.toThrow();
    });

    it("shows correct selection count in badge", () => {
      render(<Table {...defaultProps} isSelectable />);
      const rowCheckbox = screen.getAllByTestId("mock-checkbox")[1];
      fireEvent.click(rowCheckbox);
      const badge = screen.getByTestId("mock-badge");
      expect(badge).toHaveTextContent("1/2");
    });

    it("keeps data length denominator when pagination is provided", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          pagination={{
            page: 1,
            onChange: vi.fn(),
          }}
        />,
      );
      const headerCheckbox = screen.getAllByTestId("mock-checkbox")[0];
      fireEvent.click(headerCheckbox);
      const badge = screen.getByTestId("mock-badge");
      expect(badge).toHaveTextContent("2/2");
    });

    it("uses data length for badge denominator", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          data={[...mockData, { id: "row_3", name: "Third User" }]}
        />,
      );
      const rowCheckbox = screen.getAllByTestId("mock-checkbox")[1];
      fireEvent.click(rowCheckbox);
      const badge = screen.getByTestId("mock-badge");
      expect(badge).toHaveTextContent("1/3");
    });
  });

  describe("Responsive Attributes", () => {
    it("applies snap classes for mobile scroll when isMobileScrollable true", () => {
      render(
        <Table {...defaultProps} isMobileScrollable dataTestId="test-table" />,
      );
      const root = screen.getByTestId("test-table");
      const scrollContainer = root.querySelector(".snap-x");
      expect(scrollContainer).toBeInTheDocument();
      expect(scrollContainer).toHaveClass("snap-mandatory");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to root element", () => {
      const ref = vi.fn();
      render(<Table {...defaultProps} ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe("Pagination visibility", () => {
    it("shows pagination only when data length exceeds rowsPerPage", () => {
      const { rerender } = render(<Table {...defaultProps} rowsPerPage={2} />);
      expect(screen.queryByTestId("mock-pagination")).not.toBeInTheDocument();

      rerender(
        <Table
          {...defaultProps}
          data={[...mockData, { id: "row_3", name: "Third User" }]}
          rowsPerPage={2}
        />,
      );
      expect(screen.getByTestId("mock-pagination")).toBeInTheDocument();
    });

    it("uses internal pagination state when pagination prop is not provided", () => {
      render(
        <Table
          {...defaultProps}
          data={[...mockData, { id: "row_3", name: "Third User" }]}
          rowsPerPage={2}
        />,
      );

      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
      expect(screen.queryByText("Third User")).not.toBeInTheDocument();

      fireEvent.click(screen.getByTestId("mock-pagination-next"));

      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
      expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
      expect(screen.getByText("Third User")).toBeInTheDocument();
    });

    it("delegates page changes to external pagination.onChange", () => {
      const onPaginationChange = vi.fn();

      render(
        <Table
          {...defaultProps}
          data={[...mockData, { id: "row_3", name: "Third User" }]}
          rowsPerPage={2}
          pagination={{ page: 1, onChange: onPaginationChange }}
        />,
      );

      fireEvent.click(screen.getByTestId("mock-pagination-next"));
      expect(onPaginationChange).toHaveBeenCalledWith(2);
    });
  });
});
