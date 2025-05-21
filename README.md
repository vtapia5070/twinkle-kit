# Twinkle Kit

A modern React component library built with Tailwind CSS.

## Installation

```bash
npm install twinkle-kit
# or
yarn add twinkle-kit
# or
pnpm add twinkle-kit
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

```jsx
import { Input } from 'twinkle-kit';

function App() {
  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      onChange={(value) => console.log(value)}
    />
  );
}
```

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

# Start development server
npm run dev

# Run tests
npm test

# Build the library
npm run build

# Start Storybook
npm run storybook
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

The project uses Vitest for testing with:

- React Testing Library for component testing
- Jest DOM for DOM testing utilities
- User Event for simulating user interactions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
