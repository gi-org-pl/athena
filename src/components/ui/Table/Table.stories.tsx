import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Table, type TableColumn } from "./Table";

const PAGE_SIZE = 5;
const TOTAL_ITEMS = 24;

interface RowData {
  id: string;
  [key: string]: string;
}

const generateColumns = (count: number): TableColumn<RowData>[] =>
  Array.from({ length: count }, (_, i) => ({
    key: `col${i + 1}`,
    header: `Step ${i + 1}: Detailed Header`,
    width: "auto",
  }));

const generateData = (count: number): RowData[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `row_${i + 1}`,
    ...Object.fromEntries(
      Array.from({ length: 8 }, (_, j) => [
        `col${j + 1}`,
        `Data point ${i + 1}:${j + 1}`,
      ]),
    ),
  }));

const MOCK_COLUMNS = generateColumns(8);
const MOCK_DATA = generateData(TOTAL_ITEMS);

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    getRowKey: { table: { disable: true }, control: false },
    actions: { table: { disable: true }, control: false },
    data: { table: { disable: true }, control: false },
    selectedRowKeys: { table: { disable: true }, control: false },
    onSelectedRowKeysChange: { table: { disable: true }, control: false },
    pagination: { table: { disable: true }, control: false },
    emptyState: { table: { disable: true }, control: false },
    isSelectable: { control: "boolean" },
    isMobileScrollable: { control: "boolean" },
    columns: { control: "object" },
    dataTestId: { control: "text" },
  },
  args: {
    columns: MOCK_COLUMNS,
    data: [],
    getRowKey: (row: RowData) => row.id,
    isSelectable: true,
    isMobileScrollable: true,
    dataTestId: "main_table",
  },
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedData = MOCK_DATA.slice(startIndex, startIndex + PAGE_SIZE);

    return (
      <Table
        {...args}
        data={paginatedData}
        getRowKey={(row: RowData) => row.id}
        actions={() => (
          <span className="text_primary font_medium">(actions)</span>
        )}
        selectedRowKeys={selectedKeys}
        onSelectedRowKeysChange={setSelectedKeys}
        pagination={{
          page: currentPage,
          totalPages: Math.ceil(TOTAL_ITEMS / PAGE_SIZE),
          totalElements: TOTAL_ITEMS,
          onChange: setCurrentPage,
        }}
      />
    );
  },
} satisfies Meta<typeof Table<RowData>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSelectable: false,
    isMobileScrollable: false,
  },
};

export const MobileScrollExperience: Story = {
  args: {
    isMobileScrollable: true,
    isSelectable: true,
  },
};

export const LargeDatasetSelection: Story = {
  args: {
    isSelectable: true,
    isMobileScrollable: false,
  },
};
