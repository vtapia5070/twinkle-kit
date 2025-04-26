import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginPrettier from "eslint-plugin-prettier";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbReact from "eslint-config-airbnb";
import airbnbTypescript from "eslint-config-airbnb-typescript";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

// Convert traditional config to flat config format
const airbnbRules = {
  ...airbnbBase.rules,
  ...airbnbReact.rules,
  ...airbnbTypescript.rules,
};

const commonPlugins = {
  '@typescript-eslint': typescriptPlugin,
  react: pluginReact,
  'react-hooks': pluginReactHooks,
  'react-refresh': pluginReactRefresh,
  prettier: pluginPrettier,
  import: pluginImport,
  'jsx-a11y': pluginJsxA11y,
};

export default [
  js.configs.recommended,
  // Configuration for app TypeScript files
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: commonPlugins,
    rules: {
      ...airbnbRules,
      ...typescriptPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      // Override some Airbnb rules that conflict with our setup
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
  },
  // Configuration for config TypeScript files
  {
    files: ['*.config.ts', 'vite.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.node.json',
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: pluginPrettier,
      import: pluginImport,
    },
    rules: {
      ...airbnbBase.rules, // Use only base rules for config files
      ...typescriptPlugin.configs.recommended.rules,
      'import/prefer-default-export': 'off',
    },
  },
];