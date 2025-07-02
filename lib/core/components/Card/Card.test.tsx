import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardDescription } from '../CardDescription/CardDescription';
import { Button } from '../Button/Button';

describe('Card', () => {
  it('renders without error', () => {
    render(<Card>Card content.</Card>);
  });

  describe('Integration', () => {
    it('should render Card with Header and Description', () => {
      render(
        <Card>
          <CardHeader>Card Title</CardHeader>
          <CardDescription>Card description text</CardDescription>
        </Card>
      );

      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card description text')).toBeInTheDocument();
    });

    it('should render Card with Button and handle interactions', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Card>
          <CardHeader>Interactive Card</CardHeader>
          <Button onClick={handleClick}>Click me</Button>
        </Card>
      );

      const button = screen.getByRole('button', { name: /click me/i });
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
