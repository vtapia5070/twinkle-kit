import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { CardHeader } from './CardHeader';

describe('CardHeader', () => {
  it('renders without error', () => {
    render(<CardHeader>Card Header</CardHeader>);
  });
});
