# Documentation Maintenance Rules

**Last Updated**: October 5, 2025

---

## 🌟 CRITICAL: active-context.md Updates

### Why This Matters

`active-context.md` is **THE MOST VALUABLE FILE** in the entire `.ai/` folder. It's the single source of truth for:
- What we're working on RIGHT NOW
- What was just completed
- What's coming next
- What's blocking us

**If this file is stale, AI assistants will suggest duplicate or irrelevant work.**

---

## ⚡ When to Update active-context.md

### 1. After Every Work Session ✅

**Trigger**: Work session completed (even if just 30 minutes)

**Action**: Add to "Recent Changes (Last 24 Hours)" section

**Example**:
```markdown
## ✅ Recent Changes (Last 24 Hours)

### Completed
- ✅ Fixed 404 errors on asset loading
- ✅ Added mobile navigation menu
- ✅ Updated constants with social URLs  ← NEW ENTRY
```

**Time Required**: 2-3 minutes

---

### 2. When Priorities Shift 🔄

**Trigger**: 
- Client requests change
- Blocker discovered requiring different approach
- New urgent task takes priority

**Action**: Update "Next Immediate Steps" section

**Example**:
```markdown
## 🔄 Next Immediate Steps

### Priority 1: Bug Fix (URGENT) ← CHANGED FROM "Testing"
1. Fix broken image paths in production
2. Deploy hotfix to staging

### Priority 2: Testing ← MOVED DOWN
1. Test mobile viewport
2. Verify link population
```

**Time Required**: 3-5 minutes

---

### 3. When Blockers Are Resolved ✅

**Trigger**: 
- Client provides missing assets
- API endpoint becomes available
- Design approval received

**Action**: Remove from "Known Issues & Blockers" section

**Example**:
```markdown
## 🚧 Known Issues & Blockers

### Current Blockers
- ⏸️ Desktop design not provided yet - focusing on mobile-first for now
- ~~⏸️ Real URLs pending~~ ✅ RESOLVED Oct 5 - URLs received from client
```

**Time Required**: 1-2 minutes

---

### 4. When Starting New Features 🆕

**Trigger**: Beginning work on a new feature or page

**Action**: 
1. Update "Today's Primary Goal"
2. Add to "Next Immediate Steps"
3. Update "Context for AI Assistants" if needed

**Example**:
```markdown
## 🎯 Today's Primary Goal

~~Replace the legacy landing page~~ ✅ COMPLETE

**NEW**: Build contact page with form validation
```

**Time Required**: 3-5 minutes

---

### 5. When Discovering New Assets/Context 📦

**Trigger**: 
- New images added to assets folder
- New dependencies installed
- New patterns established

**Action**: Update "Context for AI Assistants" > "Key Assets Reference"

**Example**:
```markdown
### Key Assets Reference
**Images:**
- `synthriders_logo.svg` - Main logo
- `contact-hero.jpg` - Contact page banner ← NEW
```

**Time Required**: 2-3 minutes

---

## 📋 Update Checklist

Before ending any work session, ask yourself:

- [ ] Did I complete any tasks? → Add to "Recent Changes"
- [ ] Did priorities change? → Update "Next Immediate Steps"
- [ ] Did I resolve any blockers? → Update "Known Issues"
- [ ] Did I start something new? → Update "Primary Goal"
- [ ] Did I add new files/assets? → Update "Context for AI"
- [ ] Is the "Last Updated" date current? → Change to today

**If you answered YES to any question above, update `active-context.md` immediately.**

---

## 🤖 AI Assistant Responsibilities

### When Completing Work

After completing ANY task, the AI must:

1. **Update** `active-context.md` → "Recent Changes"
2. **Mark complete** in `implementation/completed.md`
3. **Ask user**: "Should I update the roadmap or priorities?"

**Example Response**:
> ✅ I've completed the mobile navigation menu implementation.
>
> **Updated Documentation:**
> - `.ai/active-context.md` → Added to "Recent Changes"
> - `.ai/implementation/completed.md` → Marked navigation as complete
>
> **Next Steps:**
> What should we prioritize next? The current plan is to add form validation. Should we proceed with that or adjust priorities?

---

## 🚨 Red Flags (File is Stale)

If you see any of these, **UPDATE IMMEDIATELY**:

1. ❌ "Last Updated" is > 3 days old
2. ❌ "Recent Changes" doesn't mention today's work
3. ❌ "Known Issues" lists resolved blockers
4. ❌ "Next Immediate Steps" doesn't reflect current priorities
5. ❌ "Primary Goal" is marked complete but not updated

---

## 📊 Other Documentation Update Frequency

| File | Update Frequency | Typical Trigger |
|------|------------------|-----------------|
| `active-context.md` | **After every session** | Work completed |
| `implementation/completed.md` | Weekly or after major feature | Feature complete |
| `coding-standards.md` | Monthly or when pattern changes | New pattern established |
| `ai-instructions.md` | Monthly or when AI makes mistakes | Pattern violation |
| `project-context.md` | Quarterly or when architecture changes | Major decisions |
| `tech-stack.md` | When dependencies change | Package added/removed |
| `troubleshooting/` | When issues are solved | New problem + solution |

---

## 💡 Pro Tips

### 1. Use Git Diffs
Before closing a session:
```bash
git diff .ai/active-context.md
```
If no changes, you probably forgot to update it!

### 2. Set Reminders
Add to your session checklist:
```
✅ Code changes committed
✅ Tests passing
✅ active-context.md updated ← DON'T FORGET
```

### 3. Quick Update Template
Keep this template handy:
```markdown
- ✅ [What was done] - [Brief details]
```

Paste into "Recent Changes" and fill in.

---

## 🎯 Success Metrics

You're doing this right if:

✅ Every work session results in an update  
✅ "Last Updated" date is always current  
✅ AI can immediately understand current state from file alone  
✅ New team members know exactly what's happening  
✅ No duplicate work is ever suggested  

---

## 🔄 Version History Template

At the bottom of `active-context.md`, maintain:

```markdown
## 🔄 Update History

| Date | Change | By |
|------|--------|-----|
| Oct 5, 2025 | Added contact page implementation | Dev Team |
| Oct 5, 2025 | Resolved URL blocker | Dev Team |
| Oct 4, 2025 | Completed landing page redesign | Dev Team |
```

This creates an audit trail of project evolution.

---

**Remember**: 5 minutes updating `active-context.md` saves hours of explaining context later. 

**Make it a habit. Make it automatic. Make it non-negotiable.**

---

**Last Updated**: October 5, 2025  
**Rule Status**: 🟢 Active - Enforce strictly  
**Review Cadence**: Monthly to ensure compliance
