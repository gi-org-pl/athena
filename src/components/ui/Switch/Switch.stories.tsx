import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Switch } from "./Switch";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: "boolean",
      table: { category: "Interactions" },
    },
    defaultChecked: {
      control: "boolean",
      table: { category: "Style" },
    },
    disabled: {
      control: "boolean",
      table: { category: "Style" },
    },
    required: {
      control: "boolean",
      table: { category: "Style" },
    },
    name: {
      control: "text",
      table: { category: "Content" },
    },
    value: {
      control: "text",
      table: { category: "Content" },
    },
    onCheckedChange: {
      table: { disable: true },
    },
    "aria-label": {
      table: { category: "Content" },
    },
  },
  tags: ["autodocs"],
  args: { onCheckedChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Default switch",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    "aria-label": "Checked switch",
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    "aria-label": "Unchecked switch",
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    checked: false,
    "aria-label": "Disabled unchecked switch",
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    "aria-label": "Disabled checked switch",
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    "aria-label": "Default checked switch",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="switch-with-label" />
      <label
        htmlFor="switch-with-label"
        className="text-sm font-medium text-gi-primary cursor-pointer"
      >
        Enable notifications
      </label>
    </div>
  ),
  args: {
    "aria-label": "Switch with label",
  },
};

export const WithLabelChecked: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="switch-with-label-checked" />
      <label
        htmlFor="switch-with-label-checked"
        className="text-sm font-medium text-gi-primary cursor-pointer"
      >
        Enable notifications
      </label>
    </div>
  ),
  args: {
    checked: true,
    "aria-label": "Switch with label checked",
  },
};

export const WithLabelDisabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="switch-with-label-disabled" />
      <label
        htmlFor="switch-with-label-disabled"
        className="text-sm font-medium text-gi-primary opacity-50 cursor-not-allowed"
      >
        Enable notifications
      </label>
    </div>
  ),
  args: {
    disabled: true,
    "aria-label": "Switch with label disabled",
  },
};

export const Required: Story = {
  args: {
    required: true,
    "aria-label": "Required switch",
  },
};

export const WithFormAttributes: Story = {
  args: {
    name: "notifications",
    value: "on",
    "aria-label": "Form switch",
  },
};

export const CustomClassName: Story = {
  args: {
    className: "scale-125",
    "aria-label": "Custom styled switch",
  },
};
