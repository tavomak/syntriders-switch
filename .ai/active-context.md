# Active Context - What I'm Working On NOW

**Last Updated**: October 5, 2025 (Session 2)  
**Current Phase**: Landing Page Implementation + Documentation  
**Status**: 🟢 Active Development

---

## 🎯 Today's Primary Goal

Replace the legacy landing page with a new **mobile-first Synth Riders Overdrive** design for Nintendo Switch, featuring a cyberpunk aesthetic with pink accent colors.

---

## ✅ Recent Changes (Last 24 Hours)

### Session 2: Documentation Optimization (Oct 5, 2025)
- ✅ Created hybrid `.ai/` folder structure (optimal for AI + humans)
- ✅ Added `active-context.md` - tracking current work state
- ✅ Added `quick-reference.md` - instant lookups + documentation quick links
- ✅ Added `AI-INTERACTION-PROTOCOL.md` - how AI should behave
- ✅ Added `ai-instructions.md` - explicit AI behavior rules
- ✅ Added `coding-standards.md` - comprehensive code conventions
- ✅ Created `project-context.md` - consolidated project overview
- ✅ Created `feature-guides/` with Tailwind, Vite, and JS modules guides
- ✅ Simplified `WARP.md` from 144 to 105 lines (27% further reduction, 77% total)
- ✅ Created `MAINTENANCE.md` - rules for keeping docs current
- ✅ Updated `.ai/README.md` with emphasized reading priority order
- ✅ Added documentation navigation table to `quick-reference.md`
- ✅ Finalized complete AI documentation ecosystem

### Session 1: Landing Page Implementation (Oct 5, 2025)
- ✅ Created new landing page HTML (`index.html`)
- ✅ Replaced old index with backup (`index-old.html`)
- ✅ Updated `constants.js` with proper URL structure
- ✅ Added link population logic in `main.js`
- ✅ Verified all 19 images + 5 icon assets exist
- ✅ Set up Teko font from Google Fonts
- ✅ Configured brand colors (Synth Pink: #FE1E69)

### HTML Structure Implemented
- Hero section with logo and primary banner
- 4 social action buttons (Discord, Press Kit, TikTok, YouTube)
- Main title and two description sections
- Music library section with 12 artist logos (3-column grid)
- Pre-footer gameplay image
- Footer with social icons and legal links

---

## 🔄 Next Immediate Steps

### Priority 1: Testing & Verification (Ready to Execute)
1. Run `pnpm dev` to test the new landing page
2. Verify no 404 errors on assets
3. Check mobile viewport rendering (375px+)
4. Test link population from constants
5. Validate responsive breakpoints

### Priority 2: Content Updates
1. Replace placeholder `#` URLs with real links in `constants.js`:
   - Social media URLs (Discord, TikTok, YouTube, etc.)
   - Legal page URLs (Privacy Policy, EULA, etc.)
   - Press Kit URL
2. Update domain in meta tags (currently `yourdomain.com`)

### Priority 3: Desktop Optimization
1. Wait for desktop design assets
2. Add responsive breakpoints for tablet/desktop
3. Optimize artist logo grid for wider screens

---

## 🚧 Known Issues & Blockers

### Current Blockers
- ⏸️ **Desktop design not provided yet** - focusing on mobile-first for now
- ⏸️ **Real URLs pending** - using placeholders (`#`) until client provides

### Technical Notes
- All image paths use absolute format (`/src/assets/images/...`)
- Using `data-social-link` and `data-legal-link` attributes for JS targeting
- JavaScript populates links on DOM load from constants

---

## 📝 Context for AI Assistants

### Project Constraints
- **No frameworks**: Vanilla JavaScript only
- **No React/Vue/Svelte**: Performance requirement
- **Tailwind CSS 4**: Use utility classes, never write raw CSS
- **Mobile-first**: Primary viewport is 375px-768px
- **Static site**: No server-side logic

### Code Patterns to Follow
- Use early returns in functions
- Prefer `const` over `function` declarations
- Descriptive names: `handleClick`, not `click`
- Always add ARIA attributes for accessibility
- Absolute paths from project root: `/src/...`

### Current File Structure
```
src/
├── pages/
│   ├── index.html          # 🆕 NEW landing page (active)
│   └── index-old.html      # Legacy backup
├── scripts/
│   ├── main.js             # Entry point + link population
│   ├── constants.js        # URLs and config
│   └── modules/
│       ├── navigation.js   # Mobile menu (not used on new page yet)
│       ├── form.js         # Stub for future
│       └── analytics.js    # Stub for future
├── styles/
│   └── main.css            # Tailwind 4 theme + custom styles
└── assets/
    ├── images/             # 19 images (logos, banners, etc.)
    └── icons/              # 5 social media icons
```

### Key Assets Reference
**Images:**
- `synthriders_logo.svg` - Main logo
- `primary_banner.jpg` - Hero image
- `pre_footer.jpg` - Gameplay showcase
- `kuge_logo.svg` - Developer logo
- Artist logos: `wham_logo.png`, `queen_logo.png`, etc. (12 total)
- Button icons: `discord_button.svg`, `press_kit_button.svg`, etc.

**Social Icons:**
- `facebook_icon.svg`, `instagram_icon.svg`, `twitter_icon.svg`, `youtube_icon.svg`, `spotify_icon.svg`

---

## 🎨 Design Tokens (Current)

### Colors
- **Synth Pink**: `#FE1E69` (CSS var: `--color-synth-pink`)
- **Synth Black**: `#000000` (CSS var: `--color-synth-black`)
- **Synth White**: `#FFFFFF` (CSS var: `--color-synth-white`)
- Discord Blue: `#5865F2`
- YouTube Red: `#FF0000`

### Typography
- **Heading Font**: Teko (Google Fonts) - weights 300-700
- **Body Font**: System sans-serif stack

### Button Styles
- Border: 2px solid with transparency
- Hover states: Darker variants
- Transitions: 200ms

---

## 📚 Related Documentation

**AI Reading Order (ALWAYS follow)**:
1. ⭐ `.ai/active-context.md` - THIS FILE (current state)
2. 🤖 `.ai/AI-INTERACTION-PROTOCOL.md` - How to behave
3. 📜 `.ai/ai-instructions.md` - Behavior rules
4. 📝 `.ai/coding-standards.md` - Code patterns
5. ✅ `.ai/implementation/completed.md` - Avoid duplicates
6. 🔧 `.ai/troubleshooting/common-issues.md` - When stuck

**Reference as needed**:
- ⚡ `.ai/quick-reference.md` - Instant lookups
- 📊 `.ai/project-context.md` - Big picture
- 🛠️ `.ai/tech-stack.md` - Dependencies

---

## 🔄 Update History

| Date | Change | By |
|------|--------|-----|
| Oct 5, 2025 (S2) | Optimized AI documentation structure | Development Team |
| Oct 5, 2025 (S1) | Created new landing page design | Development Team |
| Oct 4, 2025 | Fixed Vite config 404 issues | Development Team |
| Oct 4, 2025 | Set up project structure | Development Team |

---

**🤖 AI Quick Start**: 
Start here when resuming work. This file tells you exactly what's happening NOW. For historical context, check `implementation/completed.md`. For future plans, see `implementation/roadmap.md`.
