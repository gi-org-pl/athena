import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Table, type TableColumn } from "./Table";

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

  describe("<Table /> Branch Coverage", () => {
    const mockData = [{ id: "1", name: "Test" }];
    const mockColumns = [{ key: "name", header: "Name" }];
    const getRowKey = (row: any) => row.id;

    it("Branch 1: should return early if onSelectedRowKeysChange is missing (Line 92)", () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          getRowKey={getRowKey}
          isSelectable
        />,
      );

      const checkbox = screen.getByTestId("mock-checkbox");
      expect(() => fireEvent.click(checkbox)).not.toThrow();
    });

    it("Branch 2 & 6: should not render action cells if actions prop is undefined (Line 130, 174)", () => {
      const mockData = [{ id: "1", name: "Test Item" }];
      const mockColumns = [{ key: "name", header: "Name" }];

      const { container } = render(
        <Table
          columns={mockColumns}
          data={mockData}
          getRowKey={(row) => row.id}
          actions={undefined}
        />,
      );

      const headerRow = container.querySelector("thead tr:first-child");
      const headerCells = headerRow?.querySelectorAll("th");

      const bodyRow = container.querySelector("tbody tr:first-child");
      const bodyCells = bodyRow?.querySelectorAll("td");

      expect(headerCells).toHaveLength(1);
      expect(bodyCells).toHaveLength(1);

      expect(screen.queryByText("(actions)")).not.toBeInTheDocument();
    });

    it("Branch 3 & 4: should render default empty text when data is [] and emptyState is missing (Line 135-143)", () => {
      render(<Table columns={mockColumns} data={[]} getRowKey={getRowKey} />);

      expect(screen.getByText("No data available")).toBeInTheDocument();
    });

    it("Branch 5: should render raw value when column.render is missing (Line 160)", () => {
      render(
        <Table columns={mockColumns} data={mockData} getRowKey={getRowKey} />,
      );

      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });
  describe("<Table /> Actions Header Logic", () => {
    const mockData = [{ id: "1", name: "Item 1" }];
    const mockColumns = [
      { key: "id", header: "ID" },
      { key: "name", header: "Name" },
    ];
    const getRowKey = (row: any) => row.id;

    it("verifies the actions header cell branch", () => {
      const { container: withActions } = render(
        <Table
          columns={mockColumns}
          data={mockData}
          getRowKey={getRowKey}
          actions={() => <button>Edit</button>}
        />,
      );
      const headerRowWith = withActions.querySelector("thead tr");
      const thWith = headerRowWith?.querySelectorAll("th");
      expect(thWith).toHaveLength(3);

      const { container: withoutActions } = render(
        <Table
          columns={mockColumns}
          data={mockData}
          getRowKey={getRowKey}
          actions={undefined}
        />,
      );
      const headerRowWithout = withoutActions.querySelector("thead tr");
      const thWithout = headerRowWithout?.querySelectorAll("th");
      // 2 columns + 0 actions header = 2
      expect(thWithout).toHaveLength(2);
    });
  });

  describe("Selection & Badge Logic", () => {
    it("should render checkboxes when isSelectable is true", () => {
      render(<Table {...defaultProps} isSelectable />);

      const checkboxes = screen.getAllByTestId("mock-checkbox");
      expect(checkboxes).toHaveLength(2);
    });

    it("verifies both branches of the cell rendering logic", () => {
      const mockData = [{ id: "1", name: "John", status: "active" }];

      const columns = [
        { key: "name", header: "Name" },
        {
          key: "status",
          header: "Status",
          render: (row: any) => (
            <span data-testid="custom-status">{row.status.toUpperCase()}</span>
          ),
        },
      ];

      render(
        <Table columns={columns} data={mockData} getRowKey={(row) => row.id} />,
      );

      expect(screen.getByText("John")).toBeInTheDocument();

      const customCell = screen.getByTestId("custom-status");
      expect(customCell).toHaveTextContent("ACTIVE");
    });

    it("verifies unselection logic removes the key from the selected list", () => {
      const onSelectedRowKeysChange = vi.fn();

      const initialKeys = ["row_1", "row_2"];

      render(
        <Table
          {...defaultProps}
          isSelectable
          selectedRowKeys={initialKeys}
          onSelectedRowKeysChange={onSelectedRowKeysChange}
        />,
      );

      const boxes = screen.getAllByRole("checkbox");
      fireEvent.click(boxes[0]);

      expect(onSelectedRowKeysChange).toHaveBeenCalledWith(["row_2"]);
    });

    it("should call onSelectedRowKeysChange when a row checkbox is clicked", () => {
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

      expect(onSelectedRowKeysChange).toHaveBeenCalledWith(["row_1"]);
    });

    it("should show correct selection count in the badge", () => {
      render(
        <Table {...defaultProps} isSelectable selectedRowKeys={["row_1"]} />,
      );

      const badge = screen.getByTestId("mock-badge");
      expect(badge).toHaveTextContent("1/2");
    });

    it("should respect totalElements for global selection badge", () => {
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
    it("should apply snap classes for mobile scroll", () => {
      render(
        <Table {...defaultProps} isMobileScrollable dataTestId="test-table" />,
      );

      const root = screen.getByTestId("test-table");
      const scrollContainer = root.querySelector(".snap-x");

      expect(scrollContainer).toBeInTheDocument();
      expect(scrollContainer).toHaveClass("snap-mandatory");
    });
  });
});
