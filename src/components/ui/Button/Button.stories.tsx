import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Crown from "@/assets/icons/crown.svg";
import { Button } from "./Button";

const HTMLTYPES = ["default", "submit", "reset"] as const;
const TYPES = ["primary", "outlined", "ghost"] as const;
const VARIANTS = ["primary", "secondary", "danger"] as const;
const SIZES = ["small", "regular"] as const;

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      table: { category: "Content" },
      control: "text",
    },
    LeftIcon: {
      table: { category: "Content" },
      control: "boolean",
      mapping: {
        true: <Crown />,
        false: undefined,
      },
    },
    RightIcon: {
      table: { category: "Content" },
      control: "boolean",
      mapping: {
        true: <Crown />,
        false: undefined,
      },
    },
    type: {
      table: { category: "Style" },
      control: "radio",
      options: TYPES,
    },
    variant: {
      table: { category: "Style" },
      control: "radio",
      options: VARIANTS,
    },
    size: {
      table: { category: "Style" },
      control: "radio",
    },
    isLoading: {
      table: { category: "Interactions" },
      control: "boolean",
    },
    disabled: {
      table: { category: "Interactions" },
      control: "boolean",
    },
    isIconButton: {
      table: { category: "Interactions" },
      control: "boolean",
    },
    asChild: {
      table: { category: "Interactions" },
      control: "boolean",
    },
    htmlType: {
      table: { category: "Interactions" },
      control: "radio",
      options: HTMLTYPES,
    },
    onClick: {
      table: { disable: true },
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
    LeftIcon: false as any,
    RightIcon: false as any,
    size: "regular",
    type: "primary",
    variant: "primary",
    isLoading: false,
    disabled: false,
    isIconButton: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const TypeShowcase: Story = {
  name: "Type Showcase",
  render: (args) => (
    <div className="flex gap-4 items-center">
      {TYPES.map((type) => (
        <Button {...args} key={type} type={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const VariantMatrix: Story = {
  name: "Variant Matrix",
  render: (args) => (
    <div className="flex gap-4 items-center">
      {VARIANTS.map((variant) => (
        <Button {...args} key={variant} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const SizeComparison: Story = {
  name: "Size Comparison",
  render: (args) => (
    <div className="flex gap-4 items-center">
      {SIZES.map((size) => (
        <Button {...args} key={size} size={size}>
          {size.charAt(0).toUpperCase() + size.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const IconCustomization: Story = {
  name: "Icon Customization",
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} LeftIcon={<Crown />}>
        Left Icon
      </Button>
      <Button {...args} RightIcon={<Crown />}>
        Right Icon
      </Button>
      <Button
        {...args}
        isIconButton
        LeftIcon={<Crown />}
        children={undefined}
      />
    </div>
  ),
};

export const LoadingState: Story = {
  name: "Loading State",
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} isLoading>
        Processing
      </Button>
      <Button {...args} isLoading type="outlined">
        Loading
      </Button>
      <Button {...args} isLoading variant="danger">
        Deleting
      </Button>
    </div>
  ),
};
