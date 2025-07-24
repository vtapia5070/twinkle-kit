import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('renders children', () => {
    render(<Paragraph>hello</Paragraph>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('applies the correct font size for variant', () => {
    render(<Paragraph variant="lg">big</Paragraph>);
    const el = screen.getByText('big');
    expect(el).toHaveStyle({ fontSize: 'var(--font-size-lg)' });
  });

  it('applies the correct font weight', () => {
    render(<Paragraph weight="semibold">bold</Paragraph>);
    const el = screen.getByText('bold');
    expect(el).toHaveStyle({ fontWeight: 'var(--font-weight-semibold)' });
  });

  it('renders as a p element', () => {
    render(<Paragraph>paragraph</Paragraph>);
    const el = screen.getByText('paragraph');
    expect(el.tagName.toLowerCase()).toBe('p');
  });
});
