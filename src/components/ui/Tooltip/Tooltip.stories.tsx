import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
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
    children: <button className="px-4 py-2 border rounded-md hover:bg-slate-50">Hover me</button>,
    content: "This is a default tooltip",
    side: "top",
  },
};

export const DifferentSides: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-20">
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
        <span className="font-bold underline cursor-help text-[#003c47]">middle of a sentence</span>
      </Tooltip>
      , which doesn't clutter the UI.
    </p>
  ),
};

export const LongDelay: Story = {
  args: {
    children: <button className="px-4 py-2 border rounded-md">Delayed tooltip</button>,
    content: "Patience is a virtue!",
    delay: 1000,
  },
};