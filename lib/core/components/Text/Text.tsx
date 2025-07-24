import React from 'react';

export interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const variantToSize: Record<string, string> = {
  xs: 'var(--font-size-xs)',
  sm: 'var(--font-size-sm)',
  md: 'var(--font-size-md)',
  lg: 'var(--font-size-lg)',
  xl: 'var(--font-size-xl)',
  '2xl': 'var(--font-size-2xl)',
  '3xl': 'var(--font-size-3xl)',
};

const weightToFontWeight: Record<string, string> = {
  regular: 'var(--font-weight-regular)',
  medium: 'var(--font-weight-medium)',
  semibold: 'var(--font-weight-semibold)',
  bold: 'var(--font-weight-bold)',
};

export const Text = ({
  as: Component = 'span',
  variant = 'md',
  weight = 'regular',
  className = '',
  children,
}: TextProps) => {
  const style = {
    fontSize: variantToSize[variant],
    fontWeight: weightToFontWeight[weight],
    fontFamily: 'var(--font-family-sans)',
    lineHeight: 'var(--line-height-normal)',
  } as React.CSSProperties;

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};
