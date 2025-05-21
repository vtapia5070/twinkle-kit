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
        'px-4 py-2 text-sm font-bold rounded-md shadow-sm focus:outline-none transition-colors',
        `${
          disabled || isLoading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`,
        className
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
