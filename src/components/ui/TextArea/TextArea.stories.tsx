import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextArea } from "./TextArea";
import type { TextAreaProps } from "./TextArea.types";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      table: { category: "Content" },
    },
    placeholder: {
      control: "text",
      table: { category: "Content" },
    },
    helper: {
      control: "text",
      table: { category: "Content" },
    },
    errorText: {
      control: "text",
      table: { category: "Content" },
    },
    characterLimit: {
      control: "number",
      table: { category: "Content" },
    },

    isError: {
      control: "boolean",
      table: { category: "State" },
    },
    isRequired: {
      control: "boolean",
      table: { category: "State" },
    },
    isDisabled: {
      control: "boolean",
      table: { category: "State" },
    },

    value: {
      control: "text",
      table: { category: "Data" },
    },

    dataTestId: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

const ControlledTextArea = (args: TextAreaProps) => {
  const [value, setValue] = useState(args.value ?? "");
  return <TextArea {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const WithLabel: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    value: "Some long text",
  },
};

export const Required: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    isRequired: true,
  },
};

export const NoLabel: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    placeholder: "Placeholder",
  },
};

export const WithHelperText: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helper: "Text used to help user input correct data",
  },
};

export const WithCharacterLimit: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helper: "Text used to help user input correct data",
    characterLimit: 500,
  },
};

export const WithCharacterLimitAndValue: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    value: "Some text",
    helper: "Text used to help user input correct data",
    characterLimit: 500,
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    isDisabled: true,
  },
};

export const Error: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    isError: true,
    errorText: "Error message",
  },
};

export const ErrorWithHelperText: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    isError: true,
    errorText: "Error message",
    helper: "Text used to help user input correct data",
  },
};

export const ErrorWithCharacterLimit: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    isError: true,
    errorText: "Error message",
    helper: "Text used to help user input correct data",
    characterLimit: 500,
    value: "Some text",
  },
};

export const WithDataTestId: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    dataTestId: "custom-textarea",
  },
};
