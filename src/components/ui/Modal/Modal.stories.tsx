import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Delete item?",
    description: "This action cannot be undone.",
    children: "Are you sure you want to delete this item?",
  },

  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
  
    return (
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => updateArgs({ isOpen: false })}
      />
    );
  }
};