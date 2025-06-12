import { twMerge } from 'tailwind-merge';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className = '', children }: CardProps) => {
  return (
    <div className={twMerge(className, 'tw')}>
      <div className="m-6 p-6 border text-gray-12 bg-background border-border rounded-lg shadow-sm hover:bg-gray-10">
        {children}
      </div>
    </div>
  );
};
