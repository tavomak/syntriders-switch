# 🔧 Troubleshooting Guide

## Issue: 404 Errors in Development Server

### **Problem**
After running `pnpm dev`, the browser showed 404 errors for CSS and JavaScript files.

### **Root Cause**
The Vite configuration was using `root: 'src/pages'`, which changed the context for resolving paths. When HTML files used relative paths like `../styles/main.css` and `../scripts/main.js`, Vite couldn't resolve them because they went outside the defined root directory.

### **Solution Applied** ✅

#### 1. **Updated HTML File Paths**
Changed from relative paths to absolute paths from project root:

**Before:**
```html
<link rel="stylesheet" href="../styles/main.css" />
<script type="module" src="../scripts/main.js"></script>
```

**After:**
```html
<link rel="stylesheet" href="/src/styles/main.css" />
<script type="module" src="/src/scripts/main.js"></script>
```

#### 2. **Simplified Vite Configuration**
Removed the `root: 'src/pages'` configuration to work from the project root instead.

#### 3. **Added Custom Plugin for Build**
Created a custom Vite plugin to move the HTML file from `dist/src/pages/index.html` to `dist/index.html` after build:

```javascript
{
  name: 'move-html-to-root',
  closeBundle() {
    const sourcePath = resolve(__dirname, 'dist/src/pages/index.html');
    const destPath = resolve(__dirname, 'dist/index.html');
    
    if (existsSync(sourcePath)) {
      renameSync(sourcePath, destPath);
      console.log('✓ Moved index.html to dist root');
    }
  },
}
```

### **Verification** ✅

#### Development Server
```bash
pnpm run dev
```
- ✅ Server starts on `http://localhost:5173`
- ✅ Navigate to `/src/pages/index.html`
- ✅ CSS loads correctly from `/src/styles/main.css`
- ✅ JavaScript loads correctly from `/src/scripts/main.js`
- ✅ No 404 errors in console

#### Production Build
```bash
pnpm run build
```
- ✅ Builds successfully
- ✅ Outputs `dist/index.html` (root level)
- ✅ Outputs `dist/assets/` with hashed files
- ✅ Outputs `dist/robots.txt` and `dist/sitemap.xml`

### **Current Vite Configuration**

```javascript
import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { renameSync, existsSync } from 'fs';
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
```

---

## Common Issues & Solutions

### Issue: CSS not loading
**Solution**: Verify the path in HTML is `/src/styles/main.css` (absolute from project root)

### Issue: JavaScript not loading
**Solution**: Verify the path in HTML is `/src/scripts/main.js` (absolute from project root)

### Issue: Build outputs HTML to nested directory
**Solution**: The custom `move-html-to-root` plugin handles this automatically

### Issue: Images not loading
**Solution**: Place images in `src/assets/images/` and reference them with `/src/assets/images/filename.jpg`

---

## How to Run the Project

### Development
```bash
# Start dev server (auto-opens browser)
pnpm run dev

# Manual navigation
# Open: http://localhost:5173/src/pages/index.html
```

### Production Build
```bash
# Build
pnpm run build

# Preview
pnpm run preview

# Preview opens at: http://localhost:4173
```

---

## File Structure Reference

```
synthriders-switch/
├── src/
│   ├── pages/
│   │   └── index.html          → Access at /src/pages/index.html
│   ├── styles/
│   │   └── main.css            → Reference as /src/styles/main.css
│   ├── scripts/
│   │   ├── main.js             → Reference as /src/scripts/main.js
│   │   └── modules/
│   │       └── navigation.js   → Imported by main.js
│   └── assets/
│       ├── images/             → Reference as /src/assets/images/...
│       └── icons/              → Reference as /src/assets/icons/...
│
├── public/
│   ├── robots.txt              → Copied to dist/robots.txt
│   └── sitemap.xml             → Copied to dist/sitemap.xml
│
└── dist/ (after build)
    ├── index.html              ← Moved here by custom plugin
    ├── assets/
    │   ├── main-[hash].css
    │   └── main-[hash].js
    ├── robots.txt
    └── sitemap.xml
```

---

## Path Resolution Rules

### In HTML Files
- ✅ **Use**: Absolute paths from project root
  - `/src/styles/main.css`
  - `/src/scripts/main.js`
  - `/src/assets/images/logo.png`

- ❌ **Avoid**: Relative paths
  - `../styles/main.css`
  - `../../assets/images/logo.png`

### In JavaScript Files
- ✅ **Use**: Relative imports between modules
  - `import { initNav } from './modules/navigation.js'`
  - `import utils from '../lib/utils.js'`

### In CSS Files
- ✅ **Use**: Relative paths for assets
  - `url('../assets/images/bg.jpg')`
  - `url('./fonts/custom.woff2')`

---

## Testing Checklist

After fixing the configuration, verify:

- [ ] Dev server starts without errors: `pnpm run dev`
- [ ] Homepage loads: Visit `http://localhost:5173/src/pages/index.html`
- [ ] No 404 errors in browser console (F12)
- [ ] CSS styles apply correctly
- [ ] JavaScript runs (check console logs)
- [ ] Mobile menu toggles
- [ ] Build completes: `pnpm run build`
- [ ] Preview works: `pnpm run preview`
- [ ] `dist/index.html` exists at root level

---

## Additional Notes

### Why Absolute Paths?
Using absolute paths from the project root (`/src/...`) ensures:
1. Paths work consistently in dev and production
2. No path resolution issues with different root configurations
3. Easier to debug (clear where files are located)

### Why Custom Plugin?
The custom `move-html-to-root` plugin ensures:
1. Clean dist structure (`dist/index.html` not `dist/src/pages/index.html`)
2. Compatible with static hosting (S3, CloudFront, Netlify, Vercel)
3. SEO-friendly URLs (root-level HTML files)

### Future Contact Page
When adding `contact.html`:
1. Create `src/pages/contact.html`
2. Use same absolute paths: `/src/styles/main.css`, `/src/scripts/main.js`
3. Add to Vite config input: `contact: resolve(__dirname, 'src/pages/contact.html')`
4. Update plugin to move both HTML files to dist root

---

**Last Updated**: October 4, 2025  
**Status**: ✅ **RESOLVED - Working correctly**
