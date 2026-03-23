import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { Section } from "./Section";

/** * Define the specific schema for this story
 */
type SectionStoryArgs = {
  title: string;
  titleSecondary: string;
  description: string;
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
      <div style={{ width: 600, height: 200, margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    titleSecondary: { control: "text" },
    description: { control: "text" },
    childrenTitle: { control: "text" },
    childrenDescription: { control: "text" },
    action0: { control: "text" },
    action1: { control: "text" },
    actionsPosition: {
      control: "select",
      options: ["right", "bottom"],
    },
    showActions: { control: "boolean" },
  },
  args: {
    title: "News",
    titleSecondary: "(3)",
    description: "Main section description",
    childrenTitle: "First news:",
    childrenDescription: "It is great to be a part of the GI foundation!",
    action0: "Action 0",
    action1: "Action 1",
    actionsPosition: "right",
    showActions: true,
  },
  tags: ["autodocs"],
  render: (args) => {
    const titleContent = (
      <div>
        {args.title}{" "}
        <span style={{ fontWeight: 500 }}>{args.titleSecondary}</span>
      </div>
    );

    const actionsContent = args.showActions ? (
      <>
        <Button type="ghost">{args.action0}</Button>
        <Button type="ghost">{args.action1}</Button>
      </>
    ) : undefined;

    const childrenContent = (
      <div>
        <p style={{ fontWeight: 800, fontSize: 16 }}>{args.childrenTitle}</p>
        <p>{args.childrenDescription}</p>
      </div>
    );

    return (
      <Section
        title={titleContent}
        actions={actionsContent}
        actionsPosition={args.actionsPosition}
      >
        {childrenContent}
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
