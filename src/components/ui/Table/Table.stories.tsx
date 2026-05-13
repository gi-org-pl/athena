import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Table } from "./Table";
import type { TableColumn, TableProps } from "./Table.types";

const PAGE_SIZE = 5;

interface RowData {
  id: string;
  [key: string]: string;
}

type TableStoryArgs = TableProps<RowData> & {
  showEmptyState?: boolean;
  showActions?: boolean;
};

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
const MOCK_DATA = generateData(24);

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    layout: "padded",
    controls: {
      exclude: ["pagination", "onSelectedRowKeysChange", "getRowKey"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "object", table: { category: "Content" } },
    data: { control: "object", table: { category: "Content" } },
    getRowKey: { table: { disable: true }, control: false },
    emptyState: { control: "text", table: { category: "Appearance" } },
    showEmptyState: { control: "boolean", table: { category: "Flags" } },
    showActions: { control: "boolean", table: { category: "Flags" } },
    actions: { table: { disable: true }, control: false },
    isSelectable: { control: "boolean", table: { category: "Flags" } },
    onSelectedRowKeysChange: { table: { disable: true }, control: false },
    pagination: { table: { disable: true }, control: false },
    isMobileScrollable: {
      control: "boolean",
      table: { category: "Flags" },
    },
    isLoading: {
      control: "boolean",
      table: { category: "Flags" },
    },
    loadingRowsCount: { table: { disable: true }, control: false },
    rowsPerPage: {
      control: { type: "number", min: 1, step: 1 },
      table: { category: "Appearance" },
    },
    dataTestId: { control: "text", table: { category: "Appearance" } },
  },
  args: {
    columns: MOCK_COLUMNS,
    data: MOCK_DATA.slice(0, PAGE_SIZE),
    getRowKey: (row: RowData) => row.id,
    isSelectable: true,
    isMobileScrollable: true,
    rowsPerPage: PAGE_SIZE,
    dataTestId: "main_table",
    showEmptyState: false,
    showActions: false,
  },
  render: (args: TableStoryArgs) => {
    const {
      showEmptyState = false,
      showActions = false,
      data = [],
      ...tableArgs
    } = args;
    const sourceData = showEmptyState ? [] : data;
    const actions = showActions
      ? () => <button className="text-gi-primary">Edit</button>
      : undefined;

    return (
      <Table
        {...tableArgs}
        data={sourceData}
        getRowKey={(row: RowData) => row.id}
        actions={actions}
      />
    );
  },
} satisfies Meta<TableStoryArgs>;

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
    data: MOCK_DATA,
    isSelectable: true,
    isMobileScrollable: false,
  },
};

export const WithPagination: Story = {
  args: {
    data: MOCK_DATA,
    isSelectable: false,
    isMobileScrollable: false,
    rowsPerPage: PAGE_SIZE,
  },
  render: (args: TableStoryArgs) => {
    const [page, setPage] = useState(1);
    return (
      <Table
        {...args}
        data={MOCK_DATA}
        getRowKey={(row: RowData) => row.id}
        pagination={{ page, onChange: setPage }}
      />
    );
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
    showActions: true,
    data: MOCK_DATA.slice(0, 3),
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
