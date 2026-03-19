import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Crown from "@/assets/icons/crown.svg";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    isIconButton: { control: "boolean" },
    LeftIcon: { control: false },
    RightIcon: { control: false },
    type: {
      control: "radio",
      options: ["primary", "outlined", "ghost"],
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "radio",
      options: ["regular", "small"],
    },
    asChild: { control: "boolean" },
  },
  tags: ["autodocs"],
  args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Custom render function to generate the matrix layout
const renderMatrix = (variant: "primary" | "secondary" | "danger") => (args: any) => (
  <div className="flex flex-col gap-6 p-4 bg-white dark:bg-gray-900 rounded-lg">
    <div className="flex gap-4 items-center">
      <Button {...args} type="primary" variant={variant} />
      <Button {...args} type="outlined" variant={variant} />
      <Button {...args} type="ghost" variant={variant} />
    </div>
    <div className="flex gap-4 items-center">
      <Button {...args} type="primary" variant={variant} disabled />
      <Button {...args} type="outlined" variant={variant} disabled />
      <Button {...args} type="ghost" variant={variant} disabled />
    </div>
  </div>
);

export const PrimaryTheme: Story = {
  render: renderMatrix("primary"),
  args: {
    children: "Primary",
  },
};

export const SecondaryTheme: Story = {
  render: renderMatrix("secondary"),
  args: {
    children: "Secondary",
  },
};

export const DangerTheme: Story = {
  render: renderMatrix("danger"),
  args: {
    children: "Danger",
  },
};

export const WithLeftIcon: Story = {
  args: {
    type: "primary",
    variant: "primary",
    children: "Primary",
    LeftIcon: <Crown />,
  },
};

export const WithRightIcon: Story = {
  args: {
    type: "primary",
    variant: "primary",
    children: "Primary",
    RightIcon: <Crown />,
  },
};

export const LoadingState: Story = {
  args: {
    type: "primary",
    variant: "primary",
    isLoading: true,
  },
};

export const SmallSize: Story = {
  args: {
    size: "small",
    type: "primary",
    variant: "primary",
  },
};

export const IconButton: Story = {
  args: {
    type: "primary",
    variant: "primary",
    isIconButton: true,
    LeftIcon: <Crown />,
    children: undefined,
  },
};