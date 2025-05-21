import { render } from '@testing-library/react'
import { describe, it } from 'vitest';
import { CardDescription } from './CardDescription'

describe('CardDescription', () => {
	it('renders without error', () => {
		render(<CardDescription />)
	})
});