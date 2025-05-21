import type { Meta, StoryObj } from '@storybook/react';

import { CardHeader } from './CardHeader';

const meta = {
  title: 'Components/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'The content of the card header',
    },
  },
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card Header',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'some-class underline',
    children: 'Card Header',
  },
};
