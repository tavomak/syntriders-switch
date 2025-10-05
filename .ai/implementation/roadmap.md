# 🚀 Implementation Plan - Synth Riders Switch Landing Page

**Project**: Marketing Landing Page Restructuring  
**Tech Stack**: Vite 7 + Tailwind CSS 4 (Alpha) + Vanilla JavaScript  
**Date Created**: October 4, 2025  
**Status**: 🟡 In Progress

---

## 📋 Table of Contents

1. [Project Objectives](#-project-objectives)
2. [Current State Analysis](#-current-state-analysis)
3. [Target Architecture](#-target-architecture)
4. [Implementation Phases](#-implementation-phases)
5. [File Changes Manifest](#-file-changes-manifest)
6. [Configuration Updates](#-configuration-updates)
7. [Testing & Verification](#-testing--verification)
8. [Future TODOs](#-future-todos)
9. [Success Criteria](#-success-criteria)

---

## 🎯 Project Objectives

### Core Principles (from WARP.md)
1. **Performance First**: Lighthouse score 95+, Core Web Vitals optimized
2. **SEO Optimized**: Complete meta tags, structured data, semantic HTML
3. **Accessibility**: WCAG 2.1 AA compliance minimum
4. **Mobile-First**: Design for 375px width, scale up
5. **Static-Only**: No SSR, deployable to S3 + CloudFront

### Technical Goals
- ✅ Remove Vite template boilerplate
- ✅ Establish proper marketing landing page structure
- ✅ Configure Tailwind CSS 4 (CSS-native, no config files)
- ✅ Implement vanilla JavaScript modules
- ✅ Set up multi-page Vite configuration
- ✅ Create SEO-ready static assets

---

## 🔍 Current State Analysis

### Existing Structure (Issues Found)
```
synthriders-switch/
├── index.html                    ❌ ROOT file (Vite template)
├── src/
│   ├── main.js                   ❌ Vite template code
│   ├── counter.js                ❌ Demo file (remove)
│   ├── javascript.svg            ❌ Demo asset (remove)
│   ├── style.css                 ⚠️  Should be in styles/main.css
│   ├── pages/
│   │   └── index.html            ✅ Actual landing page HTML
│   ├── scripts/
│   │   └── modules/              ✅ Empty (needs modules)
│   ├── styles/                   ❌ Doesn't exist
│   └── assets/
│       ├── images/               ✅ Empty (ready for assets)
│       └── icons/                ✅ Empty (ready for icons)
└── public/
    └── vite.svg                  ❌ Demo asset (replace with favicon)
```

### Problems Identified
1. **File path mismatches**: HTML references `../styles/main.css` but file is `src/style.css`
2. **JavaScript structure**: No proper module system for navigation, forms, analytics
3. **Vite config incomplete**: Missing multi-page entry points and image optimization
4. **Missing SEO assets**: No robots.txt, sitemap.xml
5. **Animation complexity**: Custom animations need simplification for performance

---

## 🏗️ Target Architecture

### Final Directory Structure
```
synthriders-switch/
├── .env                          ✅ Environment variables
├── .env.example                  ✅ Template for .env
├── .gitignore                    ✅ Git ignore rules
├── package.json                  ✅ Dependencies & scripts
├── vite.config.js                🔄 UPDATE: Multi-page config
├── README.md                     ✅ Project documentation
├── WARP.md                       ✅ AI assistant guidelines
├── IMPLEMENTATION_PLAN.md        ⭐ THIS FILE
│
├── public/                       📁 Static assets (copied as-is)
│   ├── robots.txt                ⭐ NEW: SEO crawling rules
│   ├── sitemap.xml               ⭐ NEW: Site structure
│   └── favicon.svg               🔄 UPDATE: Proper favicon
│
├── src/
│   ├── pages/                    📄 HTML entry points
│   │   ├── index.html            🔄 UPDATE: Fix asset paths
│   │   └── contact.html          📝 TODO: Create later
│   │
│   ├── styles/                   🎨 CSS files
│   │   └── main.css              🔄 MOVE from src/style.css
│   │
│   ├── scripts/                  📜 JavaScript modules
│   │   ├── main.js               ⭐ NEW: Main entry point
│   │   └── modules/
│   │       ├── navigation.js     ⭐ NEW: Mobile menu logic
│   │       ├── form.js           📝 TODO: Form validation
│   │       └── analytics.js      📝 TODO: GA4 tracking
│   │
│   ├── assets/                   🖼️ Images, icons, fonts
│   │   ├── images/
│   │   └── icons/
│   │
│   └── lib/                      📚 Utility functions
│       └── utils.js              📝 TODO: Helper functions
```

---

## 📝 Implementation Phases

### Phase 1: Project Setup & Planning ✅
- [x] Audit current repository structure
- [x] Review README.md and WARP.md requirements
- [x] Create IMPLEMENTATION_PLAN.md (this file)
- [x] Set up TODO tracking

### Phase 2: File System Restructuring 🔄
**Priority**: HIGH | **Estimated Time**: 30 minutes

#### 2.1 Create Missing Directories
```bash
mkdir -p src/styles
mkdir -p src/scripts/modules
mkdir -p src/lib
mkdir -p public/assets
```

#### 2.2 Move/Rename Files
```bash
# Move CSS to proper location
mv src/style.css src/styles/main.css

# Preserve existing pages (already in place)
# src/pages/index.html - already exists
```

#### 2.3 Delete Template Files
```bash
# Remove Vite boilerplate
rm index.html
rm src/counter.js
rm src/javascript.svg
rm src/main.js
rm public/vite.svg
```

### Phase 3: CSS Simplification 🎨
**Priority**: HIGH | **Estimated Time**: 20 minutes

#### 3.1 Simplify Animations
- Remove complex keyframes (fade-in-up, slide-in-right, bounce-slow, pulse-slow)
- Keep only essential fade transitions
- Add `prefers-reduced-motion` support
- Limit animation duration to ≤ 300ms

#### 3.2 Theme Variables Review
- Keep brand color system (primary, secondary)
- Keep custom spacing and shadows
- Remove unused CSS custom properties

### Phase 4: JavaScript Module Creation 📜
**Priority**: HIGH | **Estimated Time**: 45 minutes

#### 4.1 Create Main Entry Point
**File**: `src/scripts/main.js`
- Import navigation module
- Initialize mobile menu on DOM ready
- Add smooth scrolling for anchor links
- Set up event delegation pattern

#### 4.2 Create Navigation Module
**File**: `src/scripts/modules/navigation.js`
- Export `initNavigation()` function
- Handle mobile menu toggle with aria-expanded
- Close menu on outside click
- Close menu on ESC key
- Trap focus within open menu (accessibility)

#### 4.3 Create Placeholder Modules
**File**: `src/scripts/modules/form.js`
```javascript
// TODO: Implement form validation and submission
// - Email format validation
// - Required field checks
// - API endpoint integration (when backend ready)
// - Success/error message display
```

**File**: `src/scripts/modules/analytics.js`
```javascript
// TODO: Implement Google Analytics 4 tracking
// - Initialize gtag with tracking ID from env
// - Track page views
// - Track custom events (button clicks, form submissions)
// - Respect user privacy preferences
```

**File**: `src/lib/utils.js`
```javascript
// TODO: Create utility functions
// - debounce/throttle for performance
// - localStorage helpers
// - date formatting
// - API fetch wrapper with error handling
```

### Phase 5: SEO Assets Creation 🔍
**Priority**: HIGH | **Estimated Time**: 15 minutes

#### 5.1 Create robots.txt
**File**: `public/robots.txt`
```
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://yourdomain.com/sitemap.xml
```

#### 5.2 Create sitemap.xml
**File**: `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-10-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add contact page when ready -->
</urlset>
```

### Phase 6: Vite Configuration Update ⚙️
**Priority**: HIGH | **Estimated Time**: 20 minutes

#### 6.1 Configure Multi-Page Build
Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        // contact: resolve(__dirname, 'src/pages/contact.html'), // TODO: Add when ready
      },
    },
  },
  server: {
    open: '/src/pages/index.html',
  },
});
```

### Phase 7: HTML Path Updates 📄
**Priority**: HIGH | **Estimated Time**: 15 minutes

#### 7.1 Update src/pages/index.html
- Change CSS path: `<link rel="stylesheet" href="../styles/main.css" />`
- Change JS path: `<script type="module" src="../scripts/main.js"></script>`
- Verify all asset paths use relative paths correctly
- Ensure all ARIA attributes are present
- Verify semantic HTML structure

### Phase 8: Testing & Verification ✅
**Priority**: HIGH | **Estimated Time**: 30 minutes

#### 8.1 Local Development Testing
```bash
pnpm run dev
```
**Verify**:
- [ ] Dev server starts without errors
- [ ] Page loads at http://localhost:5173
- [ ] Styles apply correctly
- [ ] Mobile menu toggles properly
- [ ] No console errors or warnings

#### 8.2 Build Testing
```bash
pnpm run build
pnpm run preview
```
**Verify**:
- [ ] Build completes successfully
- [ ] Preview server works
- [ ] All assets load correctly
- [ ] File paths resolve properly

#### 8.3 Performance Testing
- [ ] Run Lighthouse audit (target: 95+ performance)
- [ ] Check Core Web Vitals
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] Verify bundle size < 200KB gzipped

#### 8.4 Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatible (test with VoiceOver/NVDA)
- [ ] Focus states visible
- [ ] ARIA attributes correct
- [ ] Color contrast ratio 4.5:1 minimum

#### 8.5 Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Phase 9: Documentation & Cleanup 📚
**Priority**: MEDIUM | **Estimated Time**: 15 minutes

- [ ] Update README.md if needed
- [ ] Add comments to complex code sections
- [ ] Remove any console.log statements
- [ ] Ensure .env.example is up to date
- [ ] Update WARP.md last updated date

---

## 📊 File Changes Manifest

### Files to CREATE ⭐
```
✅ IMPLEMENTATION_PLAN.md
⭐ src/scripts/main.js
⭐ src/scripts/modules/navigation.js
⭐ src/scripts/modules/form.js (TODO stub)
⭐ src/scripts/modules/analytics.js (TODO stub)
⭐ src/lib/utils.js (TODO stub)
⭐ public/robots.txt
⭐ public/sitemap.xml
```

### Files to MOVE/RENAME 🔄
```
src/style.css → src/styles/main.css
```

### Files to UPDATE 🔄
```
vite.config.js
src/pages/index.html
src/styles/main.css (simplify animations)
```

### Files to DELETE ❌
```
index.html (root)
src/main.js (Vite template)
src/counter.js
src/javascript.svg
public/vite.svg
```

---

## ⚙️ Configuration Updates

### vite.config.js Changes
**Before**:
```javascript
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

**After**:
```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
      },
    },
  },
  server: {
    open: '/src/pages/index.html',
  },
});
```

### package.json Scripts (No Changes Needed)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## ✅ Testing & Verification

### Pre-Implementation Checklist
- [x] Node.js 18+ installed (v22.16.0 ✅)
- [x] pnpm installed (v10.17.1 ✅)
- [x] Dependencies installed
- [x] .env file exists
- [x] Git repository initialized

### Post-Implementation Checklist
- [ ] All files moved/created/deleted as planned
- [ ] `pnpm run dev` starts successfully
- [ ] Homepage loads without errors
- [ ] CSS styles apply correctly
- [ ] JavaScript modules load
- [ ] Mobile menu works
- [ ] No console errors
- [ ] `pnpm run build` succeeds
- [ ] `pnpm run preview` works
- [ ] Lighthouse score 95+
- [ ] HTML validates
- [ ] Accessibility audit passes

### Manual Testing Scenarios
1. **Mobile Menu**:
   - Click hamburger → menu opens
   - Click outside → menu closes
   - Press ESC → menu closes
   - Keyboard navigate through menu items

2. **Responsive Design**:
   - Test at 375px (mobile)
   - Test at 768px (tablet)
   - Test at 1440px (desktop)
   - Verify no horizontal scroll

3. **Performance**:
   - Check Network tab for asset loading
   - Verify images are lazy loaded
   - Check JavaScript bundle size
   - Monitor memory usage

---

## 📝 Future TODOs

### Phase 10: Development Workflow Improvements
**Status**: 📝 TODO (Later)  
**Priority**: Medium

- [ ] **Create MCP config for GitHub PR creation**
  - Research available GitHub MCP tools/configurations
  - Set up GitHub CLI (gh) integration for automated PR creation
  - Configure MCP to handle PR creation with proper titles and descriptions
  - Test automated workflow: branch → commit → push → create PR
  - Document the setup process for other developers

### Phase 11: Contact Page Implementation
**Status**: 📝 TODO (Later)  
**Dependencies**: Backend API endpoint ready

- [ ] Create `src/pages/contact.html`
- [ ] Design contact form with validation
- [ ] Implement `src/scripts/modules/form.js`
- [ ] Add form submission logic
- [ ] Create success/error message UI
- [ ] Add form to Vite multi-page config
- [ ] Update navigation links
- [ ] Add to sitemap.xml

### Phase 12: Analytics Integration
**Status**: 📝 TODO (Later)  
**Dependencies**: GA4 tracking ID provided

- [ ] Get Google Analytics 4 tracking ID
- [ ] Update .env with `VITE_GA_TRACKING_ID`
- [ ] Implement `src/scripts/modules/analytics.js`
- [ ] Add gtag script to HTML
- [ ] Track page views
- [ ] Track custom events (CTA clicks, form submissions)
- [ ] Test in Google Analytics debug mode
- [ ] Document tracked events

### Phase 13: Content & Design Customization
**Status**: 📝 TODO (Later)

- [ ] Replace placeholder content with actual copy
- [ ] Add real testimonials and customer data
- [ ] Upload hero images and graphics
- [ ] Embed product demo video
- [ ] Customize brand colors in main.css
- [ ] Add custom fonts (if needed)
- [ ] Update favicon and og:image
- [ ] Create 404 error page

### Phase 14: Advanced Optimizations
**Status**: 📝 TODO (Later)

- [ ] Implement critical CSS inlining
- [ ] Add resource hints (preconnect, prefetch)
- [ ] Optimize font loading strategy
- [ ] Add service worker for offline support
- [ ] Implement image srcset for responsive images
- [ ] Add structured data (JSON-LD)
- [ ] Set up monitoring (Sentry, LogRocket)

### Phase 15: Deployment Preparation
**Status**: 📝 TODO (Later)  
**Dependencies**: Infrastructure team ready

- [ ] Create production .env file
- [ ] Test production build locally
- [ ] Generate build artifacts
- [ ] Create deployment documentation
- [ ] Configure CloudFront settings
- [ ] Set up CI/CD pipeline
- [ ] Configure S3 bucket
- [ ] Add custom domain
- [ ] Set up SSL certificate
- [ ] Configure caching headers

---

## 🎯 Success Criteria

### Technical Requirements
- ✅ **Performance**: Lighthouse score ≥ 95
- ✅ **Accessibility**: WCAG 2.1 AA compliance
- ✅ **SEO**: All meta tags present, sitemap valid
- ✅ **Mobile**: Works flawlessly on 375px+ screens
- ✅ **Browser Support**: Chrome, Firefox, Safari (latest 2 versions)
- ✅ **Bundle Size**: < 200KB gzipped

### Functional Requirements
- ✅ Homepage loads and displays correctly
- ✅ Mobile menu toggles smoothly
- ✅ All navigation links work
- ✅ Smooth scrolling to anchor sections
- ✅ No JavaScript errors in console
- ✅ Images load with lazy loading
- ✅ Styles apply with Tailwind CSS 4

### Code Quality Requirements
- ✅ Follows WARP.md guidelines
- ✅ Vanilla JavaScript (no frameworks)
- ✅ Semantic HTML5 throughout
- ✅ CSS-native Tailwind configuration
- ✅ Proper ARIA attributes
- ✅ Commented code where needed
- ✅ No hardcoded values (use env vars)

---

## 📅 Timeline

| Phase | Task | Estimated Time | Status |
|-------|------|----------------|--------|
| 1 | Project Setup & Planning | 30 min | ✅ Complete |
| 2 | File System Restructuring | 30 min | 🔄 In Progress |
| 3 | CSS Simplification | 20 min | ⏳ Pending |
| 4 | JavaScript Module Creation | 45 min | ⏳ Pending |
| 5 | SEO Assets Creation | 15 min | ⏳ Pending |
| 6 | Vite Configuration Update | 20 min | ⏳ Pending |
| 7 | HTML Path Updates | 15 min | ⏳ Pending |
| 8 | Testing & Verification | 30 min | ⏳ Pending |
| 9 | Documentation & Cleanup | 15 min | ⏳ Pending |
| **TOTAL** | **Initial Implementation** | **~3.5 hours** | **20% Complete** |

---

## 📞 Support & References

### Documentation
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [web.dev Performance](https://web.dev/learn-web-vitals/)

### Project Files
- `README.md` - Complete project documentation
- `WARP.md` - AI assistant guidelines
- `tailwind4_summary.md` - Tailwind 4 quick reference
- `v3_vs_v4_comparison.md` - Migration guide

### Key Contacts
- **Frontend Developer**: [Your Name]
- **Infrastructure Team**: [Backend/DevOps]
- **Design Team**: [Design Lead]

---

## 🔄 Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1.0 | 2025-10-04 | Initial implementation plan created | AI Agent |
| 0.1.1 | TBD | File restructuring completed | TBD |
| 0.2.0 | TBD | Core functionality implemented | TBD |
| 1.0.0 | TBD | Production ready | TBD |

---

## 📌 Notes

### Important Reminders
- ⚠️ **Tailwind CSS 4**: NO `tailwind.config.js` or `postcss.config.js` files
- ⚠️ **Root index.html**: Must be DELETED (use src/pages/index.html)
- ⚠️ **Environment Variables**: Prefix with `VITE_` to expose to client
- ⚠️ **Static Deployment**: No server-side logic, S3 + CloudFront only

### Trade-offs & Decisions
1. **Using Tailwind CSS 4 Alpha**: Cutting-edge features, but alpha stability risk
2. **Vanilla JavaScript**: Better performance, but more code than frameworks
3. **Multi-page Setup**: SEO benefits, but more complex than SPA
4. **Image Optimization**: Better performance, but longer build times

---

**Last Updated**: October 4, 2025  
**Next Review**: After Phase 2 completion  
**Status**: 🟡 In Progress - File restructuring phase
