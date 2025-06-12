import { twMerge } from 'tailwind-merge';
import { useId } from 'react';
import { clsx } from 'clsx';

export interface InputProps {
  className?: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  inputId?: string;
}

export const Input = ({
  className = '',
  onChange,
  isDisabled = false,
  placeholder = '',
  error = '',
  label,
  inputId = useId(),
  required = false,
}: InputProps) => {
  // Base classes that are always applied
  const baseClasses =
    'mt-1 block w-full rounded-md border shadow-sm text-gray-700 text-sm p-2 ';

  // State-specific classes using object syntax
  const stateClasses = clsx({
    'border-gray-300 focus:border-purple-8 focus:outline-purple-8':
      !error && !isDisabled,
    'border-red-500 focus:border-red-500': error,
    'bg-gray-100 cursor-not-allowed border-gray-200': isDisabled,
  });

  return (
    <div className={twMerge(className, 'tw')}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type="text"
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={twMerge(baseClasses, stateClasses)}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
};
