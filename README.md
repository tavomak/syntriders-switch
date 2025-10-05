# Synth Riders for Nintendo Switch - AI-Developed Static Site

> A high-performance, SEO-optimized promotional landing page for Synth Riders Nintendo Switch release, built with Vite, Tailwind CSS 4, and vanilla JavaScript by AI agents.

---

## 🚀 Features

- ⚡ **Lightning Fast**: Optimized for Core Web Vitals and 95+ Lighthouse scores
- 🎨 **Modern Design**: Built with Tailwind CSS 4 (Alpha) - CSS-native configuration
- 📱 **Mobile First**: Fully responsive across all devices
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🔍 **SEO Ready**: Complete meta tags, structured data, and semantic HTML
- 📊 **Analytics**: Google Analytics 4 integration
- 🖼️ **Optimized Assets**: WebP images with fallbacks, lazy loading
- 📝 **Contact Form**: Validated form with Resend integration (via API)
- 🎯 **Multi-Page**: Static HTML pages for optimal S3/CloudFront hosting
- ✨ **Tailwind CSS 4**: No config files needed - everything in CSS!

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Building](#-building)
- [Deployment](#-deployment)
- [Configuration](#%EF%B8%8F-configuration)
- [Scripts](#-scripts)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)

---

## 🏃 Quick Start

### Prerequisites

- Node.js 18+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- pnpm or ppnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-name>

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm run dev
```

Visit `http://localhost:5173` to see your site.

---

## 📁 Project Structure

```
.
├── public/                  # Static assets (copied as-is)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── src/
│   ├── pages/              # HTML pages (Vite multi-page entries)
│   │   ├── index.html      # Home page
│   │   └── contact.html    # Contact page
│   ├── scripts/            # JavaScript modules
│   │   ├── main.js         # Main entry point
│   │   ├── modules/
│   │   │   ├── navigation.js
│   │   │   ├── form.js
│   │   │   └── analytics.js
│   │   └── components/     # Reusable components
│   │       ├── Header.js
│   │       ├── Footer.js
│   │       └── MobileMenu.js
│   ├── styles/             # CSS files
│   │   ├── main.css        # Main Tailwind entry
│   │   └── components/     # Component-specific styles
│   ├── assets/             # Images, videos, icons
│   │   ├── images/
│   │   └── icons/
│   └── lib/                # Utility functions
│       └── utils.js
├── .env.example            # Environment variables template
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc             # Prettier configuration
├── .commitlintrc.cjs       # Commitlint configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── package.json
```

---

## 💻 Development

### Running the Dev Server

```bash
pnpm run dev
```

The site will be available at `http://localhost:5173` with hot module replacement.

### Code Quality

```bash
# Run ESLint
pnpm run lint

# Fix ESLint issues automatically
pnpm run lint:fix

# Format code with Prettier
pnpm run format

# Check formatting
pnpm run format:check
```

### Git Hooks

This project uses Husky for git hooks:

- **pre-commit**: Runs lint-staged (lints and formats staged files)
- **commit-msg**: Validates commit messages follow Conventional Commits

### Adding New Pages

1. Create a new HTML file in `src/pages/`:

   ```html
   <!-- src/pages/new-page.html -->
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>New Page | Brand Name</title>
       <link rel="stylesheet" href="../styles/main.css" />
     </head>
     <body>
       <!-- Your content -->
       <script type="module" src="../scripts/main.js"></script>
     </body>
   </html>
   ```

2. Update `vite.config.js` to include the new page:

   ```javascript
   export default defineConfig({
     build: {
       rollupOptions: {
         input: {
           main: resolve(__dirname, "src/pages/index.html"),
           contact: resolve(__dirname, "src/pages/contact.html"),
           newpage: resolve(__dirname, "src/pages/new-page.html"), // Add this
         },
       },
     },
   });
   ```

3. Update navigation links in your components

---

## 🏗️ Building

### Production Build

```bash
pnpm run build
```

This will:

1. Build optimized assets
2. Optimize images (convert to WebP)
3. Minify CSS and JavaScript
4. Generate source maps
5. Output to `dist/` directory

### Preview Production Build

```bash
pnpm run preview
```

Test the production build locally at `http://localhost:4173`

### Build Output

```
dist/
├── index.html              # Home page
├── contact.html            # Contact page
├── assets/
│   ├── index-[hash].js     # Main JS bundle
│   ├── index-[hash].css    # Main CSS bundle
│   └── images/             # Optimized images
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

---

## 🚢 Deployment

### Deployment to S3 + CloudFront

**Note**: Deployment is handled by the infrastructure team. This section documents what they need.

#### Build Artifacts

After running `pnpm run build`, provide the entire `dist/` folder.

#### S3 Bucket Configuration

**Required Settings**:

- Static website hosting: Enabled
- Index document: `index.html`
- Error document: `404.html` (if created)
- Bucket policy: Public read access for objects

**MIME Types** (set via metadata):

```
.html  -> text/html
.css   -> text/css
.js    -> application/javascript
.webp  -> image/webp
.svg   -> image/svg+xml
.json  -> application/json
```

**Cache-Control Headers**:

```
HTML files:   Cache-Control: no-cache, must-revalidate
CSS/JS files: Cache-Control: public, max-age=31536000, immutable
Images:       Cache-Control: public, max-age=31536000, immutable
```

#### CloudFront Configuration

**Origin Settings**:

- Origin Domain: Your S3 bucket website endpoint (not the bucket name)
- Origin Protocol: HTTP only (S3 static hosting)

**Default Cache Behavior**:

- Viewer Protocol Policy: Redirect HTTP to HTTPS
- Allowed HTTP Methods: GET, HEAD, OPTIONS
- Cached HTTP Methods: GET, HEAD
- Cache Policy: CachingOptimized (or custom)

**Custom Error Pages**:

- 404: `/404.html` (response code: 404)
- 403: `/index.html` (response code: 200) - for SPA-like routing fallback

**Security Headers** (via Lambda@Edge or CloudFront Functions):

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

#### Environment Variables for Build

Create a `.env.production` file:

```bash
# API Endpoint (provided by backend team)
VITE_API_ENDPOINT=https://api.yourdomain.com/contact

# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Site URL (for sitemap/canonical URLs)
VITE_SITE_URL=https://yourdomain.com
```

Build with production environment:

```bash
pnpm run build
```

---

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# API Configuration
VITE_API_ENDPOINT=http://localhost:3000/api/contact

# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=Your Brand Name
```

**Important**:

- Prefix all variables with `VITE_` to expose them to the client
- Never commit `.env` files with sensitive data
- Production variables should be set during CI/CD build process

### Tailwind Configuration

Edit `tailwind.config.js` to customize:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#your-color",
          secondary: "#your-color",
        },
      },
      fontFamily: {
        sans: ["Your Font", "sans-serif"],
      },
    },
  },
};
```

### Image Optimization

Configure in `vite.config.js`:

```javascript
imageOptimizer({
  png: { quality: 80 },
  jpeg: { quality: 80 },
  webp: { quality: 80 },
  avif: { quality: 70 },
});
```

---

## 📜 Scripts

```bash
# Development
pnpm run dev              # Start dev server
pnpm run build            # Production build
pnpm run preview          # Preview production build

