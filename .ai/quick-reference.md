# Quick Reference Card

**Last Updated**: October 5, 2025

> ⚡ **For instant lookups** - Keep this open while coding!

---

## 📚 Documentation Quick Links

| Need | File | Time |
|------|------|------|
| Current work status | `.ai/active-context.md` | 2 min |
| How AI should behave | `.ai/AI-INTERACTION-PROTOCOL.md` | 5 min |
| Quick commands/paths | `.ai/quick-reference.md` (this file) | 1 min |
| Code standards | `.ai/coding-standards.md` | 10 min |
| Update rules | `.ai/MAINTENANCE.md` | 5 min |
| Project overview | `.ai/project-context.md` | 5 min |
| Tech stack | `.ai/tech-stack.md` | 3 min |
| What's completed | `.ai/implementation/completed.md` | 3 min |
| Common issues | `.ai/troubleshooting/common-issues.md` | As needed |

**🎯 Reading Priority**: Start with `active-context.md`, then follow the order in `.ai/README.md`

---

## 🚀 Common Commands

```bash
# Development
pnpm dev              # Start dev server → http://localhost:5173
pnpm build            # Production build → outputs to dist/
pnpm preview          # Preview production build → http://localhost:4173

# Quality
pnpm lint             # Check code quality
pnpm format           # Format with Prettier

# Dependencies
pnpm install          # Install dependencies
pnpm add <package>    # Add new package
```

---

## 📁 File Paths (ALWAYS Use Absolute Paths in HTML)

### HTML References
```html
<!-- ✅ CORRECT - Absolute from project root -->
<link rel="stylesheet" href="/src/styles/main.css">
<script type="module" src="/src/scripts/main.js"></script>
<img src="/src/assets/images/hero.jpg" alt="Hero">

<!-- ❌ WRONG - Relative paths cause 404 -->
<link rel="stylesheet" href="../styles/main.css">
<script src="../scripts/main.js"></script>
```

### JavaScript Imports
```javascript
// ✅ CORRECT - Relative paths with .js extension
import { initNav } from './modules/navigation.js';
import { SOCIAL_LINKS } from './constants.js';
```

### Key Directories
```
/src/pages/          → HTML entry points
/src/scripts/        → JavaScript modules
/src/styles/         → CSS files
/src/assets/images/  → Image files
/src/assets/icons/   → Icon SVGs
/public/             → Static files (robots.txt, sitemap.xml)
```

---

## 🎨 Design System

### Brand Colors
```css
/* Tailwind Classes */
bg-synth-pink      → #FE1E69 (primary brand color)
bg-synth-black     → #000000 (background)
text-synth-white   → #FFFFFF (text)

/* Platform Colors (arbitrary values OK) */
bg-[#5865F2]       → Discord blue
bg-[#FF0000]       → YouTube red
```

### Typography
```css
/* Fonts */
font-heading       → Teko (Google Fonts, weights 300-700)
font-sans          → System font stack

/* Text Sizes (Mobile-first) */
text-2xl md:text-4xl lg:text-6xl    → Responsive headings
text-base md:text-lg                 → Body text
```

### Hero Animations
```css
/* Entrance Effects (NEW) */
animate-fade-in              → Fade in over 0.8s
animate-fade-in-up           → Fade in + slide up from 30px
animate-glow-pulse           → Continuous glow pulsing

/* Animation Delays */
animation-delay-300          → 0.3s delay
animation-delay-500          → 0.5s delay  
animation-delay-600          → 0.6s delay
animation-delay-700          → 0.7s delay
animation-delay-800          → 0.8s delay

/* Motion Safety */
motion-safe:animate-*        → Only animate if user allows motion
```

### Spacing
```css
/* Common Patterns */
px-6 py-8          → Section padding
gap-4 md:gap-6     → Grid/flex gaps
max-w-3xl mx-auto  → Content container (centered)
```

---

## 📐 Responsive Breakpoints

```css
/* Tailwind Breakpoints (Mobile-first) */
sm   → 640px   (small tablets)
md   → 768px   (tablets)
lg   → 1024px  (small desktops)
xl   → 1280px  (desktops)
2xl  → 1536px  (large desktops)

/* Usage Example */
<div class="text-base md:text-lg lg:text-xl">
  <!-- Mobile: base, Tablet: lg, Desktop: xl -->
</div>
```

---

## 🔗 Data Attributes (JS Hooks)

### Current Implementation
```html
<!-- Social Media Links -->
<a data-social-link="discord">Discord</a>
<a data-social-link="youtube">YouTube</a>
<a data-social-link="tiktok">TikTok</a>
<a data-social-link="presskit">Press Kit</a>
<a data-social-link="facebook">Facebook</a>
<a data-social-link="instagram">Instagram</a>
<a data-social-link="twitter">Twitter</a>
<a data-social-link="spotify">Spotify</a>

<!-- Legal/Footer Links -->
<a data-legal-link="privacy">Privacy Policy</a>
<a data-legal-link="conduct">Code of Conduct</a>
<a data-legal-link="eula">EULA</a>
<a data-legal-link="health">Health & Safety</a>
<a data-legal-link="terms">Terms & Conditions</a>

<!-- Navigation (Future) -->
<button data-menu-toggle>Toggle Menu</button>
<nav data-mobile-menu>Menu Content</nav>
```

### JavaScript Usage
```javascript
// Links are auto-populated in main.js
document.querySelectorAll('[data-social-link]').forEach(link => {
  const platform = link.getAttribute('data-social-link');
  link.href = SOCIAL_LINKS[platform];
});
```

