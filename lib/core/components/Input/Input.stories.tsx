import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { Input } from './Input';

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
    onChange: {
      action: 'changed',
      description: 'Function called when input value changes',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    label: {
      control: 'text',
      description: 'The label of the input',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of the input',
    },
    error: {
      control: 'text',
      description: 'The error message of the input',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    inputId: {
      control: 'text',
      description: 'The id of the input for accessibility',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    onChange: action('onChange'),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    onChange: action('onChange'),
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address',
    onChange: action('onChange'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this field',
    isDisabled: true,
    onChange: action('onChange'),
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Custom Styled Input',
    className: 'max-w-md',
    onChange: action('onChange'),
  },
};

export const FloatingLabel: Story = {
  args: {
    label: 'Floating Label Example',
    placeholder: 'Enter some text...',
    onChange: action('onChange'),
  },
};

export const FloatingLabelWithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address',
    onChange: action('onChange'),
  },
};

export const FloatingLabelWithValue: Story = {
  args: {
    label: 'Pre-filled Input',
    value: 'This input has content',
    placeholder: 'Enter text...',
    onChange: action('onChange'),
  },
};
