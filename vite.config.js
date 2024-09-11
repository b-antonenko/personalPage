import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig(() => ({
  build: {
    outDir: 'dist',
  },
  plugins: [react(), svgr()],
}));
