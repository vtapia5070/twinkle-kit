# Twinkle Kit

A modern React component library built with Tailwind CSS, with visual testing powered by Chromatic.

## 📖 Storybook

View the interactive component library and documentation:

[![Open in Storybook](https://img.shields.io/badge/Open%20in-Storybook-FF4785?style=for-the-badge&logo=storybook)](https://main--682e94b4a008f5591a2429cf.chromatic.com)

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

## Installation

```bash
npm install twinkle-kit
# or
yarn add twinkle-kit
# or
pnpm add twinkle-kit
```

## Getting Started

### Using Components

Import components from `twinkle-kit/core`:

```tsx
import { Button, Card, Alert } from 'twinkle-kit/core';

function App() {
  return (
    <div>
      <Card>
        <Alert>Welcome to Twinkle Kit!</Alert>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}
```

**Note:** This will only import the components. To include the styles import the CSS tokens in a root component file. There are other ways you can use the styles and tokens, see below.

```tsx
import 'twinkle-kit/tokens.css';
```

### Using Design Tokens

**Recommended:** Import the complete CSS (includes design tokens + component styles):

```tsx
import 'twinkle-kit/tokens.css';
```

**Alternative:** If you need design tokens in your build process, you can also import the full styles:

```tsx
import 'twinkle-kit/styles.css';
```

Or import the CSS file directly:

```css
/* In your CSS file */
@import 'twinkle-kit/tokens.css';

.my-component {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}
```

#### Semantic Color Classes

The design system provides convenient utility classes for semantic colors:

```tsx
// Use semantic color classes directly
function MyComponent() {
  return (
    <div className="bg-surface border border-border">
      <h1 className="text-primary">Primary heading</h1>
      <p className="text-secondary">Secondary text</p>
      <button className="bg-primary text-primary-contrast">
        Primary button
      </button>
      <div className="bg-error text-primary-contrast">Error message</div>
    </div>
  );
}
```

**Available utility classes:**

- **Background**: `bg-background`, `bg-surface`, `bg-surface-hover`, `bg-primary`, `bg-primary-hover`, `bg-primary-active`, `bg-primary-disabled`, `bg-error`, `bg-success`, `bg-warning`
- **Text**: `text-primary`, `text-secondary`, `text-disabled`, `text-primary-contrast`, `text-error`, `text-success`, `text-warning`
- **Border**: `border-border`, `border-primary`, `border-error`, `border-success`, `border-warning`

### Available Tokens

The design system includes the following CSS custom properties:

```tsx
import { tokens } from 'twinkle-kit/core/tokens';

// Use tokens in your custom components
const MyComponent = () => (
  <div style={{ color: tokens.colors.primary }}>Custom styled component</div>
);
```

## Components

### Available Components

- `Alert` - Display important messages
- `Button` - Interactive button component
- `Card` - Container component
- `CardHeader` - Card header component
- `CardDescription` - Card description component
- `Input` - Form input component

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build library
npm run build
```

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

## License

MIT

## Styling

Twinkle Kit comes with Tailwind CSS styles bundled, so you don't need to set up Tailwind CSS in your project. The styles are automatically included when you import the components.

### Customization

While the styles are bundled, you can still customize the appearance using:

1. **Props**: Each component accepts a `className` prop for custom styling

   ```jsx
   <Input className="my-custom-class" />
   ```

2. **Theme Extension**: You can extend the default theme by creating a `tailwind.config.js` in your project:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       './node_modules/twinkle-kit/dist/**/*.{js,ts,jsx,tsx}',
       './src/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {
         // Your custom theme extensions
       },
     },
   };
   ```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the library
npm run build

# Start Storybook
npm run storybook
```

### Test Changes

```bash
# Link current working state in ./twinkle-kit
npm link

# In another repo link twinkle-kit
npm link twinkle-kit
```

## Component Generation

This project uses [Plop](https://plopjs.com/) for generating component templates. Plop helps maintain consistency across components by using predefined templates.

### Generating Components

To generate a new component with its associated files (component, story, and test), run:

```bash
npm run generate {{componentName}}
```

This will create:

- A new component file with TypeScript and React setup
- A Storybook story file
- A test file with Vitest and React Testing Library setup

The generated files follow the project's conventions and include all necessary imports and boilerplate code.

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

Twinkle Kit uses a comprehensive testing strategy to ensure component reliability, accessibility, and performance:

### Quick Testing Commands

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run full test suite (before publishing)
npm run test:all
```

### Testing Layers

- **Unit Tests** - Individual component functionality and props, and accessibility
- **Integration Tests** - Component composition and cross-component interactions
- **Distribution Tests** - Built library exports and TypeScript definitions
- **Bundle Analysis** - Tree-shaking support and bundle optimization
- **Visual Regression** - Cross-browser appearance via Storybook + Chromatic

### Comprehensive Testing Guide

For detailed information about our testing strategy, tools, best practices, and how to write tests, see our complete **[Testing Guide](lib/test/README.md)**.

The testing guide covers:

- Testing philosophy and approach
- How to write good component tests
- Accessibility testing guidelines
- Integration testing patterns
- CI/CD testing pipeline
- Debugging and coverage analysis

### Visual Testing

This project uses [Chromatic](https://www.chromatic.com/) for visual testing and component documentation. Every pull request use GH actions to generate a preview of the Storybook that you can view and test. The url format will be `https://www.chromatic.com/library?appId=682e94b4a008f5591a2429cf&branch={{branch-name}}` and commented in the PR.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
