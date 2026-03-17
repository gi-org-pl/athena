import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";
import { Button } from "../Button/Button";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div className="w-[512px] h-[512px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: { control: "boolean" },

    title: { control: "text" },
    description: { control: "text" },
    children: { control: "text" },

    actions: {
      control: false,
    },
    primaryAction: {
      control: "text",
      description: "Text for the primary action button",
    },
    secondaryAction: {
      control: "text",
      description: "Text for the secondary action button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal & { primaryAction?: string; secondaryAction?: string }>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Are you sure absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    children: "Are you sure you want to delete this item?",
    primaryAction: "Confirm",
    secondaryAction: "Cancel",
  },

  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    const handleClose = () => updateArgs({ isOpen: false });

    const renderedActions = (
      <>
        {args.secondaryAction && (
          <Button variant="secondary" onClick={handleClose}>
            {args.secondaryAction}
          </Button>
        )}
        {args.primaryAction && (
          <Button onClick={handleClose}>{args.primaryAction}</Button>
        )}
      </>
    );

    return (
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        actions={renderedActions}
      />
    );
  },
};
