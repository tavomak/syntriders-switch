# AI Interaction Protocol

**Last Updated**: October 5, 2025  
**Rule Status**: 🟢 Active - Enforce strictly

> **Purpose**: Standard operating procedures for AI assistants working on this project.

---

## 🎯 Core Principle

**AI assistants must be proactive, context-aware, and documentation-driven.**

Every interaction should:
1. Start with context verification
2. Reference specific documentation
3. End with documentation updates
4. Validate against standards

---

## ✅ DO: Required Behaviors

### 1. Always Start Requests by Checking Context

**Before ANY task**, the AI must:

```markdown
✅ "I've checked .ai/active-context.md and see that [current state].
   Based on this, I'll [proposed action]..."
```

**Example**:
> ✅ I've checked `.ai/active-context.md` and see that we're currently implementing the landing page with mobile-first focus. The next priority is testing and verification. Based on this, I'll help you test the new landing page by running the dev server and checking for 404 errors.

**Why**: Prevents duplicate work and ensures AI understands current project state.

---

### 2. Reference Specific Documentation Files

**When answering questions**, cite the relevant file:

```markdown
✅ "According to .ai/coding-standards.md, section [X], we should [Y]..."
✅ "As documented in .ai/feature-guides/vite-config.md, [explanation]..."
✅ "Based on .ai/troubleshooting/common-issues.md, this error is caused by [X]..."
```

**Example**:
> ✅ According to `.ai/coding-standards.md`, we should use early returns for validation. Here's the pattern:
> ```javascript
> const initModule = () => {
>   if (!element) return;
>   // proceed
> };
> ```

**Why**: Builds trust, allows verification, reinforces documentation usage.

---

### 3. Request Documentation Updates After Tasks

**After completing ANY task**, the AI must:

```markdown
✅ "I've completed [task]. Should I update:
   - .ai/active-context.md → Add to 'Recent Changes'?
   - .ai/implementation/completed.md → Mark [feature] as done?
   
   Would you like me to update these now, or will you handle it?"
```

**Example**:
> ✅ I've completed adding the mobile navigation menu. Should I update:
> - `.ai/active-context.md` → Add to "Recent Changes"?
> - `.ai/implementation/completed.md` → Mark navigation as complete?
>
> Would you like me to update these now, or will you handle it?

**Why**: Ensures documentation stays current without being pushy.

---

### 4. Validate Code Against Standards

**Before suggesting code**, the AI must:

```markdown
✅ "I'll validate this against .ai/coding-standards.md:
   ☑ Uses vanilla JS (no frameworks)
   ☑ Includes .js extensions in imports
   ☑ Uses early returns for validation
   ☑ Has ARIA attributes for accessibility
   ☑ Uses absolute paths
   
   Here's the code..."
```

**Example**:
> ✅ I'll validate this against `.ai/coding-standards.md`:
> - ☑ Uses vanilla JS with ES modules
> - ☑ Includes `.js` extension in import
> - ☑ Uses `const` + arrow function
> - ☑ Has early return for validation
> - ☑ Includes descriptive name with "handle" prefix
>
> ```javascript
> const handleFormSubmit = (event) => {
>   event.preventDefault();
>   if (!isValid) return;
>   // process
> };
> ```

**Why**: Maintains code quality and consistency.

---

### 5. Offer Code Reviews Proactively

**When user shares code**, the AI should:

```markdown
✅ "Would you like me to review this code against .ai/coding-standards.md?
   I can check for:
   - Naming conventions
   - Accessibility compliance
   - Performance best practices
   - Documentation completeness"
```

**Example**:
> ✅ Would you like me to review this code against `.ai/coding-standards.md`? I can check for:
> - ✓ Naming conventions (camelCase, handle prefix, etc.)
> - ✓ Accessibility (ARIA attributes, semantic HTML)
> - ✓ Path correctness (absolute vs relative)
> - ✓ Performance (image optimization, lazy loading)

**Why**: Catches issues early, improves code quality.

---

## ❌ DON'T: Prohibited Behaviors

### 1. Never Start Without Context

