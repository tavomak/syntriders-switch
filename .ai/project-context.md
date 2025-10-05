# Project Context

**Last Updated**: October 5, 2025

---

## 📌 Quick Facts

**Project Name**: Synth Riders Overdrive - Nintendo Switch Landing Page  
**Client**: Kluge Interactive  
**Type**: Static Marketing Website  
**Stack**: Vanilla JS + Tailwind CSS 4 + Vite 7  
**Status**: 🟢 Active Development  

---

## 🎯 Purpose & Goals

A high-performance, SEO-optimized **static landing page** for promoting **Synth Riders Overdrive** on Nintendo Switch. The site is designed to:

- Convert visitors through compelling cyberpunk aesthetic
- Showcase the game's features, music library, and artist partnerships
- Drive traffic to social channels (Discord, TikTok, YouTube)
- Provide Press Kit access for media
- Maintain exceptional performance (95+ Lighthouse score)

---

## 👥 Target Audience

1. **Primary**: Nintendo Switch owners interested in rhythm games
2. **Secondary**: VR gaming community (existing Synth Riders players)
3. **Tertiary**: Music game enthusiasts, synthwave fans
4. **Media**: Gaming journalists and content creators

---

## 🎨 Design System

### Brand Identity
- **Game**: Synth Riders Overdrive
- **Theme**: Cyberpunk, retrofuturistic, neon aesthetic
- **Primary Color**: Synth Pink (#FE1E69)
- **Background**: Pure black (#000000)
- **Text**: White (#FFFFFF)

### Typography
- **Heading Font**: Teko (Google Fonts) - weights 300-700
- **Body Font**: System sans-serif stack
- **Style**: Bold, uppercase headings with tracking

### Visual Style
- Mobile-first responsive design
- High-contrast colors for accessibility
- Rounded corners on images (rounded-lg)
- Border accents with transparency
- Smooth transitions (200ms)

---

## 🏗️ Technical Architecture

### Stack
- **No Framework**: Vanilla JavaScript (ES modules)
- **Styling**: Tailwind CSS 4 (native CSS configuration)
- **Build Tool**: Vite 7
- **Deployment**: AWS S3 + CloudFront (static hosting)

### Why This Stack?

**Vanilla JavaScript**:
- Maximum performance with minimal overhead (~2KB JS gzipped)
- No framework bundle size
- Direct control over optimizations
- Aligns with static hosting requirements

**Tailwind CSS 4**:
- CSS-native configuration via `@theme` (no config files)
- Better build performance
- Smaller output bundles
- Future-proof approach

**Vite**:
- Lightning-fast HMR during development
- Excellent build optimization
- Native ES modules support
- Simple multi-page configuration

---

## 📊 Success Metrics

### Technical Performance
- **Lighthouse Performance**: ≥95
- **First Contentful Paint (FCP)**: <1.8s
- **Largest Contentful Paint (LCP)**: <2.5s
- **Cumulative Layout Shift (CLS)**: <0.1
- **Total Bundle Size**: <200KB gzipped

### Business Metrics
- Social link click-through rate
- Press Kit download rate
- Page view duration
- Mobile vs desktop traffic distribution

---

## 🚫 Constraints & Limitations

1. **No Server-Side Logic**: All processing must happen client-side or via external APIs
2. **Static Deployment**: No server routes; redirects handled by CloudFront
3. **No Backend**: Forms would require external API endpoint
4. **Browser Support**: Latest 2 versions of Chrome, Firefox, Safari
5. **No Framework**: Vanilla JavaScript only (strict requirement)
6. **No Raw CSS**: All styling must use Tailwind utility classes

---

## 📁 Project Structure

```
synthriders-switch/
├── src/
│   ├── pages/
│   │   ├── index.html          # Main landing page
│   │   └── index-old.html      # Legacy backup
│   ├── scripts/
│   │   ├── main.js             # Entry point
│   │   ├── constants.js        # URLs and config
│   │   └── modules/
│   │       ├── navigation.js   # Mobile menu
│   │       ├── form.js         # Future: Form validation
│   │       └── analytics.js    # Future: GA4 tracking
│   ├── styles/
│   │   └── main.css            # Tailwind imports + theme
│   └── assets/
│       ├── images/             # 19 images (banners, logos)
│       └── icons/              # 5 social media icons
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
├── .ai/                        # AI documentation (this folder)
├── vite.config.js              # Build configuration
└── package.json
```

---

## 🎮 Current Landing Page Sections

### Implemented (October 5, 2025)
1. **Hero Section**
   - Synth Riders logo
   - Primary banner image
   - 4 social action buttons (2x2 grid on mobile)

2. **Main Title**
   - "An Action-Packed Cyberpunk Rhythm Game"

3. **Description Sections**
   - "Become a Synth Rider in a futuristic world"
   - "Multiplayer musical mayhem" (up to 4 players)

4. **Music Library**
   - Artist logos grid (3 columns mobile, 12 artists total)
   - Includes: WHAM!, Queen, Charli XCX, David Guetta, OneRepublic, Jack Harlow, Sia, and more

5. **Pre-Footer Image**
   - Gameplay showcase

6. **Footer**
   - 5 social media icon links
   - 5 legal/policy links
   - Kluge Interactive logo

---

## 🔮 Planned Features (Future Phases)

### Phase 2: Content Enhancements
- Desktop-optimized layout (tablet/desktop breakpoints)
- Real URLs for social media and legal pages
- Video embed for gameplay trailer
- "Buy Now" CTA buttons (Nintendo eShop link)

### Phase 3: Functionality
- Contact form with backend API integration
- Google Analytics 4 event tracking
- Newsletter signup integration

### Phase 4: Advanced
- A/B testing for CTAs
- Dynamic content management
- Localization (multi-language support)

---

## 🔗 Related Resources

### Internal
- **Active Work**: See `.ai/active-context.md` for current tasks
- **Implementation**: See `.ai/implementation/completed.md` for done work
- **Tech Stack**: See `.ai/tech-stack.md` for dependencies
- **Troubleshooting**: See `.ai/troubleshooting/common-issues.md`

### External
- **Vite Docs**: https://vitejs.dev/
- **Tailwind CSS 4**: https://tailwindcss.com/docs/v4-beta
- **Web Vitals**: https://web.dev/learn-web-vitals/
- **Vanilla JS Guide**: https://javascript.info/

### Design & Assets
- Design files: Figma (link TBD)
- Content source: Google Docs (link TBD)
- Asset repository: `src/assets/`

---

## 🎓 Onboarding for New Developers

If you're new to this project, read in this order:

1. **This file** - Understand the project
2. `.ai/active-context.md` - See current work
3. `.ai/tech-stack.md` - Learn the dependencies
4. `.ai/coding-standards.md` - Follow the patterns
5. `.ai/ai-instructions.md` - AI-specific rules

Then:
6. Run `pnpm dev` to start local development
7. Read `.ai/feature-guides/` for deep dives on specific topics

---

## 📝 Key Decisions & Rationale

### Decision: No JavaScript Framework
**Why**: Performance is critical. A framework would add 40-100KB to bundle size. This site needs < 50KB total JS.

### Decision: Tailwind CSS 4 (Beta)
**Why**: Future-proof approach. Native CSS configuration eliminates build-time config files and improves performance.

### Decision: Absolute Paths in HTML
**Why**: Using relative paths (`../styles/`) breaks Vite dev server. Absolute paths (`/src/styles/`) work in both dev and production.

### Decision: Mobile-First
**Why**: Analytics show 60%+ mobile traffic. Desktop enhancements come after mobile is perfected.

---

## 🆘 Common Questions

**Q: Can I use React components?**  
A: No. This project uses vanilla JS only for performance.

**Q: Can I write CSS files?**  
A: No. Use Tailwind utility classes only. If you need custom styles, add them to `src/styles/main.css` using `@layer` or custom CSS properties.

**Q: Why are paths absolute in HTML?**  
A: Vite requires this. Relative paths cause 404 errors. See `.ai/troubleshooting/common-issues.md`.

**Q: Where do I add new JavaScript?**  
A: Create a module in `src/scripts/modules/` and import it in `main.js`.

---

**Last Review**: October 5, 2025  
**Maintained By**: Development Team  
**For AI**: This is the master context file. Always read this after `active-context.md`.
