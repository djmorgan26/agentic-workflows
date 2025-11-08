# AI Knowledge Management System - For Gemini

**Project Type**: [To be customized per project]
**Status**: [To be customized]
**Last Updated**: [Date]

---

## For Gemini AI

### Start Here (Read This First Every Session)

**Your workflow:**
1. Read this file (gemini.md) for orientation
2. Read `.ai/INDEX.md` for recent changes and knowledge map
3. Read `.ai/GUIDE.md` if you need to find something specific
4. Check `.ai/preferences/` before building features

**Don't search the entire codebase.** Use the knowledge base first.

---

## Knowledge Base Structure

```
.ai/
├── INDEX.md          ← Your dashboard - start here
├── GUIDE.md          ← Where to find specific information
├── context/          ← Project architecture and decisions
│   ├── overview.md   ← What this project does
│   ├── architecture.md ← How it's structured
│   └── decisions/    ← Architecture Decision Records
├── preferences/      ← User's coding standards (all projects)
│   ├── coding-standards.md
│   ├── error-handling.md
│   ├── testing-strategy.md
│   └── documentation-style.md
└── knowledge/        ← This project's knowledge (grows over time)
    ├── features/     ← Feature documentation
    ├── components/   ← Component documentation
    └── patterns/     ← Coding patterns used here
```

---

## Personal Preferences (User's Standards)

**Before coding, check:**
- `.ai/preferences/coding-standards.md` - Naming, organization, quality
- `.ai/preferences/error-handling.md` - Error patterns, logging
- `.ai/preferences/testing-strategy.md` - Test philosophy, coverage
- `.ai/preferences/documentation-style.md` - How to document

**These apply to ALL user's projects.** Follow them unless project-specific needs dictate otherwise.

---

## Knowledge Capture (After Building Features)

**Since Gemini doesn't have slash commands, use this workflow:**

When user says "document this" or "capture knowledge":

1. **Check what changed:**
   ```bash
   git log -1 --stat
   git diff HEAD~1 HEAD
   ```

2. **Determine what was built:**
   - New feature? → Create `.ai/knowledge/features/[name].md`
   - New component? → Create `.ai/knowledge/components/[name].md`
   - New pattern? → Create `.ai/knowledge/patterns/[name].md`
   - Big decision? → Create `.ai/context/decisions/NNN-title.md`

3. **Use this template:**
   ```markdown
   ---
   type: feature | component | pattern
   name: [Name]
   status: implemented
   created: YYYY-MM-DD
   files:
     - path/to/file.ext
   tags: [tag1, tag2]
   ---

   # [Name]

   ## What It Does
   [Brief description]

   ## How It Works
   [Explanation with file:line references]

   **Key files:**
   - `file.ext:line` - Description

   ## Important Decisions
   - **Decision**: Rationale

   ## Usage Example
   ```language
   // Code example
   ```

   ## Testing
   - Tests: path/to/tests
   ```

4. **Update `.ai/INDEX.md`:**
   - Add to "Recent Changes" section
   - Update knowledge counts
   - Add to "Knowledge Map" section

5. **Report to user what you created**

---

## Navigation Quick Reference

| Need to know... | Look in... |
|----------------|------------|
| What's new? | `.ai/INDEX.md` → Recent Changes |
| User's preferences? | `.ai/preferences/` |
| How does X work? | `.ai/knowledge/features/[feature].md` |
| Why was Y decided? | `.ai/context/decisions/` |
| What patterns to use? | `.ai/knowledge/patterns/` |
| Project architecture? | `.ai/context/architecture.md` |

---

## Working Principles

1. **Discovery over Search**: Use INDEX.md and GUIDE.md
2. **Context First**: Read relevant knowledge before building
3. **Capture After**: Document what you built
4. **Follow Preferences**: Check `.ai/preferences/` before coding
5. **Stay Consistent**: Follow patterns in `.ai/knowledge/patterns/`

---

## Communication Style (User Preference)

**When returning results, use this format:**

```
✅ Done: [What was accomplished]

Why: [Brief reason]

Changed:
- file1.ext
- file2.ext

Verify: [Command to see what was done]

Next: [What user should do]
```

**Keep it concise and scannable.** No long paragraphs.

---

## Git Workflow (User Preference)

- **Commit messages**: CONCISE (one line)
- **Never push**: User handles `git push`
- **Commit often**: After each logical change

**Example commits:**
```bash
git commit -m "Add user authentication"
git commit -m "Fix validation bug"
git commit -m "Document payment feature"
```

---

## Tool Agnostic Design

This knowledge system works with:
- ✅ Gemini (you!)
- ✅ Claude Code
- ✅ Cursor
- ✅ Any AI that can read markdown

**Just follow the same flow:**
1. Read gemini.md (or claude.md)
2. Read INDEX.md
3. Use GUIDE.md to navigate
4. Document what you build

---

## Project Overview

[This section should be customized per project]

**What this project does:**
[Brief description]

**Tech stack:**
[Technologies used]

**See `.ai/context/overview.md` for full details.**

---

## Quick Tips

- ✅ Start each session by reading INDEX.md
- ✅ Check preferences before coding
- ✅ Document after building (user will ask)
- ✅ Keep responses concise and structured
- ✅ Only commit, never push
- ❌ Don't search entire repo without checking .ai/ first
- ❌ Don't write verbose responses
