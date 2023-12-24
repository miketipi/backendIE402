import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: ['chrome89', 'edge89', 'firefox89', 'safari15']
    }
  },
  build: {
    target: ['chrome89', 'edge89', 'firefox89', 'safari15']
  },
  server: { watch: { awaitWriteFinish: true } },
  plugins: [react()],
});
