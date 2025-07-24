import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta = {
  title: 'Components/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
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
      description: 'Paragraph content',
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a paragraph.',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['sm', 'md', 'lg'] as const).map((variant) => (
        <Paragraph key={variant} variant={variant} {...args}>
          {variant} paragraph
        </Paragraph>
      ))}
    </div>
  ),
  args: {
    weight: 'regular',
    children: '',
  },
};

export const Weights: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['regular', 'medium', 'semibold', 'bold'] as const).map((weight) => (
        <Paragraph key={weight} weight={weight} {...args}>
          {weight} weight
        </Paragraph>
      ))}
    </div>
  ),
  args: {
    variant: 'md',
    children: '',
  },
};
