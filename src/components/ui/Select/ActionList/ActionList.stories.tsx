import type { Meta, StoryObj } from "@storybook/react-vite";
import DeleteIcon from "@/assets/icons/delete-icon.svg";
import EditIcon from "@/assets/icons/edit-icon.svg";
import { ActionList } from "./ActionList";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ActionList.methods";

const meta = {
  title: "ActionList",
  component: ActionList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The content of a dropdown menu: a list of actions or, as soon as any item passes `isSelected`, a choice of one value. `ActionList` lives inside a menu, so every story opens one around it.",
      },
      story: { inline: false, height: "240px" },
    },
  },
  decorators: [
    (Story) => (
      <DropdownMenu open modal={false}>
        <DropdownMenuTrigger
          aria-label="Anchor of the list"
          className="block h-0 w-40"
        />
        <DropdownMenuContent align="start">
          <Story />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  ],
  argTypes: {
    items: {
      table: { category: "Content" },
    },
    className: {
      table: { category: "Style" },
    },
  },
} satisfies Meta<typeof ActionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Actions: Story = {
  args: {
    items: [
      { label: "Edit", icon: <EditIcon /> },
      { label: "Duplicate" },
      { label: "Delete", icon: <DeleteIcon />, variant: "danger" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "No item passes `isSelected`: every row is a plain `menuitem` and the list behaves as it always did.",
      },
    },
  },
};

export const WithSelectedItem: Story = {
  args: {
    items: [
      { label: "Under 18", isSelected: false },
      { label: "18-24", isSelected: true },
      { label: "25-34", isSelected: false },
      { label: "35-44", isSelected: false },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Every item says whether it is the current value, so the rows are `menuitemradio`. The selected one shows a check mark in the icon slot, is exposed as checked and takes focus when the list opens. Of several selected items the first one counts.",
      },
    },
  },
};

export const NothingSelected: Story = {
  args: {
    items: [
      { label: "Under 18", isSelected: false },
      { label: "18-24", isSelected: false },
      { label: "25-34", isSelected: false },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A choice with no value yet: the rows are `menuitemradio`, none is checked, and focus stays where the menu puts it.",
      },
    },
  },
};

export const SelectedItemWithIcon: Story = {
  args: {
    items: [
      { label: "Edit", icon: <EditIcon />, isSelected: true },
      { label: "Delete", icon: <DeleteIcon />, isSelected: false },
      { label: "Archive", variant: "danger", isSelected: false },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "The icon slot holds one thing. While an item is selected the check mark takes the place of its `icon`; the icon is back as soon as the item is not selected. The state is what the user needs to read, the icon only decorates the row.",
      },
    },
  },
};
