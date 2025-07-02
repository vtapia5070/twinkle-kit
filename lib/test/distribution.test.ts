import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('Distribution Tests', () => {
  beforeAll(() => {
    // Ensure library is built before testing
    if (!fs.existsSync('dist')) {
      execSync('npm run build', { stdio: 'inherit' });
    }
  });

  describe('Package Exports', () => {
    it('should export all components from main entry', async () => {
      // @ts-expect-error - Intentionally importing built file for testing
      const mainModule = await import('../../dist/index.es.js');

      const expectedComponents = [
        'Alert',
        'Button',
        'Card',
        'CardHeader',
        'CardDescription',
        'Input',
      ];

      expectedComponents.forEach((component) => {
        expect(mainModule[component]).toBeDefined();
        expect(typeof mainModule[component]).toBe('function');
      });
    });

    it('should export all components from core entry', async () => {
      // @ts-expect-error - Intentionally importing built file for testing
      const coreModule = await import('../../dist/core.es.js');

      const expectedComponents = [
        'Alert',
        'Button',
        'Card',
        'CardHeader',
        'CardDescription',
        'Input',
      ];

      expectedComponents.forEach((component) => {
        expect(coreModule[component]).toBeDefined();
        expect(typeof coreModule[component]).toBe('function');
      });
    });

    it('should export tokens from tokens entry', async () => {
      // @ts-expect-error - Intentionally importing built file for testing
      const tokensModule = await import('../../dist/tokens.es.js');

      expect(tokensModule.tokens).toBeDefined();
      expect(tokensModule.tokens.colors).toBeDefined();
      expect(tokensModule.tokens.colors.primary).toBeDefined();
      expect(tokensModule.tokens.colors.neutral).toBeDefined();
    });
  });

  describe('CSS Files', () => {
    it('should generate styles.css', () => {
      const stylesPath = path.join(process.cwd(), 'dist', 'styles.css');
      expect(fs.existsSync(stylesPath)).toBe(true);

      const content = fs.readFileSync(stylesPath, 'utf8');
      expect(content.length).toBeGreaterThan(0);
    });

    it('should generate tokens.css with CSS variables', () => {
      const tokensPath = path.join(process.cwd(), 'dist', 'tokens.css');
      expect(fs.existsSync(tokensPath)).toBe(true);

      const content = fs.readFileSync(tokensPath, 'utf8');
      expect(content).toContain('--color-primary');
      expect(content).toContain('--color-neutral');
      expect(content).toContain(':root');
    });
  });

  describe('TypeScript Definitions', () => {
    it('should generate index.d.ts', () => {
      const indexDts = path.join(process.cwd(), 'dist', 'index.d.ts');
      expect(fs.existsSync(indexDts)).toBe(true);
    });

    it('should generate core.d.ts', () => {
      const coreDts = path.join(process.cwd(), 'dist', 'core.d.ts');
      expect(fs.existsSync(coreDts)).toBe(true);

      const content = fs.readFileSync(coreDts, 'utf8');
      expect(content).toContain('export declare const Alert');
      expect(content).toContain('export declare const Button');
    });

    it('should generate tokens.d.ts', () => {
      const tokensDts = path.join(process.cwd(), 'dist', 'tokens.d.ts');
      expect(fs.existsSync(tokensDts)).toBe(true);
    });
  });

  describe('Package.json Exports', () => {
    it('should have correct exports configuration', () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

      expect(pkg.exports['.']).toBeDefined();
      expect(pkg.exports['./core']).toBeDefined();
      expect(pkg.exports['./core/tokens']).toBeDefined();
      expect(pkg.exports['./styles.css']).toBeDefined();
      expect(pkg.exports['./tokens.css']).toBeDefined();
    });
  });
});
