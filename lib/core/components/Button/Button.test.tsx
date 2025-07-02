import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('<Button />', () => {
  it('renders with given text', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Can't click
      </Button>
    );

    const button = screen.getByRole('button', { name: /can't click/i });
    expect(button).toBeDisabled();

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  describe('Accessibility', () => {
    it('should have proper button semantics', () => {
      const { getByRole } = render(
        <Button onClick={() => {}}>Click me</Button>
      );

      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      // Button element should be focusable and clickable
      expect(button.tagName).toBe('BUTTON');
    });

    it('should be properly disabled', () => {
      const { getByRole } = render(
        <Button onClick={() => {}} disabled>
          Disabled button
        </Button>
      );

      const button = getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should indicate loading state', () => {
      const { getByRole } = render(
        <Button onClick={() => {}} isLoading>
          Loading button
        </Button>
      );

      const button = getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent('Loading...');
    });
  });
});
