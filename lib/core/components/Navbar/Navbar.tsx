import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export interface NavbarProps {
  className?: string;
  onMenuToggle?: (isOpen: boolean) => void;
  children?: React.ReactNode;
  // Accessibility props
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  role?: string;
}

export const Navbar = ({
  className = '',
  onMenuToggle = () => {},
  children,
  ariaLabel = 'Main navigation',
  ariaLabelledBy,
  ariaDescribedBy,
  role = 'navigation',
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    const newIsOpen = !isMenuOpen;
    setIsMenuOpen(newIsOpen);
    onMenuToggle(newIsOpen);
  };

  const baseClasses =
    'flex items-center justify-between bg-primary-active text-white px-4 py-3 shadow-sm';

  const hamburgerClasses = clsx(
    'p-2 rounded-md hover:bg-neutral-3 focus:outline-none focus:ring-2 focus:ring-primary-8 transition-colors',
    {
      'bg-neutral-3': isMenuOpen,
    }
  );

  return (
    <nav
      className={twMerge(baseClasses, className)}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <div className="flex-1 flex justify-center">{children}</div>

      <button
        type="button"
        className={hamburgerClasses}
        onClick={handleMenuToggle}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </nav>
  );
};
