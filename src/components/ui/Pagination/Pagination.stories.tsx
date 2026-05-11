import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "storybook/test";
import { Pagination } from "./Pagination";

const meta = {
  title: "Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    page: {
      table: { category: "Content" },
      control: { type: "number", min: 1 },
    },
    totalPages: {
      table: { category: "Content" },
      control: { type: "number", min: 1 },
    },
    siblingCount: {
      table: { category: "Content" },
      control: { type: "number", min: 0 },
    },
    isFullWidth: {
      table: { category: "Style" },
      control: "boolean",
    },
    isOnlyActions: {
      table: { category: "Style" },
      control: "boolean",
    },
    dataTestId: {
      table: { category: "Content" },
      control: "text",
    },
    onChange: {
      table: { disable: true },
    },
  },
  args: {
    page: 1,
    totalPages: 10,
    siblingCount: 1,
    isFullWidth: false,
    isOnlyActions: false,
    onChange: fn(),
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.page);
    return (
      <Pagination
        {...args}
        page={currentPage}
        onChange={(p) => {
          setCurrentPage(p);
          args.onChange(p);
        }}
      />
    );
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallRange: Story = {
  args: {
    totalPages: 5,
    dataTestId: "pagination-small",
  },
};

export const LargeRange: Story = {
  args: {
    page: 10,
    totalPages: 50,
    siblingCount: 1,
    dataTestId: "pagination-large",
  },
};

export const HighSiblingCount: Story = {
  args: {
    page: 10,
    totalPages: 20,
    siblingCount: 3,
    dataTestId: "pagination-siblings",
  },
};

export const OnlyActions: Story = {
  args: {
    page: 2,
    totalPages: 10,
    isOnlyActions: true,
    dataTestId: "pagination-actions-only",
  },
};

export const FullWidth: Story = {
  args: {
    totalPages: 10,
    isFullWidth: true,
    dataTestId: "pagination-full-width",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          maxWidth: "100%",
          border: "1px dashed #ccc",
          padding: "16px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
