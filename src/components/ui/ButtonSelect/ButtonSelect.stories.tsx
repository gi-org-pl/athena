import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { ButtonSelect } from "./ButtonSelect";

const meta = {
  title: "ButtonSelect",
  component: ButtonSelect,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] border border-dashed border-gray-300 p-4">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [selectedId, setSelectedId] = useState(args.selectedOptionId);

    useEffect(() => {
      setSelectedId(args.selectedOptionId);
    }, [args.selectedOptionId]);

    return (
      <ButtonSelect
        {...args}
        selectedOptionId={selectedId}
        onSelectedOptionIdChange={setSelectedId}
      />
    );
  },
  args: {
    options: [
      { id: "1", text: "Selected" },
      { id: "2", text: "Option" },
      { id: "3", text: "Other option" },
    ],
    isFullWidth: false,
    selectedOptionId: "1",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const isFullWidth: Story = {
  args: {
    isFullWidth: true,
  },
};
