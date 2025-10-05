# Common Issues & Solutions

## 🔴 404 Errors in Dev Server

### Issue
CSS or JavaScript files return 404 errors when running `pnpm dev`.

### Solution ✅
**Root Cause**: Incorrect path resolution in HTML files.

**Fix Applied**: Changed to absolute paths from project root:
```html
<!-- ❌ Wrong (relative paths) -->
<link rel="stylesheet" href="../styles/main.css" />

<!-- ✅ Correct (absolute paths) -->
<link rel="stylesheet" href="/src/styles/main.css" />
```

**Details**: See `../TROUBLESHOOTING.md` for complete explanation.

---

## 🔴 Build Outputs HTML to Nested Directory

### Issue
After running `pnpm build`, index.html appears at `dist/src/pages/index.html` instead of `dist/index.html`.

### Solution ✅
**Root Cause**: Vite preserves the input file structure by default.

**Fix Applied**: Custom Vite plugin moves HTML files to dist root:
```javascript
{
  name: 'move-html-to-root',
  closeBundle() {
    renameSync('dist/src/pages/index.html', 'dist/index.html');
  }
}
```

**Status**: Automatically handled by build process.

---

## 🔴 Tailwind Classes Not Working

### Issue
Tailwind utility classes don't apply styles or show warnings.

### Common Causes & Solutions

#### 1. Wrong Configuration File
❌ **Problem**: Created `tailwind.config.js`  
✅ **Solution**: Delete it. Tailwind CSS 4 uses CSS-native configuration in `src/styles/main.css`

#### 2. Missing @import
❌ **Problem**: CSS file doesn't import Tailwind  
✅ **Solution**: Add to top of `src/styles/main.css`:
```css
@import "tailwindcss";
```

#### 3. Vite Cache Issue
❌ **Problem**: Old config cached  
✅ **Solution**:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

---

## 🔴 JavaScript Module Not Loading

### Issue
Console shows "Failed to load module" or import errors.

### Common Causes & Solutions

#### 1. Incorrect Path
❌ **Problem**: Wrong import path  
✅ **Solution**: Use relative imports in JS files:
```javascript
// ❌ Wrong
import { initNav } from 'navigation.js';

// ✅ Correct
import { initNav } from './modules/navigation.js';
```

#### 2. Missing File Extension
❌ **Problem**: Import without `.js` extension  
✅ **Solution**: Always include `.js`:
```javascript
import { initNav } from './modules/navigation'; // ❌
import { initNav } from './modules/navigation.js'; // ✅
```

#### 3. Export Not Defined
❌ **Problem**: Function not exported from module  
✅ **Solution**: Add export keyword:
```javascript
// ❌ Wrong
const initNav = () => { };

// ✅ Correct
export const initNav = () => { };
```

---

## 🔴 Mobile Menu Not Working

### Issue
Clicking hamburger button doesn't toggle menu.

### Debugging Steps

1. **Check Console for Errors**
   ```javascript
   // Should see these logs:
   "🚀 Initializing Synth Riders Switch Landing Page"
   "✅ Navigation module initialized"
   ```

2. **Verify Data Attributes**
   ```html
   <!-- Required attributes -->
   <button data-mobile-menu-toggle>...</button>
   <div data-mobile-menu>...</div>
   <header data-header>...</header>
   ```

3. **Check CSS Classes**
   ```html
   <!-- Menu should have 'hidden' class by default -->
   <div class="md:hidden hidden" data-mobile-menu>
   ```

### Common Fixes

#### Menu Stays Open
**Problem**: `hidden` class not toggling  
**Solution**: Check navigation.js implementation:
```javascript
mobileMenu.classList.toggle('hidden');
```

#### Can't Click Menu Items
**Problem**: Menu closes before link registers  
**Solution**: Menu should close after navigation (already implemented)

---

## 🔴 Build Fails

### Issue
`pnpm run build` command fails with errors.

### Common Causes & Solutions

#### 1. Node Version Too Old
```bash
# Check version
node --version

# Should be 18+
# Use nvm to upgrade if needed
nvm install 22
nvm use 22
```

