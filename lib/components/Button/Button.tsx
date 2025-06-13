import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  children,
  onClick,
  disabled,
  className = '',
  isLoading,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={twMerge(
        'px-4 py-2 text-sm rounded-md shadow-sm focus:outline-none transition-colors',
        `${
          disabled || isLoading
            ? 'bg-primary-disabled text-text-disabled cursor-not-allowed'
            : 'bg-primary-active text-primary-contrast hover:bg-primary-10'
        }`,
        className
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
