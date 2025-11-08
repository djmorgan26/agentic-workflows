# Symlinked Preferences - Single Source of Truth

**Template Location:** `/Users/davidmorgan/Documents/Repositories/agentic-workflows`

---

## Concept

Instead of copying `.ai/preferences/` to each project, projects **symlink** to the template repo.

**Benefit:** Update preferences once → all projects pick up changes automatically

---

## For New Projects

```bash
TEMPLATE=/Users/davidmorgan/Documents/Repositories/agentic-workflows

cp -r $TEMPLATE/.ai .
rm -rf .ai/preferences  # Remove copied version
ln -s $TEMPLATE/.ai/preferences .ai/preferences  # Create symlink

cp -r $TEMPLATE/.claude .
cp $TEMPLATE/claude.md .

git add .ai .claude claude.md
git commit -m "Add AI knowledge system"
```

---

## For Existing Projects

**Option 1: Manual**
```bash
cd your-existing-project
rm -rf .ai/preferences
ln -s /Users/davidmorgan/Documents/Repositories/agentic-workflows/.ai/preferences .ai/preferences
git add .ai/preferences
git commit -m "Link preferences to template"
```

**Option 2: Script**
```bash
cd your-existing-project
/Users/davidmorgan/Documents/Repositories/agentic-workflows/migrate-to-symlinks.sh
git add .ai/preferences
git commit -m "Link preferences to template"
```

---

## Verify Symlink

```bash
ls -la .ai/preferences
# Should show: .ai/preferences -> /Users/davidmorgan/.../agentic-workflows/.ai/preferences
```

---

## How It Works

```
Template Repo (agentic-workflows)
└── .ai/preferences/
    ├── coding-standards.md
    ├── error-handling.md
    ├── testing-strategy.md
    └── documentation-style.md

Project A
└── .ai/preferences -> [symlink to template]

Project B
└── .ai/preferences -> [symlink to template]

Update template → Projects A & B see changes immediately
```

---

## What Gets Copied vs Symlinked

**Copied (project-specific):**
- `.ai/INDEX.md` - Each project's dashboard
- `.ai/GUIDE.md` - Navigation (same but could customize)
- `.ai/context/` - Project architecture/decisions
- `.ai/knowledge/` - Project features/components
- `.claude/` - Commands (could symlink these too if desired)
- `claude.md` - Customized per project

**Symlinked (cross-project):**
- `.ai/preferences/` - Your coding standards (shared)

---

## Updating Preferences

```bash
# Edit in template repo
cd /Users/davidmorgan/Documents/Repositories/agentic-workflows
vim .ai/preferences/coding-standards.md

# Commit
git commit -m "Update coding standards"

# All projects see changes immediately (no action needed!)
```

---

## Git Behavior

**Symlinks are tracked by git:**
- Git stores the symlink path, not the contents
- Other collaborators need the template repo at the same path OR
- They can adjust the symlink to their template location

**For team projects:**
- Document template location in project README
- Or use relative paths if template is in known location
- Or copy preferences instead of symlinking (trade-off)

---

## Troubleshooting

**Symlink broken?**
```bash
ls -la .ai/preferences
# If shows in red or "No such file", recreate:
rm .ai/preferences
ln -s /Users/davidmorgan/Documents/Repositories/agentic-workflows/.ai/preferences .ai/preferences
```

**Template moved?**
```bash
# Update all projects
cd each-project
rm .ai/preferences
ln -s /new/path/to/template/.ai/preferences .ai/preferences
git add .ai/preferences
git commit -m "Update preferences symlink path"
```

---

## Alternative: Relative Symlinks

If template is in predictable location relative to projects:

```bash
# Example: Projects in ~/projects/, template in ~/templates/
cd ~/projects/my-project
ln -s ../../templates/agentic-workflows/.ai/preferences .ai/preferences
```

Adjust paths based on your directory structure.
