import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders without error', () => {
    render(<Input onChange={() => {}} />);
  });

  it('renders with label when provided', () => {
    render(<Input onChange={() => {}} label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders without label when not provided', () => {
    render(<Input onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shows required indicator when required is true', () => {
    render(<Input onChange={() => {}} label="Email" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('does not show required indicator when required is false', () => {
    render(<Input onChange={() => {}} label="Email" />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('shows error message when error is provided', () => {
    const errorMessage = 'This field is required';
    render(<Input onChange={() => {}} error={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('does not show error message when error is not provided', () => {
    render(<Input onChange={() => {}} />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('calls onChange with input value when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(handleChange).toHaveBeenCalledWith('test');
  });

  it('is disabled when isDisabled is true', () => {
    render(<Input onChange={() => {}} isDisabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('is not disabled when isDisabled is false', () => {
    render(<Input onChange={() => {}} />);
    expect(screen.getByRole('textbox')).not.toBeDisabled();
  });

  it('shows placeholder when provided', () => {
    const placeholder = 'Enter your email';
    render(<Input onChange={() => {}} placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    render(<Input onChange={() => {}} className={customClass} />);
    expect(screen.getByRole('textbox').parentElement).toHaveClass(customClass);
  });

  it('has correct aria attributes when error is present', () => {
    render(<Input onChange={() => {}} error="Error message" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby');
  });

  it('does not have aria-invalid when no error is present', () => {
    render(<Input onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });
});
