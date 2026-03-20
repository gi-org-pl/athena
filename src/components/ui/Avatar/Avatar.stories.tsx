import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    fallback: {
      control: "radio",
      options: ["initials", "icon"],
    },
    gender: {
      control: "radio",
      options: ["male", "female"],
    },
    color: {
      control: "text",
      description: "Tailwind color token class",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    alt: "Jan Kowalski",
    size: "medium",
  },
};

export const InitialsFallback: Story = {
  args: {
    fallback: "initials",
    name: "Jan Kowalski",
    size: "medium",
  },
};

export const SingleNameFallback: Story = {
  args: {
    fallback: "initials",
    name: "Jan",
    size: "medium",
  },
};

export const IconFallbackMale: Story = {
  args: {
    fallback: "icon",
    gender: "male",
    size: "medium",
    color: "text-gi-red",
  },
};

export const IconFallbackFemale: Story = {
  args: {
    fallback: "icon",
    gender: "female",
    size: "medium",
    color: "text-gi-red",
  },
};

export const BrokenImageFallback: Story = {
  args: {
    src: "https://invalid-url.com/image.png",
    name: "Broken Image",
    fallback: "initials",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="small" name="Small Size" fallback="initials" />
      <Avatar size="medium" name="Medium Size" fallback="initials" />
      <Avatar size="large" name="Large Size" fallback="initials" />
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar fallback="icon" color="text-gi-green" />
      <Avatar fallback="icon" color="text-gi-orange" />
      <Avatar fallback="icon" color="text-gi-red" />
      <Avatar fallback="icon" color="text-gi-blue" />
    </div>
  ),
};
