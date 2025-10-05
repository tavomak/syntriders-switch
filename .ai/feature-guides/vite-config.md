# Vite Configuration Guide

**Last Updated**: October 5, 2025

---

## 📦 Overview

This project uses **Vite 7** as the build tool. The configuration supports:
- Multi-page builds
- Image optimization
- Custom HTML output structure
- Development server with HMR

---

## 🔧 Current Configuration

**File**: `vite.config.js`

### Key Settings

```javascript
export default defineConfig({
  // Root stays at project root (NOT src/pages)
  // This prevents 404 errors with absolute paths
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        // Add more pages here as needed
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  
  plugins: [
    ViteImageOptimizer(), // Optimizes images during build
    moveHtmlPlugin(),     // Moves HTML from nested folders to dist root
  ],
});
```

---

## 🚨 Critical Rules

### 1. Never Change `root` Setting
```javascript
// ❌ WRONG - Causes 404 errors
export default defineConfig({
  root: 'src/pages', // DO NOT DO THIS
});

// ✅ CORRECT - Leave root at project root
export default defineConfig({
  // No root setting = uses project root
});
```

**Why?** Changing `root` breaks absolute path resolution in HTML files.

### 2. HTML Must Use Absolute Paths
```html
<!-- ✅ CORRECT - Works with current config -->
<link rel="stylesheet" href="/src/styles/main.css">
<script type="module" src="/src/scripts/main.js"></script>

<!-- ❌ WRONG - Causes 404 in dev server -->
<link rel="stylesheet" href="../styles/main.css">
<script src="../scripts/main.js"></script>
```

### 3. Custom HTML Move Plugin
The `moveHtmlPlugin()` moves built HTML files to `dist/` root:

```javascript
const moveHtmlPlugin = () => ({
  name: 'move-html',
  closeBundle: async () => {
    const htmlFiles = await glob('dist/**/*.html');
    for (const file of htmlFiles) {
      const fileName = path.basename(file);
      await fs.move(file, path.join('dist', fileName), { overwrite: true });
    }
  },
});
```

**Result**: `dist/pages/index.html` → `dist/index.html`

---

## 📁 File Structure After Build

```
dist/
├── index.html              ← Moved from dist/pages/
├── assets/
│   ├── index-[hash].css    ← Hashed for cache busting
│   ├── index-[hash].js     ← Hashed for cache busting
│   └── images/
│       └── [optimized images]
└── robots.txt
└── sitemap.xml
```

---

## 🎯 Multi-Page Configuration

To add more pages:

```javascript
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'src/pages/index.html'),
      about: resolve(__dirname, 'src/pages/about.html'),
      contact: resolve(__dirname, 'src/pages/contact.html'),
    },
  },
},
```

**Result**: `dist/index.html`, `dist/about.html`, `dist/contact.html`

---

## 🖼️ Image Optimization

**Plugin**: `vite-plugin-image-optimizer`

### Configuration
```javascript
ViteImageOptimizer({
  png: { quality: 80 },
  jpeg: { quality: 80 },
  jpg: { quality: 80 },
  webp: { quality: 80 },
})
```

### Usage in HTML
```html
<!-- Vite transforms this during build -->
<img src="/src/assets/images/hero.jpg" alt="Hero">

<!-- Becomes (in production) -->
<img src="/assets/hero-a1b2c3d4.jpg" alt="Hero">
```

---

## 🔍 Troubleshooting

### Issue: 404 Errors on CSS/JS in Dev Server

**Symptom**: Console shows 404 for `/src/styles/main.css`

**Cause**: Using relative paths in HTML

**Fix**: Change to absolute paths from project root
```html
<!-- ❌ WRONG -->
<link rel="stylesheet" href="../styles/main.css">

<!-- ✅ CORRECT -->
<link rel="stylesheet" href="/src/styles/main.css">
```

### Issue: HTML Not in Dist Root

**Symptom**: Build outputs `dist/pages/index.html` instead of `dist/index.html`

**Cause**: `moveHtmlPlugin` not working

**Fix**: Verify plugin is in `vite.config.js`:
```javascript
plugins: [
  moveHtmlPlugin(), // Must be included
],
```

### Issue: Images Not Optimized

**Symptom**: Large image file sizes in build

**Fix**: Verify `ViteImageOptimizer` plugin is installed and configured:
```bash
pnpm add -D vite-plugin-image-optimizer
```

---

## 📊 Build Performance

### Current Metrics
- Build time: ~110ms (fast!)
- Output size: ~55KB total (gzipped)
- Chunk splitting: Automatic

### Optimization Tips
1. Keep JavaScript modules small
2. Use dynamic imports for non-critical features
3. Let Vite handle code splitting (don't manually bundle)

---

## 🚀 Commands

```bash
# Development server (HMR enabled)
pnpm dev
# → http://localhost:5173

# Production build
pnpm build
# → Outputs to dist/

# Preview production build locally
pnpm preview
# → http://localhost:4173
```

---

## 🔗 Related Documentation

- [Vite Documentation](https://vitejs.dev/)
- [Rollup Options](https://rollupjs.org/configuration-options/)
- Image Optimizer: [vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer)

---

**Remember**: Never change the `root` setting or use relative paths in HTML. These are the two most common causes of 404 errors in this project.
