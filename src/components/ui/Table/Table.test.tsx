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
  Pagination: () => <nav data-testid="mock-pagination" />,
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
    it("returns early if onSelectedRowKeysChange is missing (row click)", () => {
      render(<Table {...defaultProps} isSelectable />);
      const checkboxes = screen.getAllByTestId("mock-checkbox");

      expect(() => fireEvent.click(checkboxes[1])).not.toThrow();
    });

    it("returns early if onSelectedRowKeysChange is missing (header click)", () => {
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
          selectedRowKeys={["row_1", "row_2"]}
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );
      const checkboxes = screen.getAllByTestId("mock-checkbox");
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

    it("selects all available rows when allRowKeys is provided", () => {
      const onSelectedRowKeysChange = vi.fn();
      render(
        <Table
          {...defaultProps}
          isSelectable
          allRowKeys={["row_1", "row_2", "row_3", "row_4"]}
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      fireEvent.click(checkboxes[0]);
      expect(onSelectedRowKeysChange).toHaveBeenCalledWith([
        "row_1",
        "row_2",
        "row_3",
        "row_4",
      ]);
    });

    it("deselects all rows when header checkbox is unchecked and all are selected", () => {
      const onSelectedRowKeysChange = vi.fn();
      render(
        <Table
          {...defaultProps}
          isSelectable
          selectedRowKeys={["row_1", "row_2"]}
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );
      const checkboxes = screen.getAllByTestId("mock-checkbox");
      fireEvent.click(checkboxes[0]);
      expect(onSelectedRowKeysChange).toHaveBeenCalledWith([]);
    });

    it("shows indeterminate state when some rows are selected", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          selectedRowKeys={["row_1"]}
          onSelectedRowKeysChange={vi.fn()}
        />,
      );
      const headerCheckbox = screen.getAllByTestId("mock-checkbox")[0];
      expect(headerCheckbox).not.toBeChecked();
    });

    it("shows checked state when all rows are selected", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          selectedRowKeys={["row_1", "row_2"]}
          onSelectedRowKeysChange={vi.fn()}
        />,
      );
      const headerCheckbox = screen.getAllByTestId("mock-checkbox")[0];
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
      render(
        <Table {...defaultProps} isSelectable selectedRowKeys={["row_1"]} />,
      );
      const badge = screen.getByTestId("mock-badge");
      expect(badge).toHaveTextContent("1/2");
    });

    it("respects totalElements for badge when pagination provided", () => {
      render(
        <Table
          {...defaultProps}
          isSelectable
          selectedRowKeys={["row_1", "row_2"]}
          pagination={{
            page: 1,
            totalPages: 5,
            totalElements: 100,
            onChange: vi.fn(),
          }}
        />,
      );
      const badge = screen.getByTestId("mock-badge");
      expect(badge).toHaveTextContent("2/100");
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
});
