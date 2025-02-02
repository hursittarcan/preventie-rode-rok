import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for your build
  },
  server: {
    // Enable SPA fallback for React Router
    fs: {
      allow: ['..'], // Ensure Vite serves files correctly in local dev
    },
  },
  preview: {
    port: 4173, // Custom port for Vite preview server
  },
});
