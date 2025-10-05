# 🤖 AI Documentation Directory

This directory contains structured documentation optimized for AI assistants (Warp AI, GitHub Copilot, Cursor, Claude, etc.) to understand the project context and provide accurate assistance.

## 📋 Purpose

When an AI assistant reads these files, it can:
1. Quickly understand the project's purpose, structure, and conventions
2. Make informed suggestions aligned with project standards
3. Avoid suggesting outdated patterns or conflicting approaches
4. Reference specific implementation details
5. Understand what's been completed vs. what's pending

## 📁 File Structure (Hybrid Approach)

```
.ai/
├── README.md                          # This file - master index
│
├── active-context.md                  # 🌟 CURRENT WORK (Start here!)
├── quick-reference.md                 # ⚡ Instant lookups (commands, paths, patterns)
├── ai-instructions.md                 # Explicit AI behavior rules
├── AI-INTERACTION-PROTOCOL.md         # 🤖 How AI should behave
├── MAINTENANCE.md                     # Documentation update protocol
│
├── project-context.md                 # High-level project overview
├── tech-stack.md                      # Technologies & dependencies
├── coding-standards.md                # Code conventions & patterns
│
├── context/
│   └── project-overview.md            # [Legacy - see project-context.md]
├── guides/
│   ├── getting-started.md             # Setup & installation
│   └── project-setup.md               # Dev environment setup
├── feature-guides/
│   ├── tailwind4.md                   # Tailwind CSS 4 guide
│   ├── vite-config.md                 # Vite configuration details
│   └── javascript-modules.md          # ES modules architecture
├── implementation/
│   ├── completed.md                   # What's been implemented
│   └── roadmap.md                     # Future plans and TODOs
└── troubleshooting/
    ├── common-issues.md               # Known issues and solutions
    └── detailed-solutions.md          # In-depth problem solving
```

## 🎯 AI Reading Priority (ALWAYS follow this order)

### 🟢 Critical Path (Every Session)

1. **START HERE**: `.ai/active-context.md` ⭐ **(2 min read)**
   - What we're working on RIGHT NOW
   - Recent changes (last 24 hours)
   - Next immediate steps
   - Current blockers

2. **THEN**: `.ai/AI-INTERACTION-PROTOCOL.md` 🤖 **(5 min read)**
   - How to interact with the user
   - Response templates to follow
   - Documentation update requirements

3. **THEN**: `.ai/ai-instructions.md` 📜 **(5 min read)**
   - Explicit behavior rules
   - Critical don'ts (no frameworks, etc.)
   - Code validation requirements

4. **THEN**: `.ai/coding-standards.md` 📝 **(10 min read)**
   - JavaScript/HTML/CSS patterns
   - Naming conventions
   - Accessibility standards

5. **CHECK**: `.ai/implementation/completed.md` ✅ **(3 min scan)**
   - Avoid duplicate work
   - See what's already built

6. **IF STUCK**: `.ai/troubleshooting/common-issues.md` 🔧
   - Known issues and solutions
   - Debugging workflows

### 🟡 Reference As Needed

- `.ai/quick-reference.md` - Commands, paths, data attributes
- `.ai/project-context.md` - Big picture overview
- `.ai/tech-stack.md` - Dependencies and versions
- `.ai/feature-guides/` - Deep dives (Tailwind, Vite, JS modules)

---

**🚨 Golden Rules**:
1. `active-context.md` is the source of truth for current state
2. ALWAYS check context before suggesting work
3. ALWAYS follow `.ai/AI-INTERACTION-PROTOCOL.md` templates
4. ALWAYS validate code against `.ai/coding-standards.md`
5. ALWAYS offer to update documentation after tasks

### For Developers to Maintain
1. **Update immediately** when making architectural decisions
2. **Keep completion status** current in `implementation/completed.md`
3. **Document solutions** to new problems in `troubleshooting/`
4. **Use clear, concise language** - AI assistants parse text literally

## 📝 File Naming Conventions

- Use kebab-case: `project-overview.md`
- Be specific: `react-component-patterns.md` not `patterns.md`
- Date versioned docs: `api-schema-2024-10-04.md`
- Prefix with status when relevant: `[WIP]-feature-name.md`

## 🔄 Keep Updated

### ⚡ CRITICAL: Update active-context.md First!

**📘 See `MAINTENANCE.md` for detailed rules**

After **EVERY work session** (even 30 minutes):
1. ✅ Update `active-context.md` → "Recent Changes" section
2. ✅ Update "Last Updated" date to today

### Other Documentation Updates

**After completing work**:
- `implementation/completed.md` - Mark feature as done

**When changing architecture**:
- `project-context.md` - Update high-level decisions
- `tech-stack.md` - Add/update dependencies

**When establishing patterns**:
- `coding-standards.md` - Document new conventions
- `ai-instructions.md` - Add AI-specific rules

**When solving problems**:
- `troubleshooting/common-issues.md` - Add solution

**When planning ahead**:
- `implementation/roadmap.md` - Update future plans

**📖 Full maintenance protocol**: See `.ai/MAINTENANCE.md`

## 📚 Additional Resources

Main project docs (outside `.ai/`):
- `../README.md` - User-facing project documentation
- `../WARP.md` - AI assistant quick start (high-level only)
- `../package.json` - Dependencies and scripts

---

## 📋 Quick Reference Card

### For AI Assistants
```
1. Read: active-context.md (What's happening NOW)
2. Quick lookup: quick-reference.md (Commands, paths)
3. Check: ai-instructions.md (How to behave)
4. Follow: coding-standards.md (Code patterns)
5. Update: active-context.md after EVERY task
6. Ask: "Should priorities change?"
```

### For Developers
```
Before ending session:
☐ Code committed
☐ Tests passing
☐ active-context.md updated ⭐ CRITICAL
```

### Red Flags (Fix Immediately)
```
❌ active-context.md > 3 days old
❌ "Recent Changes" doesn't mention today
❌ Resolved blockers still listed
```

---

**Last Updated**: October 5, 2025  
**Maintained By**: Development Team  
**Purpose**: Optimize AI-assisted development experience
