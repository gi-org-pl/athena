import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    isError: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email Address",
    placeholder: "enter@your.email",
    helperText: "We will never share your email.",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    defaultValue: "123",
    isError: true,
    errorText: "Password is too short.",
  },
};

export const CollisionTest: Story = {
  args: {
    label: "Overlap Prevention Test",
    defaultValue: "This is a very long text that must stay away from the suffix label",
    suffix: "Label",
    className: "max-w-[300px]",
  },
};

export const Decorators: Story = {
  args: {
    label: "Search",
    placeholder: "Search components...",
    prefix: "🔍",
    suffix: "Ctrl+K",
  },
};