---

## 🎯 Constants Location

**File**: `src/scripts/constants.js`

```javascript
// Social Media URLs
export const SOCIAL_LINKS = {
  discord: '#',    // TODO: Add real URL
  youtube: '#',    // TODO: Add real URL
  // ... etc
};

// Legal Page URLs
export const LEGAL_LINKS = {
  privacy: '#',    // TODO: Add real URL
  terms: '#',      // TODO: Add real URL
  // ... etc
};

// Brand Colors (for JS if needed)
export const COLORS = {
  brand: '#FE1E69',
  background: '#000000',
  text: '#FFFFFF',
};
```

---

## 🖼️ Image Optimization

### Loading Strategy
```html
<!-- Above the fold: eager -->
<img src="/src/assets/images/logo.svg" loading="eager" alt="Logo">

<!-- Below the fold: lazy -->
<img src="/src/assets/images/hero.jpg" loading="lazy" alt="Hero">
```

### Always Include
```html
<img 
  src="/path/to/image.jpg"
  alt="Descriptive text"
  width="1200"
  height="630"
  loading="lazy"
  class="w-full h-auto"
>
```

---

## ♿ Accessibility Quick Patterns

### Buttons
```html
<button 
  type="button"
  aria-label="Open navigation menu"
  aria-expanded="false"
  data-menu-toggle
>
  Menu
</button>
```

### Links
```html
<a 
  href="/page"
  aria-label="Read more about feature"
>
  Learn More
</a>
```

### Images
```html
<img src="/image.jpg" alt="Detailed description of image content">
```

### Landmarks
```html
<header>
  <nav aria-label="Main navigation">...</nav>
</header>

<main aria-label="Main content">...</main>

<footer>...</footer>
```

---

## 🔍 Common Debugging

### 404 Errors
```
Problem: Asset not loading (404 error)
Cause: Relative path in HTML
Fix: Use absolute path from project root

❌ <link href="../styles/main.css">
✅ <link href="/src/styles/main.css">
```

### Vite Not Starting
```bash
# Clear cache and restart
rm -rf node_modules/.vite
pnpm install
pnpm dev
```

### CSS Not Applying
```
Problem: Tailwind classes not working
Cause: Typo in class name or missing from config
Fix: Check spelling, ensure class exists in Tailwind

Verify: Open DevTools → Elements → Check computed styles
```

### JavaScript Not Loading
```html
<!-- ✅ Must include type="module" -->
<script type="module" src="/src/scripts/main.js"></script>

<!-- ✅ Must include .js extension in imports -->
import { init } from './navigation.js';  // NOT './navigation'
```

---

## 📦 Key Dependencies

```json
{
  "vite": "^7.0.0",                    // Build tool
  "tailwindcss": "^4.0.0-alpha.30",    // CSS framework
  "vite-plugin-image-optimizer": "*"   // Image optimization
}
```

---

## 🎯 Performance Targets

```
Lighthouse Performance:  ≥95
First Contentful Paint:  <1.8s
Largest Contentful Paint: <2.5s
Cumulative Layout Shift:  <0.1
Total Bundle Size:        <200KB gzipped
```

---

## 🚫 Never Do This

```javascript
// ❌ Never use frameworks
import React from 'react';

// ❌ Never use relative paths in HTML
<link href="../styles/main.css">

// ❌ Never write raw CSS files
// Use Tailwind utilities only

// ❌ Never forget .js extension
import { util } from './utils';

// ❌ Never skip accessibility
<div onclick="doSomething()">Click</div>
```

---

## ✅ Always Do This

```javascript
// ✅ Use vanilla JS with ES modules
const handleClick = () => { ... };

// ✅ Use absolute paths in HTML
<link href="/src/styles/main.css">

// ✅ Use Tailwind utilities
<div class="bg-synth-pink px-4 py-2">

// ✅ Include .js extension
import { util } from './utils.js';

// ✅ Add accessibility attributes
<button aria-label="Close" type="button">
```

---

## 📞 Where to Find Help

| Question | File to Check |
|----------|---------------|
| What am I working on? | `.ai/active-context.md` |
| How should I code? | `.ai/coding-standards.md` |
| What are the AI rules? | `.ai/ai-instructions.md` |
| How does Vite work? | `.ai/feature-guides/vite-config.md` |
| Tailwind 4 details? | `.ai/feature-guides/tailwind4.md` |
| Common issues? | `.ai/troubleshooting/common-issues.md` |
| Complete context? | `.ai/project-context.md` |

---

## 💡 Quick Wins

### Add a New Page
1. Create `src/pages/newpage.html`
2. Add to `vite.config.js` → `build.rollupOptions.input`
3. Update `public/sitemap.xml`
4. Add navigation link in HTML

### Add a New Image
1. Place in `src/assets/images/`
2. Reference with absolute path: `/src/assets/images/filename.jpg`
3. Add `loading="lazy"` (unless above fold)
4. Include `width` and `height` attributes

### Add a New Social Link
1. Update `src/scripts/constants.js` → `SOCIAL_LINKS`
2. Add HTML with `data-social-link="platform"`
3. Link auto-populates on page load

### Update Brand Colors
1. Edit `src/styles/main.css` → `@theme` section
2. Use new color: `bg-your-color-name`
3. Rebuild: `pnpm build`

---

## 🔗 External Links

- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/docs/v4-beta)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**💡 Pro Tip**: Bookmark this file in your editor for instant access!

**Last Updated**: October 5, 2025  
**Maintained By**: Development Team  
**Print Version**: Press Ctrl/Cmd+P for a handy printout
