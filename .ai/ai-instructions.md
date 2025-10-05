# AI Assistant Instructions

**Purpose**: Explicit rules for AI assistants (Warp AI, Claude, Copilot, Cursor, Windsurf) working on this project.

**Last Updated**: October 5, 2025

---

## 🎯 Primary Directive

This is a **vanilla JavaScript + Tailwind CSS 4 + Vite** static marketing site. 

**NEVER suggest**:
- ❌ React, Vue, Svelte, or any JavaScript framework
- ❌ Angular, Next.js, Nuxt, SvelteKit
- ❌ Server-side rendering or API routes
- ❌ CSS-in-JS libraries (styled-components, emotion, etc.)
- ❌ Raw CSS files (always use Tailwind utilities)

---

## 📖 Reading Order (AI Workflow)

When starting any task, read files in this order:

1. **First**: `active-context.md` ← What's happening NOW
2. **Second**: `tech-stack.md` ← Technologies and versions
3. **Third**: `coding-standards.md` ← How to write code
4. **Fourth**: `implementation/completed.md` ← What's already done
5. **As needed**: `troubleshooting/common-issues.md` ← Known problems

**Golden Rule**: Always check `active-context.md` before suggesting work. It's the source of truth for current state.

---

## 🚫 Critical Don'ts

### 1. Never Suggest Frameworks
```javascript
// ❌ WRONG - Do not suggest this
import React from 'react';
export default function Component() { ... }

// ✅ CORRECT - Vanilla JS pattern
const initComponent = () => {
  const element = document.querySelector('[data-component]');
  // ... vanilla DOM manipulation
};
```

### 2. Never Write Raw CSS
```css
/* ❌ WRONG - Do not create CSS files */
.button {
  background-color: #FE1E69;
  padding: 1rem 2rem;
}

/* ✅ CORRECT - Use Tailwind classes in HTML */
<button class="bg-synth-pink px-8 py-4">Click Me</button>
```

### 3. Never Use Relative Paths in HTML
```html
<!-- ❌ WRONG - Causes 404 errors in dev server -->
<link rel="stylesheet" href="../styles/main.css">
<script src="../scripts/main.js"></script>

<!-- ✅ CORRECT - Absolute paths from project root -->
<link rel="stylesheet" href="/src/styles/main.css">
<script src="/src/scripts/main.js"></script>
```

### 4. Never Skip Accessibility
```html
<!-- ❌ WRONG - Missing ARIA and semantic markup -->
<div onclick="openMenu()">Menu</div>

<!-- ✅ CORRECT - Accessible pattern -->
<button 
  type="button"
  aria-label="Open navigation menu"
  aria-expanded="false"
  data-menu-toggle
>
  Menu
</button>
```

---

## ✅ Code Style Rules

### JavaScript Patterns

#### 1. Use `const` over `function`
```javascript
// ❌ Avoid
function handleClick(event) { ... }

// ✅ Prefer
const handleClick = (event) => { ... };
```

#### 2. Event Handler Naming
```javascript
// ❌ Generic names
const click = () => { ... };
const submit = () => { ... };

// ✅ Descriptive with "handle" prefix
const handleClick = () => { ... };
const handleFormSubmit = () => { ... };
const handleKeyDown = (event) => { ... };
```

#### 3. Early Returns
```javascript
// ❌ Nested conditions
const processData = (data) => {
  if (data) {
    if (data.isValid) {
      // process
    }
  }
};

// ✅ Early returns
const processData = (data) => {
  if (!data) return;
  if (!data.isValid) return;
  
  // process
};
```

#### 4. Module Pattern
```javascript
// ✅ Always export named functions
export const initFeature = () => {
  console.log('🚀 Feature initialized');
  // initialization logic
};

// ✅ Import and use
import { initFeature } from './modules/feature.js';
initFeature();
```

### HTML Patterns

