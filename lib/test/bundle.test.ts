import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('Bundle Analysis', () => {
  beforeAll(() => {
    // Ensure library is built before testing
    if (!fs.existsSync('dist')) {
      execSync('npm run build', { stdio: 'inherit' });
    }
  });

  describe('Bundle Size', () => {
    it('should have reasonable bundle sizes', () => {
      const distPath = path.join(process.cwd(), 'dist');

      // Check main bundles exist and have reasonable sizes
      const coreEsFile = path.join(distPath, 'core.es.js');
      const tokensEsFile = path.join(distPath, 'tokens.es.js');

      expect(fs.existsSync(coreEsFile)).toBe(true);
      expect(fs.existsSync(tokensEsFile)).toBe(true);

      // Core bundle should be small (just re-exports)
      const coreStats = fs.statSync(coreEsFile);
      expect(coreStats.size).toBeLessThan(1000); // Less than 1KB for re-exports

      // Tokens should be reasonable size
      const tokensStats = fs.statSync(tokensEsFile);
      expect(tokensStats.size).toBeLessThan(5000); // Less than 5KB for tokens
    });

    it('should generate source maps', () => {
      const distPath = path.join(process.cwd(), 'dist');

      expect(fs.existsSync(path.join(distPath, 'core.es.js.map'))).toBe(true);
      expect(fs.existsSync(path.join(distPath, 'tokens.es.js.map'))).toBe(true);
    });
  });

  describe('Tree Shaking Support', () => {
    it('should use ES modules for tree shaking', () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

      // Should have module field pointing to ES build
      expect(pkg.module).toContain('.es.js');

      // Exports should support import/require
      expect(pkg.exports['./core'].import).toContain('.es.js');
      expect(pkg.exports['./core/tokens'].import).toContain('.es.js');
    });

    it('should export individual components for tree shaking', async () => {
      // Test that individual imports work (enables tree shaking)
      // @ts-expect-error - Intentionally importing built file for testing
      const coreModule = await import('../../dist/core.es.js');

      // Should be able to destructure individual components
      const { Button, Alert } = coreModule;
      expect(Button).toBeDefined();
      expect(Alert).toBeDefined();
    });
  });

  describe('File Structure', () => {
    it('should generate all expected output files', () => {
      const distPath = path.join(process.cwd(), 'dist');

      const expectedFiles = [
        'index.es.js',
        'index.cjs.js',
        'core.es.js',
        'core.cjs.js',
        'tokens.es.js',
        'tokens.cjs.js',
        'index.d.ts',
        'core.d.ts',
        'tokens.d.ts',
        'colors.css',
        'tokens.css',
      ];

      expectedFiles.forEach((file) => {
        expect(fs.existsSync(path.join(distPath, file))).toBe(true);
      });
    });

    it('should not include unnecessary files', () => {
      const distPath = path.join(process.cwd(), 'dist');
      const files = fs.readdirSync(distPath);

      // Should not include source files
      const sourceFiles = files.filter(
        (file) =>
          file.endsWith('.tsx') ||
          (file.endsWith('.ts') && !file.endsWith('.d.ts'))
      );
      expect(sourceFiles).toHaveLength(0);
    });
  });
});