#### 2. Dependencies Out of Sync
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 3. Import Error
**Problem**: Import statement in production code  
**Solution**: Check for dynamic imports or ensure all modules exist

---

## 🔴 Styles Not Applying in Production

### Issue
Styles work in dev but not after build.

### Debugging Steps

1. **Check dist/index.html**
   - Verify CSS link points to `/assets/main-[hash].css`
   - Check if hash matches file in assets folder

2. **Check Network Tab**
   - Verify CSS file loads (200 status)
   - Check if correct MIME type (text/css)

3. **Check Browser Cache**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
   - Or clear cache completely

### Solution
Usually resolves after:
```bash
# Rebuild with clean cache
rm -rf dist
pnpm run build
```

---

## 🔴 Images Not Loading

### Issue
Images show broken link icon.

### Common Causes & Solutions

#### 1. Wrong Path
❌ **Problem**: Incorrect image path  
✅ **Solution**: Use absolute path from project root:
```html
<!-- ❌ Wrong -->
<img src="images/logo.png" />
<img src="../images/logo.png" />

<!-- ✅ Correct -->
<img src="/src/assets/images/logo.png" />
```

#### 2. File Not in Correct Directory
**Location**: Images must be in `src/assets/images/` or `public/`

**Rule**:
- `src/assets/` - Processed by Vite (optimized, cache busted)
- `public/` - Copied as-is (reference with `/filename.ext`)

#### 3. Missing Alt Attribute
While not breaking, always add:
```html
<img src="/src/assets/images/logo.png" alt="Company Logo" />
```

---

## 🔴 Dev Server Port Already in Use

### Issue
Error: `Port 5173 is already in use`

### Solution
```bash
# Option 1: Kill process using port
lsof -ti:5173 | xargs kill -9

# Option 2: Use different port
pnpm run dev -- --port 3000
```

---

## 🔴 Environment Variables Not Working

### Issue
`import.meta.env.VITE_VARIABLE` returns undefined.

### Common Causes & Solutions

#### 1. Missing VITE_ Prefix
❌ **Problem**: Variable not prefixed  
✅ **Solution**: Add `VITE_` prefix in `.env`:
```bash
# ❌ Wrong
API_ENDPOINT=http://localhost:3000

# ✅ Correct
VITE_API_ENDPOINT=http://localhost:3000
```

#### 2. Server Not Restarted
**Problem**: Changes to `.env` require restart  
**Solution**:
```bash
# Stop dev server (Ctrl+C)
# Then restart
pnpm run dev
```

#### 3. Quotes Around Values
❌ **Problem**: Unnecessary quotes  
✅ **Solution**: No quotes needed in `.env`:
```bash
# ❌ Wrong
VITE_API_URL="http://localhost:3000"

# ✅ Correct
VITE_API_URL=http://localhost:3000
```

---

## 🟡 Warnings in Console

### "Duplicate key" Warnings
**Issue**: Two elements with same ID  
**Solution**: Make IDs unique or use classes instead

### "Invalid ARIA attribute"
**Issue**: Typo in ARIA attribute  
**Solution**: Check MDN for correct ARIA attribute names

### "Mixed Content"
**Issue**: Loading HTTP resources on HTTPS page  
**Solution**: Change URLs to HTTPS or use protocol-relative URLs

---

## 📚 Quick Reference

### When CSS Doesn't Work
1. Check `@import "tailwindcss"` in main.css
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Hard refresh browser: Cmd+Shift+R

### When JavaScript Doesn't Work  
1. Check browser console for errors
2. Verify module imports have `.js` extension
3. Check data attributes match JavaScript selectors

### When Build Fails
1. Check Node version: `node --version` (need 18+)
2. Clean install: `rm -rf node_modules && pnpm install`
3. Check for syntax errors in recent changes

---

**Can't Find Your Issue?**
1. Check `../TROUBLESHOOTING.md` for detailed fixes
2. Check `../WARP.md` for coding guidelines
3. Search project issues on GitHub
4. Ask the development team

**Last Updated**: October 4, 2025
