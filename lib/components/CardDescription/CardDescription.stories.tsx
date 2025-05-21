import type { Meta, StoryObj } from '@storybook/react';

import { CardDescription } from './CardDescription';

const meta = {
  title: 'Components/CardDescription',
  component: CardDescription,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof CardDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockDesription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id felis in tellus porttitor auctor. Donec mauris arcu, rhoncus ac erat et, sodales vestibulum ipsum. Donec semper ornare mauris vitae pretium. In lorem orci, vehicula et lacinia ac, tincidunt eget est. Suspendisse ut odio lorem. In vulputate, dolor vel convallis accumsan, lacus arcu cursus lacus, eu dignissim mi erat et ex. Sed non metus nec elit ultricies maximus vitae porta neque. Donec venenatis venenatis elit ut auctor. Sed dui lectus, porttitor eu viverra eget, accumsan at tortor.';

export const Default: Story = {
  args: {
    children: mockDesription,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'some-class underline',
    children: mockDesription,
  },
};
