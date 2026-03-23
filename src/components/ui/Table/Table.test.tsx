import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Table, type TableColumn } from "./Table";

// 1. ISOLATION: Mock sub-components using the EXACT paths from your Table.tsx
// This prevents JSDOM from crashing on Radix/Lucide SVGs
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

// Mock Pagination so we don't trigger its internal rendering logic
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
    // We provide isSelectable but NO onSelectedRowKeysChange handler
    render(<Table columns={mockColumns} data={mockData} getRowKey={getRowKey} isSelectable />);
    
    const checkbox = screen.getByTestId("mock-checkbox");
    // This should not throw an error despite missing the callback
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
        />
    );

    // Target the first row of the head specifically to avoid the spacer row
    const headerRow = container.querySelector("thead tr:first-child");
    const headerCells = headerRow?.querySelectorAll("th");

    // Target the first row of the body specifically
    const bodyRow = container.querySelector("tbody tr:first-child");
    const bodyCells = bodyRow?.querySelectorAll("td");

    // Logic: 1 column provided + 0 actions = 1 cell total
    expect(headerCells).toHaveLength(1);
    expect(bodyCells).toHaveLength(1);
    
    // Explicitly verify the actions column is not present
    expect(screen.queryByText("(actions)")).not.toBeInTheDocument();
    });

  it("Branch 3 & 4: should render default empty text when data is [] and emptyState is missing (Line 135-143)", () => {
    render(<Table columns={mockColumns} data={[]} getRowKey={getRowKey} />);
    
    // Tests the logical OR fallback: emptyState || "No data available"
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("Branch 5: should render raw value when column.render is missing (Line 160)", () => {
    // We already do this in 'should render data rows based on keys', 
    // but ensuring a dedicated check exists for the ternary fallback.
    render(<Table columns={mockColumns} data={mockData} getRowKey={getRowKey} />);
    
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
describe("<Table /> Actions Header Logic", () => {
  const mockData = [{ id: "1", name: "Item 1" }];
  const mockColumns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" }
  ];
  const getRowKey = (row: any) => row.id;

  it("verifies the actions header cell branch", () => {
    // Case A: Actions exist
    const { container: withActions } = render(
      <Table 
        columns={mockColumns} 
        data={mockData} 
        getRowKey={getRowKey} 
        actions={() => <button>Edit</button>} 
      />
    );
    // Targeting the first row of the head specifically
    const headerRowWith = withActions.querySelector("thead tr");
    const thWith = headerRowWith?.querySelectorAll("th");
    // 2 columns + 1 actions header = 3
    expect(thWith).toHaveLength(3);

    // Case B: Actions are absent
    const { container: withoutActions } = render(
      <Table 
        columns={mockColumns} 
        data={mockData} 
        getRowKey={getRowKey} 
        actions={undefined} 
      />
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
    // Branch A: (row as any)[column.key] (No render function)
    { key: "name", header: "Name" },
    
    // Branch B: column.render(row) (Custom render function)
    { 
      key: "status", 
      header: "Status", 
      render: (row: any) => <span data-testid="custom-status">{row.status.toUpperCase()}</span> 
    }
  ];

  render(
    <Table 
      columns={columns} 
      data={mockData} 
      getRowKey={(row) => row.id} 
    />
  );

  // Assert Branch A: Raw data is pulled via key
  expect(screen.getByText("John")).toBeInTheDocument();

  // Assert Branch B: Custom render is executed
  const customCell = screen.getByTestId("custom-status");
  expect(customCell).toHaveTextContent("ACTIVE");
});

    it("verifies unselection logic removes the key from the selected list", () => {
        const onSelectedRowKeysChange = vi.fn();
        
        // Start the component with two rows already in the selected state
        const initialKeys = ["row_1", "row_2"];
        
        render(
            <Table 
            {...defaultProps} 
            isSelectable 
            selectedRowKeys={initialKeys} 
            onSelectedRowKeysChange={onSelectedRowKeysChange} 
            />
        );

        // Since row_1 is pre_selected: clicking it will set checked to false
        const boxes = screen.getAllByRole("checkbox");
        fireEvent.click(boxes[0]);

        // The filter logic should return an array containing only the second key
        expect(onSelectedRowKeysChange).toHaveBeenCalledWith(["row_2"]);
        });

    it("should call onSelectedRowKeysChange when a row checkbox is clicked", () => {
      const onSelectedRowKeysChange = vi.fn();
      render(
        <Table 
          {...defaultProps} 
          isSelectable 
          onSelectedRowKeysChange={onSelectedRowKeysChange} 
        />
      );

      const checkboxes = screen.getAllByTestId("mock-checkbox");
      // Simulate clicking the first row's checkbox
      fireEvent.click(checkboxes[0]);

      // Verify the ID was extracted and passed up correctly
      expect(onSelectedRowKeysChange).toHaveBeenCalledWith(["row_1"]);
    });

    it("should show correct selection count in the badge", () => {
      render(
        <Table 
          {...defaultProps} 
          isSelectable 
          selectedRowKeys={["row_1"]} 
        />
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
            totalElements: 100, // Global total
            onChange: vi.fn()
          }}
        />
      );

      const badge = screen.getByTestId("mock-badge");
      // Verification of the global denominator fix
      expect(badge).toHaveTextContent("2/100");
    });
  });

  describe("Responsive Attributes", () => {
    it("should apply snap classes for mobile scroll", () => {
      render(<Table {...defaultProps} isMobileScrollable dataTestId="test-table" />);
      
      const root = screen.getByTestId("test-table");
      const scrollContainer = root.querySelector(".snap-x");
      
      expect(scrollContainer).toBeInTheDocument();
      expect(scrollContainer).toHaveClass("snap-mandatory");
    });
  });
});