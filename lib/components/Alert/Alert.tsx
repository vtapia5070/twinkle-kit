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
}

export const Alert = ({
  className = '',
  type = AlertType.Info,
  message,
}: AlertProps) => {
  let styles = clsx({
    'bg-purple-3 text-purple-11': type === AlertType.Info,
    'bg-red-500 text-white': type === AlertType.Error,
    'bg-green-500 text-white': type === AlertType.Success,
    'bg-orange-500 text-white': type === AlertType.Warning,
  });

  return (
    <div className="w-full">
      <div className={twMerge('rounded-lg p-4', styles, className)}>
        {message}
      </div>
    </div>
  );
};
