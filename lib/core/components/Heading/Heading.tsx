import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'xl' | '2xl' | '3xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const variantClasses = {
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

export const Heading = ({
  as = 'h2',
  variant = 'xl',
  weight = 'bold',
  className = '',
  children,
}: HeadingProps) => {
  const Tag = as;
  const classes = twMerge(
    'font-sans leading-tight',
    className,
    clsx(variantClasses[variant], weightClasses[weight])
  );
  return <Tag className={classes}>{children}</Tag>;
};
