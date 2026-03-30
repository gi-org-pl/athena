import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 50,
    size: "regular",
    variant: "default",
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      table: { category: "Content" },
    },
    variant: {
      control: "radio",
      options: ["default", "info", "success", "warning", "error"],
      table: { category: "Style" },
    },
    size: {
      control: "radio",
      options: ["small", "regular"],
      table: { category: "Style" },
    },
    className: { table: { disable: true } },
    dataTestId: { table: { category: "Content" } },
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[300px]">
      <ProgressBar {...args} />
    </div>
  ),
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const VariantShowcase: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[300px]">
      <div className="space-y-1">
        <span className="text-xs font-mono opacity-50">Default</span>
        <ProgressBar {...args} variant="default" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-blue-500">Info</span>
        <ProgressBar {...args} variant="info" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-green-500">Success</span>
        <ProgressBar {...args} variant="success" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-orange-500">Warning</span>
        <ProgressBar {...args} variant="warning" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-red-500">Error</span>
        <ProgressBar {...args} variant="error" />
      </div>
    </div>
  ),
};

export const SizeComparison: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[300px]">
      <div className="space-y-1">
        <span className="text-xs font-mono opacity-50">Small (4px)</span>
        <ProgressBar {...args} size="small" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono opacity-50">Regular (8px)</span>
        <ProgressBar {...args} size="regular" />
      </div>
    </div>
  ),
  args: {
    value: 75,
  },
};

export const ProgressStages: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[300px]">
      <ProgressBar {...args} value={0} />
      <ProgressBar {...args} value={25} />
      <ProgressBar {...args} value={50} />
      <ProgressBar {...args} value={75} />
      <ProgressBar {...args} value={100} variant="success" />
    </div>
  ),
};

export const EdgeCases: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[300px]">
      <div className="space-y-1">
        <span className="text-xs font-mono opacity-50 text-red-400">Value: -15 (Clamped to 0)</span>
        <ProgressBar {...args} value={-15} />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono opacity-50 text-red-400">Value: 120 (Clamped to 100)</span>
        <ProgressBar {...args} value={120} />
      </div>
    </div>
  ),
};