# Code Quality
pnpm run lint             # Run ESLint
pnpm run lint:fix         # Fix ESLint issues
pnpm run format           # Format with Prettier
pnpm run format:check     # Check formatting

# Testing
pnpm run test             # Run tests (if configured)
pnpm run test:e2e         # Run E2E tests (if configured)

# Image Optimization
pnpm run optimize:images  # Optimize images manually

# Utilities
pnpm run clean            # Clean dist folder
pnpm run analyze          # Analyze bundle size
```

---

## 🛠️ Tech Stack

### Core

- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Vanilla JavaScript** - No framework overhead

### Development Tools

- **[ESLint](https://eslint.org/)** - JavaScript linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files
- **[commitlint](https://commitlint.js.org/)** - Enforce commit message conventions

### Optimization

- **[vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer)** - Image optimization
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixes

### Integration

- **Google Analytics 4** - Web analytics
- **Resend** (via backend API) - Email service for contact forms

---

## 🎨 Design Guidelines

### Colors

Update in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: '#yourcolor',
    secondary: '#yourcolor',
  }
}
```

### Typography

This project uses system fonts by default for performance. To add custom fonts:

1. **Using Google Fonts** (preconnect for performance):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

2. **Self-hosted fonts** (recommended for performance):

```css
@font-face {
  font-family: "YourFont";
  src: url("/assets/fonts/yourfont.woff2") format("woff2");
  font-display: swap;
}
```

