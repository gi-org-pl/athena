import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Crown from "@/assets/icons/crown.svg";
import { Button } from "./Button";

const TYPES = ["primary", "outlined", "ghost"] as const;
const VARIANTS = ["primary", "secondary", "danger"] as const;

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
    LeftIcon: {
      options: ["None", "Crown"],
      mapping: {
        None: undefined,
        Crown: <Crown />,
      },
      control: { type: "select" },
    },
    RightIcon: {
      options: ["None", "Crown"],
      mapping: {
        None: undefined,
        Crown: <Crown />,
      },
      control: { type: "select" },
    },
    type: {
      control: "inline-radio",
      options: TYPES,
    },
    variant: {
      control: "inline-radio",
      options: VARIANTS,
    },
    size: {
      control: "inline-radio",
      options: ["regular", "small"],
    },
    asChild: { control: "boolean" },
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    children: "Button",
    LeftIcon: "None",
    RightIcon: "None",
    size: "regular",
    type: "primary",
    variant: "primary",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

export const IconButton: Story = {
  args: {
    isIconButton: true,
    LeftIcon: "Crown",
    children: undefined,
  },
};

const ButtonMatrix = (args: any) => (
  <div className="flex flex-col gap-8 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
    {VARIANTS.map((variant) => (
      <div key={variant} className="flex flex-col gap-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
          {variant} Variant
        </h3>
        <div className="flex gap-4 items-center">
          {TYPES.map((type) => (
            <div
              key={`${variant}-${type}`}
              className="flex flex-col gap-2 items-center"
            >
              <Button {...args} type={type} variant={variant} />
              <span className="text-[10px] text-gray-400 font-mono">
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

/* 3. System wide variations */
export const AllVariations: Story = {
  render: (args) => <ButtonMatrix {...args} />,
  name: "System Matrix",
};

export const IconButtonMatrix: Story = {
  render: (args) => <ButtonMatrix {...args} />,
  args: {
    isIconButton: true,
    LeftIcon: "Crown",
    children: undefined,
  },
};

export const LoadingMatrix: Story = {
  render: (args) => <ButtonMatrix {...args} />,
  args: {
    isLoading: true,
  },
};
