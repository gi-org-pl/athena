import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: { table: { category: "Media" } },
    alt: { table: { category: "Media" } },
    name: { table: { category: "Identity" } },
    gender: { 
      control: "radio", 
      options: ["male", "female"],
      table: { category: "Identity" } 
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      table: { category: "Style" }
    },
    fallback: {
      control: "radio",
      options: ["initials", "icon"],
      table: { category: "Style" }
    },
    color: {
      control: "select",
      options: [
        "text-gi-light-primary",
        "text-gi-green",
        "text-gi-orange",
        "text-gi-red",
        "text-gi-blue"
      ],
      description: "Approved brand color tokens",
      table: { category: "Style" }
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "",
    fallback: "icon",
    gender: "male",
    size: "medium",
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    name: "John Smith",
  },
};

export const ColorShowcase: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Avatar {...args} color="text-gi-light-primary" />
      <Avatar {...args} color="text-gi-green" />
      <Avatar {...args} color="text-gi-orange" />
      <Avatar {...args} color="text-gi-red" />
      <Avatar {...args} color="text-gi-blue" />
    </div>
  ),
  args: {
    ...Default.args,
    fallback: "icon",
  },
};

export const SizeComparison: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      <Avatar {...args} size="small" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="large" />
    </div>
  ),
  args: {
    ...Default.args,
    name: "Size Test",
    fallback: "initials",
  },
};

export const InternationalInitials: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar {...args} name="山田 太郎" />
        <span className="text-sm text-gi-primary font-medium">Japanese: 山太</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar {...args} name="أحمد علي" />
        <span className="text-sm text-gi-primary font-medium">Arabic: أع</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar {...args} name="🦁 King" />
        <span className="text-sm text-gi-primary font-medium">Emoji: 🦁K</span>
      </div>
    </div>
  ),
  args: {
    ...Default.args,
    fallback: "initials",
    size: "large",
  },
};

export const BrokenLink: Story = {
  args: {
    ...Default.args,
    src: "https://invalid-url.com/image.png",
    name: "Broken Link",
    fallback: "initials",
  },
};