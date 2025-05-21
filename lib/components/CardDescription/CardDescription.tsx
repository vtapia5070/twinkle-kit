export interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription = ({
  className = '',
  children,
}: CardDescriptionProps) => {
  return (
    <div className={className}>
      <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
    </div>
  );
};
