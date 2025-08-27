import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export type IconName = 'success' | 'close' | 'menu' | 'user';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  color?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  role?: string;
}

const iconPaths: Record<IconName, React.ReactElement> = {
  success: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  ),
  close: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  ),
  menu: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  ),
  user: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </>
  ),
};

const sizeClasses: Record<IconSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export const Icon = ({
  name,
  size = 'md',
  className = '',
  color = 'currentColor',
  ariaLabel,
  ariaHidden = true,
  role,
}: IconProps) => {
  const iconPath = iconPaths[name];
  
  if (!iconPath) {
    console.warn(`Icon "${name}" not found. Available icons: ${Object.keys(iconPaths).join(', ')}`);
    return null;
  }

  const baseClasses = clsx(
    'inline-block',
    sizeClasses[size]
  );

  return (
    <svg
      className={twMerge(baseClasses, className)}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      role={role}
    >
      {iconPath}
    </svg>
  );
};