### Responsive Breakpoints

Default Tailwind breakpoints:

```
sm: 640px   -> @media (min-width: 640px)
md: 768px   -> @media (min-width: 768px)
lg: 1024px  -> @media (min-width: 1024px)
xl: 1280px  -> @media (min-width: 1280px)
2xl: 1536px -> @media (min-width: 1536px)
```

---

## 📝 Content Management

### Updating Page Content

Content is managed in HTML files in `src/pages/`. To update:

1. Edit the HTML file directly
2. Rebuild for production: `pnpm run build`

### Using Markdown Files (Optional)

If you want to use `.md` files for content:

1. Install markdown parser:

```bash
pnpm install marked
```

2. Create content files in `src/content/`:

```markdown
<!-- src/content/features.md -->

# Our Features

- Feature 1
- Feature 2
```

3. Parse and inject at build time or runtime:

```javascript
import { marked } from "marked";
const html = marked.parse(markdownContent);
```

### SEO Content Checklist

For each page, ensure:

- [ ] Unique `<title>` tag (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] H1 tag (only one per page)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Internal links to other pages
- [ ] Canonical URL

---

## 🔧 Common Tasks

### Adding a New Component

1. Create component file:

```javascript
// src/scripts/components/MyComponent.js
export class MyComponent {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.element.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    console.log("Clicked!", e);
  }
}
```

2. Import and initialize in `main.js`:

```javascript
import { MyComponent } from "./components/MyComponent.js";

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-my-component]");
  elements.forEach((el) => new MyComponent(el));
});
```

### Handling Forms

Example contact form handler:

```javascript
// src/scripts/modules/form.js
export async function handleContactForm(formElement) {
  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      // Show success message
      showSuccessMessage();
      formElement.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      showErrorMessage();
    }
  });
}

function showSuccessMessage() {
  // Implementation
}

function showErrorMessage() {
  // Implementation
}
```

### Adding Analytics Events

```javascript
// src/scripts/modules/analytics.js
export function trackEvent(eventName, eventParams = {}) {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

// Usage
import { trackEvent } from "./modules/analytics.js";

button.addEventListener("click", () => {
  trackEvent("button_click", {
    button_name: "cta_hero",
    page_location: window.location.href,
  });
});
```

### Optimizing Images

1. **Place original images** in `src/assets/images/`

2. **Build will auto-optimize** to WebP and compress

3. **Use in HTML**:

