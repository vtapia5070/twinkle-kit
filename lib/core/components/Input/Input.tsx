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
  // Accessibility props
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaInvalid?: boolean;
  ariaRequired?: boolean;
  ariaLive?: 'off' | 'polite' | 'assertive';
  tabIndex?: number;
  role?: string;
}

export const Input = ({
  className = '',
  onChange,
  isDisabled = false,
  placeholder = '',
  error = '',
  label,
  inputId,
  required = false,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaControls,
  ariaExpanded,
  ariaInvalid,
  ariaRequired,
  ariaLive,
  tabIndex,
  role,
}: InputProps) => {
  const generatedId = useId();

  // Base classes that are always applied
  const baseClasses =
    'mt-1 block w-full rounded-md border shadow-sm text-text-primary text-sm p-2 ';

  // State-specific classes using object syntax
  const stateClasses = clsx({
    'border-border focus:border-primary-8 focus:outline-primary-8':
      !error && !isDisabled,
    'border-error focus:border-error': error,
    'bg-neutral-3 cursor-not-allowed border-text-disabled': isDisabled,
  });

  return (
    <div className={twMerge(className, 'tw')}>
      {label && (
        <label
          htmlFor={inputId || generatedId}
          className="block text-sm font-medium text-text-primary"
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId || generatedId}
        type="text"
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={twMerge(baseClasses, stateClasses)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={
          ariaDescribedBy ||
          (error ? `${inputId || generatedId}-error` : undefined)
        }
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-invalid={ariaInvalid !== undefined ? ariaInvalid : !!error}
        aria-required={ariaRequired !== undefined ? ariaRequired : required}
        aria-live={ariaLive}
        tabIndex={tabIndex}
        role={role}
      />
      {error && (
        <p
          id={`${inputId || generatedId}-error`}
          role="alert"
          className="mt-1 text-sm text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
};
