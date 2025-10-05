# Technology Stack

## 🛠️ Core Technologies

### Build Tool
**Vite 7.1.9**
- Purpose: Development server and build tool
- Why: Fast HMR, excellent optimization, multi-page support
- Config: `vite.config.js`

### CSS Framework
**Tailwind CSS 4.1.14 (Alpha)**
- Purpose: Utility-first CSS framework
- Why: CSS-native config, no build overhead, smallest bundle
- ⚠️ **Important**: NO `tailwind.config.js` - uses `@theme` in CSS
- Config: `src/styles/main.css`

### JavaScript
**Vanilla JavaScript (ES6+)**
- Purpose: Client-side interactivity
- Why: Maximum performance, no framework overhead
- Module system: ES Modules (native imports)
- Transpilation: Vite handles automatically

## 📦 Dependencies

### Production Dependencies
```json
{
  "@tailwindcss/vite": "^4.1.14",
  "tailwind": "^4.0.0"
}
```

### Development Dependencies
```json
{
  "@commitlint/cli": "^20.1.0",
  "@commitlint/config-conventional": "^20.0.0",
  "eslint": "^9.37.0",
  "eslint-config-prettier": "^10.1.8",
  "eslint-plugin-import": "^2.32.0",
  "husky": "^9.1.7",
  "lint-staged": "^16.2.3",
  "prettier": "^3.6.2",
  "tailwindcss": "^4.1.14",
  "vite": "^7.1.7",
  "vite-plugin-image-optimizer": "^2.0.2"
}
```

## 🔧 Development Tools

### Code Quality
- **ESLint 9.37**: JavaScript linting
- **Prettier 3.6**: Code formatting
- **Husky 9.1**: Git hooks
- **lint-staged 16.2**: Run linters on staged files
- **commitlint**: Enforce conventional commits

### Build Optimization
- **vite-plugin-image-optimizer 2.0**: Automatic image optimization
  - Converts to WebP
  - Compresses PNG/JPEG
  - Quality: 80%

## 🌐 Browser Support

### Target Browsers
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions (iOS and macOS)

### Polyfills
None required (ES6+ features are broadly supported)

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)
```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Mobile-First Approach
All styles are mobile-first, then enhanced with breakpoint utilities.

## 🎨 Design System

### Colors
Defined in `src/styles/main.css` using `@theme`:
- Brand Primary: Blue scale (50-950)
- Brand Secondary: Purple scale (50-950)
- Grayscale: Tailwind defaults

### Typography
- Font Family: System fonts (performance)
  - Sans: Inter, system-ui, -apple-system, BlinkMacSystemFont
  - Heading: Plus Jakarta Sans (optional)
  - Mono: JetBrains Mono (optional)

### Spacing
- Custom: 18, 88, 100, 112, 128 (defined in theme)
- Standard: Tailwind defaults (0-96)

### Shadows
- Custom: `soft`, `soft-lg`, `inner-soft`
- Standard: Tailwind defaults

## 🔐 Environment Variables

### Format
All variables must be prefixed with `VITE_` to be exposed to client.

### Available Variables
```bash
# API Configuration
VITE_API_ENDPOINT=http://localhost:3000/api/contact

# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=Your Brand Name

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_FORM=true
```

### Usage in Code
```javascript
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
```

## 🚀 Deployment Stack

### Hosting
- **Platform**: AWS S3 (static file hosting)
- **CDN**: AWS CloudFront
- **Domain**: TBD
- **SSL**: CloudFront SSL certificate

### Build Output
```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── main-[hash].css    # Styles with cache busting
│   └── main-[hash].js     # Scripts with cache busting
├── robots.txt             # SEO crawling rules
└── sitemap.xml            # Site structure
```

## 🔄 Version Management

### Node.js
- **Required**: 18+ (recommend 22.16.0 via nvm)
- **Package Manager**: pnpm 10.17.1
- **Lock File**: `pnpm-lock.yaml`

### Dependency Updates
- Check monthly for security updates
- Test thoroughly before updating major versions
- Tailwind CSS 4 is in alpha - monitor for stable release

## ⚠️ Important Notes

### Tailwind CSS 4 Specifics
1. **NO `tailwind.config.js`** - Configuration is in CSS
2. **NO `postcss.config.js`** - Not needed
3. All customization in `src/styles/main.css` using `@theme` directive
4. Same utility classes as v3 (backward compatible)

### Vite Specifics
1. Uses ES modules natively
2. HMR updates are instantaneous
3. Build optimization is automatic
4. Multi-page apps require explicit input configuration

### Performance Constraints
1. Bundle size target: <200KB total (gzipped)
2. No large dependencies (lodash, moment, etc.)
3. Images must be optimized (WebP preferred)
4. Lazy load below-the-fold content

---

**For Breaking Changes**: Update this document immediately  
**For New Dependencies**: Add to this list with justification  
**For Version Updates**: Test and document any migration steps
