import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  type?: HeadingType;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const headingSizeClasses = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
  h6: 'text-sm',
};

const weightClasses = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Heading = ({
  type = 'h1',
  weight = 'bold',
  className = '',
  children,
}: HeadingProps) => {
  const Tag = type;
  const classes = twMerge(
    'font-sans leading-tight',
    className,
    clsx(headingSizeClasses[type], weightClasses[weight])
  );
  return <Tag className={classes}>{children}</Tag>;
};
