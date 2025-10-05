# JavaScript Module System Guide

**Last Updated**: October 5, 2025

---

## 📦 Architecture

This project uses **ES modules** (native browser modules) with a modular architecture pattern.

---

## 🏗️ Module Structure

```
src/scripts/
├── main.js              # Entry point (imported in HTML)
├── constants.js         # Configuration and URLs
└── modules/
    ├── navigation.js    # Mobile menu and navigation
    ├── form.js          # Form validation (stub)
    └── analytics.js     # Analytics tracking (stub)
```

---

## 🎯 Entry Point Pattern

**File**: `src/scripts/main.js`

```javascript
import { initNavigation } from './modules/navigation.js';
import { SOCIAL_LINKS, LEGAL_LINKS } from './constants.js';

/**
 * Populate links from constants
 */
const populateLinks = () => {
  document.querySelectorAll('[data-social-link]').forEach((link) => {
    const linkType = link.getAttribute('data-social-link');
    if (SOCIAL_LINKS[linkType]) {
      link.href = SOCIAL_LINKS[linkType];
    }
  });
  
  document.querySelectorAll('[data-legal-link]').forEach((link) => {
    const linkType = link.getAttribute('data-legal-link');
    if (LEGAL_LINKS[linkType]) {
      link.href = LEGAL_LINKS[linkType];
    }
  });
};

/**
 * Initialize all modules
 */
const init = () => {
  console.log('🚀 Initializing app');
  
  populateLinks();
  initNavigation();
  
  console.log('✅ All modules initialized');
};

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
```

---

## 📝 Module Patterns

### 1. Basic Feature Module

```javascript
/**
 * Feature Module Template
 * @module modules/feature
 */

/**
 * Initialize feature
 */
export const initFeature = () => {
  console.log('🚀 Feature initialized');
  
  // Setup
  setupEventListeners();
  loadInitialState();
};

/**
 * Private helper (not exported)
 */
const setupEventListeners = () => {
  document.querySelectorAll('[data-feature]').forEach((el) => {
    el.addEventListener('click', handleFeatureClick);
  });
};

/**
 * Event handler
 */
const handleFeatureClick = (event) => {
  event.preventDefault();
  // Handle click
};

/**
 * Private helper
 */
const loadInitialState = () => {
  // Load state from localStorage, API, etc.
};
```

### 2. Configuration Module

**File**: `src/scripts/constants.js`

```javascript
/**
 * Constants - URLs and Configuration
 */

// Social Media Links
export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/example',
  youtube: 'https://youtube.com/@example',
  // ... more links
};

// Legal Links
export const LEGAL_LINKS = {
  privacy: '/privacy-policy',
  terms: '/terms-conditions',
  // ... more links
};

// Brand Colors
export const COLORS = {
  brand: '#FE1E69',
  background: '#000000',
  text: '#FFFFFF',
};

// Configuration
export const CONFIG = {
  openLinksInNewTab: true,
  analyticsId: 'GA4-TRACKING-ID',
};
```

### 3. Navigation Module (Real Example)

**File**: `src/scripts/modules/navigation.js`

```javascript
/**
 * Navigation Module
 * Handles mobile menu, smooth scrolling, etc.
 */

let isMenuOpen = false;

export const initNavigation = () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  
  if (!toggle || !menu) {
    console.warn('⚠️ Navigation elements not found');
    return;
  }
  
  // Toggle button click
  toggle.addEventListener('click', () => toggleMenu(toggle, menu));
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu(toggle, menu);
    }
  });
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu(toggle, menu);
    }
  });
  
  console.log('✅ Navigation initialized');
};

const toggleMenu = (toggle, menu) => {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    openMenu(toggle, menu);
  } else {
    closeMenu(toggle, menu);
  }
};

const openMenu = (toggle, menu) => {
  menu.classList.remove('hidden');
  toggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // Prevent scroll
};

const closeMenu = (toggle, menu) => {
  menu.classList.add('hidden');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = ''; // Restore scroll
  isMenuOpen = false;
};
```

