import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { extname, resolve, relative } from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
import { glob } from 'glob';

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'twinkle-kit',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
      ],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: [
              'lib/**/*.d.ts',
              'lib/**/*.stories.tsx',
              'lib/test/*',
              'lib/**/*.test.tsx',
            ],
          })
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        preserveModules: false,
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'react/jsx-dev-runtime': 'jsxDevRuntime',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
