import { twMerge } from 'tailwind-merge';

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

export const Alert = ({ className = '', type, message }: AlertProps) => {
  let styles = '';

  switch (type) {
    case AlertType.Info:
      styles = 'bg-blue-500 text-white ';
      break;
    case AlertType.Error:
      styles = 'bg-red-500 text-white ';
      break;
    case AlertType.Success:
      styles = 'bg-green-500 text-white ';
      break;
    case AlertType.Warning:
      styles = 'bg-orange-500 text-white ';
      break;
    default:
      styles = 'bg-purple-3 text-purple-11';
      break;
  }

  return (
    <div className="w-full">
      <div className={twMerge('rounded-lg p-4', styles, className)}>
        {message}
      </div>
    </div>
  );
};
