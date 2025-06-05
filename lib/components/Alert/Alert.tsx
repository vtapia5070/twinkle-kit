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
    'bg-purple-3 text-purple-11': type === AlertType.Info,
    'bg-red-500 text-white': type === AlertType.Error,
    'bg-green-500 text-white': type === AlertType.Success,
    'bg-orange-500 text-white': type === AlertType.Warning,
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
