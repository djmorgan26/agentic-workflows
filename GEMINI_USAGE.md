# Using AI Knowledge System with Gemini CLI

**Works with:** Gemini CLI, Gemini API, or any Gemini interface

---

## First Session in a Project

**Step 1: Start Gemini in your project directory**
```bash
cd your-project
gemini
```

**Step 2: Give Gemini context**

Paste this into Gemini:
```
Read gemini.md to understand this project, then read .ai/INDEX.md to see recent changes.
```

**That's it!** Gemini will orient itself and be ready to work.

---

## Daily Workflow

### Starting a Session

```bash
cd your-project
gemini
```

Then say:
```
Read gemini.md and .ai/INDEX.md
```

Or shorter:
```
Check INDEX.md for updates
```

### Building a Feature

Gemini will automatically:
1. Check `.ai/preferences/` for your coding standards
2. Review `.ai/knowledge/` for existing patterns
3. Build following your preferences

### Documenting Work (Manual /capture)

After building, say:
```
Document this work in the knowledge base
```

Gemini will:
1. Analyze `git log` and `git diff`
2. Create `.ai/knowledge/` files
3. Update `.ai/INDEX.md`
4. Tell you what was created

---

## Integration into New Project

**Same as Claude:**
```bash
TEMPLATE=/Users/davidmorgan/Documents/Repositories/agentic-workflows

cp -r $TEMPLATE/.ai .
rm -rf .ai/preferences
ln -s $TEMPLATE/.ai/preferences .ai/preferences

cp -r $TEMPLATE/.claude .
cp $TEMPLATE/claude.md .
cp $TEMPLATE/gemini.md .  # Also copy gemini.md

# Customize
vim gemini.md  # Update project name, type, description
vim .ai/context/overview.md
vim .ai/INDEX.md

git add .ai .claude claude.md gemini.md
git commit -m "Add AI knowledge system"
```

---

## Gemini-Specific Tips

### 1. No Slash Commands

Gemini doesn't have `/capture`, so say:
- "Document this"
- "Capture knowledge"
- "Update the knowledge base"

### 2. Manual Context Loading

Unlike Claude Code which auto-reads files, Gemini needs explicit instructions:
- "Read gemini.md and INDEX.md"
- "Check what's in .ai/preferences/"

### 3. Use Multiline Input

For complex requests, paste formatted instructions:
```
Task: Build user authentication

Steps:
1. Check .ai/preferences/coding-standards.md
2. Check if similar features exist in .ai/knowledge/features/
3. Implement following those patterns
4. Document when done
```

### 4. Session Persistence

Gemini CLI sessions may lose context. Start each session with:
```
Read gemini.md and INDEX.md to get oriented
```

---

## Common Commands

### Starting Fresh
```
Read gemini.md and .ai/INDEX.md
```

### Finding Information
```
How does [feature] work?
→ Gemini reads .ai/INDEX.md → Links to feature doc

What patterns should I use?
→ Gemini reads .ai/knowledge/patterns/
```

### After Building
```
Document this feature in the knowledge base
→ Gemini creates .ai/knowledge/features/[name].md
→ Updates INDEX.md
```

### Checking Preferences
```
What are the coding standards for this project?
→ Gemini reads .ai/preferences/coding-standards.md
```

---

## Helper Alias (Optional)

Add to your shell config (`~/.zshrc` or `~/.bashrc`):

```bash
# Start Gemini with project context
alias gai='gemini && echo "Read gemini.md and .ai/INDEX.md"'
```

Then just run:
```bash
cd your-project
gai
```

---

## Comparison: Claude vs Gemini

| Feature | Claude Code | Gemini CLI |
|---------|-------------|------------|
| Entry file | claude.md | gemini.md |
| Slash commands | Yes (/capture) | No (say "document this") |
| Auto-load context | Sometimes | Manual (ask to read files) |
| Knowledge capture | /capture command | Manual instruction |
| Session memory | Better | Needs reminders |
| Integration | Same .ai/ structure | Same .ai/ structure |

**Both use the same knowledge base** - just different entry points.

---

## Example Session

```bash
$ cd my-project
$ gemini

You: Read gemini.md and .ai/INDEX.md

Gemini: [Reads files, understands project]

You: Build a password reset feature

Gemini: [Checks .ai/preferences/, builds feature following standards]

You: Document this

Gemini: [Analyzes git changes, creates .ai/knowledge/features/password-reset.md, updates INDEX.md]

✅ Done: Documented password reset feature

Changed:
- .ai/knowledge/features/password-reset.md (new)
- .ai/INDEX.md (updated)

Verify: cat .ai/knowledge/features/password-reset.md

Next: Review docs, commit with `git add .ai/ && git commit -m "Document password reset"`
```

---

## Troubleshooting

**Gemini doesn't remember project context:**
→ Start each session: "Read gemini.md and INDEX.md"

**Gemini searches entire repo instead of using knowledge base:**
→ Remind: "Check .ai/INDEX.md first before searching"

**Knowledge capture doesn't follow template:**
→ Say: "Follow the template in gemini.md for knowledge capture"

**Gemini gives verbose responses:**
→ Remind: "Use the concise format from gemini.md"

---

## Advanced: Custom System Prompt

If using Gemini API directly, you can set a system prompt:

```python
import google.generativeai as genai

# Read project context
with open('gemini.md') as f:
    gemini_context = f.read()
with open('.ai/INDEX.md') as f:
    index_context = f.read()

system_prompt = f"""
{gemini_context}

Current project state:
{index_context}

Follow the preferences in .ai/preferences/ and use the knowledge base in .ai/knowledge/.
"""

model = genai.GenerativeModel('gemini-pro', system_instruction=system_prompt)
```

---

## Summary

**Setup (once):** Copy template, customize gemini.md
**Session start:** "Read gemini.md and INDEX.md"
**After work:** "Document this"
**Same structure as Claude** - just different entry point

The knowledge base is tool-agnostic. Use Claude, Gemini, or both!
