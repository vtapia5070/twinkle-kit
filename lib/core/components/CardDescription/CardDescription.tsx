import { ReactNode } from 'react';

export interface CardDescriptionProps {
  className?: string;
  children: ReactNode;
}

export const CardDescription = ({
  className = '',
  children,
}: CardDescriptionProps) => {
  return (
    <div className={className}>
      <p className="font-normal text-text-primary">{children}</p>
    </div>
  );
};
