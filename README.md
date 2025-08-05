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
      <span className="text-accent">Accent/brand text</span>
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
- **Text**: `text-primary` (readable text), `text-secondary`, `text-disabled`, `text-accent` (brand color), `text-primary-contrast`, `text-error`, `text-success`, `text-warning`
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

# Start Storybook
npm run storybook
```

### Component Generation

This project uses [Plop](https://plopjs.com/) for generating component templates:

```bash
npm run generate {{componentName}}
```

This creates a component with TypeScript, Storybook story, and test files.

### Test Changes

```bash
# Link current working state in ./twinkle-kit
npm link

# In another repo link twinkle-kit
npm link twinkle-kit
```

## Releasing

### Prerequisites

- Ensure all tests pass: `npm run test:all`
- Ensure linting passes: `npm run lint`
- Ensure build works: `npm run build`

### Release Process

1. **Make changes and commit with conventional format**:

   ```bash
   git add .
   git commit -m "feat: add new typography components"
   ```

2. **Create release** (this updates version, generates changelog, and creates tag):

   ```bash
   npm run release
   ```

3. **Push changes and tags**:

   ```bash
   git push --follow-tags
   ```

4. **CI automatically publishes** to npm when the tag is pushed.

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features (minor version)
- `fix:` - Bug fixes (patch version)
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks
- `BREAKING CHANGE:` - Breaking changes (major version)

### Version Bumps

- **Patch** (`1.0.0` → `1.0.1`): Bug fixes
- **Minor** (`1.0.0` → `1.1.0`): New features
- **Major** (`1.0.0` → `2.0.0`): Breaking changes

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

For detailed testing information, see our **[Testing Guide](lib/test/README.md)**.

### Visual Testing

This project uses [Chromatic](https://www.chromatic.com/) for visual testing. Every pull request generates a preview URL that will be commented in the PR.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm test` - Run tests
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run generate` - Generate new component
- `npm run release` - Create new release

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
