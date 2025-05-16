import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders without error', () => {
    render(<Input onChange={() => {}} />);
  });
});
