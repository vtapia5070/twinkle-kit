# Twinkle Kit

A modern React application built with TypeScript, Vite, and a comprehensive development tooling setup.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Testing**: Vitest + React Testing Library
- **Code Quality**:
  - ESLint with TypeScript support
  - Prettier for code formatting
  - Husky for git hooks
  - lint-staged for pre-commit checks

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Run tests:

```bash
npm test
```

## Code Quality Tools

### ESLint Configuration

This project uses a comprehensive ESLint setup with:

- TypeScript support via `@typescript-eslint`
- React specific rules via `eslint-plugin-react` and `eslint-plugin-react-hooks`
- Airbnb style guide via `eslint-config-airbnb-typescript`
- Prettier integration via `eslint-config-prettier` and `eslint-plugin-prettier`

### Prettier Configuration

Code formatting is handled by Prettier with the following settings:

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

### Git Hooks

The project uses Husky and lint-staged to ensure code quality:

- Pre-commit hooks run ESLint and Prettier on staged files
- TypeScript type checking is enforced

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm test` - Run tests

## VS Code Configuration

The project includes VS Code settings for optimal development experience:

- Format on save enabled
- Prettier as default formatter
- TypeScript and JavaScript support configured

## TypeScript Configuration

The project uses strict TypeScript settings with:

- ES2020 target
- React JSX support
- Strict type checking
- Module bundling support
- Path aliases configured

## Testing

The project uses Vitest for testing with:

- React Testing Library for component testing
- Jest DOM for DOM testing utilities
- User Event for simulating user interactions
