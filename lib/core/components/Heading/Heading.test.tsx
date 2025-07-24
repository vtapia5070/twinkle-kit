import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders children', () => {
    render(<Heading>hello</Heading>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('applies the correct font size for variant', () => {
    render(<Heading variant="3xl">big</Heading>);
    const el = screen.getByText('big');
    expect(el).toHaveStyle({ fontSize: 'var(--font-size-3xl)' });
  });

  it('applies the correct font weight', () => {
    render(<Heading weight="semibold">bold</Heading>);
    const el = screen.getByText('bold');
    expect(el).toHaveStyle({ fontWeight: 'var(--font-weight-semibold)' });
  });

  it('renders as the specified heading element', () => {
    render(<Heading as="h4">heading</Heading>);
    const el = screen.getByText('heading');
    expect(el.tagName.toLowerCase()).toBe('h4');
  });
});
