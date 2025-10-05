# Quick Setup Guide - Tailwind CSS 4

This guide will help you get your Vite multi-page landing page with **Tailwind CSS 4** up and running in minutes.

---

## 📦 Step 1: Create Project Structure

Create the following folder structure:

```bash
your-project/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg (add your favicon)
├── src/
│   ├── pages/
│   │   ├── index.html
│   │   └── contact.html
│   ├── scripts/
│   │   ├── main.js
│   │   └── modules/
│   │       ├── navigation.js
│   │       ├── form.js
│   │       └── analytics.js
│   ├── styles/
│   │   └── main.css (⭐ Tailwind CSS 4 config here!)
│   └── assets/
│       └── images/
├── .env.example
├── .env (create from .env.example)
├── .gitignore
├── .editorconfig
├── .eslintrc.cjs
├── .prettierrc
├── .commitlintrc.cjs
├── vite.config.js (⭐ Includes @tailwindcss/vite plugin)
├── package.json
├── README.md
├── WARP.md
├── TAILWIND-4-MIGRATION.md
└── TAILWIND-4-SUMMARY.md

⚠️ NO tailwind.config.js - Configuration is in CSS!
⚠️ NO postcss.config.js - Not needed with Tailwind 4!
```

---

## 🚀 Step 2: Install Dependencies

```bash
# Initialize npm (if not already done)
npm init -y

# Install all dependencies
npm install
```

---

## ⚙️ Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Edit `.env` and update values:
```bash
VITE_API_ENDPOINT=http://localhost:3000/api/contact
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=Your Brand Name
```

---

## 🎨 Step 4: Customize Branding

### Update Colors in `tailwind.config.js`:
```javascript
colors: {
  brand: {
    primary: {
      // Your primary color palette
      600: '#0ea5e9',
    },
    secondary: {
      // Your secondary color palette
      600: '#a855f7',
    },
  },
}
```

### Update Brand Name:
- Search and replace "YourBrand" in all HTML files
- Update meta tags in both `index.html` and `contact.html`

---

## 🔧 Step 5: Set Up Git Hooks

```bash
# Initialize Husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

# Add commit-msg hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

---

## 🏃 Step 6: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/pages/index.html` in your browser.

---

## ✅ Step 7: Verify Everything Works

### Check Navigation:
- [ ] Mobile menu opens and closes
- [ ] All links work correctly
- [ ] Smooth scrolling works

### Check Contact Form:
- [ ] Form validation works
- [ ] Error messages display correctly
- [ ] Loading state appears on submit

### Check Responsive Design:
- [ ] Test on mobile (375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1440px)

---

## 🏗️ Step 8: Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

---

## 📝 Step 9: Update Content

### Update Home Page (`src/pages/index.html`):
1. Replace hero text and CTAs
2. Add your video embed in the features section
3. Update testimonials with real customer feedback
4. Update footer links and company info

### Update Contact Page (`src/pages/contact.html`):
1. Update contact information (email, phone, address)
2. Adjust form fields as needed

### Update SEO Meta Tags:
In both HTML files, update:
- `<title>`
- `<meta name="description">`
- Open Graph tags
- Twitter Card tags
- Canonical URLs

---

## 🔌 Step 10: Backend Integration

### For Contact Form (Resend API):

The frontend is ready. Your backend team needs to create an API endpoint that:

1. **Receives POST requests** to the URL in `VITE_API_ENDPOINT`
2. **Accepts JSON payload**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Inquiry",
  "message": "Hello..."
}
```
3. **Returns JSON response**:
```json
// Success
{ "success": true, "message": "Email sent" }

// Error
{ "success": false, "error": "Error message" }
```

### Example Lambda Function (for backend team):

```javascript
// AWS Lambda with Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  const { name, email, subject, message } = JSON.parse(event.body);

  try {
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'support@yourdomain.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
```

---

## 🎯 Step 11: Google Analytics Setup

1. Get your GA4 tracking ID from Google Analytics
2. Update `VITE_GA_TRACKING_ID` in `.env`
3. Replace `GA_TRACKING_ID` in HTML files with your actual ID
4. Or use environment variable in build process

---

## 🚢 Step 12: Deployment Preparation

### For Infrastructure Team:

Share the following:

1. **Build output**: `dist/` folder after running `npm run build`
2. **Environment variables**: Production values for `.env`
3. **Deployment documentation**: See README.md "Deployment to S3 + CloudFront" section

### Build Command for CI/CD:
```bash
npm ci
npm run build
```

---

## 🐛 Troubleshooting

### Port already in use:
```bash
npm run dev -- --port 3000
```

### Images not loading:
- Ensure images are in `src/assets/images/`
- Use relative paths from the HTML file location
- Check browser console for errors

### Styles not applying:
```bash
# Clear cache and restart
rm -rf node_modules/.vite
npm run dev
```

### Form not submitting:
- Check `VITE_API_ENDPOINT` in `.env`
- Check browser console for errors
- Verify CORS settings on backend API

---

## 📚 Next Steps

1. ✅ Add your actual content and images
2. ✅ Customize colors and fonts
3. ✅ Set up Google Analytics
4. ✅ Configure backend API for contact form
5. ✅ Test thoroughly across devices
6. ✅ Run Lighthouse audit (target 95+ performance)
7. ✅ Deploy to staging environment
8. ✅ Get stakeholder approval
9. ✅ Deploy to production

---

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Check `WARP.md` for AI assistant guidelines
- Review the implementation checklist

---

**Estimated Setup Time**: 30-60 minutes

Good luck! 🚀