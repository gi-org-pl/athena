import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    helper: { control: "text" },
    errorText: { control: "text" },
    prefix: { control: "text" },
    suffix: { control: "text" },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Wpisz coś...",
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    label: "Kwota",
    placeholder: "0.00",
    prefix: "$",
    suffix: "USD",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "twoj@email.com",
    isError: true,
    errorText: "Niepoprawny format adresu email",
  },
};

export const WithHelper: Story = {
  args: {
    label: "Hasło",
    placeholder: "********",
    helper: "Hasło musi mieć minimum 8 znaków",
  },
};
