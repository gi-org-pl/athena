import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button/Button";
import { Section } from "./Section";

/** * Define the specific schema for this story
 * This prevents the TS error by explicitly allowing your custom strings
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
};

const meta = {
  title: "Section",
  component: Section,
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
    /* Explicitly tell Storybook these are strings */
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
    /* Hide the original component props that we are mapping manually */
    children: { table: { disable: true } },
    actions: { table: { disable: true } },
  },
  args: {
    title: "News",
    titleSecondary: "(3)",
    description: "Main section description",
    childrenTitle: "First news:",
    childrenDescription: "It is great to be a part of the GI foundation!",
    action0: "Action 0",
    action1: "action 1",
    actionsPosition: "right",
  },
  render: (args) => {
    const titleContent = (
      <div>
        {args.title}{" "}
        <span style={{ fontWeight: 500 }}>{args.titleSecondary}</span>
      </div>
    );

    const actionsContent = (
      <>
        <Button type="ghost">{args.action0}</Button>
        <Button type="ghost">{args.action1}</Button>
      </>
    );

    const childrenContent = (
      <div>
        <p style={{ fontWeight: 800, fontSize: 16 }}>{args.childrenTitle}</p>
        <p>{args.childrenDescription}</p>
      </div>
    );

    return (
      <Section
        title={titleContent}
        description={args.description}
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

export const RightActions: Story = {
  args: {
    actionsPosition: "right",
  },
};

export const BottomActions: Story = {
  args: {
    actionsPosition: "bottom",
  },
};
