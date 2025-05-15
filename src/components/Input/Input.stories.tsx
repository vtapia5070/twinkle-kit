import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
		className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
	}
}  satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'some-class underline',
  },
};
