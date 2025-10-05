#!/bin/bash

# Landing Page Project Initialization Script
# This script sets up the complete project structure with Tailwind CSS 4

set -e

echo "🚀 Initializing Landing Page Project with Tailwind CSS 4..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Create directory structure
echo -e "${BLUE}📁 Creating project structure...${NC}"

mkdir -p public
mkdir -p src/pages
mkdir -p src/scripts/modules
mkdir -p src/styles
mkdir -p src/assets/images
mkdir -p src/assets/icons

echo -e "${GREEN}✓ Project structure created${NC}"
echo ""

# Initialize pnpm if package.json doesn't exist
if [ ! -f "package.json" ]; then
	echo -e "${BLUE}📦 Initializing pnpm...${NC}"
	pnpm init -y
	echo -e "${GREEN}✓ pnpm initialized${NC}"
	echo ""
fi

# Install dependencies
echo -e "${BLUE}📥 Installing dependencies (Tailwind CSS 4 Alpha)...${NC}"
echo "This may take a few minutes..."
echo ""

pnpm install --save-dev \
	vite@^5.0.8 \
	tailwindcss@^4.0.0-alpha.25 \
	@tailwindcss/vite@^4.0.0-alpha.25 \
	eslint@^8.55.0 \
	eslint-config-prettier@^9.1.0 \
	eslint-plugin-import@^2.29.0 \
	prettier@^3.1.1 \
	husky@^8.0.3 \
	lint-staged@^15.2.0 \
	@commitlint/cli@^18.4.3 \
	@commitlint/config-conventional@^18.4.3 \
	vite-plugin-image-optimizer@^1.1.7

echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
	echo -e "${BLUE}⚙️  Creating .env file...${NC}"
	cp .env.example .env 2>/dev/null || cat >.env <<EOF
# API Configuration
VITE_API_ENDPOINT=http://localhost:3000/api/contact

# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=Your Brand Name

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_FORM=true
EOF
	echo -e "${GREEN}✓ .env file created${NC}"
	echo -e "${YELLOW}⚠️  Please update .env with your actual values${NC}"
	echo ""
fi

# Initialize Husky
echo -e "${BLUE}🐕 Setting up Husky git hooks...${NC}"
npx husky install

# Create pre-commit hook
mkdir -p .husky
cat >.husky/pre-commit <<'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
EOF
chmod +x .husky/pre-commit

# Create commit-msg hook
cat >.husky/commit-msg <<'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit "$1"
EOF
chmod +x .husky/commit-msg

echo -e "${GREEN}✓ Git hooks configured${NC}"
echo ""

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
	echo -e "${BLUE}🔧 Initializing git repository...${NC}"
	git init
	git add .
	git commit -m "chore: Initial project setup with Tailwind CSS 4"
	echo -e "${GREEN}✓ Git repository initialized${NC}"
	echo ""
fi

# Create placeholder favicon
if [ ! -f "public/favicon.svg" ]; then
	echo -e "${BLUE}🎨 Creating placeholder favicon...${NC}"
	cat >public/favicon.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#0ea5e9"/>
  <text x="50" y="70" font-size="60" font-weight="bold" text-anchor="middle" fill="white">Y</text>
</svg>
EOF
	echo -e "${GREEN}✓ Placeholder favicon created${NC}"
	echo ""
fi

# Print success message
echo ""
echo -e "${GREEN}✨ Project initialization complete!${NC}"
echo ""
echo -e "${BLUE}🎉 Using Tailwind CSS 4 (Alpha)${NC}"
echo -e "${YELLOW}Note: Tailwind 4 is in alpha. All config is now in CSS using @theme directive.${NC}"
echo -e "${YELLOW}No tailwind.config.js or postcss.config.js needed!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Update .env with your actual values"
echo "2. Replace placeholder content in HTML files"
echo "3. Customize theme in ${YELLOW}src/styles/main.css${NC} using ${YELLOW}@theme${NC}"
echo "4. Add your logo and images to src/assets/"
echo "5. Run: ${YELLOW}pnpm run dev${NC}"
echo ""
echo -e "${BLUE}Useful commands:${NC}"
echo "  ${YELLOW}pnpm run dev${NC}      - Start development server"
echo "  ${YELLOW}pnpm run build${NC}    - Build for production"
echo "  ${YELLOW}pnpm run preview${NC}  - Preview production build"
echo "  ${YELLOW}pnpm run lint${NC}     - Lint JavaScript files"
echo "  ${YELLOW}pnpm run format${NC}   - Format code with Prettier"
echo ""
echo -e "${BLUE}📚 Tailwind 4 Documentation:${NC}"
echo "  See ${YELLOW}TAILWIND-4-MIGRATION.md${NC} for customization guide"
echo "  All theme config is now in ${YELLOW}src/styles/main.css${NC} using ${YELLOW}@theme${NC}"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
echo ""
