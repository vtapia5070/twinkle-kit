import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface TextProps {
  as?: React.ElementType;
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const variantClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
};

const weightClasses = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Text = ({
  as = 'span',
  variant = 'md',
  weight = 'regular',
  className = '',
  children,
}: TextProps) => {
  const classes = twMerge(
    'font-sans',
    clsx(variantClasses[variant], weightClasses[weight]),
    className
  );
  const Component = as;
  return <Component className={classes}>{children}</Component>;
};
