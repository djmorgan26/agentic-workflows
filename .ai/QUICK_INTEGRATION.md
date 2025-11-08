# Quick Integration: AI Knowledge System for Existing Projects

**Template Location**: `~/agentic-workflows` (or your template repo location)

---

## One-Time Setup Per Project (5 minutes)

```bash
# 1. Copy structure
cd your-project
cp -r ~/agentic-workflows/.ai .
cp -r ~/agentic-workflows/.claude .
cp ~/agentic-workflows/claude.md .

# 2. Quick customize (edit 3 files)
# Edit claude.md: Project name, type, tech stack
# Edit .ai/context/overview.md: Project description
# Edit .ai/INDEX.md: Set date, clear greeter example

# 3. Commit
git add .ai/ .claude/ claude.md .gitignore
git commit -m "Add AI knowledge management system"
```

---

## Daily Usage

```bash
# After any feature work:
git commit -m "Add feature X"
# Then tell Claude:
"Run /capture to document this"
```

---

## What You Get

**Structure:**
- `.ai/INDEX.md` - AI's dashboard (check here first)
- `.ai/preferences/` - Your coding standards (cross-project)
- `.ai/knowledge/features/` - This project's features (grows with /capture)
- `.claude/commands/capture.md` - Auto-documentation workflow

**Commands:**
- `/capture` - Document what you just built (use after commits)
- `/init` - Set up NEW projects from scratch

---

## Key Principle

**AI reads this order:**
1. `claude.md` → Your project info + "check .ai/"
2. `.ai/INDEX.md` → Recent changes + knowledge map
3. `.ai/preferences/` → Your coding standards (apply everywhere)
4. `.ai/knowledge/` → This project's specific features

**Personal preferences** (in `.ai/preferences/`) apply to ALL projects.
**Project knowledge** (in `.ai/knowledge/`) stays isolated per project.

---

## Quick Edits for New Project

**claude.md** (lines to change):
```markdown
# [Project Name]                              ← Line 1
**Project Type**: [REST API / Web App / etc]  ← Line 3
**Tech Stack**: [Your stack]                  ← Line 5
```

**.ai/context/overview.md** (section to change):
```markdown
## What This Is
[Describe YOUR project - 2-3 sentences]       ← Lines 9-11

## Tech Stack
[List your technologies]                      ← Lines 149-163
```

**.ai/INDEX.md** (lines to change):
```markdown
**Last Updated**: [Today's date]              ← Line 3
**Project Phase**: [Your status]              ← Line 4

### Recent Changes
### [Today's date]
- 🎉 **Initialized** AI knowledge system      ← Lines 11-13
```

---

## Template Update Workflow

**To update your preferences across projects:**

```bash
# 1. Edit preferences in template repo
cd ~/agentic-workflows
vim .ai/preferences/coding-standards.md

# 2. Commit
git commit -m "Update coding preferences"

# 3. For existing projects (optional):
cd your-project
cp ~/agentic-workflows/.ai/preferences/* .ai/preferences/
git commit -m "Update personal preferences"

# 4. New projects automatically get latest via /init or copy
```

---

## Troubleshooting

**Links broken?**
→ Check paths are relative: `./.ai/preferences/...` not `./preferences/...`

**Too much to document?**
→ Don't document all at once. Use `/capture` as you touch each area.

**Preferences don't match project?**
→ Keep preferences as-is. Document deviations in `.ai/knowledge/patterns/`

---

## Remember

- **Preferences** = Your general standards (all projects)
- **Patterns** = How THIS project implements them
- **Features** = Specific functionality in THIS project

**Build knowledge incrementally with `/capture` - don't try to document everything upfront!**
