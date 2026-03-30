import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { Section } from "./Section";

type SectionStoryArgs = {
  title: string;
  titleSecondary: string;
  childrenTitle: string;
  childrenDescription: string;
  action0: string;
  action1: string;
  actionsPosition: "right" | "bottom";
  showActions: boolean;
};

const meta = {
  title: "Section",
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 250, margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { 
      control: "text", 
      table: { category: "Header" } 
    },
    titleSecondary: { 
      control: "text", 
      table: { category: "Header" } 
    },
    childrenTitle: { 
      control: "text", 
      table: { category: "Content" } 
    },
    childrenDescription: { 
      control: "text", 
      table: { category: "Content" } 
    },
    showActions: { 
      control: "boolean", 
      table: { category: "Actions" } 
    },
    action0: { 
      control: "text", 
      table: { category: "Actions" } 
    },
    action1: { 
      control: "text", 
      table: { category: "Actions" } 
    },
    actionsPosition: {
      control: "radio",
      options: ["right", "bottom"],
      table: { category: "Actions" },
    },
  },
  args: {
    title: "Title",
    titleSecondary: "(Secondary)",
    childrenTitle: "Childeren Title:",
    childrenDescription: "Children Description",
    action0: "Action 0",
    action1: "Action 1",
    actionsPosition: "right",
    showActions: true,
  },
  tags: ["autodocs"],
  render: (args) => {
    const titleContent = (
      <div>
        {args.title} <span style={{ fontWeight: 500 }}>{args.titleSecondary}</span>
      </div>
    );

    const actionsContent = args.showActions ? (
      <>
        <Button type="ghost">{args.action0}</Button>
        <Button type="ghost">{args.action1}</Button>
      </>
    ) : undefined;

    return (
      <Section
        title={titleContent}
        actions={actionsContent}
        actionsPosition={args.actionsPosition}
      >
        <div>
          <p style={{ fontWeight: 800, fontSize: 16 }}>{args.childrenTitle}</p>
          <p>{args.childrenDescription}</p>
        </div>
      </Section>
    );
  },
} satisfies Meta<SectionStoryArgs>;

export default meta;
type Story = StoryObj<SectionStoryArgs>;

export const Default: Story = {};

export const NoActions: Story = {
  args: {
    showActions: false,
  },
};

export const RightActions: Story = {
  args: {
    actionsPosition: "right",
    showActions: true,
  },
};

export const BottomActions: Story = {
  args: {
    actionsPosition: "bottom",
    showActions: true,
  },
};
