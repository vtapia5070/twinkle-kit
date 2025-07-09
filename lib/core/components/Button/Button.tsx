import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
  // Accessibility props
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaPressed?: boolean;
  ariaHasPopup?: boolean;
  ariaLive?: 'off' | 'polite' | 'assertive';
  tabIndex?: number;
  role?: string;
}

export const Button = ({
  children,
  onClick,
  disabled,
  className = '',
  isLoading,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaControls,
  ariaExpanded,
  ariaPressed,
  ariaHasPopup,
  ariaLive,
  tabIndex,
  role,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={twMerge(
        'px-4 py-2 text-sm rounded-md shadow-sm focus:outline-none transition-colors',
        `${
          disabled || isLoading
            ? 'bg-primary-disabled text-primary-contrast cursor-not-allowed'
            : 'bg-primary-active text-primary-contrast hover:bg-primary-10'
        }`,
        className
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      aria-haspopup={ariaHasPopup}
      aria-live={ariaLive}
      tabIndex={tabIndex}
      role={role}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