```html
<picture>
  <source srcset="/assets/images/hero.webp" type="image/webp" />
  <img
    src="/assets/images/hero.jpg"
    alt="Hero image"
    width="1920"
    height="1080"
    loading="lazy"
  />
</picture>
```

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: `Error: Cannot find module`

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
pnpm install
```

**Issue**: Image optimization fails

```bash
# Check image file formats and sizes
# Ensure sharp dependencies are installed
pnpm install -D sharp
```

### Development Server Issues

**Issue**: Hot reload not working

```bash
# Check if port 5173 is available
# Try a different port
pnpm run dev -- --port 3000
```

**Issue**: CSS not loading

```bash
# Verify Tailwind config paths
# Check PostCSS configuration
# Restart dev server
```

### Deployment Issues

**Issue**: 404 errors on S3

- Ensure all HTML files are in the root of the S3 bucket
- Check CloudFront distribution settings
- Verify S3 bucket policy allows public reads

**Issue**: CloudFront not serving updated content

```bash
# Create cache invalidation
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"
```

---

## 📊 Performance Optimization

### Checklist

- [x] Images optimized and lazy-loaded
- [x] Critical CSS inlined (if needed)
- [x] JavaScript deferred or async
- [x] Resources preconnected
- [x] Fonts optimized with font-display: swap
- [x] Bundle size minimized
- [x] Unused CSS purged by Tailwind
- [x] Compression enabled (gzip/brotli)

### Monitoring

Use these tools to monitor performance:

- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)** - Chrome DevTools
- **[PageSpeed Insights](https://pagespeed.web.dev/)** - Google
- **[WebPageTest](https://www.webpagetest.org/)** - Detailed analysis
- **[GTmetrix](https://gtmetrix.com/)** - Performance monitoring

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## ♿ Accessibility

### Guidelines

- Use semantic HTML elements
- Provide alt text for images
- Ensure sufficient color contrast (4.5:1 minimum)
- Support keyboard navigation
- Add ARIA labels where necessary
- Test with screen readers

### Testing Tools

- **[axe DevTools](https://www.deque.com/axe/devtools/)** - Browser extension
- **[WAVE](https://wave.webaim.org/)** - Web accessibility evaluation tool
- **Lighthouse** - Accessibility audit

---

## 🔒 Security

### Best Practices

- Never commit `.env` files with sensitive data
- Use HTTPS in production
- Implement CSP (Content Security Policy)
- Sanitize form inputs
- Keep dependencies updated
- Use Dependabot for security alerts

### Security Headers

Configured via CloudFront (handled by infrastructure team):

```
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 🤝 Contributing

### Development Workflow

1. Create a feature branch:

```bash
git checkout -b feat/your-feature
```

2. Make your changes

3. Commit using conventional commits:

```bash
git commit -m "feat(component): add new feature"
```

4. Push and create a pull request

### Code Review Checklist

- [ ] Code follows project conventions
- [ ] No console errors or warnings
- [ ] Mobile responsive
- [ ] Accessible (keyboard navigation, ARIA)
- [ ] Performance tested
- [ ] SEO meta tags updated (if new page)
- [ ] Documentation updated

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/) - Best practices
- [Google Analytics 4](https://support.google.com/analytics/)
- [AWS S3 Static Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)

---

## 📄 License

[Your License Here]

---

## 👥 Team

- **Development**: [Your Team]
- **Design**: [Design Team]
- **Infrastructure**: [Infrastructure Team]

---

## 📞 Support

For questions or issues:

- Create an issue in the repository
- Contact the development team
- Check the [WARP.md](./WARP.md) file for AI assistant guidelines

---

## 🤖 For AI Assistants

This project uses structured AI documentation for better context and suggestions.

### Quick Start
1. **Documentation Structure**: Read [.ai/README.md](.ai/README.md)
2. **Coding Standards**: Follow [WARP.md](./WARP.md) conventions
3. **Project Context**: Check [.ai/context/project-overview.md](.ai/context/project-overview.md)
4. **What's Completed**: See [.ai/implementation/completed.md](.ai/implementation/completed.md)
5. **Troubleshooting**: Reference [.ai/troubleshooting/common-issues.md](.ai/troubleshooting/common-issues.md)

**Full Guide**: [.ai/documentation-guide.md](.ai/documentation-guide.md)

---

**Last Updated**: October 4, 2025
