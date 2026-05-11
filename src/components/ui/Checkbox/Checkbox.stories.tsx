import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      table: { category: "Content" },
      control: "text",
    },
    secondaryLabel: {
      table: { category: "Content" },
      control: "text",
    },
    checked: {
      table: { category: "State" },
      control: "boolean",
    },
    disabled: {
      table: { category: "State" },
      control: "boolean",
    },
    id: {
      table: { category: "Content" },
      control: "text",
    },
    onCheckedChange: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  args: {
    label: "Check me",
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    return (
      <Checkbox
        {...args}
        checked={isChecked}
        onCheckedChange={(val) => {
          setIsChecked(val);
          args.onCheckedChange?.(val);
        }}
      />
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-checkbox",
    label: "Label",
    secondaryLabel: "Secondary Label",
  },
};

export const StateShowcase: Story = {
  name: "State Showcase",
  render: (args) => (
    <div className="grid grid-cols-2 gap-x-12 gap-y-8 p-4">
      <div className="flex flex-col gap-6">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
          Enabled
        </p>
        <Checkbox {...args} label="Unchecked" checked={false} />
        <Checkbox {...args} label="Checked" checked={true} />
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
          Disabled
        </p>
        <Checkbox {...args} label="Unchecked" disabled checked={false} />
        <Checkbox {...args} label="Checked" disabled checked={true} />
      </div>
    </div>
  ),
};
