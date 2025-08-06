import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders without error', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders with children when provided', () => {
    render(<Navbar>Test App</Navbar>);
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('renders hamburger menu button', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles menu state when hamburger button is clicked', () => {
    const onMenuToggle = vi.fn();
    render(<Navbar onMenuToggle={onMenuToggle} />);

    const menuButton = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });

    // Initially closed
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(onMenuToggle).toHaveBeenCalledWith(true);

    // Click to close
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(onMenuToggle).toHaveBeenCalledWith(false);
  });

  it('applies custom className', () => {
    render(<Navbar className="custom-class" />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Navbar
        ariaLabel="Custom navigation"
        ariaLabelledBy="nav-heading"
        ariaDescribedBy="nav-description"
      />
    );

    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveAttribute('aria-label', 'Custom navigation');
    expect(navbar).toHaveAttribute('aria-labelledby', 'nav-heading');
    expect(navbar).toHaveAttribute('aria-describedby', 'nav-description');
  });

  it('menu button has proper aria attributes', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });

    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('type', 'button');
  });

  it('shows hamburger icon when menu is closed', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });
    const svg = menuButton.querySelector('svg');
    const path = svg?.querySelector('path');

    expect(path).toHaveAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  });

  it('shows close icon when menu is open', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });

    fireEvent.click(menuButton);

    const svg = menuButton.querySelector('svg');
    const path = svg?.querySelector('path');

    expect(path).toHaveAttribute('d', 'M6 18L18 6M6 6l12 12');
  });
});
