/**
 * Twinkle Kit Color Tokens
 * 
 * This file contains all color tokens used across the Twinkle Kit design system.
 * These tokens are available as JavaScript/TypeScript objects and can be used
 * for theming and styling components programmatically.
 */

export const colors = {
  // Primary color scale
  primary: {
    50: '#fdfcfe',
    100: '#f6edff',
    200: '#e9d2ff',
    300: '#d8a9ff',
    400: '#c46fff',
    500: '#943cdd', // main primary color
    600: '#7c2d9a', // hover state
    700: '#6b2d85', // active state
    800: '#5a2a6e',
    900: '#4c265d',
    950: '#2f0e3f',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Success colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },
  
  // Warning colors
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },
  
  // Error colors
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
  
  // Semantic color aliases
  semantic: {
    // Primary
    primary: 'var(--tw-primary)',
    primaryHover: 'var(--tw-primary-hover)',
    primaryActive: 'var(--tw-primary-active)',
    
    // Background
    background: 'var(--tw-bg)',
    backgroundSecondary: 'var(--tw-bg-secondary)',
    
    // Text
    text: 'var(--tw-text)',
    textSecondary: 'var(--tw-text-secondary)',
    
    // Border
    border: 'var(--tw-border)',
    
    // States
    hover: 'var(--tw-hover)',
    active: 'var(--tw-active)',
    disabled: 'var(--tw-disabled)',
    
    // Feedback
    success: 'var(--tw-success)',
    warning: 'var(--tw-warning)',
    error: 'var(--tw-error)',
  },
} as const;

export type ColorScale = typeof colors;
export type ColorPalette = keyof Omit<ColorScale, 'semantic'>;
export type SemanticColor = keyof ColorScale['semantic'];
