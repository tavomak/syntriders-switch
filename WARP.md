# WARP.md - AI Assistant Entry Point

> **For AI Assistants**: This project uses structured AI documentation in the `.ai/` folder.

---

## 📚 **Essential Reading (In Order)**

1. **Start here**: `.ai/README.md` - Master index and reading priority
2. **Current work**: `.ai/active-context.md` - What's happening NOW ⭐
3. **Quick reference**: `.ai/quick-reference.md` - Commands, paths, and doc links
4. **How to behave**: `.ai/AI-INTERACTION-PROTOCOL.md` - Required AI behavior
5. **Complete rules**: `.ai/ai-instructions.md` - Full AI guidelines
6. **Code patterns**: `.ai/coding-standards.md` - Standards and conventions

**📖 Full documentation structure**: See `.ai/README.md`

---

## ⚡ Quick Start (5 Golden Rules)

### 1. NO FRAMEWORKS ❌
Vanilla JavaScript ES modules ONLY (no React/Vue/Angular/etc.)

### 2. TAILWIND ONLY ❌
Use utility classes, no raw CSS. Customize via `@theme` in `src/styles/main.css`  
**NO `tailwind.config.js`** - Tailwind 4 uses native CSS

### 3. ABSOLUTE PATHS 🔗
HTML: `/src/styles/main.css` NOT `../styles/main.css`

### 4. MOBILE-FIRST 📱
Primary viewport: 375px-768px

### 5. ACCESSIBILITY ♿
ALWAYS include ARIA attributes and semantic HTML

---

## 📝 Essential Patterns

**JavaScript**:
```javascript
const handleClick = (event) => { ... };  // const + arrow functions
import { init } from './navigation.js';  // Always .js extension
```

**HTML**:
```html
<button data-social-link="discord">...</button>     <!-- data-* for JS -->
<button aria-label="Menu" aria-expanded="false">  <!-- ARIA required -->
```

**Tailwind**:
```html
<div class="bg-synth-pink text-synth-white">        <!-- Theme colors -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">     <!-- Mobile-first -->
```

**📖 Complete patterns**: `.ai/coding-standards.md`  
**📋 Quick lookup**: `.ai/quick-reference.md`

---

## 🚨 Critical Don'ts

- ❌ Never suggest React/Vue/Angular/frameworks
- ❌ Never create `tailwind.config.js` (use `@theme` in CSS)
- ❌ Never use relative paths in HTML (use `/src/...`)
- ❌ Never write raw CSS files (Tailwind only)
- ❌ Never skip ARIA attributes

---

## 📖 Project Info

**Project**: Synth Riders Overdrive - Nintendo Switch Landing Page  
**Stack**: Vanilla JS + Tailwind CSS 4 + Vite 7  
**Status**: 🟢 Active Development

**Commands**:
```bash
pnpm dev      # Start dev server → http://localhost:5173
pnpm build    # Production build
pnpm preview  # Preview build
```

**Brand Colors**:
- Synth Pink: `#FE1E69` → `bg-synth-pink`
- Synth Black: `#000000` → `bg-synth-black`
- Synth White: `#FFFFFF` → `text-synth-white`

---

## 🔗 External Resources

- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/docs/v4-beta)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Last Updated**: October 5, 2025  
**For Humans**: See `README.md` for project setup  
**For AI**: Start with `.ai/README.md` for complete documentation
