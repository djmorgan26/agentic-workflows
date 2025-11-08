# /capture - Knowledge Capture Command

You are running the `/capture` command to systematically document recent work.

**Purpose**: Analyze git changes and automatically generate/update knowledge documentation.

**When to use**: After completing a feature, component, bug fix, or any significant work.

---

## Execution Strategy

**Use the Task tool with a subagent** to perform knowledge capture. This keeps the main context clean and handles large changes efficiently.

---

## Command Execution

### Step 1: Check for Changes

Run a quick check to see if there are changes to document:

```bash
git log -1 --oneline
```

If no recent commits, inform user: "No recent commits found. Make changes and commit before running /capture."

### Step 2: Launch Knowledge Capture Subagent

Use the Task tool to launch a general-purpose agent with this prompt:

```
Analyze recent git changes and capture knowledge for the AI knowledge management system.

TASK:
1. Run git commands to understand what changed:
   - git log -1 --stat (last commit details)
   - git diff HEAD~1 HEAD (what changed in last commit)
   - git log -3 --oneline (recent context)

2. Determine what was built:
   - Is this a new feature? (user-facing functionality)
   - Is this a new component? (internal module/service)
   - Is this a new pattern? (reusable approach)
   - Is this a significant decision? (architecture choice)

3. Read the changed files to understand:
   - What was built (functionality)
   - Why it was built (from commits/comments)
   - How it works (architecture/implementation)
   - Key decisions made
   - Patterns used

4. Create or update knowledge files using this template:

---
type: feature | component | pattern | decision
name: [Descriptive Name]
status: implemented | in-progress | planned
created: YYYY-MM-DD
updated: YYYY-MM-DD
files:
  - path/to/file1.ext
  - path/to/file2.ext
related:
  - .ai/knowledge/path/to/related.md
tags: [tag1, tag2, tag3]
---

# [Name]

## What It Does
[2-3 sentence description]

## How It Works
[Detailed explanation with file references using format: path/to/file.ext:line]

**Key files:**
- `file.ext:line` - Description

## Important Decisions
- **Decision**: Rationale

## Usage Example
```[language]
// Code example
```

## Testing
- Tests: path/to/tests
- Coverage: X%

## Common Issues
[Any known gotchas]

## Related Knowledge
- [Link to related docs]

## Future Ideas
- [ ] Potential improvement

---

5. Determine where to save:
   - New feature → .ai/knowledge/features/[name].md
   - New component → .ai/knowledge/components/[name].md
   - New pattern → .ai/knowledge/patterns/[name].md
   - Significant decision → .ai/context/decisions/NNN-title.md

6. Update .ai/INDEX.md:
   - Add to "Recent Changes" section with emoji:
     ✅ Added / 🔧 Refactored / 🐛 Fixed / 📝 Updated / 🎉 Initialized
   - Update knowledge counts
   - Add to "Knowledge Map" section

7. Validate:
   - All file references in knowledge docs exist
   - YAML frontmatter is valid
   - Links work
   - Knowledge counts are correct

8. Return a concise summary:
   - What knowledge files were created/updated
   - What was documented (# of files, decisions, patterns)
   - Any issues encountered

IMPORTANT GUIDELINES:
- Use kebab-case for filenames: feature-name.md
- Include file paths with line numbers: src/auth.ts:45
- Link related knowledge files
- Be concise but complete
- Focus on "why" not just "what"
- Don't capture trivial changes (typo fixes, minor refactors)
```

### Step 3: Report Results

When the subagent completes, report to the user:

```
✅ Knowledge Captured

[Subagent summary here]

**Next steps:**
- Review generated documentation for accuracy
- Commit knowledge changes: git add .ai/ && git commit -m "Document [feature name]"
```

---

## When NOT to Use Subagent

For very simple changes (1-2 files, obvious update), you can handle inline:

1. Read the changed files
2. Update existing knowledge file (if one exists)
3. Update INDEX.md
4. Report completion

**Rule of thumb**: If git diff shows > 200 lines or > 3 files changed, use subagent.

---

## Error Handling

**If subagent fails:**
1. Check if there are actual changes to document
2. Verify git repository is valid
3. Try manual documentation as fallback

**If no significant changes:**
Don't create knowledge files for trivial updates (typos, formatting, minor refactors). Inform user: "Changes too small to document. Run /capture after significant feature work."

---

## Example Usage

**Scenario 1: New feature added**
```
User: /capture

You: [Launch Task tool with general-purpose subagent]

Subagent:
- Analyzes git diff
- Creates .ai/knowledge/features/user-authentication.md
- Updates .ai/INDEX.md
- Returns summary

You: ✅ Knowledge Captured
- Created .ai/knowledge/features/user-authentication.md
- Documented 5 key files and 2 decisions
- Updated INDEX.md with recent changes
```

**Scenario 2: Multiple components modified**
```
User: /capture

You: [Launch Task tool - subagent handles the complexity]

Subagent:
- Analyzes large diff (15 files)
- Updates 3 existing feature docs
- Creates 1 new pattern doc
- Updates INDEX.md
- Returns summary

You: ✅ Knowledge Captured
- Updated 3 feature docs
- Created new pattern: error-handling.md
- Updated INDEX.md
```

---

## Benefits of Using Subagent

1. **Context efficiency**: Main session stays clean, subagent uses its own context
2. **Parallel processing**: Can handle large changes without overwhelming main session
3. **Specialization**: Subagent focuses solely on knowledge capture
4. **Scalability**: Works for both small and large changes
5. **Token efficiency**: Large file reads happen in subagent context

---

## Fallback: Manual Capture (If Needed)

If Task tool unavailable or fails:

1. Run git commands to see changes
2. Read changed files
3. Create knowledge file manually using template above
4. Update INDEX.md
5. Report completion

---

**Remember**: The goal is systematic knowledge capture with minimal token usage in the main session. Let the subagent do the heavy lifting!
