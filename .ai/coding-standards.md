# Coding Standards

**Last Updated**: October 5, 2025

---

## 🎯 Philosophy

Write code that is:
1. **Readable** - Easy to understand at a glance
2. **Maintainable** - Easy to change without breaking
3. **Performant** - Optimized for speed and bundle size
4. **Accessible** - Works for all users, including those with disabilities

**Priorit order**: Readability > Maintainability > Performance

---

## 📝 JavaScript Standards

### File Organization

```javascript
/**
 * Module description
 * @module path/to/module
 */

// 1. Imports first
import { dependency } from './path.js';

// 2. Constants
const MAX_RETRIES = 3;

// 3. Main export function(s)
export const initFeature = () => { ... };

// 4. Helper functions (private, not exported)
const helperFunction = () => { ... };

// 5. Event handlers
const handleClick = (event) => { ... };
```

### Naming Conventions

#### Variables & Functions
```javascript
// ✅ GOOD - camelCase for variables and functions
const userName = 'John';
const calculateTotal = () => { ... };

// ❌ BAD - snake_case or PascalCase
const user_name = 'John';
const CalculateTotal = () => { ... };
```

#### Constants
```javascript
// ✅ GOOD - UPPER_SNAKE_CASE for true constants
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_ATTEMPTS = 3;

// ✅ ALSO GOOD - camelCase for config objects
const config = {
  apiUrl: 'https://api.example.com',
  retries: 3,
};
```

#### Event Handlers
```javascript
// ✅ GOOD - "handle" prefix + descriptive action
const handleMenuToggle = (event) => { ... };
const handleFormSubmit = (event) => { ... };
const handleKeyDown = (event) => { ... };
const handleOutsideClick = (event) => { ... };

// ❌ BAD - Generic or unclear names
const toggle = () => { ... };
const submit = () => { ... };
const onClick = () => { ... };
```

#### Boolean Variables
```javascript
// ✅ GOOD - is/has/should prefix
const isMenuOpen = false;
const hasError = true;
const shouldValidate = true;

// ❌ BAD - No prefix
const menuOpen = false;
const error = true;
```

### Function Patterns

#### Prefer `const` + Arrow Functions
```javascript
// ✅ GOOD - Const with arrow function
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// ❌ AVOID - Function declaration (unless hoisting needed)
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

#### Use Early Returns
```javascript
// ✅ GOOD - Early returns for validation
const processUser = (user) => {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.email) return;
  
  // Main logic here
  sendEmail(user.email);
};

// ❌ BAD - Nested conditions
const processUser = (user) => {
  if (user) {
    if (user.isActive) {
      if (user.email) {
        sendEmail(user.email);
      }
    }
  }
};
```

#### Single Responsibility
```javascript
// ✅ GOOD - Each function does one thing
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const sendWelcomeEmail = (email) => {
  if (!validateEmail(email)) return false;
  // Send email logic
  return true;
};

// ❌ BAD - Function does too many things
const processEmail = (email) => {
  // Validates AND sends AND logs AND...
};
```

### Module Exports

```javascript
// ✅ GOOD - Named exports
export const initFeature = () => { ... };
export const destroyFeature = () => { ... };

// ❌ BAD - Default exports (harder to refactor)
export default function() { ... }

// ✅ GOOD - Multiple named exports
export {
  initFeature,
  destroyFeature,
  resetFeature,
};
```

### Imports

```javascript
// ✅ GOOD - Always include .js extension
import { initNav } from './modules/navigation.js';
import { COLORS } from './constants.js';

// ❌ BAD - Missing extension
import { initNav } from './modules/navigation';

// ✅ GOOD - Group by type
// 1. External dependencies (if any)
// 2. Internal modules
// 3. Constants/config
import { initNavigation } from './modules/navigation.js';
import { initForm } from './modules/form.js';
import { SOCIAL_LINKS } from './constants.js';
```

### Error Handling

```javascript
// ✅ GOOD - Guard clauses and early returns
const initModule = () => {
  const element = document.querySelector('[data-module]');
  
  if (!element) {
    console.warn('⚠️ Module element not found');
    return;
  }
  
  // Proceed with initialization
};

// ✅ GOOD - Try/catch for async or risky operations
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    return await response.json();
  } catch (error) {
    console.error('❌ Failed to fetch data:', error);
    return null;
  }
};
```

### Comments

```javascript
// ✅ GOOD - JSDoc for public APIs
/**
 * Initialize the navigation module
 * @param {HTMLElement} container - The navigation container
 * @param {Object} options - Configuration options
 * @param {boolean} options.closeOnEscape - Close menu on ESC key
 * @returns {void}
 */
