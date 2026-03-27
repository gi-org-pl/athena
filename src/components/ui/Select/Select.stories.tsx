import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogOut, Settings, User } from "lucide-react";
import AddIcon from "@/assets/icons/add.svg";
import DeleteIcon from "@/assets/icons/delete.svg";
import EditIcon from "@/assets/icons/edit.svg";
import { Button } from "../Button/Button";
import { ActionList } from "./ActionList/ActionList";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    size: "regular",
    openOn: "click",
  },
  argTypes: {
    value: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["regular", "small"],
    },
    openOn: {
      control: "select",
      options: ["click", "hover"],
    },
    trigger: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

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

export const WithValue: Story = {
  render: (args) => (
    <Select {...args}>
      <ActionList
        items={[
          { label: "Profile", icon: <User /> },
          { label: "Settings", icon: <Settings /> },
          { label: "Logout", icon: <LogOut />, variant: "danger" },
        ]}
      />
    </Select>
  ),
  args: {
    value: "Settings",
  },
};

export const WithIconValue: Story = {
  render: (args) => (
    <Select {...args}>
      <ActionList
        items={[
          { label: "User", icon: <User /> },
          { label: "Settings", icon: <Settings /> },
        ]}
      />
    </Select>
  ),
  args: {
    value: (
      <div className="flex items-center gap-2">
        <User className="size-4" />
        <span>John Doe</span>
      </div>
    ),
  },
};

export const Small: Story = {
  render: (args) => (
    <Select {...args}>
      <ActionList items={[{ label: "Option 1" }, { label: "Option 2" }]} />
    </Select>
  ),
  args: {
    size: "small",
    placeholder: "Small select",
  },
};

export const HoverTrigger: Story = {
  render: (args) => (
    <Select {...args}>
      <ActionList items={[{ label: "Option 1" }, { label: "Option 2" }]} />
    </Select>
  ),
  args: {
    openOn: "hover",
    placeholder: "Hover to open",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Select {...args}>
      <ActionList items={[{ label: "Option 1" }]} />
    </Select>
  ),
  args: {
    isDisabled: true,
    placeholder: "Disabled select",
  },
};

export const CustomChildren: Story = {
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
  args: {
    trigger: (
      <Button variant="primary" type="primary">
        Custom Button
      </Button>
    ),
    isDisabled: false,
  },
};
