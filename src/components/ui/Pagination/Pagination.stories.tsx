import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    onChange: { action: "pageChanged" },
    page: { control: { type: "number", min: 1 } },
    totalPages: { control: { type: "number", min: 1 } },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
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
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const SmallRange: Story = {
  args: {
    page: 1,
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
    page: 1,
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
