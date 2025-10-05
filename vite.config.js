import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { renameSync, existsSync, mkdirSync } from 'fs';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
    {
      name: 'move-html-to-root',
      closeBundle() {
        // Move index.html from dist/src/pages/ to dist/
        const sourcePath = resolve(__dirname, 'dist/src/pages/index.html');
        const destPath = resolve(__dirname, 'dist/index.html');
        
        if (existsSync(sourcePath)) {
          renameSync(sourcePath, destPath);
          console.log('✓ Moved index.html to dist root');
        }
      },
    },
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        // contact: resolve(__dirname, 'src/pages/contact.html'), // TODO: Add when contact page is ready
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  server: {
    open: '/src/pages/index.html',
  },
});
