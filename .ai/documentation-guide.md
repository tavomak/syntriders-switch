# 🤖 AI Documentation Structure Guide

## 📋 Overview

This project uses a structured documentation approach optimized for AI assistants to quickly understand context and provide accurate suggestions.

## 📁 Documentation Structure

### **Primary AI Directory: `.ai/`**

All AI-focused documentation is consolidated in the `.ai/` directory for easy discovery:

```
.ai/
├── README.md                               # Overview of AI documentation
├── context/                                # Project context and architecture
│   ├── project-overview.md                # High-level purpose and goals
│   ├── tech-stack.md                      # Technologies, versions, configs
│   ├── architecture.md                    # System design (TODO)
│   └── conventions.md                     # Coding standards (TODO)
├── guides/                                 # How-to guides
│   ├── getting-started.md                 # Setup and running (COMPLETE)
│   ├── development-workflow.md            # Dev process (TODO)
│   └── deployment.md                      # Build and deploy (TODO)
├── implementation/                         # What's built and what's planned
│   ├── completed.md                       # Finished features
│   ├── in-progress.md                     # Current work (TODO)
│   └── roadmap.md                         # Future plans (COMPLETE)
└── troubleshooting/                        # Common issues and fixes
    ├── common-issues.md                   # Quick solutions
    ├── detailed-solutions.md              # In-depth guides
    └── faq.md                             # Questions (TODO)
```

### **Root-Level Documentation**

Key files at project root for easy access:

```
/
├── README.md                               # User-facing project docs
├── WARP.md                                 # AI coding guidelines
├── AI_DOCUMENTATION_GUIDE.md               # This file
├── package.json                            # Dependencies and scripts
├── vite.config.js                          # Build configuration
└── .env                                    # Environment variables
```

## 🎯 Why This Structure?

### **Benefits for AI Assistants:**

1. **Quick Context Loading**
   - Start with `.ai/README.md` for structure overview
   - Read `.ai/context/project-overview.md` for purpose
   - Check `.ai/implementation/completed.md` to avoid duplicate work

2. **Clear Separation of Concerns**
   - Context (what/why) vs Guides (how)
   - Completed vs Planned features
   - Common issues vs Detailed solutions

3. **Discoverability**
   - All AI docs in one place (`.ai/`)
   - Consistent naming conventions
   - Clear file purposes

4. **Maintainability**
   - Easy to keep updated
   - Version control friendly
   - Scales with project growth

### **Benefits for Developers:**

1. **Onboarding Speed**
   - New team members read `.ai/guides/getting-started.md`
   - Complete setup instructions in one place

2. **Decision History**
   - Architectural decisions documented
   - Technology choices explained
   - Patterns established and referenced

3. **Problem Solving**
   - Common issues documented with solutions
   - Troubleshooting guides always available
   - FAQ prevents repeated questions

## 📖 Reading Order for AI

When an AI assistant joins a session, read in this order:

### 1. **Context Phase** (Understand the project)
```
.ai/README.md                    # Start here
.ai/context/project-overview.md  # What is this?
.ai/context/tech-stack.md        # What's it built with?
```

### 2. **Status Phase** (What's done vs TODO)
```
.ai/implementation/completed.md  # What works?
.ai/implementation/roadmap.md    # What's planned?
```

### 3. **Reference Phase** (When working on tasks)
```
.ai/troubleshooting/common-issues.md  # Known problems
WARP.md                               # Coding standards
vite.config.js                        # Build config
```

## 🔄 Update Guidelines

### **When to Update Each File:**

#### `.ai/context/project-overview.md`
- Major feature additions
- Target audience changes
- Success metrics adjustments
- Constraints/limitations changes

#### `.ai/context/tech-stack.md`
- Dependency version updates
- New tools added
- Technology replacements
- Breaking changes in stack

#### `.ai/implementation/completed.md`
- Features finished
- Bugs fixed
- Optimizations applied
- Documentation written

#### `.ai/implementation/roadmap.md`
- New features planned
- Priorities changed
- Phases completed
- Timeline adjustments

#### `.ai/troubleshooting/common-issues.md`
- New bugs discovered and fixed
- Common mistakes identified
- Solutions verified
- Workarounds established

### **Update Frequency:**
- ✅ **Immediately**: Major changes, new features, bug fixes
- ✅ **Weekly**: Progress updates, status changes
- ✅ **Monthly**: Dependency updates, metrics review
- ✅ **Quarterly**: Architecture review, roadmap refresh

## 📝 File Naming Best Practices

### **DO:**
- Use kebab-case: `project-overview.md`
- Be specific: `vite-configuration-guide.md`
- Group related files: `troubleshooting/404-errors.md`
- Date versioned docs: `api-schema-2024-10-04.md`

### **DON'T:**
- Use spaces: `Project Overview.md`
- Be vague: `info.md`, `notes.md`
- Mix conventions: `ProjectOverview.md`
- Use special characters: `overview@2024.md`