#### 1. Use `data-*` attributes for JS hooks
```html
<!-- ✅ CORRECT - JS targets data attributes -->
<button data-social-link="discord">Join Discord</button>

<!-- Then in JS -->
<script>
document.querySelectorAll('[data-social-link]').forEach(link => {
  const platform = link.getAttribute('data-social-link');
  // populate from constants
});
</script>
```

#### 2. Semantic HTML
```html
<!-- ❌ WRONG - Divitis -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- ✅ CORRECT - Semantic elements -->
<header>
  <nav aria-label="Main navigation">...</nav>
</header>
```

### Tailwind CSS Patterns

#### 1. Use Theme Variables
```html
<!-- ❌ WRONG - Hardcoded colors -->
<div class="bg-[#FE1E69]">...</div>

<!-- ✅ CORRECT - Use theme variables -->
<div class="bg-synth-pink">...</div>
```

#### 2. Responsive Design (Mobile-First)
```html
<!-- ✅ CORRECT - Start with mobile, add breakpoints -->
<div class="flex flex-col md:flex-row lg:gap-8">
  <!-- Mobile: column, Desktop: row -->
</div>
```

#### 3. Avoid Arbitrary Values Unless Necessary
```html
<!-- ❌ Avoid if theme has the value -->
<div class="p-[24px]">...</div>

<!-- ✅ Use theme spacing -->
<div class="p-6">...</div> <!-- 6 = 1.5rem = 24px -->
```

---

## 🔍 Debugging Workflow

When the user reports an error:

1. **Check `troubleshooting/common-issues.md`** first
2. **Verify asset paths** are absolute (`/src/...`)
3. **Check Vite config** hasn't changed (especially `root` and `build.outDir`)
4. **Confirm dev server** is running with correct port
5. **Validate imports** use `.js` extensions

### Common 404 Error Fix
```javascript
// ❌ This causes 404 in Vite dev server
<link rel="stylesheet" href="./styles/main.css">

// ✅ Always use absolute paths from project root
<link rel="stylesheet" href="/src/styles/main.css">
```

---

## 📦 File Organization Rules

### Where to Put Files

```
src/
├── pages/           # HTML pages (entry points)
├── scripts/
│   ├── main.js      # Entry point (imports modules)
│   ├── constants.js # Config and URLs
│   └── modules/     # Feature modules (navigation, forms, etc.)
├── styles/
│   └── main.css     # Tailwind imports + theme + animations
└── assets/
    ├── images/      # JPG, PNG, SVG images
    └── icons/       # Icon SVGs (prefer separate for clarity)
```

### Import Paths
```javascript
// ✅ CORRECT - Relative imports in JS modules
import { SOCIAL_LINKS } from './constants.js';
import { initNavigation } from './modules/navigation.js';

// ✅ CORRECT - Always include .js extension
import { util } from './utils.js'; // Not './utils'
```

---

## 🎨 Design System Reference

### Colors (Available in Tailwind)
```
bg-synth-pink      → #FE1E69 (brand primary)
bg-synth-black     → #000000 (background)
text-synth-white   → #FFFFFF (text)

Also available:
bg-[#5865F2]       → Discord blue
bg-[#FF0000]       → YouTube red
```

### Fonts
```
font-heading       → Teko (Google Fonts, weights 300-700)
font-sans          → System font stack
```

### Common Patterns
```html
<!-- Button with hover -->
<button class="bg-synth-pink hover:bg-[#D11857] transition-colors duration-200">
  Click Me
</button>

<!-- Responsive container -->
<div class="max-w-3xl mx-auto px-6">
  <!-- Content -->
</div>

<!-- Grid (mobile 2 cols, desktop 3 cols) -->
<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
  <!-- Items -->
</div>
```

---

## 🚀 Suggesting New Features

Before suggesting implementation:

1. ✅ Check `implementation/completed.md` - Is it already done?
2. ✅ Check `implementation/roadmap.md` - Is it planned?
3. ✅ Check `active-context.md` - Does it align with current goals?
4. ✅ Verify it uses vanilla JS + Tailwind only
5. ✅ Ensure it's mobile-first responsive

