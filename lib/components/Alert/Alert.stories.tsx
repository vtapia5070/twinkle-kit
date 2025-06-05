import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertType } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'error', 'success', 'warning'],
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    message: {
      control: 'text',
      description: 'Alert message',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'A default alert.',
  },
};

export const WithTypeInfo: Story = {
  args: {
    type: AlertType.Info,
    message: 'An info alert.',
  },
};

export const WithTypeSuccess: Story = {
  args: {
    type: AlertType.Success,
    message: 'A success alert.',
  },
};

export const WithTypeError: Story = {
  args: {
    type: AlertType.Error,
    message: 'An error alert.',
  },
};

export const WithTypeWarning: Story = {
  args: {
    type: AlertType.Warning,
    message: 'A warning alert.',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'some-class underline',
    message: 'A custom alert.',
  },
};
