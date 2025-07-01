# Twinkle Kit Color System

Twinkle Kit provides a comprehensive color system that includes:

1. **Color Tokens** - Design tokens for consistent theming
2. **CSS Variables** - Global CSS custom properties
3. **Tailwind Integration** - Seamless integration with Tailwind CSS

## Installation

```bash
npm install twinkle-kit
```

## Usage

### 1. Using Color Tokens (JavaScript/TypeScript)

Import the color tokens in your JavaScript/TypeScript files:

```tsx
import { colors } from 'twinkle-kit/colors';

// Access colors
const primaryColor = colors.primary[500]; // '#943cdd'
const successColor = colors.success[500]; // '#22c55e'
const textColor = colors.semantic.text; // 'var(--tw-text)'
```

### 2. Using CSS Variables

Import the CSS variables in your main CSS file:

```css
@import 'twinkle-kit/variables.css';

/* Use the variables */
.my-element {
  color: var(--tw-primary);
  background-color: var(--tw-bg);
  border: 1px solid var(--tw-border);
}
```

### 3. Using with Tailwind CSS

#### Option 1: Extend your Tailwind config

```js
// tailwind.config.js
const { twinkleTheme } = require('twinkle-kit/tailwind');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/twinkle-kit/dist/**/*.js'
  ],
  theme: {
    extend: {
      ...twinkleTheme.extend,
    },
  },
  plugins: [],
};
```

#### Option 2: Use the plugin

```js
// tailwind.config.js
const { twinklePlugin } = require('twinkle-kit/tailwind');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/twinkle-kit/dist/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    twinklePlugin(),
  ],
};
```

## Color Tokens Reference

### Primary Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `primary.50` | `#fdfcfe` | Lightest shade |
| `primary.100` | `#f6edff` | Lighter shade |
| `primary.200` | `#e9d2ff` | Light shade |
| `primary.300` | `#d8a9ff` | 
| `primary.400` | `#c46fff` | 
| `primary.500` | `#943cdd` | Main primary color |
| `primary.600` | `#7c2d9a` | Hover state |
| `primary.700` | `#6b2d85` | Active state |
| `primary.800` | `#5a2a6e` | 
| `primary.900` | `#4c265d` | 
| `primary.950` | `#2f0e3f` | Darkest shade |

### Semantic Colors

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `semantic.primary` | `#943cdd` | `#c46fff` | Primary brand color |
| `semantic.primaryHover` | `#7c2d9a` | `#a64de3` | Primary hover state |
| `semantic.primaryActive` | `#6b2d85` | `#943cdd` | Primary active state |
| `semantic.background` | `#ffffff` | `#0f172a` | Page background |
| `semantic.backgroundSecondary` | `#f8fafc` | `#1e293b` | Secondary background |
| `semantic.text` | `#1a1a1a` | `#f8fafc` | Primary text |
| `semantic.textSecondary` | `#64748b` | `#94a3b8` | Secondary text |
| `semantic.border` | `#e2e8f0` | `#334155` | Border color |
| `semantic.hover` | `#f1f5f9` | `#1e293b` | Hover state |
| `semantic.active` | `#e2e8f0` | `#334155` | Active state |
| `semantic.disabled` | `#cbd5e1` | `#475569` | Disabled state |
| `semantic.success` | `#22c55e` | `#22c55e` | Success state |
| `semantic.warning` | `#f59e0b` | `#f59e0b` | Warning state |
| `semantic.error` | `#ef4444` | `#ef4444` | Error state |

## Theming

Twinkle Kit supports both light and dark modes out of the box. The colors automatically adjust based on the user's system preferences.

### Forced Theme

To force a specific theme, add the `data-theme` attribute to your HTML element:

```html
<html data-theme="dark">
  <!-- Dark theme will be applied -->
</html>
```

Or use the `theme-{light|dark}` class:

```html
<html class="theme-dark">
  <!-- Dark theme will be applied -->
</html>
```

## Customization

You can customize the color scheme by overriding the CSS variables in your own CSS:

```css
:root {
  --tw-primary: #8b5cf6; /* Change primary color */
  --tw-bg: #f9fafb;      /* Change background */
  --tw-text: #1f2937;    /* Change text color */
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --tw-primary: #a78bfa;
    --tw-bg: #111827;
    --tw-text: #f9fafb;
  }
}
```

## TypeScript Support

All color tokens are fully typed. You can import the types like this:

```typescript
import type { ColorScale, ColorPalette, SemanticColor } from 'twinkle-kit/colors';

// Example usage with TypeScript
function getColor(scale: ColorPalette, shade: keyof ColorScale[ColorPalette]) {
  return colors[scale][shade];
}

// For semantic colors
function getSemanticColor(color: SemanticColor) {
  return colors.semantic[color];
}
```
