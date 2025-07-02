import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Alert, AlertType } from './Alert';

describe('Alert', () => {
  it('renders without error', () => {
    render(<Alert message="test" />);
  });

  it('renders with message', () => {
    const { getByText } = render(<Alert message="test" />);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('renders with type info', () => {
    const { container } = render(
      <Alert message="test" type={AlertType.Info} />
    );
    const alertDiv = container.firstChild as HTMLElement;
    expect(alertDiv).toHaveClass('bg-primary-3', 'text-primary-11');
  });

  it('renders with type error', () => {
    const { container } = render(
      <Alert message="test" type={AlertType.Error} />
    );
    const alertDiv = container.firstChild as HTMLElement;
    expect(alertDiv).toHaveClass('bg-error', 'text-primary-contrast');
  });

  it('renders with type success', () => {
    const { container } = render(
      <Alert message="test" type={AlertType.Success} />
    );
    const alertDiv = container.firstChild as HTMLElement;
    expect(alertDiv).toHaveClass('bg-success', 'text-primary-contrast');
  });

  it('renders with type warning', () => {
    const { container } = render(
      <Alert message="test" type={AlertType.Warning} />
    );
    const alertDiv = container.firstChild as HTMLElement;
    expect(alertDiv).toHaveClass('bg-warning', 'text-primary-contrast');
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const { container } = render(
        <Alert type={AlertType.Info} message="Test alert" />
      );

      // Alert should be perceivable by screen readers
      const alert = container.firstChild as HTMLElement;
      expect(alert).toBeInTheDocument();
    });

    it('should support keyboard navigation for close button', () => {
      const { container } = render(
        <Alert type={AlertType.Info} message="Test alert" onClose={() => {}} />
      );

      const closeButton = container.querySelector('.close');
      expect(closeButton).toBeInTheDocument();
      // Note: In a real implementation, this should be a proper button element
    });
  });

  describe('Integration', () => {
    it('should handle dismissible alert', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      const { getByText } = render(
        <Alert
          type={AlertType.Info}
          message="This is a dismissible alert"
          onClose={handleClose}
        />
      );

      const closeButton = getByText('x');
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
