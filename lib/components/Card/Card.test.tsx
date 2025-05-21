import { render } from '@testing-library/react'
import { describe, it } from 'vitest';
import { Card } from './Card'

describe('Card', () => {
	it('renders without error', () => {
		render(<Card />)
	})
});