### Example Good Suggestion
> "I can add a smooth scroll behavior to anchor links using vanilla JavaScript. This would enhance UX without adding dependencies. The code would go in `src/scripts/modules/navigation.js`. Would you like me to implement it?"

### Example Bad Suggestion
> "We should use Framer Motion for scroll animations and React for state management."  
> ❌ **Violates**: No frameworks rule

---

## 💡 Performance Considerations

### Image Optimization
- Use ViteImageOptimizer (already configured)
- Use `loading="lazy"` for below-the-fold images
- Use `loading="eager"` for hero images only

### Code Splitting
- Keep modules small and focused
- Use dynamic imports for non-critical features:
  ```javascript
  // Load analytics only when needed
  import('./modules/analytics.js').then(({ initAnalytics }) => {
    initAnalytics();
  });
  ```

### Bundle Size Goals
- Total JS: < 50KB gzipped
- Total CSS: < 30KB gzipped
- Total HTML: < 30KB gzipped

---

## 📝 Documentation Updates

### 🌟 CRITICAL: active-context.md (After EVERY task)

**ALWAYS update after completing ANY work** (see `.ai/MAINTENANCE.md` for rules):

1. ✅ `active-context.md` → "Recent Changes" section
2. ✅ Update "Last Updated" date
3. ✅ Update "Next Immediate Steps" if priorities changed
4. ✅ Remove resolved blockers from "Known Issues"

**Then ask user**: "Should priorities or roadmap be adjusted?"

### Other Updates

When adding new features:
- `implementation/completed.md` - Mark as complete
- `tech-stack.md` - If adding dependencies
- This file (`ai-instructions.md`) - If creating new patterns

**📖 Complete protocol**: See `.ai/MAINTENANCE.md`

---

## 🔄 Version Control

### Branch Workflow (CRITICAL)

**ALWAYS create a feature branch before starting ANY work** - this applies to features, bugfixes, and even small changes.

```bash
# For new features
git checkout -b feat/mobile-navigation
git checkout -b feat/form-validation
git checkout -b feat/smooth-scrolling

# For bugfixes
git checkout -b bugfix/asset-404-error
git checkout -b bugfix/menu-close-issue
git checkout -b bugfix/link-population
```

**Workflow**:
1. ✅ **AI creates branch automatically** before starting work
2. ✅ Make all changes and commit to feature branch
3. ✅ **User merges to `main` manually** after review

**Branch naming convention**:
- `feat/[descriptive-feature-name]` - For new functionality
- `bugfix/[descriptive-bug-name]` - For bug fixes

**Never work directly on `main` branch.** All development happens on feature branches.

---

### Commit Message Format
```
feat: Add mobile navigation menu
fix: Resolve 404 error on asset paths
docs: Update AI instructions with new patterns
style: Format code according to Prettier
refactor: Extract constants to separate file
```

### When to Create Backups
Before major refactors, create backup files:
```bash
# Good practice
mv src/pages/index.html src/pages/index-old.html
```

---

## 🎯 Success Criteria

You're doing great if:
- ✅ Code uses vanilla JS (no frameworks)
- ✅ Styles use Tailwind utilities (no raw CSS)
- ✅ Paths are absolute from project root
- ✅ ARIA attributes present on interactive elements
- ✅ Mobile-first responsive approach
- ✅ Checked `active-context.md` before starting
- ✅ Updated relevant docs after completion

---

## 🆘 When Stuck

1. Read `troubleshooting/common-issues.md`
2. Check `tech-stack.md` for correct versions
3. Verify Vite config hasn't changed
4. Ask user for clarification on requirements

**Never guess** at project conventions. If unsure, reference these docs or ask.

---

**Remember**: This file exists to prevent mistakes and align all AI assistants with project standards. When in doubt, be conservative and ask the user.
