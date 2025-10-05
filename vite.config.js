import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { renameSync, existsSync, mkdirSync } from 'fs';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Custom plugin to resize large images before optimization
function imageResizerPlugin() {
  return {
    name: 'image-resizer',
    async generateBundle(options, bundle) {
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
      const excludePatterns = ['logo', 'icon', 'favicon'];
      
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type === 'asset' && imageExtensions.some(ext => fileName.endsWith(ext))) {
          // Skip small icons and logos
          if (excludePatterns.some(pattern => fileName.toLowerCase().includes(pattern))) {
            continue;
          }
          
          try {
            const image = sharp(asset.source);
            const metadata = await image.metadata();
            
            // Only resize if width > 1920px
            if (metadata.width > 1920) {
              console.log(`📏 Resizing ${fileName}: ${metadata.width}x${metadata.height} → max 1920px width`);
              
              const resizedBuffer = await image
                .resize({
                  width: 1920,
                  withoutEnlargement: true
                })
                .toBuffer();
              
              // Update the asset with resized image
              asset.source = resizedBuffer;
            }
          } catch (error) {
            console.warn(`⚠️ Could not resize ${fileName}:`, error.message);
          }
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    imageResizerPlugin(),
ViteImageOptimizer({
      // Image format specific settings for compression only
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      // SVG optimization settings
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeXMLNS', active: false },
        ],
      },
      // Enable cache for faster subsequent builds
      cache: true,
      cacheLocation: 'node_modules/.vite-image-optimizer',
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
