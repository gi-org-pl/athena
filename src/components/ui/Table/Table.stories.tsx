import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Table } from "./Table";

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    isSelectable: { control: "boolean" },
    isMobileScrollable: { control: "boolean" },
  },
  tags: ["autodocs"],
  render: (args) => {
    // Stan dla zaznaczonych wierszy
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    // STAN DLA PAGINACJI - to sprawia, że przyciski działają
    const [currentPage, setCurrentPage] = useState(args.pagination?.page || 1);

    return (
      <Table
        {...args}
        selectedRowKeys={selectedKeys}
        onSelectedRowKeysChange={(keys) => setSelectedKeys(keys)}
        pagination={
          args.pagination
            ? {
                ...args.pagination,
                page: currentPage,
                onChange: (newPage) => {
                  setCurrentPage(newPage); // Aktualizacja stanu w Storybooku
                  args.pagination?.onChange?.(newPage); // Logowanie w konsoli/Actions
                },
              }
            : undefined
        }
      />
    );
  },
  args: {
    getRowKey: (row: any) => row.id,
    columns: [
      { key: "c1", header: "Column" },
      { key: "c2", header: "Column" },
      { key: "c3", header: "Column" },
      { key: "c4", header: "Column" },
      { key: "c5", header: "Column" },
      { key: "c6", header: "Column" },
      { key: "c7", header: "Column" },
      { key: "c8", header: "Column" },
      { key: "c9", header: "Column" },
      { key: "c10", header: "Column" },
    ],
    data: [
      { id: "1", c1: "Row", c2: "Row", c3: "Row", c4: "Row", c5: "Row", c6: "Row", c7: "Row", c8: "Row", c9: "Row", c10: "Row" },
      { id: "2", c1: "Row", c2: "Row", c3: "Row", c4: "Row", c5: "Row", c6: "Row", c7: "Row", c8: "Row", c9: "Row", c10: "Row" },
      { id: "3", c1: "Row", c2: "Row", c3: "Row", c4: "Row", c5: "Row", c6: "Row", c7: "Row", c8: "Row", c9: "Row", c10: "Row" },
      { id: "4", c1: "Row", c2: "Row", c3: "Row", c4: "Row", c5: "Row", c6: "Row", c7: "Row", c8: "Row", c9: "Row", c10: "Row" },
      { id: "5", c1: "Row", c2: "Row", c3: "Row", c4: "Row", c5: "Row", c6: "Row", c7: "Row", c8: "Row", c9: "Row", c10: "Row" },
    ],
    actions: () => (
      <span className="text-primary font-bold">
        (actions)
      </span>
    ),
    pagination: {
      page: 1,
      totalPages: 5,
      onChange: (p) => console.log("Page changed to:", p),
    },
  },
} satisfies Meta<typeof Table<any>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSelectable: false,
  },
};

export const WithSelect: Story = {
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>(["1", "2", "3"]);
    const [currentPage, setCurrentPage] = useState(args.pagination?.page || 1);

    return (
      <Table
        {...args}
        selectedRowKeys={selectedKeys}
        onSelectedRowKeysChange={setSelectedKeys}
        pagination={
          args.pagination
            ? {
                ...args.pagination,
                page: currentPage,
                onChange: (newPage) => {
                  setCurrentPage(newPage);
                  args.pagination?.onChange?.(newPage);
                },
              }
            : undefined
        }
      />
    );
  },
  args: {
    isSelectable: true,
  },
};