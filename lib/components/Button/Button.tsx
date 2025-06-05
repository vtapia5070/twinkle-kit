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
            ? 'bg-gray-3 text-gray-12 cursor-not-allowed'
            : 'bg-purple-10 text-purple-contrast hover:bg-purple-9'
        }`,
        className
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
