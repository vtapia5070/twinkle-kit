import { render, getByText } from '@testing-library/react';
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
    const { getByText } = render(
      <Alert message="test" type={AlertType.Info} />
    );

    expect(getByText('test')).toHaveClass('bg-blue-500 text-white');
  });

  it('renders with type error', () => {
    const { getByText } = render(
      <Alert message="test" type={AlertType.Error} />
    );

    expect(getByText('test')).toHaveClass('bg-red-500 text-white');
  });

  it('renders with type success', () => {
    const { getByText } = render(
      <Alert message="test" type={AlertType.Success} />
    );

    expect(getByText('test')).toHaveClass('bg-green-500 text-white');
  });

  it('renders with type warning', () => {
    const { getByText } = render(
      <Alert message="test" type={AlertType.Warning} />
    );

    expect(getByText('test')).toHaveClass('bg-orange-500 text-white');
  });
});
