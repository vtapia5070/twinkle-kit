import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { Navbar } from './Navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    label: {
      control: 'text',
      description: 'Optional label or text in the middle of the navbar',
    },
    onMenuToggle: {
      action: 'menuToggled',
      description: 'Callback when hamburger menu is toggled',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the navigation',
    },
    ariaLabelledBy: {
      control: 'text',
      description: 'ID of element that labels the navigation',
    },
    ariaDescribedBy: {
      control: 'text',
      description: 'ID of element that describes the navigation',
    },
    role: {
      control: 'text',
      description: 'ARIA role for the navigation element',
    },
  },
  args: {
    onMenuToggle: action('onMenuToggle'),
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'My App',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-primary-active text-white border-primary-8',
    label: 'Custom Styled Navbar',
  },
};

export const WithLongLabel: Story = {
  args: {
    label: 'This is a very long application name that might wrap',
  },
};

export const Accessible: Story = {
  args: {
    label: 'Accessible Navbar',
    ariaLabel: 'Main application navigation',
    role: 'navigation',
  },
};
