import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from './Section';
import { Button } from '../Button/Button';

const ActionButtons = () => (
  <>
    <Button >
      Action 1
    </Button>
    <Button >
      Action 2
    </Button>
  </>
);

const meta = {
  title: 'Section',
  component: Section,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] h-[200px] mx-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    title: <div>News <span className='font-medium' >(3)</span></div>,
    children: <div>
      <p className='font-extrabold text-[16px]'>First news:</p>
      <p>It’s great to be a part of the GI foundation!</p> 
    </div>,
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RightActions: Story = {
  args: {
    actions: <ActionButtons />,
    actionsPosition: 'right',
  },
};

export const BottomActions: Story = {
  args: {
    actions: <ActionButtons />,
    actionsPosition: 'bottom',
  },
};