# Project Overview

## 📌 Quick Facts

**Project Name**: Synth Riders Switch - Marketing Landing Page  
**Client**: Kluge  
**Type**: Static Marketing Website  
**Status**: ✅ Development Ready  
**Last Updated**: October 4, 2025

## 🎯 Purpose

A high-performance, SEO-optimized static landing page for promoting Synth Riders on Nintendo Switch. The site is designed to convert visitors through compelling content, testimonials, and clear calls-to-action.

## 👥 Target Audience

- Gaming enthusiasts interested in rhythm games
- Nintendo Switch owners
- VR gaming community
- Potential customers looking for music-based games

## 🎨 Key Features

### Current (Implemented)
- ✅ Responsive mobile-first design
- ✅ Hero section with CTAs
- ✅ Features showcase
- ✅ Testimonials section
- ✅ Mobile navigation menu with accessibility
- ✅ SEO-ready meta tags and structured data
- ✅ Performance optimized (target: 95+ Lighthouse score)

### Planned (Future)
- 📝 Contact form with backend integration
- 📝 Google Analytics 4 tracking
- 📝 Video embed for product demo
- 📝 Real customer testimonials
- 📝 Product images and assets

## 🏗️ Architecture Type

**Static Site Generator**: None (Pure HTML/CSS/JS)  
**Build Tool**: Vite 7  
**Deployment Target**: AWS S3 + CloudFront  
**Hosting Type**: Static file hosting (no server-side rendering)

## 📊 Success Metrics

### Technical
- Lighthouse Performance: ≥95
- First Contentful Paint (FCP): <1.8s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- Total Bundle Size: <200KB gzipped

### Business
- Form submission rate
- CTA click-through rate
- Page view duration
- Mobile vs desktop traffic

## 🚫 Constraints & Limitations

1. **No Server-Side Logic**: All processing must happen client-side or via external APIs
2. **Static Deployment**: No server routes, redirects must be handled by CloudFront
3. **No Backend**: Forms require external API endpoint
4. **Browser Support**: Latest 2 versions of Chrome, Firefox, Safari
5. **No Framework**: Vanilla JavaScript only (performance requirement)

## 🔗 Related Projects

- Backend API (separate repo - handles form submissions)
- Design files (Figma - link TBD)
- Content management (Google Docs - link TBD)

## 📝 Project Context Notes

### Why Vanilla JavaScript?
- Maximum performance with minimal overhead
- No framework bundle size
- Direct control over optimizations
- Aligns with static hosting requirements

### Why Tailwind CSS 4?
- CSS-native configuration (no config files)
- Better build performance
- Smaller output bundles
- Future-proof approach

### Why Vite?
- Lightning-fast HMR during development
- Excellent build optimization
- Native ES modules support
- Simple multi-page configuration

## 🎓 Learning Resources

For team members new to the stack:
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS 4 Guide](../tailwind4_summary.md)
- [Vanilla JS Best Practices](https://javascript.info/)
- [Web Performance Guide](https://web.dev/learn-web-vitals/)

---

**Next Steps**: See `.ai/implementation/roadmap.md` for planned features  
**Current Work**: See `.ai/implementation/in-progress.md` for active tasks