export const initNavigation = (container, options = {}) => {
  // Implementation
};

// ✅ GOOD - Inline comments for complex logic
const total = items
  // Filter out inactive items
  .filter(item => item.isActive)
  // Apply discount to premium items
  .map(item => item.isPremium ? item.price * 0.9 : item.price)
  // Sum all prices
  .reduce((sum, price) => sum + price, 0);

// ❌ BAD - Obvious comments
const total = 0; // Set total to zero
const items = []; // Create an empty array
```

---

## 🎨 HTML Standards

### Semantic HTML

```html
<!-- ✅ GOOD - Semantic elements -->
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Title</h1>
    <section>Content</section>
  </article>
</main>

<footer>
  <p>&copy; 2025 Company</p>
</footer>

<!-- ❌ BAD - Divitis -->
<div class="header">
  <div class="nav">
    <div class="link"><a href="/">Home</a></div>
  </div>
</div>
```

### Accessibility

```html
<!-- ✅ GOOD - ARIA attributes -->
<button 
  type="button"
  aria-label="Open navigation menu"
  aria-expanded="false"
  aria-controls="mobile-menu"
  data-menu-toggle
>
  <span aria-hidden="true">☰</span>
</button>

<nav 
  id="mobile-menu"
  aria-label="Mobile navigation"
  class="hidden"
  data-mobile-menu
>
  <!-- Menu content -->
</nav>

<!-- ❌ BAD - Missing accessibility attributes -->
<div onclick="openMenu()">
  Menu
</div>
```

### Data Attributes for JS Hooks

```html
<!-- ✅ GOOD - Use data-* attributes -->
<button data-social-link="discord">Join Discord</button>
<a data-legal-link="privacy">Privacy Policy</a>

<!-- ❌ BAD - Using classes or IDs for JS -->
<button class="js-discord-link">Join Discord</button>
<a id="privacy-link">Privacy Policy</a>
```

### Image Best Practices

```html
<!-- ✅ GOOD - Alt text, lazy loading, dimensions -->
<img 
  src="/src/assets/images/hero.jpg"
  alt="Synth Riders gameplay showing neon rails and notes"
  width="1200"
  height="630"
  loading="lazy"
  class="w-full h-auto"
/>

<!-- ✅ GOOD - Eager load for above-the-fold images -->
<img 
  src="/src/assets/images/logo.svg"
  alt="Synth Riders Overdrive"
  loading="eager"
  class="h-16 w-auto"
/>

<!-- ❌ BAD - Missing alt, no lazy loading -->
<img src="/images/hero.jpg" />
```

---

## 🎨 CSS (Tailwind) Standards

### Class Organization

```html
<!-- ✅ GOOD - Logical grouping -->
<!-- Layout → Spacing → Sizing → Colors → Typography → Effects -->
<div class="flex flex-col gap-4 p-6 max-w-3xl bg-synth-black text-synth-white font-heading rounded-lg shadow-lg">
  Content
</div>

<!-- ❌ BAD - Random order -->
<div class="shadow-lg bg-synth-black rounded-lg p-6 text-synth-white flex gap-4 flex-col font-heading max-w-3xl">
  Content
</div>
```

### Responsive Design (Mobile-First)

```html
<!-- ✅ GOOD - Mobile first, then breakpoints -->
<div class="flex flex-col md:flex-row lg:gap-8">
  <!-- Mobile: column, Desktop: row -->
</div>

<h1 class="text-2xl md:text-4xl lg:text-6xl">
  <!-- Mobile: 2xl, Tablet: 4xl, Desktop: 6xl -->
</h1>

<!-- ❌ BAD - Desktop first -->
<div class="flex-row md:flex-col">
  <!-- Backwards approach -->
</div>
```

### Use Theme Variables

```html
<!-- ✅ GOOD - Use theme colors -->
<div class="bg-synth-pink text-synth-white">
  Content
</div>

<!-- ❌ BAD - Arbitrary values when theme exists -->
<div class="bg-[#FE1E69] text-[#FFFFFF]">
  Content
</div>

<!-- ✅ ACCEPTABLE - Arbitrary for one-off colors -->
<button class="bg-[#5865F2]">
  <!-- Discord brand color, not in theme -->
  Discord
