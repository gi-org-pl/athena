import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    isError: { control: "boolean" },
    isDisabled: { control: "boolean" },
    isRequired: { control: "boolean" },
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

export const LongTextCollisionTest: Story = {
  args: {
    label: "Overlap Prevention Test",
    defaultValue: "This is a very long text that must scroll inside the input and never mash with the suffix.",
    prefix: "Prefix",
    suffix: "Suffix",
    className: "max-w-[400px]",
  },
};

export const IconsAndDecorators: Story = {
  args: {
    label: "Search",
    placeholder: "Search components...",
    LeftIcon: "🔍",
    suffix: "Ctrl+K",
  },
};