import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Hover me",
    content: "Tooltip",
  },
  argTypes: {
    content: {
      control: "text",
      description: "Text displayed in the tooltip",
      table: { category: "Content" },
    },
    children: {
      control: "text",
      description: "Trigger element",
      table: { category: "Content" },
    },
    dataTestId: {
      control: "text",
      table: { category: "Content" },
    },
    side: {
      control: "radio",
      options: ["top", "right", "bottom", "left"],
      table: { category: "Style" },
    },
    align: {
      control: "radio",
      options: ["start", "center", "end"],
      table: { category: "Style" },
    },
    delay: {
      control: "number",
      table: { category: "State" },
    },
    open: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    side: "top",
  },
  render: (args) => (
    <Tooltip {...args}>
      <button className="px-4 py-2 border rounded-md hover:bg-slate-50">
        {args.children}
      </button>
    </Tooltip>
  ),
};

export const DifferentSides: Story = {
  args: {
    ...meta.args,
  },
  render: () => (
    <div className="flex items-center gap-8">
      <Tooltip content="Tooltip" side="left">
        <button className="px-3 py-1 border rounded">Left</button>
      </Tooltip>
      <Tooltip content="Tooltip" side="top">
        <button className="px-3 py-1 border rounded">Top</button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom">
        <button className="px-3 py-1 border rounded">Bottom</button>
      </Tooltip>
      <Tooltip content="Tooltip" side="right">
        <button className="px-3 py-1 border rounded">Right</button>
      </Tooltip>
    </div>
  ),
};

export const DifferentAlignments: Story = {
  args: {
    ...meta.args,
  },
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <Tooltip content="Tooltip" side="bottom" align="start">
        <button className="px-3 py-1 border rounded w-32">Align Start</button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom" align="center">
        <button className="px-3 py-1 border rounded w-32">Align Center</button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom" align="end">
        <button className="px-3 py-1 border rounded w-32">Align End</button>
      </Tooltip>
    </div>
  ),
};

export const InlineText: Story = {
  args: {
    ...meta.args,
  },
  render: () => (
    <p className="text-sm">
      Text with{" "}
      <Tooltip content="Tooltip" side="top">
        <span className="font-bold underline cursor-help text-gi-primary">
          inline tooltip
        </span>
      </Tooltip>{" "}
      inside a sentence.
    </p>
  ),
};

export const LongDelay: Story = {
  args: {
    children: "Delayed tooltip",
    content: "Tooltip",
    delay: 1000,
  },
  render: (args) => (
    <Tooltip {...args}>
      <button className="px-4 py-2 border rounded-md">{args.children}</button>
    </Tooltip>
  ),
};
