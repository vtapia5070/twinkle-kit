import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';

export declare const Button: ({ children, onClick, disabled, className, isLoading, }: ButtonProps) => JSX.Element;

declare interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    isLoading?: boolean;
    children: default_2.ReactNode;
}

export declare const Card: ({ className, children }: CardProps) => JSX.Element;

export declare const CardHeader: ({ className, children }: CardHeaderProps) => JSX.Element;

declare interface CardHeaderProps {
    className?: string;
    children: React.ReactNode;
}

declare interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export declare const Input: ({ className, onChange, isDisabled, placeholder, error, label, inputId, required, }: InputProps) => JSX.Element;

declare interface InputProps {
    className?: string;
    onChange: (value: string) => void;
    isDisabled?: boolean;
    label?: string;
    placeholder?: string;
    error?: string;
    required?: boolean;
    inputId?: string;
}

export { }
