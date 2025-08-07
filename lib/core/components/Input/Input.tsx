import { twMerge } from 'tailwind-merge';
import { useId, useState, useRef } from 'react';
import { clsx } from 'clsx';

export interface InputProps {
  className?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  inputId?: string;
  value?: string;
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
  name?: string;
}

export const Input = ({
  className = '',
  onChange = () => {},
  isDisabled = false,
  placeholder = '',
  error = '',
  label,
  inputId,
  required = false,
  value: controlledValue,
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
  name = '',
}: InputProps) => {
  const generatedId = useId();
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const hasContent = value && value.length > 0;
  const isLabelFloating = isFocused || hasContent;

  // Base classes that are always applied - adjusted for floating label
  const baseClasses = label
    ? 'block w-full rounded-md border shadow-sm text-text-primary text-sm pt-6 pb-2 px-3 focus:outline-none transition-all duration-200'
    : 'block w-full rounded-md border shadow-sm text-text-primary text-sm p-2 focus:outline-none transition-all duration-200';

  // State-specific classes using object syntax
  const stateClasses = clsx({
    'border-border focus:border-primary-8 focus:ring-1 focus:ring-primary-8':
      !error && !isDisabled,
    'border-error focus:border-error focus:ring-1 focus:ring-error': error,
    'bg-neutral-3 cursor-not-allowed border-text-disabled': isDisabled,
  });

  // Label classes for floating animation
  const labelClasses = clsx(
    'absolute left-3 transition-all duration-200 pointer-events-none text-text-primary',
    {
      'text-xs top-2 text-primary-8': isLabelFloating && !error && !isDisabled,
      'text-xs top-2 text-error': isLabelFloating && error,
      'text-xs top-2 text-text-disabled': isLabelFloating && isDisabled,
      'text-sm top-4': !isLabelFloating && !isDisabled,
      'text-sm top-4 text-text-disabled': !isLabelFloating && isDisabled,
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange(newValue);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={twMerge(className, 'tw')}>
      {label ? (
        <div className="relative">
          <input
            ref={inputRef}
            id={inputId || generatedId}
            type="text"
            disabled={isDisabled}
            placeholder={isLabelFloating ? placeholder : ''}
            value={value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
            name={name}
          />
          <label
            htmlFor={inputId || generatedId}
            className={labelClasses}
          >
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        </div>
      ) : (
        <input
          ref={inputRef}
          id={inputId || generatedId}
          type="text"
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
          name={name}
        />
      )}
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