---

## ✅ Best Practices

### 1. Always Export Named Functions
```javascript
// ✅ GOOD - Named export
export const initFeature = () => { ... };

// ❌ BAD - Default export (harder to refactor)
export default function() { ... }
```

### 2. Use Descriptive Names
```javascript
// ✅ GOOD - Clear intent
export const initMobileNavigation = () => { ... };
const handleMenuToggleClick = (event) => { ... };

// ❌ BAD - Unclear
export const init = () => { ... };
const handle = (e) => { ... };
```

### 3. Include File Extensions
```javascript
// ✅ GOOD - Explicit .js extension
import { initNav } from './modules/navigation.js';

// ❌ BAD - Missing extension (works in some bundlers, not all)
import { initNav } from './modules/navigation';
```

### 4. Document Public APIs
```javascript
/**
 * Initialize the contact form with validation
 * @param {HTMLFormElement} formElement - The form to initialize
 * @param {Object} options - Configuration options
 * @returns {void}
 */
export const initForm = (formElement, options = {}) => {
  // Implementation
};
```

### 5. Keep Modules Focused
Each module should have a single responsibility:
- ✅ `navigation.js` - Only navigation logic
- ✅ `form.js` - Only form validation
- ❌ `utils.js` - Avoid dumping ground files

---

## 🔄 Dynamic Imports (Lazy Loading)

For non-critical features, use dynamic imports:

```javascript
// In main.js

// Load analytics only if GA4 ID is set
if (CONFIG.analyticsId) {
  import('./modules/analytics.js')
    .then(({ initAnalytics }) => initAnalytics(CONFIG.analyticsId))
    .catch((err) => console.error('Failed to load analytics', err));
}

// Load form validation only on contact page
if (document.querySelector('#contact-form')) {
  import('./modules/form.js')
    .then(({ initForm }) => initForm())
    .catch((err) => console.error('Failed to load form module', err));
}
```

**Benefits**:
- Smaller initial bundle size
- Faster page load
- Only load what's needed

---

## 🎯 HTML Integration

### Load Modules in HTML
```html
<!-- At end of <body> -->
<script type="module" src="/src/scripts/main.js"></script>
```

**Note**: `type="module"` is required for ES modules.

### Use `data-*` Attributes for JS Hooks
```html
<!-- ✅ GOOD - Data attributes -->
<button data-menu-toggle aria-label="Toggle menu">Menu</button>
<nav data-mobile-menu class="hidden">...</nav>

<!-- ❌ BAD - Classes or IDs for JS -->
<button class="js-toggle" id="menuBtn">Menu</button>
```

---

## 🚫 Common Pitfalls

### 1. Forgetting File Extensions
```javascript
// ❌ ERROR - Missing .js
import { init } from './navigation';

// ✅ CORRECT
import { init } from './navigation.js';
```

### 2. Circular Dependencies
```javascript
// ❌ BAD - file-a.js imports file-b.js, file-b.js imports file-a.js
// This creates a circular dependency

// ✅ GOOD - Extract shared logic to separate file
// constants.js or utils.js
```

### 3. Not Checking DOM Elements Exist
```javascript
// ❌ BAD - Will throw error if element doesn't exist
const button = document.querySelector('#btn');
button.addEventListener('click', handler); // Error if button is null

// ✅ GOOD - Guard clause
const button = document.querySelector('#btn');
if (!button) {
  console.warn('Button not found');
  return;
}
button.addEventListener('click', handler);
```

---

## 📊 Performance Tips

1. **Keep modules small** - Aim for < 200 lines per file
2. **Use dynamic imports** for non-critical features
3. **Avoid global state** - Pass data through function parameters
4. **Remove console.log** in production builds (Vite does this automatically)

---

## 🔗 Related Documentation

- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Vite: ES Modules](https://vitejs.dev/guide/features.html#npm-dependency-resolving-and-pre-bundling)

---

**Remember**: This project uses native ES modules. No Webpack, no Babel, no transpilation. Keep it simple and modern!
