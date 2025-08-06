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

export const WithText: Story = {
  args: {
    children: <span className="text-lg text-white font-medium">My App</span>,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-primary-active text-white border-primary-8',
    children: (
      <span className="text-lg text-white font-medium">
        Custom Styled Navbar
      </span>
    ),
  },
};

export const WithLongText: Story = {
  args: {
    children: (
      <span className="text-lg text-white font-medium">
        This is a very long application name that might wrap
      </span>
    ),
  },
};

export const WithNavigation: Story = {
  args: {
    className: 'justify-between',
    children: (
      <div className="flex items-center space-x-4">
        <span className="text-white font-medium">Brand</span>
        <span className="text-white/60">|</span>
        <span className="text-white/80">Dashboard</span>
      </div>
    ),
  },
};

export const Accessible: Story = {
  args: {
    children: (
      <span className="text-lg text-white font-medium">Accessible Navbar</span>
    ),
    ariaLabel: 'Main application navigation',
    role: 'navigation',
  },
};
