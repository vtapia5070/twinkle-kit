# Testing Guide for Twinkle Kit

This document outlines the comprehensive testing strategy for the Twinkle Kit component library.

## Testing Layers

### 1. Unit Tests 🧪

**Location**: `lib/core/components/*/Component.test.tsx`
**Purpose**: Test individual component functionality, props, and behavior

```bash
npm run test              # Run all tests
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run with coverage report
```

**What we test:**

- Component rendering
- Props handling
- Event handlers
- Edge cases and error states
- Component variants and states

### 2. Integration Tests 🔗

**Location**: `lib/test/integration.test.tsx`
**Purpose**: Test how components work together in realistic scenarios

```bash
npm run test:integration
```

**What we test:**

- Component composition (Card + Header + Button)
- Form interactions (Input + Button + validation)
- Complex UI patterns
- Data flow between components

**What we test:**

- ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management
- Semantic HTML structure

### 3. Distribution Tests 📦

**Location**: `lib/test/distribution.test.ts`
**Purpose**: Verify the built library works correctly

```bash
npm run test:distribution
```

**What we test:**

- All components export correctly
- TypeScript definitions are generated
- CSS files are built properly
- Package.json exports configuration
- Import paths work as expected

### 4. Bundle Analysis Tests 📊

**Location**: `lib/test/bundle.test.ts`
**Purpose**: Ensure optimal bundle size and tree-shaking

```bash
npm run test:bundle
```

**What we test:**

- Bundle sizes are reasonable
- Tree-shaking support
- ES modules are generated
- Source maps are created
- No unnecessary files included

### 5. Visual Regression Tests 👁️

**Platform**: Storybook + Chromatic
**Purpose**: Catch visual changes across browsers and viewports

```bash
npm run storybook        # Start Storybook locally
npm run chromatic        # Run visual tests on Chromatic
```

**What we test:**

- Component appearance
- Responsive behavior
- Theme variations (light/dark)
- Cross-browser consistency

## Testing Commands

### Quick Commands

```bash
# Run all unit tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode during development
npm run test:watch
```

### Comprehensive Testing

```bash
# Run everything before publishing
npm run test:all

# Test specific areas
npm run test:integration
npm run test:distribution
npm run test:bundle
```

### CI/CD Testing

```bash
# Pre-publish testing (runs automatically)
npm run prepublishOnly
```

## Testing Best Practices

### 1. Component Tests

- ✅ Test user interactions, not implementation details
- ✅ Use `@testing-library/react` for DOM queries
- ✅ Test accessibility features
- ✅ Mock external dependencies
- ✅ Test error states and edge cases

### 2. Writing Good Tests

```tsx
// ✅ Good - tests behavior
it('should call onChange when user types', async () => {
  const handleChange = vi.fn();
  render(<Input onChange={handleChange} />);

  await user.type(screen.getByRole('textbox'), 'test');

  expect(handleChange).toHaveBeenCalledWith('test');
});

// ❌ Avoid - tests implementation
it('should set state when typing', () => {
  // Don't test internal state
});
```

### 3. Accessibility Testing

```tsx
// ✅ Test ARIA attributes
expect(input).toHaveAttribute('aria-invalid', 'true');

// ✅ Test keyboard navigation
await user.tab();
expect(button).toHaveFocus();

// ✅ Test screen reader content
expect(screen.getByRole('alert')).toHaveTextContent('Error message');
```

## Coverage Goals

| Area        | Target Coverage |
| ----------- | --------------- |
| Components  | 90%+            |
| Utilities   | 95%+            |
| Integration | 80%+            |
| Overall     | 85%+            |

## Continuous Integration

### GitHub Actions / CI Pipeline

```yaml
- name: Run Tests
  run: |
    npm install
    npm run test:coverage
    npm run test:distribution
    npm run test:bundle
    npm run chromatic
```

### Pre-commit Hooks

- Lint code
- Run affected tests
- Check TypeScript

### Pre-publish Checks

- Full test suite
- Build verification
- Bundle analysis
- Visual regression tests

## Tools & Dependencies

- **Vitest**: Fast unit test runner
- **React Testing Library**: Component testing utilities
- **@testing-library/user-event**: User interaction simulation
- **@testing-library/jest-dom**: Custom matchers
- **Storybook**: Component playground and documentation
- **Chromatic**: Visual regression testing
- **@vitest/coverage-v8**: Code coverage reporting

## Debugging Tests

### VS Code Integration

1. Install Vitest extension
2. Run tests in debug mode
3. Set breakpoints in test files

### Browser Debugging

```bash
npm run test:ui  # Opens Vitest UI in browser
```

### Coverage Reports

```bash
npm run test:coverage
# Opens coverage report in browser
open coverage/index.html
```
