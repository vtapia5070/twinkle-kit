import { twMerge } from 'tailwind-merge';

export interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader = ({ className = '', children }: CardHeaderProps) => {
  return (
    <div className={twMerge(className, 'tw')}>
      <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900">
        {children}
      </h5>
    </div>
  );
};
