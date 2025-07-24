import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders children', () => {
    render(<Text>hello</Text>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('applies the correct font size for variant', () => {
    render(<Text variant="xl">big</Text>);
    const el = screen.getByText('big');
    expect(el).toHaveStyle({ fontSize: 'var(--font-size-xl)' });
  });

  it('applies the correct font weight', () => {
    render(<Text weight="bold">bold</Text>);
    const el = screen.getByText('bold');
    expect(el).toHaveStyle({ fontWeight: 'var(--font-weight-bold)' });
  });

  it('renders as the specified element', () => {
    render(<Text as="h2">heading</Text>);
    const el = screen.getByText('heading');
    expect(el.tagName.toLowerCase()).toBe('h2');
  });
});
