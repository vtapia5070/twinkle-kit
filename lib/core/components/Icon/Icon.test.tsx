import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Icon, IconName } from './Icon';

describe('<Icon />', () => {
  const availableIcons: IconName[] = ['success', 'close', 'menu', 'user'];

  describe('Rendering', () => {
    it('renders all available icons correctly', () => {
      availableIcons.forEach((iconName) => {
        const { container } = render(<Icon name={iconName} />);
        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
      });
    });

    it('renders with default props', () => {
      const { container } = render(<Icon name="success" />);
      const svg = container.querySelector('svg');
      
      expect(svg).toHaveClass('w-5', 'h-5', 'inline-block');
      expect(svg).toHaveAttribute('fill', 'none');
      expect(svg).toHaveAttribute('stroke', 'currentColor');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });

    it('returns null and logs warning for invalid icon name', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const { container } = render(<Icon name={'invalid' as IconName} />);
      
      expect(container.firstChild).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Icon "invalid" not found')
      );
      
      consoleSpy.mockRestore();
    });
  });

  describe('Size variants', () => {
    it('applies small size classes', () => {
      const { container } = render(<Icon name="success" size="sm" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('w-4', 'h-4');
    });

    it('applies medium size classes (default)', () => {
      const { container } = render(<Icon name="success" size="md" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('w-5', 'h-5');
    });

    it('applies large size classes', () => {
      const { container } = render(<Icon name="success" size="lg" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('w-6', 'h-6');
    });

    it('applies extra large size classes', () => {
      const { container } = render(<Icon name="success" size="xl" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('w-8', 'h-8');
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <Icon name="success" className="text-green-500 custom-class" />
      );
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('text-green-500', 'custom-class');
    });

    it('applies custom color', () => {
      const { container } = render(<Icon name="success" color="red" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('stroke', 'red');
    });

    it('merges custom className with base classes', () => {
      const { container } = render(
        <Icon name="success" className="text-red-500" />
      );
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('inline-block', 'w-5', 'h-5', 'text-red-500');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes by default', () => {
      const { container } = render(<Icon name="success" />);
      const svg = container.querySelector('svg');
      
      expect(svg).toHaveAttribute('aria-hidden', 'true');
      expect(svg).not.toHaveAttribute('aria-label');
      expect(svg).not.toHaveAttribute('role');
    });

    it('sets aria-label when provided', () => {
      const { container } = render(
        <Icon name="success" ariaLabel="Success indicator" />
      );
      const svg = container.querySelector('svg');
      
      expect(svg).toHaveAttribute('aria-label', 'Success indicator');
    });

    it('sets aria-hidden to false when ariaLabel is provided', () => {
      const { container } = render(
        <Icon name="success" ariaLabel="Success indicator" ariaHidden={false} />
      );
      const svg = container.querySelector('svg');
      
      expect(svg).toHaveAttribute('aria-hidden', 'false');
    });

    it('sets custom role when provided', () => {
      const { container } = render(
        <Icon name="success" role="img" />
      );
      const svg = container.querySelector('svg');
      
      expect(svg).toHaveAttribute('role', 'img');
    });

    it('can be made accessible with proper attributes', () => {
      const { container } = render(
        <Icon 
          name="success" 
          ariaLabel="Operation completed successfully"
          ariaHidden={false}
          role="img"
        />
      );
      const svg = container.querySelector('svg');
      
      expect(svg).toHaveAttribute('aria-label', 'Operation completed successfully');
      expect(svg).toHaveAttribute('aria-hidden', 'false');
      expect(svg).toHaveAttribute('role', 'img');
    });
  });

  describe('Icon variants', () => {
    it('renders success icon with checkmark path', () => {
      const { container } = render(<Icon name="success" />);
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('d', 'M5 13l4 4L19 7');
    });

    it('renders close icon with X path', () => {
      const { container } = render(<Icon name="close" />);
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('d', 'M6 18L18 6M6 6l12 12');
    });

    it('renders menu icon with hamburger lines', () => {
      const { container } = render(<Icon name="menu" />);
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });

    it('renders user icon with person paths', () => {
      const { container } = render(<Icon name="user" />);
      const path = container.querySelector('path');
      expect(path).toHaveAttribute('d', 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z');
    });
  });

  describe('SVG attributes', () => {
    it('has correct SVG structure', () => {
      const { container } = render(<Icon name="success" />);
      const svg = container.querySelector('svg');
      
      expect(svg).toHaveAttribute('fill', 'none');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
      
      const path = svg?.querySelector('path');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
      expect(path).toHaveAttribute('stroke-linejoin', 'round');
      expect(path).toHaveAttribute('stroke-width', '2');
    });
  });
});