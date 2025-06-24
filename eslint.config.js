import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import airbnbBase from 'eslint-config-airbnb-base';
import airbnbReact from 'eslint-config-airbnb';
import airbnbTypescript from 'eslint-config-airbnb-typescript';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

// Convert traditional config to flat config format
const airbnbRules = {
  ...airbnbBase.rules,
  ...airbnbReact.rules,
  ...airbnbTypescript.rules,
};

export default [
  // Global ignores configuration - must be first and standalone
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'storybook-static/**',
      'coverage/**',
      'eslint.config.js',
      'plopfile.js',
      'vite.config.ts',
      'vitest.config.ts',
      'vitest.workspace.ts',
    ],
  },
  // Main configuration for TypeScript/React files
  {
    ...js.configs.recommended,
    files: ['lib/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
      prettier: pluginPrettier,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...airbnbRules,
      ...typescriptPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'react/no-unescaped-entities': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
];
