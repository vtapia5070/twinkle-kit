# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run storybook` - Start Storybook development server on port 6006

### Build & Distribution
- `npm run build` - Build library (runs TypeScript, Vite build, and copies CSS assets)
- `npm run build:colors` - Copy colors.css to dist
- `npm run build:tokens` - Build tokens.css using TailwindCSS CLI
- `npm run preview` - Preview production build

### Testing
- `npm test` - Run all unit tests with Vitest
- `npm run test:watch` - Run tests in watch mode during development
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:all` - Run comprehensive test suite (unit + distribution + bundle tests)
- `npm run test:distribution` - Test library exports and built assets
- `npm run test:bundle` - Test bundle size and tree-shaking
- `npm run test:integration` - Test component composition and interactions

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

### Component Generation
- `npm run generate` - Generate new component using Plop templates (creates .tsx, .test.tsx, .stories.tsx, and index.ts files)

### Release Management  
- `npm run release` - Create new release using standard-version (bumps version, generates changelog, creates git tag)
- `npm run release:minor` - Create minor version release
- `npm run release:major` - Create major version release

## Architecture

### Project Structure
- **Library Source**: `lib/` - All library source code
  - `lib/core/components/` - React components (Button, Card, Alert, Input, etc.)
  - `lib/core/tokens/` - Design tokens and CSS custom properties
  - `lib/main.ts` - Main entry point, re-exports everything from core
- **Build Output**: `dist/` - Generated library files for distribution
- **Testing**: `lib/test/` - Integration, distribution, and bundle tests
- **Documentation**: `docs/` - Storybook MDX documentation files
- **Templates**: `plop-templates/` - Handlebars templates for component generation

### Build System
- **Bundler**: Vite with library mode
- **TypeScript**: Strict mode with bundler module resolution
- **CSS**: Tailwind CSS v4 with custom design tokens
- **Entry Points**: Multiple entry points - main (`index`), `core`, and `tokens`
- **Formats**: ES modules (.es.js) and CommonJS (.cjs) with TypeScript definitions

### Component Architecture
Each component follows a consistent pattern:
- `ComponentName.tsx` - Main component implementation
- `ComponentName.test.tsx` - Unit tests using Vitest + React Testing Library
- `ComponentName.stories.tsx` - Storybook stories for documentation and visual testing
- `index.ts` - Component export

Components use:
- React 19 with TypeScript
- Tailwind CSS classes with semantic design tokens
- `clsx` and `tailwind-merge` for conditional styling
- Comprehensive prop interfaces with JSDoc documentation

### Design System
- **CSS Custom Properties**: Defined in `lib/core/tokens/tokens.css`
- **Semantic Colors**: Background, surface, primary, text, border, and state colors
- **Theme Support**: Light/dark mode via CSS custom properties
- **Export**: Tokens available as CSS imports and programmatic access via `tokens` object

### Testing Strategy
Multi-layered approach:
1. **Unit Tests**: Component behavior, props, accessibility
2. **Integration Tests**: Component composition and interactions  
3. **Distribution Tests**: Verify built library exports correctly
4. **Bundle Tests**: Ensure optimal bundle size and tree-shaking
5. **Visual Regression**: Storybook + Chromatic for cross-browser testing

### Code Quality
- **ESLint**: Airbnb config with TypeScript, React, and accessibility rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit linting
- **lint-staged**: Run linting only on staged files

### React Import Conventions
**IMPORTANT**: Always use named imports for React types instead of namespace imports:

✅ **Correct**: 
```tsx
import { ReactNode, ReactElement, ElementType, ChangeEvent } from 'react';

interface Props {
  children: ReactNode;
  element: ReactElement;
  as: ElementType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const MyComponent = ({ children }: Props) => {
  return <div>{children}</div>; // JSX works without React import
};
```

❌ **Incorrect**:
```tsx
import React from 'react';

interface Props {
  children: React.ReactNode;
  element: React.ReactElement;
  as: React.ElementType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

**Rules**:
- NEVER use `React.ReactNode`, `React.ReactElement`, `React.ElementType`, etc.
- ALWAYS import specific types: `import { ReactNode, ReactElement, ElementType } from 'react'`
- NEVER import React default export - modern JSX transform handles this automatically
- Only import the specific types/hooks you need from React