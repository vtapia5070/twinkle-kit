import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ParagraphProps {
  variant?: 'sm' | 'md' | 'lg';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const variantClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const weightClasses = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Paragraph = ({
  variant = 'md',
  weight = 'regular',
  className = '',
  children,
}: ParagraphProps) => {
  const classes = twMerge(
    'font-sans leading-relaxed',
    clsx(variantClasses[variant], weightClasses[weight]),
    className
  );
  return <p className={classes}>{children}</p>;
};
