# AI Knowledge System - User Memory (Token-Optimized)

**Template**: `/Users/davidmorgan/Documents/Repositories/agentic-workflows`

---

## Quick Integration (When User Says: "Add AI knowledge system")

```bash
TEMPLATE=/Users/davidmorgan/Documents/Repositories/agentic-workflows

# Copy structure (not preferences)
cp -r $TEMPLATE/.ai .
rm -rf .ai/preferences  # Remove copied preferences

# Symlink preferences to template (single source of truth)
ln -s $TEMPLATE/.ai/preferences .ai/preferences

# Copy commands
cp -r $TEMPLATE/.claude .
cp $TEMPLATE/claude.md .

# Edit 3 files: claude.md (L1,3,5), .ai/context/overview.md (L9-11), .ai/INDEX.md (L3-5)
git add .ai .claude claude.md && git commit -m "Add AI knowledge system"
```

---

## User Preferences (Always Follow)

### Communication Style
When returning results to user after completing work:

**Format:**
```
✅ Done: [What was accomplished]

Why: [Brief reason/context]

Changed:
- file1.ext
- file2.ext

Verify: [Command to see what was done]
Example: git diff, cat file.md, ls .ai/

Next: [What user should do now]
```

**Rules:**
- ❌ No verbose explanations or long paragraphs
- ✅ Clear, structured, scannable
- ✅ Always include verification command
- ✅ Tell user what to do next

**Example (Good):**
```
✅ Done: Added user authentication feature

Why: Requested JWT-based auth for API

Changed:
- src/auth/service.ts (new)
- src/middleware/auth.ts (new)
- tests/auth.test.ts (new)

Verify: ls src/auth/ && cat src/auth/service.ts | head -20

Next: Run tests with `npm test`, then /capture to document
```

**Example (Bad - too verbose):**
```
I've successfully implemented the user authentication feature that you requested. This includes creating a new authentication service using JWT tokens, middleware for validating requests, and comprehensive test coverage. The implementation follows best practices and includes error handling...
[continues for 5 more paragraphs]
```

### Git Workflow
- ✅ **Commit messages**: CONCISE. One line summarizing what changed.
- ❌ **Never push**: User handles `git push` themselves. Only commit.
- ✅ **Commit often**: After each logical change, commit with clear message.

**Example commit messages:**
```bash
git commit -m "Add user authentication"
git commit -m "Fix login validation bug"
git commit -m "Update error handling pattern"
git commit -m "Document payment feature"
```

**Not this:**
```bash
# Too verbose - user wants concise!
git commit -m "$(cat <<'EOF'
Add comprehensive user authentication system

Implemented JWT-based authentication with:
- Login endpoint with email/password validation
- Token generation and verification
- Refresh token support
...
EOF
)"
```

---

## Token-Saving Rules

### Rule 1: Read Order (Every Session Start)
```
1. claude.md (orientation) → 2. .ai/INDEX.md (recent changes) → 3. Done
```
**Don't read**: Full files unless user asks specific questions. INDEX.md has links.

### Rule 2: Use Subagents (Save Main Context)
```
If > 3 files changed OR > 200 lines: Launch Task subagent
Else: Handle inline
```

### Rule 3: /capture Command
```
User says: "run /capture" or "document this"
→ Quick check: git log -1 --oneline
→ Launch Task subagent with: "Analyze git changes, create .ai/knowledge/ docs, update INDEX.md"
→ Report subagent summary to user
```
**Never read all files in main session - use subagent!**

---

## Structure (Reference Only)

```
.ai/INDEX.md         ← Start here (has everything you need)
.ai/preferences/     ← User's standards (read when building, don't modify)
.ai/knowledge/       ← Project-specific (capture creates these)
.claude/commands/    ← Slash command definitions
```

---

## Decision Tree

```
User request type → Action

"Add AI system"     → Copy template, customize 3 files, commit (don't push)
"Document this"     → Run /capture (via subagent), commit knowledge (don't push)
"How does X work?"  → Read .ai/INDEX.md → Link to knowledge file
"Build feature"     → Check .ai/preferences/ → Build → Commit → Remind to /capture
New session         → Read claude.md → Read INDEX.md only
```

---

## Critical: Context Budget

**Main session reads (max):**
- claude.md (~200 tokens)
- .ai/INDEX.md (~500 tokens)
- Specific knowledge file if needed (~1000 tokens)

**Use subagents for:**
- /capture (any size change)
- Reading > 3 files
- Analyzing large diffs
- Generating documentation

**Don't read in main session:**
- All knowledge files (use INDEX.md links)
- All preferences (only when needed)
- Full git diffs (let subagent handle)

---

## Common Pitfalls (Don't Waste Tokens)

❌ Reading all .ai/knowledge/ files → Use INDEX.md instead
❌ Manual /capture (reading files yourself) → Use Task subagent
❌ Re-explaining preferences → Just reference the file path
❌ Full-repo searches → Check .ai/ first
❌ Verbose commit messages → Keep concise (one line)
❌ Auto-pushing to git → Never push, user handles it

---

## /capture Command Behavior

When user says "run /capture":

**You launch a Task tool subagent** that:
1. Runs git commands to analyze changes
2. Reads changed files
3. Determines what was built (feature/component/pattern/decision)
4. Creates/updates `.ai/knowledge/` files with full documentation
5. Updates `.ai/INDEX.md` Recent Changes section
6. Returns concise summary to main session

**Main session just reports results to user.**

**Why subagent?**
- Keeps main context clean
- Handles large changes efficiently
- Token efficient (heavy lifting in subagent context)
- Scales from small to large changes

**Rule**: If git diff > 200 lines or > 3 files, definitely use subagent. For tiny changes, can handle inline.

**Don't skip /capture** - it's how knowledge builds up!

---

## Slash Commands

`/capture` - If doesn't work, say: "Follow .claude/commands/capture.md instructions"

---

## Integration Checklist

When integrating into existing project:
- [ ] Copy template files
- [ ] Customize 3 key files (claude.md, overview.md, INDEX.md)
- [ ] Commit with concise message: "Add AI knowledge system"
- [ ] **Don't push** - let user handle it
- [ ] Verify .ai/ structure exists
- [ ] Ready to use /capture

---

## Key Insight

**This system EXISTS to save tokens.** Always prefer:
1. INDEX.md over exploring
2. Subagents over main session work
3. Links over reading full files
4. References over re-explanations
5. Concise commits over verbose ones
6. User controls git push

**User's goal**: Build institutional memory that REDUCES context needs over time.
