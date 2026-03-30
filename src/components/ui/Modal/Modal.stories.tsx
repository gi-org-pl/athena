import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import type { ModalProps } from "./Modal.types";

type ModalStoryArgs = ModalProps & {
  primaryAction?: string;
  secondaryAction?: string;
};

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      table: { category: "Content" },
      control: "text",
    },
    description: {
      table: { category: "Content" },
      control: "text",
    },
    children: {
      table: { category: "Content" },
      control: "text",
    },
    primaryAction: {
      table: { category: "Content" },
      control: "text",
    },
    secondaryAction: {
      table: { category: "Content" },
      control: "text",
    },
    dataTestId: {
      table: { category: "Content" },
      control: "text",
    },
    isOpen: {
      table: { category: "Status" },
      control: "boolean",
    },
    isCloseOnOverlayClick: {
      table: { category: "Status" },
      control: "boolean",
    },
    isClosable: {
      table: { category: "Status" },
      control: "boolean",
    },
    actions: { table: { disable: true } },
    onClose: { table: { disable: true } },
  },
  args: {
    isOpen: true,
    title: "Title",
    description: "Description",
    dataTestId: "",
    isCloseOnOverlayClick: true,
    isClosable: true,
    children: "",
    primaryAction: "Primary",
    secondaryAction: "Secondary",
    onClose: fn(),
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] h-[250px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<ModalStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    const handleClose = () => updateArgs({ isOpen: false });

    const renderedActions = (
      <>
        {args.secondaryAction && (
          <Button type="ghost" variant="primary" onClick={handleClose}>
            {args.secondaryAction}
          </Button>
        )}
        {args.primaryAction && (
          <Button onClick={handleClose} variant="danger">
            {args.primaryAction}
          </Button>
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
