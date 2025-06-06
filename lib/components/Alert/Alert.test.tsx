import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
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
    expect(alertDiv).toHaveClass('bg-purple-3', 'text-purple-11');
  });

  it('renders with type error', () => {
    const { container } = render(
      <Alert message="test" type={AlertType.Error} />
    );
    const alertDiv = container.firstChild as HTMLElement;
    expect(alertDiv).toHaveClass('bg-red-500', 'text-white');
  });

  it('renders with type success', () => {
    const { container } = render(
      <Alert message="test" type={AlertType.Success} />
    );
    const alertDiv = container.firstChild as HTMLElement;
    expect(alertDiv).toHaveClass('bg-green-500', 'text-white');
  });

  it('renders with type warning', () => {
    const { container } = render(
      <Alert message="test" type={AlertType.Warning} />
    );
    const alertDiv = container.firstChild as HTMLElement;
    expect(alertDiv).toHaveClass('bg-orange-500', 'text-white');
  });
});
