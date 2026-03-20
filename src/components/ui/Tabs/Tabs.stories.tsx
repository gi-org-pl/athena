import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Tabs } from "./Tabs";

const meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[1000px] mx-auto border border-dashed border-slate-300 p-8 bg-white rounded-xl">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);

    return (
      <Tabs
        {...args}
        value={currentValue}
        onValueChange={(val) => {
          setCurrentValue(val);
          args.onValueChange?.(val);
        }}
      />
    );
  },
  args: {
    items: [
      { value: "tab1", label: "Selected tab" },
      { value: "tab2", label: "Other tab" },
      { value: "tab3", label: "Some other tab" },
    ],
    value: "tab1",
    isFullWidth: false,
    size: "regular",
    onValueChange: () => {},
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["regular", "large"],
    },
    isFullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    size: "regular",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const FullWidth: Story = {
  args: {
    isFullWidth: true,
  },
};
