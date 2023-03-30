import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-electron-plugin';
import { rmSync } from 'fs';

// Remove dir `dist-electron`
rmSync('dist-electron', { recursive: true, force: true });

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    electron({
      // Include our electron code
      include: ['electron']
    })
  ],
  server: {
    host: true
  }
});
