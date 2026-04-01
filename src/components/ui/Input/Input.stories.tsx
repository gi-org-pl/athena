import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import CrownIcon from "@/assets/icons/crown.svg";

import { Input } from "./Input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helper: "Helper text",
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    label: { control: "text", table: { category: "CONTENT" } },
    placeholder: { control: "text", table: { category: "CONTENT" } },
    defaultValue: { control: "text", table: { category: "CONTENT" } },
    prefix: { control: "text", table: { category: "CONTENT" } },
    suffix: { control: "text", table: { category: "CONTENT" } },
    value: { control: "text", table: { category: "CONTENT" } },

    isError: { control: "boolean", table: { category: "STATE" } },
    isRequired: { control: "boolean", table: { category: "STATE" } },
    isDisabled: { control: "boolean", table: { category: "STATE" } },

    LeftIcon: {
      control: "boolean",
      mapping: { true: <CrownIcon />, false: undefined },
      table: { category: "STYLE" },
    },
    RightIcon: {
      control: "boolean",
      mapping: { true: <CrownIcon />, false: undefined },
      table: { category: "STYLE" },
    },
    helper: { control: "text", table: { category: "STYLE" } },
    errorText: { control: "text", table: { category: "STYLE" } },

    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    dataTestId: { table: { disable: true } },
    id: { table: { disable: true } },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { isRequired: true },
};

export const ErrorState: Story = {
  args: { isError: true, errorText: "Error text" },
};

export const Disabled: Story = {
  args: { isDisabled: true, value: "Disabled value" },
};

export const WithIcons: Story = {
  args: {
    LeftIcon: true,
    RightIcon: true,
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    prefix: "$",
    suffix: "USD",
    defaultValue: "100",
  },
};