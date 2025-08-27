import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['success', 'close', 'menu', 'user'],
      description: 'Icon name to display',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the icon',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    color: {
      control: 'color',
      description: 'Icon color (uses stroke)',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
    ariaHidden: {
      control: 'boolean',
      description: 'Hide from screen readers',
    },
    role: {
      control: 'text',
      description: 'ARIA role attribute',
    },
  },
  args: {
    name: 'success',
    size: 'md',
    ariaHidden: true,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      {(['success', 'close', 'menu', 'user'] as const).map((iconName) => (
        <div key={iconName} className="flex flex-col items-center gap-2">
          <Icon name={iconName} size="lg" />
          <span className="text-sm text-secondary">{iconName}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available icons in the icon library.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="success" size={size} />
          <span className="text-sm text-secondary">{size}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons are available in four sizes: sm (16px), md (20px), lg (24px), and xl (32px).',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <Icon name="success" size="lg" color="currentColor" className="text-success" />
        <span className="text-sm text-secondary">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="close" size="lg" color="currentColor" className="text-error" />
        <span className="text-sm text-secondary">Error</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="menu" size="lg" color="currentColor" className="text-primary" />
        <span className="text-sm text-secondary">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="user" size="lg" color="currentColor" className="text-secondary" />
        <span className="text-sm text-secondary">Secondary</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be styled with design system colors using Tailwind classes or custom colors.',
      },
    },
  },
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Icon name="success" size="lg" color="#10b981" />
      <Icon name="close" size="lg" color="#ef4444" />
      <Icon name="menu" size="lg" color="#3b82f6" />
      <Icon name="user" size="lg" color="#8b5cf6" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be styled with custom hex colors.',
      },
    },
  },
};

export const InText: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-lg">
        <Icon name="success" size="sm" className="text-success mr-1" />
        Operation completed successfully
      </p>
      <p className="text-lg">
        <Icon name="close" size="sm" className="text-error mr-1" />
        Something went wrong
      </p>
      <p className="text-lg">
        User profile 
        <Icon name="user" size="sm" className="ml-1" />
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be used inline with text content.',
      },
    },
  },
};

export const InButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <button className="flex items-center gap-2 px-4 py-2 bg-primary-active text-primary-contrast rounded-md hover:bg-primary-10 transition-colors">
        <Icon name="success" size="sm" />
        Save Changes
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md hover:bg-surface-hover transition-colors">
        <Icon name="close" size="sm" />
        Cancel
      </button>
      <button className="flex items-center justify-center p-2 bg-surface border border-border rounded-md hover:bg-surface-hover transition-colors">
        <Icon name="menu" size="sm" />
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons commonly used within buttons and interactive elements.',
      },
    },
  },
};

export const Accessible: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon 
          name="success" 
          size="md" 
          className="text-success"
          ariaLabel="Success indicator"
          ariaHidden={false}
          role="img"
        />
        <span>Operation completed</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon 
          name="close" 
          size="md" 
          className="text-error"
          ariaLabel="Error indicator"
          ariaHidden={false}
          role="img"
        />
        <span>Operation failed</span>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md hover:bg-surface-hover transition-colors">
        <Icon name="user" size="sm" ariaHidden={true} />
        <span>Profile</span>
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons with proper accessibility attributes. When icons convey meaning, use ariaLabel and set ariaHidden to false. When icons are decorative (e.g., in buttons with text), keep ariaHidden as true.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    name: 'success',
    size: 'lg',
    className: 'text-success',
  },
};

export const Close: Story = {
  args: {
    name: 'close',
    size: 'lg',
    className: 'text-error',
  },
};

export const Menu: Story = {
  args: {
    name: 'menu',
    size: 'lg',
    className: 'text-primary',
  },
};

export const User: Story = {
  args: {
    name: 'user',
    size: 'lg',
    className: 'text-secondary',
  },
};