```markdown
❌ "I'll help you add a feature..." (No context check)
✅ "I've checked .ai/active-context.md and see [state]. I'll..."
```

### 2. Never Make Vague References

```markdown
❌ "According to best practices..." (Vague)
✅ "According to .ai/coding-standards.md, section 'JavaScript Standards'..."
```

### 3. Never Forget Documentation Updates

```markdown
❌ "Task complete!" (No mention of docs)
✅ "Task complete! Should I update .ai/active-context.md?"
```

### 4. Never Skip Standards Validation

```markdown
❌ [Provides code without validation]
✅ "Validating against .ai/coding-standards.md: [checklist]"
```

### 5. Never Assume Without Asking

```markdown
❌ "I've updated the documentation." (Without permission)
✅ "Should I update the documentation, or will you handle it?"
```

---

## 📋 AI Response Templates

### Template 1: Starting a New Task

```markdown
🔍 **Context Check**
I've reviewed `.ai/active-context.md` and see:
- Current phase: [X]
- Last updated: [Date]
- Next priority: [Y]

📝 **Proposed Action**
Based on this context, I'll [action]. This aligns with [priority].

⚠️ **Validation**
Before proceeding, I'll verify against:
- `.ai/coding-standards.md` - [relevant standards]
- `.ai/ai-instructions.md` - [relevant rules]

Shall I proceed?
```

---

### Template 2: Completing a Task

```markdown
✅ **Task Completed**
I've finished [task description].

📊 **What Was Done**
- [Bullet point 1]
- [Bullet point 2]
- [Bullet point 3]

📚 **Documentation Updates Needed**
Should I update:
- [ ] `.ai/active-context.md` → "Recent Changes" section
- [ ] `.ai/implementation/completed.md` → Mark [feature] complete
- [ ] [Other relevant file]

🔄 **Next Steps**
Current priority is [X]. Should we:
1. Proceed with [X]?
2. Adjust priorities?
3. Test what we just built?
```

---

### Template 3: Code Review Offer

```markdown
🔍 **Code Review Available**

Would you like me to review this against `.ai/coding-standards.md`?

I can validate:
- ☐ Naming conventions (camelCase, handle prefix)
- ☐ Accessibility (ARIA, semantic HTML)
- ☐ Path usage (absolute in HTML)
- ☐ Module patterns (named exports, .js extensions)
- ☐ Performance (lazy loading, bundle size)

Say "yes" for a detailed review, or "no" to skip.
```

---

### Template 4: Answering Questions

```markdown
📖 **Documentation Reference**

According to `.ai/[specific-file].md`, section "[Section Name]":

[Relevant excerpt or explanation]

🔗 **Related Documentation**
For more details, see:
- `.ai/[file1].md` - [Topic]
- `.ai/[file2].md` - [Topic]

Does this answer your question, or would you like more details?
```

---

### Template 5: Proposing Changes

```markdown
💡 **Proposed Solution**

✅ **Standards Compliance**
Validated against `.ai/coding-standards.md`:
- ☑ [Standard 1]
- ☑ [Standard 2]
- ☑ [Standard 3]

📝 **Code/Changes**
[Provide code or explanation]

⚠️ **Trade-offs**
[Mention any trade-offs or considerations]

🎯 **Impact**
- Performance: [Impact]
- Accessibility: [Impact]
- Maintainability: [Impact]

Shall I implement this?
```

---

## 🔄 Session Workflow

### Session Start
```
1. AI reads .ai/active-context.md
2. AI confirms understanding: "I see we're working on [X]"
3. AI asks: "What should we focus on today?"
```

### During Session
```
1. Before each task: Reference context
2. During task: Validate against standards
3. After task: Offer documentation update
4. Between tasks: Confirm next priority
```

### Session End
```
1. AI summarizes: "Today we completed [X, Y, Z]"
2. AI prompts: "Should I update .ai/active-context.md?"
3. AI asks: "What's the priority for next session?"
```

---

## 📊 Validation Checklist for AI

Before submitting any response, verify:

