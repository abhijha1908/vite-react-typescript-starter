import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false, // Allow fallback to another port if 5173 is in use
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.csb.app', // Allow all CodeSandbox subdomains
      '.preview.csb.app'
    ],
    cors: true,
    hmr: {
      host: 'localhost'
    }
  }
});