## 🎯 Content Guidelines

### **Write for AI Parsing:**

#### ✅ **Good:**
```markdown
## Problem: 404 Errors

**Cause**: Incorrect path resolution  
**Solution**: Use absolute paths from project root  
**Example**: `/src/styles/main.css` not `../styles/main.css`
```

#### ❌ **Bad:**
```markdown
## Issue

So basically what happened is the paths weren't working 
and we had to fix them...
```

### **Be Specific:**

- ✅ "Bundle size: 9.6KB gzipped"
- ❌ "Bundle is pretty small"

- ✅ "Node.js 18+ required (22.16.0 recommended)"
- ❌ "Use a recent version of Node"

- ✅ "Lighthouse score: ≥95"
- ❌ "Good performance"

### **Use Code Examples:**

Always include working code examples:

```javascript
// ✅ Good - complete, working example
export const initNav = () => {
  const toggle = document.querySelector('[data-toggle]');
  toggle.addEventListener('click', handleClick);
};

// ❌ Bad - incomplete, vague
// Add event listener to toggle button
```

## 🔍 Search Optimization

### **Keywords to Include:**

For AI to find information quickly, use these keywords:

- **Purpose/Goals**: "purpose", "why", "goals", "objectives"
- **Technical Details**: "uses", "built with", "technology", "stack"
- **Status**: "completed", "implemented", "TODO", "planned"
- **Problems**: "issue", "error", "problem", "bug", "fix"
- **How-To**: "steps", "guide", "tutorial", "setup", "configure"

### **Formatting for Scanning:**

```markdown
## Quick Facts
- Status: ✅ Complete
- Version: 1.0.0
- Last Updated: 2024-10-04

## Problem Statement
Clear, one-sentence description of the problem.

## Solution
Step-by-step solution with code examples.

## Verification
How to confirm it's working.
```

## 🚀 Advanced Usage

### **For Multi-Project Setups:**

If you have related projects (backend, mobile app, etc.):

```
.ai/
├── README.md
├── context/
│   ├── project-overview.md
│   └── related-projects.md      # Links to other repos
├── integration/
│   ├── backend-api.md            # How frontend talks to backend
│   └── shared-types.md           # Shared interfaces/types
```

### **For Large Teams:**

Add team-specific docs:

```
.ai/
├── team/
│   ├── roles.md                  # Who does what
│   ├── contact.md                # Team directory
│   └── decisions.md              # Decision log (ADRs)
```

### **For Complex Features:**

Create feature-specific documentation:

```
.ai/
├── features/
│   ├── authentication.md         # Auth system docs
│   ├── payment-flow.md           # Payment implementation
│   └── notifications.md          # Notification system
```

## 📚 Additional Resources

### **Outside `.ai/` Directory:**

- `README.md` - User-facing project documentation
- `WARP.md` - Comprehensive AI coding guidelines
- `package.json` - Dependency list and versions
- `vite.config.js` - Build configuration
- `src/` - Actual implementation code

### **External Links:**

- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS 4 Guide](.ai/context/tech-stack.md#tailwind-css-4-specifics)
- [MDN Web Docs](https://developer.mozilla.org/)

## ✅ Checklist for New Projects

Setting up this structure for a new project:

- [ ] Create `.ai/` directory
- [ ] Copy this guide to project root
- [ ] Create directory structure (context, guides, implementation, troubleshooting)
- [ ] Write `project-overview.md` (purpose, goals, audience)
- [ ] Write `tech-stack.md` (technologies, versions, why chosen)
- [ ] Document setup in `getting-started.md`
- [ ] Create `completed.md` (start with "Nothing yet")
- [ ] Create `roadmap.md` (list all planned features)
- [ ] Add common issues as they arise
- [ ] Update `.gitignore` (include `.ai/` but exclude temp files)

## 🎓 Learning from This Structure

This structure follows these principles:

1. **Progressive Disclosure**: Start broad, get specific
2. **Separation of Concerns**: Context vs Implementation vs Troubleshooting
3. **Single Source of Truth**: One place for each type of info
4. **Semantic Organization**: Names clearly indicate content
5. **Machine & Human Readable**: Works for both AI and developers

## 📞 Questions?

If you're unsure where documentation belongs:

- **"What is this project?"** → `.ai/context/project-overview.md`
- **"How do I set it up?"** → `.ai/guides/getting-started.md`
- **"What's been built?"** → `.ai/implementation/completed.md`
- **"What's planned?"** → `.ai/implementation/roadmap.md`
- **"Something's broken!"** → `.ai/troubleshooting/common-issues.md`
- **"How should I code?"** → `WARP.md`

---

**Created**: October 4, 2025  
**Last Updated**: October 4, 2025  
**Maintained By**: Development Team  
**Purpose**: Optimize AI-assisted development experience
