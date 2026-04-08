import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { fn } from "storybook/test";
import { ButtonSelect } from "./ButtonSelect";

const OPTIONS = [
  { id: "1", text: "Option 1" },
  { id: "2", text: "Option 2" },
  { id: "3", text: "Option 3" },
];

const meta = {
  title: "ButtonSelect",
  component: ButtonSelect,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] border border-dashed border-gray-200 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    options: {
      table: { category: "Content" },
    },
    selectedOptionId: {
      table: { category: "State" },
      control: "text",
    },
    onSelectedOptionIdChange: {
      table: { disable: true },
    },
    isFullWidth: {
      table: { category: "Layout" },
      control: "boolean",
    },
  },
  args: {
    options: OPTIONS,
    selectedOptionId: "1",
    isFullWidth: false,
    onSelectedOptionIdChange: fn(),
  },
  render: (args) => {
    const [selectedId, setSelectedId] = useState(args.selectedOptionId);

    useEffect(() => {
      setSelectedId(args.selectedOptionId);
    }, [args.selectedOptionId]);

    return (
      <ButtonSelect
        {...args}
        selectedOptionId={selectedId}
        onSelectedOptionIdChange={(id) => {
          setSelectedId(id);
          args.onSelectedOptionIdChange(id);
        }}
      />
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedOptionId: "1",
  },
};

export const FullWidth: Story = {
  name: "Full Width Layout",
  args: {
    isFullWidth: true,
  },
};
