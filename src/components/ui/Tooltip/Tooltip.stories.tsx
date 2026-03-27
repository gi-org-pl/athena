import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "Text displayed in the tooltip",
    },
    children: {
      control: "text",
      description: "Trigger element",
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    delay: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: "Hover me",
    content: "This is a default tooltip",
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
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[300px] w-full">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex items-center gap-8">
      <Tooltip content="Tooltip on the left" side="left">
        <button className="px-3 py-1 border rounded">Left</button>
      </Tooltip>
      <Tooltip content="Tooltip on the top" side="top">
        <button className="px-3 py-1 border rounded">Top</button>
      </Tooltip>
      <Tooltip content="Tooltip on the bottom" side="bottom">
        <button className="px-3 py-1 border rounded">Bottom</button>
      </Tooltip>
      <Tooltip content="Tooltip on the right" side="right">
        <button className="px-3 py-1 border rounded">Right</button>
      </Tooltip>
    </div>
  ),
};

export const InlineText: Story = {
  render: () => (
    <p className="text-sm">
      Tooltips are great because you can hide them even in the{" "}
      <Tooltip content="Additional information inside text" side="top">
        <span className="font-bold underline cursor-help text-gi-primary">
          middle of a sentence
        </span>
      </Tooltip>
      , which doesn't clutter the UI.
    </p>
  ),
};

export const LongDelay: Story = {
  args: {
    children: "Delayed tooltip",
    content: "Patience is a virtue!",
    delay: 1000,
  },
  render: (args) => (
    <Tooltip {...args}>
      <button className="px-4 py-2 border rounded-md">
        {args.children}
      </button>
    </Tooltip>
  ),
};