</button>
```

### Avoid Inline Styles

```html
<!-- ✅ GOOD - Tailwind classes -->
<div class="w-full h-64 bg-cover" style="background-image: url('/hero.jpg');">
  <!-- Style attribute OK for dynamic values -->
</div>

<!-- ❌ BAD - Inline styles for static values -->
<div style="width: 100%; padding: 24px; background: black;">
  Content
</div>
```

---

## ♿ Accessibility Standards

### ARIA Attributes

```html
<!-- Buttons -->
<button aria-label="Close menu" aria-expanded="true">×</button>

<!-- Links -->
<a href="/blog" aria-label="Read our blog">Blog</a>

<!-- Navigation -->
<nav aria-label="Main navigation">...</nav>

<!-- Landmarks -->
<main aria-label="Main content">...</main>
```

### Keyboard Navigation

```javascript
// ✅ Support ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isMenuOpen) {
    closeMenu();
  }
});

// ✅ Support Enter/Space on custom buttons
element.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleAction();
  }
});
```

### Focus Management

```javascript
// ✅ Return focus after closing modal/menu
const closeMenu = () => {
  menu.classList.add('hidden');
  toggleButton.focus(); // Return focus to trigger
};
```

---

## 📊 Performance Standards

### Bundle Size

- **JS**: < 50KB gzipped
- **CSS**: < 30KB gzipped
- **HTML**: < 30KB gzipped

### Image Optimization

- Use WebP when possible
- Include width/height attributes
- Use `loading="lazy"` for below-the-fold images
- Use `loading="eager"` for above-the-fold only

### Code Splitting

```javascript
// ✅ Dynamic import for non-critical features
if (CONFIG.analyticsId) {
  import('./modules/analytics.js')
    .then(({ initAnalytics }) => initAnalytics())
    .catch(err => console.error('Analytics failed', err));
}
```

---

## 🚫 Forbidden Patterns

### Never Use

1. **Frameworks**: No React, Vue, Angular, Svelte
2. **jQuery**: Use vanilla DOM APIs
3. **Raw CSS files**: Use Tailwind utilities only
4. **Relative paths in HTML**: Use absolute paths (`/src/...`)
5. **Global variables**: Use modules and imports
6. **Inline event handlers**: Use `addEventListener`

```html
<!-- ❌ BAD - Inline event handler -->
<button onclick="handleClick()">Click</button>

<!-- ✅ GOOD - Event listener in JS -->
<button data-action="click">Click</button>

<script type="module">
  document.querySelector('[data-action="click"]')
    .addEventListener('click', handleClick);
</script>
```

---

## 🔄 Version Control

### Commit Messages

```
feat: Add mobile navigation menu
fix: Resolve 404 error on asset paths
docs: Update coding standards
style: Format code with Prettier
refactor: Extract link population to separate function
perf: Lazy load analytics module
test: Add navigation module tests
chore: Update dependencies
```

### Branch Naming (CRITICAL)

**ALWAYS work on feature branches, never directly on `main`.** The AI must create a branch automatically before starting any work.

```bash
# For new features
git checkout -b feat/mobile-navigation
git checkout -b feat/form-validation
git checkout -b feat/analytics-integration

# For bugfixes
git checkout -b bugfix/asset-404-error
git checkout -b bugfix/menu-focus-trap
git checkout -b bugfix/link-population
```

**Branch naming pattern**:
- `feat/[descriptive-feature-name]` - For new functionality
- `bugfix/[descriptive-bug-name]` - For bug fixes

**Workflow**:
1. ✅ AI creates branch automatically before starting work
2. ✅ AI commits all changes to feature branch
3. ✅ User reviews and merges to `main` manually

**This applies to ALL changes**, including small fixes and tweaks.

---

## ✅ Code Review Checklist

Before submitting code, verify:

- [ ] Uses vanilla JavaScript (no frameworks)
- [ ] Uses Tailwind utilities (no raw CSS)
- [ ] Absolute paths in HTML (`/src/...`)
- [ ] ARIA attributes on interactive elements
- [ ] Alt text on all images
- [ ] Early returns for validation
- [ ] Descriptive variable/function names
- [ ] `.js` extensions on all imports
- [ ] Mobile-first responsive design
- [ ] Comments on complex logic only
- [ ] No console.log in production code
- [ ] File is < 200 lines (consider splitting if longer)

---

**Last Updated**: October 5, 2025  
**For AI**: Follow these standards strictly. When in doubt, reference this file.
