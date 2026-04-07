import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Table } from "./Table";
import type { TableColumn } from "./Table.types";

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
    controls: {
      exclude: [
        "pagination",
        "allRowKeys",
        "onSelectedRowKeysChange",
        "getRowKey",
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "object", table: { category: "Content" } },
    data: { control: "object", table: { category: "Content" } },
    getRowKey: { table: { disable: true }, control: false },
    emptyState: { control: "text", table: { category: "Content" } },
    actions: { control: false, table: { category: "Content" } },
    isSelectable: { control: "boolean", table: { category: "Selection" } },
    selectedRowKeys: { control: "object", table: { category: "Selection" } },
    onSelectedRowKeysChange: { table: { disable: true }, control: false },
    pagination: { table: { disable: true }, control: false },
    isMobileScrollable: {
      control: "boolean",
      table: { category: "Appearance" },
    },
    isLoading: {
      control: "boolean",
      table: { category: "Appearance" },
    },
    dataTestId: { control: "text", table: { category: "Appearance" } },
    allRowKeys: { table: { disable: true }, control: false },
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
    const allRowKeys = MOCK_DATA.map((row) => row.id);

    return (
      <Table
        {...args}
        data={paginatedData}
        getRowKey={(row: RowData) => row.id}
        selectedRowKeys={selectedKeys}
        onSelectedRowKeysChange={setSelectedKeys}
        allRowKeys={allRowKeys}
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

export const EmptyStateCustom: Story = {
  args: {
    data: [],
    emptyState: "No records found",
    isSelectable: false,
  },
};

export const WithActions: Story = {
  args: {
    actions: () => <button className="text-gi-primary">Edit</button>,
  },
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    return (
      <Table
        {...args}
        data={MOCK_DATA.slice(0, 3)}
        selectedRowKeys={selectedKeys}
        onSelectedRowKeysChange={setSelectedKeys}
      />
    );
  },
};

export const ColumnAlignment: Story = {
  args: {
    columns: [
      { key: "col1", header: "Left", align: "left" },
      { key: "col2", header: "Center", align: "center" },
      { key: "col3", header: "Right", align: "right" },
    ],
    data: [{ id: "1", col1: "Left", col2: "Center", col3: "Right" }],
    isSelectable: false,
  },
};

export const FixedWidthColumns: Story = {
  args: {
    columns: [
      { key: "col1", header: "Narrow", width: "100px" },
      { key: "col2", header: "Wide", width: "300px" },
    ],
    data: [{ id: "1", col1: "Short", col2: "Long content that might wrap" }],
    isSelectable: false,
  },
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
    isSelectable: true,
  },
};
