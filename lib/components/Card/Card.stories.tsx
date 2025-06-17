import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';
import { CardHeader } from '../CardHeader';
import { CardDescription } from '../CardDescription';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      description: 'The content of the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>I'm a card.</div>,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'some-class underline',
    children: <div>I'm a card.</div>,
  },
};

const mockDesription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id felis in tellus porttitor auctor. Donec mauris arcu, rhoncus ac erat et, sodales vestibulum ipsum. Donec semper ornare mauris vitae pretium. In lorem orci, vehicula et lacinia ac, tincidunt eget est. Suspendisse ut odio lorem. In vulputate, dolor vel convallis accumsan, lacus arcu cursus lacus, eu dignissim mi erat et ex. Sed non metus nec elit ultricies maximus vitae porta neque. Donec venenatis venenatis elit ut auctor. Sed dui lectus, porttitor eu viverra eget, accumsan at tortor.';

export const WithContent: Story = {
  args: {
    children: (
      <>
        <CardHeader>Card Header</CardHeader>
        <CardDescription>{mockDesription}</CardDescription>
      </>
    ),
  },
};
