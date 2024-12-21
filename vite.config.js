import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for static site deployment
export default defineConfig({
  plugins: [react()],
  base: '/marquez-portfolio', // You can change this when deploying
});
