import React from 'react';

interface ButtonProps {
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
      className={`inline-flex items-center justify-center px-4 py-2 text-xl font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
        disabled || isLoading
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
      } ${className}`}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
