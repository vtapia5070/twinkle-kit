import { twMerge } from 'tailwind-merge';
import { useId } from 'react';

interface InputProps {
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
  return (
    <div className={twMerge(className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
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
        className={twMerge(
          'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
          error && 'border-red-500',
          isDisabled && 'bg-gray-100 cursor-not-allowed'
        )}
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

export default Input;
