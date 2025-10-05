# ✨ Tailwind CSS 4 - Quick Reference

This project uses **Tailwind CSS 4 (Alpha)** - a revolutionary CSS-native approach!

---

## 🎯 What Changed?

### ❌ Files REMOVED (No Longer Needed)
- `tailwind.config.js` - Configuration now in CSS
- `postcss.config.js` - Built into Vite plugin
- `autoprefixer` package - Built-in

### ✅ Files UPDATED
- `package.json` - Tailwind 4 packages
- `vite.config.js` - Added `@tailwindcss/vite` plugin
- `src/styles/main.css` - Uses `@theme` for configuration

---

## 🚀 How to Customize

### All customization happens in `src/styles/main.css`:

```css
@import "tailwindcss";

@theme {
  /* Add your custom theme here */
  --color-accent-500: #ff6b6b;
  --font-display: 'Montserrat', sans-serif;
  --spacing-huge: 10rem;
  --shadow-glow: 0 0 20px rgba(255, 107, 107, 0.5);
}
```

---

## 📖 Common Customizations

### 1. Custom Colors
```css
@theme {
  --color-accent-500: #ff6b6b;
  --color-accent-600: #ee5a5a;
  --color-accent-700: #dd4949;
}
```

**Usage in HTML:**
```html
<div class="bg-accent-500 hover:bg-accent-600">
  Hello World
</div>
```

### 2. Custom Fonts
```css
@theme {
  --font-display: 'Playfair Display', serif;
  --font-body: 'Open Sans', sans-serif;
}
```

**Usage in HTML:**
```html
<h1 class="font-display">Heading</h1>
<p class="font-body">Body text</p>
```

### 3. Custom Spacing
```css
@theme {
  --spacing-huge: 10rem;
  --spacing-tiny: 0.125rem;
}
```

**Usage in HTML:**
```html
<div class="mt-huge mb-tiny">Content</div>
```

### 4. Custom Shadows
```css
@theme {
  --shadow-glow: 0 0 20px rgba(14, 165, 233, 0.5);
  --shadow-brutal: 8px 8px 0 rgba(0, 0, 0, 1);
}
```

**Usage in HTML:**
```html
<div class="shadow-glow">Glowing card</div>
```

### 5. Custom Border Radius
```css
@theme {
  --radius-blob: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
```

**Usage in HTML:**
```html
<div class="rounded-blob">Organic shape</div>
```

### 6. Custom Breakpoints
```css
@theme {
  --breakpoint-tablet: 48rem;
  --breakpoint-desktop: 80rem;
}
```

**Usage in HTML:**
```html
<div class="tablet:flex desktop:grid">Responsive</div>
```

---

## 🎨 Pre-configured Theme

Your project comes with this theme (in `src/styles/main.css`):

```css
@theme {
  /* Brand Colors */
  --color-brand-primary-50: #f0f9ff;
  --color-brand-primary-500: #0ea5e9;
  --color-brand-primary-600: #0284c7;
  --color-brand-primary-700: #0369a1;
  
  --color-brand-secondary-500: #a855f7;
  --color-brand-secondary-600: #9333ea;
  
  /* Fonts */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  
  /* Custom Spacing */
  --spacing-18: 4.5rem;
  --spacing-88: 22rem;
  
  /* Custom Shadows */
  --shadow-soft: 0 2px 15px -3px rgb(0 0 0 / 0.07);
  --shadow-soft-lg: 0 10px 40px -15px rgb(0 0 0 / 0.1);
}
```

**Modify these values to match your brand!**

---

## 💡 Quick Tips

### 1. All Tailwind Utilities Still Work
```html
<!-- These all work exactly the same -->
<div class="flex items-center justify-between">
<div class="grid grid-cols-3 gap-4">
<div class="bg-blue-500 hover:bg-blue-600">
<div class="md:flex lg:grid">
```

### 2. Naming Convention for Custom Values
```css
@theme {
  /* Colors: --color-{name}-{shade} */
  --color-accent-500: #ff6b6b;
  
  /* Fonts: --font-{name} */
  --font-display: 'Font Name';
  
  /* Spacing: --spacing-{name} */
  --spacing-huge: 10rem;
  
  /* Shadows: --shadow-{name} */
  --shadow-glow: 0 0 20px red;
  
  /* Radius: --radius-{name} */
  --radius-blob: 50%;
}
```

### 3. Use CSS Variables for Dynamic Theming
```css
@theme {
  --color-primary: var(--user-primary-color, #0ea5e9);
}
```

### 4. Dark Mode Support
```css
@theme {
  --color-background: #ffffff;
  
  @media (prefers-color-scheme: dark) {
    --color-background: #1a1a1a;
  }
}
```

---

## 🔍 Debugging

### Check if Tailwind is Working
1. Open browser DevTools
2. Inspect an element with Tailwind classes
3. You should see the CSS applied

### Common Issues

**Classes not working?**
- Clear Vite cache: `rm -rf node_modules/.vite && npm run dev`
- Check you have `@import "tailwindcss"` in main.css
- Verify `@tailwindcss/vite` is in vite.config.js plugins

**Custom theme not applying?**
- Check syntax in `@theme` block (no semicolon after `@theme {`)
- Use correct naming: `--color-`, `--font-`, `--spacing-`
- Clear browser cache

---

## 📚 Resources

- [Tailwind CSS 4 Alpha Announcement](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- See `TAILWIND-4-MIGRATION.md` for detailed migration guide

---

## ⚡ Advantages of Tailwind 4

1. **Faster builds** - No PostCSS processing
2. **Simpler setup** - No config files
3. **Better DX** - CSS-native, easier to understand
4. **Smaller bundles** - More efficient CSS generation
5. **Type-safe** - Better IDE support for CSS variables

---

## 🎓 Learning Path

1. ✅ Understand that there's NO `tailwind.config.js`
2. ✅ Open `src/styles/main.css` to see the `@theme` block
3. ✅ Modify a color: `--color-brand-primary-600: #your-color`
4. ✅ Run `npm run dev` and see your change
5. ✅ Add a new custom value and use it in HTML
6. ✅ Explore the pre-configured theme values

---

## 🎉 You're Ready!

Tailwind CSS 4 is powerful yet simple. All your Tailwind knowledge still applies - just configure in CSS instead of JS!

**Key Takeaway**: Edit `src/styles/main.css` → use classes in HTML → profit! 🚀