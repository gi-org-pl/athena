import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";
import { RadioGroupItem } from "./RadioGroupItem/RadioGroupItem";

const meta = {
  title: "Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      table: { category: "Content" },
    },
    disabled: {
      control: "boolean",
      table: { category: "Style" },
    },
    required: {
      control: "boolean",
      table: { category: "Style" },
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      table: { category: "Style" },
    },
    dir: {
      control: "radio",
      options: ["ltr", "rtl"],
      table: { category: "Style" },
    },
    loop: {
      control: "boolean",
      table: { disable: true },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option-one",
    orientation: "vertical",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <label
          htmlFor="option-one"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option One
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <label
          htmlFor="option-two"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option Two
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <label
          htmlFor="option-three"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option Three
        </label>
      </div>
    </RadioGroup>
  ),
};
