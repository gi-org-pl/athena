import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import { fn } from "storybook/test";
import { Select } from "./Select";

if (typeof window !== "undefined") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

const BaseItem =
  "flex items-center justify-between px-3 py-2 cursor-pointer rounded-md outline-none transition-colors font-['Roboto'] font-normal text-[14px] leading-[120%]";

const ItemClass = `${BaseItem} text-[#004554] hover:bg-[#F1F5F9] focus:bg-[#F1F5F9]`;

const DangerItemClass = `${BaseItem} text-[#E43235] hover:bg-[#FEF2F2] focus:bg-[#FEF2F2]`;

const DemoActions = (
  <>
    <DropdownMenu.Item className={ItemClass} onClick={fn()}>
      <span style={{ width: "52px", height: "17px", display: "block" }}>
        Action 1
      </span>
      <Pencil className="w-[25px] h-[25px] text-[#004554]" strokeWidth={1.25} />
    </DropdownMenu.Item>

    <DropdownMenu.Item className={ItemClass} onClick={fn()}>
      <span style={{ width: "52px", height: "17px", display: "block" }}>
        Action 2
      </span>
      <PlusCircle
        className="w-[25px] h-[25px] text-[#004554]"
        strokeWidth={1.25}
      />
    </DropdownMenu.Item>

    <DropdownMenu.Item className={ItemClass} onClick={fn()}>
      <span style={{ width: "52px", height: "17px", display: "block" }}>
        Action 3
      </span>
    </DropdownMenu.Item>

    <DropdownMenu.Item className={DangerItemClass} onClick={fn()}>
      <span style={{ width: "87px", height: "17px", display: "block" }}>
        Danger action
      </span>
      <Trash2 className="w-[24px] h-[24px] text-[#E43235]" strokeWidth={1.25} />
    </DropdownMenu.Item>
  </>
);

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "Text",
    children: DemoActions,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaMatch: Story = {
  args: {
    size: "regular",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
