import type { Meta, StoryObj } from "@storybook/react-vite";
import AddIcon from "@/assets/icons/add-icon.svg";
import DeleteIcon from "@/assets/icons/delete-icon.svg";
import EditIcon from "@/assets/icons/edit-icon.svg";
import { Button } from "../Button/Button";
import { ActionList } from "./ActionList/ActionList";
import { Select } from "./Select";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    size: "regular",
    openOn: "click",
    placeholder: "Select an option...",
    isDisabled: false,
    children: undefined,
  },
  argTypes: {
    dataTestId: {
      table: { category: "Content" },
    },
    value: {
      control: "text",
      table: { category: "Content" },
    },
    placeholder: {
      control: "text",
      table: { category: "Content" },
    },
    size: {
      control: "inline-radio",
      options: ["regular", "small"],
      table: { category: "Style" },
    },
    isDisabled: {
      control: "boolean",
      table: { category: "Interactions" },
    },
    // Behavior
    openOn: {
      control: "inline-radio",
      options: ["click", "hover"],
      table: { category: "Interactions" },
    },
    children: {
      table: { disable: true },
    },
    trigger: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <ActionList
        items={[
          {
            label: "Action 1",
            icon: <EditIcon />,
            onClick: () => console.log("Action 1"),
          },
          {
            label: "Action 2",
            icon: <AddIcon />,
            onClick: () => console.log("Action 2"),
          },
          { label: "Action 3", onClick: () => console.log("Action 3") },
          {
            label: "Danger Action",
            icon: <DeleteIcon />,
            variant: "danger",
            onClick: () => console.log("Danger Action"),
          },
        ]}
      />
    </Select>
  ),
  args: {
    placeholder: "Text",
  },
};

export const HoverTrigger: Story = {
  args: {
    ...Default.args,
    openOn: "hover",
    placeholder: "Hover to open",
  },
  render: (args) => (
    <Select {...args}>
      <ActionList items={[{ label: "Option 1" }, { label: "Option 2" }]} />
    </Select>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
    placeholder: "Disabled select",
  },
  render: (args) => (
    <Select {...args}>
      <ActionList items={[{ label: "Option 1" }]} />
    </Select>
  ),
};

export const CustomTrigger: Story = {
  args: {
    ...Default.args,
    trigger: (
      <Button variant="primary" type="ghost">
        Custom Button
      </Button>
    ),
  },
  render: (args) => (
    <div className="w-56 min-h-[200px] flex justify-center">
      <Select {...args}>
        <ActionList
          items={[
            {
              label: "Action 1",
              icon: <EditIcon />,
              onClick: () => console.log("Action 1"),
            },
            {
              label: "Action 2",
              icon: <AddIcon />,
              onClick: () => console.log("Action 2"),
            },
            { label: "Action 3", onClick: () => console.log("Action 3") },
            {
              label: "Danger Action",
              icon: <DeleteIcon />,
              variant: "danger",
              onClick: () => console.log("Danger Action"),
            },
          ]}
        />
      </Select>
    </div>
  ),
};

export const SizeComparison: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Select {...args} size="small" placeholder="Small" />
      <Select {...args} size="regular" placeholder="Regular" />
    </div>
  ),
  args: {
    ...Default.args,
  },
};
