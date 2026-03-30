import type { Meta, StoryObj } from "@storybook/react-vite";
import Crown from "@/assets/icons/crown.svg";
import { InfoMessage } from "./InfoMessage";

const meta = {
  title: "InfoMessage",
  component: InfoMessage,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Info Message",
    variant: "default",
    LeftIcon: false,
  },
  argTypes: {
    children: {
      control: "text",
      table: {
        category: "Content",
      },
    },
    variant: {
      control: "radio",
      options: ["default", "info", "error", "warning", "success"],
      table: {
        category: "Style",
      },
    },
    LeftIcon: {
      // Use boolean control but ensure the mapping is present
      control: "boolean",
      mapping: {
        true: Crown,
        false: undefined,
      },
      table: { category: "Content" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InfoMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};
export const CustomIcon: Story = {
  args: {
    LeftIcon: true,
  },
};
