import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Crown from "@/assets/icons/crown.svg";

import { Badge } from "./Badge";

const meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Badge Label",
    type: "default",
    variant: "secondary",
    size: "regular",
    isDismissible: false,
    onDismiss: fn(),
  },
  argTypes: {
    children: {
      control: "text",
      table: { category: "Content" },
    },
    dataTestId: {
      table: { category: "Content" },
    },
    LeftIcon: {
      control: "boolean",
      mapping: {
        true: <Crown />,
        false: undefined,
      },
      table: { category: "Content" },
      description: "",
    },
    type: {
      control: "radio",
      options: ["default", "info", "success", "warning", "error"],
      table: { category: "Style" },
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outlined", "ghost"],
      table: { category: "Style" },
    },
    size: {
      control: "radio",
      options: ["small", "regular", "big"],
      table: { category: "Style" },
    },
    isDismissible: {
      control: "boolean",
      table: { category: "Interactions" },
    },
    onDismiss: {
      table: { category: "Interactions", disable: true },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    LeftIcon: false,
  },
};

export const TypeShowcase: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Badge {...args} type="default">
        Default
      </Badge>
      <Badge {...args} type="info">
        Information
      </Badge>
      <Badge {...args} type="success">
        Success
      </Badge>
      <Badge {...args} type="warning">
        Warning
      </Badge>
      <Badge {...args} type="error">
        Error
      </Badge>
    </div>
  ),
  args: {
    variant: "secondary",
  },
};

export const VariantMatrix: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex gap-2">
        <Badge {...args} variant="primary">
          Primary
        </Badge>
        <Badge {...args} variant="secondary">
          Secondary
        </Badge>
        <Badge {...args} variant="outlined">
          Outlined
        </Badge>
        <Badge {...args} variant="ghost">
          Ghost
        </Badge>
      </div>
    </div>
  ),
};

export const SizeComparison: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Badge {...args} size="small">
        Small
      </Badge>
      <Badge {...args} size="regular">
        Regular
      </Badge>
      <Badge {...args} size="big">
        Big
      </Badge>
    </div>
  ),
  args: {
    type: "success",
    LeftIcon: true,
  },
};

export const IconCustomization: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge {...args} type="info">
          Default
        </Badge>
        <Badge {...args} type="info" LeftIcon={<Crown />}>
          Custom
        </Badge>
        <Badge {...args} type="info" LeftIcon="🔥">
          Emoji
        </Badge>
      </div>
    </div>
  ),
};

export const DismissibleActions: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args} type="default" size="small">
        Small
      </Badge>
      <Badge {...args} type="default" size="regular">
        Regular
      </Badge>
      <Badge {...args} type="default" size="big">
        Big
      </Badge>
    </div>
  ),
  args: {
    isDismissible: true,
  },
};
