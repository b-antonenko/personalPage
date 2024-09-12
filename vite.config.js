import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import eslint from 'vite-plugin-eslint';

export default defineConfig(() => ({
  build: {
    outDir: 'dist',
    minify: false,
  },
  plugins: [react(), svgr(), eslint()],
}));
