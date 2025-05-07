import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    onClick: () => {},
    disabled: false,
    isLoading: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    onClick: () => {},
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    onClick: () => {},
    isLoading: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Styled Button',
    onClick: () => {},
    className: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
  },
};
