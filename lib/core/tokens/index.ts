// CSS Tokens for twinkle-kit
// Import this file to get access to all CSS custom properties/variables

// Re-export the CSS file as a side effect
import './tokens.css';

// Export token categories for programmatic access if needed
export const tokens = {
  colors: {
    // Primary colors
    primary: {
      1: 'var(--color-primary-1)',
      3: 'var(--color-primary-3)',
      8: 'var(--color-primary-8)',
      9: 'var(--color-primary-9)',
      10: 'var(--color-primary-10)',
      11: 'var(--color-primary-11)',
    },
    // Neutral colors
    neutral: {
      1: 'var(--color-neutral-1)',
      2: 'var(--color-neutral-2)',
      3: 'var(--color-neutral-3)',
      8: 'var(--color-neutral-8)',
      9: 'var(--color-neutral-9)',
      10: 'var(--color-neutral-10)',
      11: 'var(--color-neutral-11)',
    },
    // Semantic colors
    semantic: {
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
      surfaceHover: 'var(--color-surface-hover)',
      border: 'var(--color-border)',
      textPrimary: 'var(--color-text-primary)',
      textSecondary: 'var(--color-text-secondary)',
      textDisabled: 'var(--color-text-disabled)',
      primary: 'var(--color-primary)',
      primaryHover: 'var(--color-primary-hover)',
      primaryActive: 'var(--color-primary-active)',
      primaryDisabled: 'var(--color-primary-disabled)',
      primaryContrast: 'var(--color-primary-contrast)',
    },
    // State colors
    state: {
      error: 'var(--color-error)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
    },
    // Alert colors
    alert: {
      infoBg: 'var(--color-alert-info-bg)',
      infoText: 'var(--color-alert-info-text)',
    },
  },
} as const;
