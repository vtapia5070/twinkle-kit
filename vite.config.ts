import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { peerDependencies } from './package.json';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, './lib/main.ts'),
      name: 'twinkle-kit',
      fileName: (format) => `ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        preserveModules: false,
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
