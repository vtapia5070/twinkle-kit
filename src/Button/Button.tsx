import React from 'react';
interface ButtonProps {
  label: string;
	onClick: () => void;
	disabled?: boolean;
	className?: string;
	isLoading?: boolean;
	children: React.ReactNode;
}

export const Button = ({ children, onClick, disabled, className, isLoading }: ButtonProps) => {
	return (
		<button onClick={onClick} disabled={disabled || isLoading} className={className}>
			{isLoading ? "Loading..." : children}
		</button>
	);
};

