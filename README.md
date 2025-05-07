# Twinkle Kit

A modern React component library built with TypeScript, Vite, and Tailwind CSS. Available on [npm](https://www.npmjs.com/package/twinkle-kit).

## Installation

```bash
npm install twinkle-kit
```

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Testing**: Vitest + React Testing Library
- **Code Quality**:
  - ESLint with TypeScript support
  - Prettier for code formatting
  - Husky for git hooks
  - lint-staged for pre-commit checks

## Usage

Import components directly from the package:

```tsx
import { Button } from 'twinkle-kit';

function App() {
  return <Button onClick={() => console.log('clicked')}>Click me</Button>;
}
```

## Tailwind CSS

This component library uses Tailwind CSS for styling. All components are built with Tailwind utility classes, making them highly customizable. You can extend or override the default styles using Tailwind's utility classes.

### Customization

You can customize the components by passing additional Tailwind classes through the `className` prop:

```tsx
<Button className="bg-red-500 hover:bg-red-600">Custom Button</Button>
```

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Start Storybook:

```bash
npm run storybook
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
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

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
