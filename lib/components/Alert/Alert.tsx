import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export enum AlertType {
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
}

export interface AlertProps {
  className?: string;
  type?: AlertType;
  message: string;
  onClose?: () => void;
}

export const Alert = ({
  className = '',
  type = AlertType.Info,
  message,
  onClose,
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  let styles = clsx({
    'bg-primary-3 text-primary-11': type === AlertType.Info,
    'bg-error text-primary-contrast': type === AlertType.Error,
    'bg-success text-primary-contrast': type === AlertType.Success,
    'bg-warning text-primary-contrast': type === AlertType.Warning,
  });

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    isVisible && (
      <div
        className={twMerge(
          'w-full rounded-lg p-4 flex justify-between',
          styles,
          className
        )}
      >
        <p className="">{message}</p>
        <div className="close" onClick={handleClose}>
          x
        </div>
      </div>
    )
  );
};