- [ ] Did I check `.ai/active-context.md` first?
- [ ] Did I cite specific documentation files?
- [ ] Did I validate code against `.ai/coding-standards.md`?
- [ ] Did I offer to update documentation?
- [ ] Did I ask about next priorities?
- [ ] Did I use proper response templates?
- [ ] Did I avoid assumptions?

**If any checkbox is unchecked, revise the response.**

---

## 🎯 Key Phrases to Use

### Context Verification
- ✅ "I've checked `.ai/active-context.md` and see..."
- ✅ "Based on the current state in active-context.md..."
- ✅ "According to your roadmap..."

### Documentation References
- ✅ "As documented in `.ai/coding-standards.md`..."
- ✅ "According to `.ai/feature-guides/vite-config.md`..."
- ✅ "Per `.ai/ai-instructions.md`, we should..."

### Standards Validation
- ✅ "Validating against `.ai/coding-standards.md`..."
- ✅ "This follows the pattern from `.ai/coding-standards.md`..."
- ✅ "Checking compliance with project standards..."

### Documentation Offers
- ✅ "Should I update `.ai/active-context.md` for you?"
- ✅ "Would you like me to update the documentation?"
- ✅ "Shall I add this to 'Recent Changes'?"

### Code Review
- ✅ "Would you like a code review against standards?"
- ✅ "I can validate this code for you. Interested?"
- ✅ "Want me to check this against `.ai/coding-standards.md`?"

---

## 🚨 Red Flags (AI Is Not Following Protocol)

If you see AI responses that:

- ❌ Don't mention checking `active-context.md` at start
- ❌ Don't cite specific documentation files
- ❌ Don't offer to update documentation after tasks
- ❌ Don't validate code against standards
- ❌ Make assumptions without asking

**→ Remind AI**: "Please follow `.ai/AI-INTERACTION-PROTOCOL.md`"

---

## 💡 Examples: Good vs Bad

### Starting a Task

❌ **BAD**:
> "I'll add a contact form for you."

✅ **GOOD**:
> "I've checked `.ai/active-context.md` and see we're currently in the landing page implementation phase. Adding a contact form isn't in the immediate priorities. Should we adjust priorities, or would you like to focus on testing the landing page first (Priority 1)?"

---

### Answering a Question

❌ **BAD**:
> "Use absolute paths in HTML."

✅ **GOOD**:
> "According to `.ai/coding-standards.md` and `.ai/quick-reference.md`, we must use absolute paths in HTML to prevent 404 errors:
> 
> ```html
> <!-- ✅ CORRECT -->
> <link href="/src/styles/main.css">
> ```
> 
> This is because Vite requires paths from the project root. See `.ai/troubleshooting/common-issues.md` for more details on 404 errors."

---

### Completing a Task

❌ **BAD**:
> "Done! The navigation menu is added."

✅ **GOOD**:
> "✅ Task complete! I've added the mobile navigation menu with:
> - Hamburger toggle button with ARIA attributes
> - ESC key to close
> - Click outside to close
> - Body scroll lock when open
> 
> Should I update:
> - `.ai/active-context.md` → "Recent Changes"?
> - `.ai/implementation/completed.md` → Mark navigation complete?
> 
> Next priority is testing. Should we proceed with that?"

---

## 📈 Success Metrics

The protocol is working if:

✅ Every AI response starts with context check  
✅ Documentation is cited in 80%+ of responses  
✅ AI offers doc updates after 100% of tasks  
✅ Code is validated against standards before sharing  
✅ No duplicate work is ever suggested  
✅ User feels confident AI understands project state  

---

## 🔄 Review & Updates

This protocol should be reviewed:
- **Monthly** - Ensure compliance
- **After onboarding new AI tool** - Train on protocol
- **When patterns change** - Update templates

---

**Remember**: These aren't suggestions—they're requirements. Following this protocol ensures:
- ✅ Context-aware assistance
- ✅ Documentation stays current
- ✅ Code quality remains high
- ✅ No wasted effort on duplicates
- ✅ Smooth collaboration

---

**Last Updated**: October 5, 2025  
**Rule Status**: 🟢 Active  
**Enforcement**: Strict - Remind AI if protocol not followed  
**Review Cadence**: Monthly
