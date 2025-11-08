# AI Knowledge System Integration - User Knowledge for Claude

**Purpose**: Quick reference for integrating AI knowledge management system into any project.

---

## When User Says: "Add the AI knowledge system to this project"

### Execute This:

```bash
# 1. Copy from template (adjust path as needed)
cp -r ~/agentic-workflows/.ai .
cp -r ~/agentic-workflows/.claude .
cp ~/agentic-workflows/claude.md .

# 2. Customize these 3 files:
```

**claude.md** - Change project name, type, tech stack (lines 1, 3, 5)
**.ai/context/overview.md** - Update project description (lines 9-11, 149-163)
**.ai/INDEX.md** - Set date, update status, clear examples (lines 3-5, 11-16, 63-64)

```bash
# 3. Commit
git add .ai/ .claude/ claude.md
git commit -m "Add AI knowledge management system"
```

---

## Daily Usage Pattern

**User builds feature** → **Commits** → **Says "run /capture"** → **You document it**

---

## System Structure

```
.ai/
├── INDEX.md              ← Read FIRST every session
├── preferences/          ← User's coding standards (cross-project, don't modify)
├── knowledge/            ← THIS project's features (grows with /capture)
└── context/              ← Project architecture & decisions

.claude/commands/
└── capture.md            ← Your /capture workflow instructions
```

---

## Key Concepts

**Three-tier knowledge:**
1. **Preferences** (`.ai/preferences/`) - User's standards for ALL projects
2. **Patterns** (`.ai/knowledge/patterns/`) - How THIS project implements them
3. **Features** (`.ai/knowledge/features/`) - Specific functionality HERE

**Important:**
- Preferences are **referenced, not modified** in each project
- Each project's knowledge stays **isolated**
- Use `/capture` after commits to **auto-document**

---

## /capture Command Behavior

When user says "run /capture":

1. Run `git log -1 --stat` and `git diff HEAD`
2. Analyze what changed (feature/component/pattern/decision)
3. Create `.ai/knowledge/features/[name].md` with full documentation
4. Update `.ai/INDEX.md` Recent Changes section
5. Increment knowledge counts
6. Add to Knowledge Map

**Don't skip /capture** - it's how knowledge builds up!

---

## Template Location

**Default**: `~/agentic-workflows` (or wherever user keeps template)

**To update preferences** for future projects:
- Edit in template repo
- New projects get updated version when integrated

---

## Integration Checklist

When integrating, verify:
- [ ] `.ai/` directory exists with all subdirectories
- [ ] `.ai/preferences/` has 4 files (coding, errors, testing, docs)
- [ ] `claude.md` customized with project details
- [ ] `.ai/INDEX.md` shows correct project name and date
- [ ] `.claude/commands/capture.md` exists
- [ ] All links in claude.md work (test by reading referenced files)

---

## Quick Fixes

**Broken links**: Use `./.ai/preferences/...` (relative to project root)
**Too much to document**: Build incrementally with /capture, don't document everything upfront
**Preferences mismatch**: Document deviations in `.ai/knowledge/patterns/`, keep preferences as-is

---

## Remember

**Every session:**
1. Read `claude.md`
2. Read `.ai/INDEX.md`
3. Check `.ai/preferences/` before coding
4. Use `/capture` after commits

This is the user's **institutional memory system** - respect it and keep it current!
