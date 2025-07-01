import type { Config } from 'tailwindcss';
import { colors } from './colors';

/**
 * Twinkle Kit Tailwind CSS Plugin
 * 
 * This plugin extends Tailwind CSS with Twinkle Kit's design tokens and utilities.
 * It provides access to all color tokens and custom utilities.
 */
export function twinklePlugin() {
  return function({ addBase, theme }: { addBase: any, theme: any }) {
    // Add base styles if needed
    // addBase({
    //   'html': { fontSize: "16px" },
    // });
  };
}

/**
 * Twinkle Kit Tailwind Theme Extension
 * 
 * Extends the default Tailwind theme with Twinkle Kit's design tokens.
 */
export const twinkleTheme = {
  extend: {
    colors: {
      // Primary colors
      primary: {
        DEFAULT: 'var(--tw-primary, #943cdd)',
        hover: 'var(--tw-primary-hover, #7c2d9a)',
        active: 'var(--tw-primary-active, #6b2d85)',
        ...Object.entries(colors.primary).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: `var(--tw-primary-${key}, ${value})`,
        }), {}),
      },
      
      // Neutral colors
      neutral: Object.entries(colors.neutral).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: `var(--tw-neutral-${key}, ${value})`,
      }), {}),
      
      // Success colors
      success: Object.entries(colors.success).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: `var(--tw-success-${key}, ${value})`,
      }), {}),
      
      // Warning colors
      warning: Object.entries(colors.warning).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: `var(--tw-warning-${key}, ${value})`,
      }), {}),
      
      // Error colors
      error: Object.entries(colors.error).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: `var(--tw-error-${key}, ${value})`,
      }), {}),
      
      // Semantic colors
      semantic: {
        primary: 'var(--tw-primary)',
        primaryHover: 'var(--tw-primary-hover)',
        primaryActive: 'var(--tw-primary-active)',
        background: 'var(--tw-bg)',
        backgroundSecondary: 'var(--tw-bg-secondary)',
        text: 'var(--tw-text)',
        textSecondary: 'var(--tw-text-secondary)',
        border: 'var(--tw-border)',
        hover: 'var(--tw-hover)',
        active: 'var(--tw-active)',
        disabled: 'var(--tw-disabled)',
        success: 'var(--tw-success)',
        warning: 'var(--tw-warning)',
        error: 'var(--tw-error)',
      },
    },
    
    // Extend other theme values as needed
    boxShadow: {
      'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      'none': 'none',
    },
  },
};

// Export the plugin as default
export default twinklePlugin;
