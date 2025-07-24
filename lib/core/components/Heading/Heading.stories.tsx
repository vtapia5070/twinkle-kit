import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level',
    },
    variant: {
      control: 'select',
      options: ['xl', '2xl', '3xl'],
      description: 'Font size variant',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Heading content',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading',
  },
};

export const Levels: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map((as) => (
        <Heading key={as} as={as} {...args}>
          {as.toUpperCase()} Heading
        </Heading>
      ))}
    </div>
  ),
  args: {
    variant: 'xl',
    weight: 'bold',
    children: '',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['xl', '2xl', '3xl'] as const).map((variant) => (
        <Heading key={variant} variant={variant} {...args}>
          {variant} Heading
        </Heading>
      ))}
    </div>
  ),
  args: {
    as: 'h2',
    weight: 'bold',
    children: '',
  },
};
