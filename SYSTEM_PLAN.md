# AI Knowledge Management System - Simplified Foundation Plan

## Overview

A simple, incremental system that helps AI assistants (Claude Code, Gemini, etc.) know **where to look first** instead of searching the entire repository. The system grows with your project through automatic knowledge capture.

**Core Idea**: `claude.md` tells AI → read `.ai/INDEX.md` → which points to specific knowledge files

---

## Design Principles

1. **claude.md is the entry point** - AI always reads this first
2. **Discovery over search** - AI knows where to look for specific information
3. **Incremental growth** - Start simple, build as you go
4. **Tool agnostic** - Works with any AI coding assistant
5. **Low overhead** - Simple commands, automatic capture

---

## Foundation Structure (Phase 1 - Start Here)

```
agentic-workflows/
├── claude.md                    # AI entry point - READ THIS FIRST
├── .gitignore                   # Ignore temp files
├── README.md                    # Human-readable project overview
│
├── .ai/                         # AI knowledge base
│   ├── INDEX.md                 # Master index - AI's second stop
│   ├── GUIDE.md                 # "Where to look" for common questions
│   │
│   ├── context/                 # Project architecture & decisions
│   │   ├── overview.md          # What this project does
│   │   ├── architecture.md      # How it's structured
│   │   └── decisions/           # Important decisions (ADRs)
│   │       └── 001-example.md
│   │
│   └── knowledge/               # Captured knowledge (grows over time)
│       ├── features/            # Feature documentation
│       ├── components/          # Component documentation
│       └── patterns/            # Coding patterns used
│
└── .claude/                     # Claude Code specific
    └── commands/                # Slash commands
        └── capture.md           # /capture - Knowledge capture
```

**That's it to start.** We'll add workflows, agents, skills later as needed.

---

## Core Files Explained

### 1. `claude.md` - The Entry Point

**Purpose**: First file any AI reads. Tells them how to navigate this project.

```markdown
# Agentic Workflows - AI Knowledge Management System

**Project Type**: AI Knowledge Management System
**Status**: In Development
**Tech Stack**: [To be determined based on usage]

---

## For AI Assistants (Claude, Gemini, etc.)

### Read This First! 🎯

**Every time you start working on this project:**

1. **Read** `.ai/INDEX.md` - Shows recent changes and knowledge map
2. **Check** `.ai/GUIDE.md` - Learn where to find specific information
3. **Review** recent changes in INDEX.md before asking questions

### Knowledge Base Structure

```
.ai/
├── INDEX.md          - Start here: recent changes, knowledge map
├── GUIDE.md          - Where to look for common questions
├── context/          - Project architecture and key decisions
└── knowledge/        - Features, components, patterns
    ├── features/     - What features exist and how they work
    ├── components/   - System components documentation
    └── patterns/     - Coding patterns used in this project
```

### How to Work Here

**Before making changes:**
1. Check `.ai/INDEX.md` for recent updates
2. Look for related features in `.ai/knowledge/features/`
3. Review relevant patterns in `.ai/knowledge/patterns/`

**After making changes:**
1. Run `/capture` to document what you built
2. Ensure tests pass
3. Commit with clear messages

### Available Commands

- `/capture` - Capture knowledge after building something

### Project Overview

This project is a meta-system for managing AI knowledge in software projects.
It helps AI assistants know where to look instead of searching everything.

See `.ai/context/overview.md` for full details.

---

## For Humans

See `README.md` for project documentation and getting started guide.
```

### 2. `.ai/INDEX.md` - AI's Dashboard

**Purpose**: Quick overview of what's in the knowledge base and what changed recently.

```markdown
# AI Knowledge Base - Index

**Last Updated**: 2025-11-08
**Project Status**: Foundation Phase
**Knowledge Items**: 0 features, 0 components, 0 patterns

---

## 🆕 Recent Changes

### 2025-11-08
- 🎉 **Initialized** knowledge base system
- 📝 **Created** foundation structure (claude.md, INDEX.md, GUIDE.md)

---

## 📍 Quick Navigation

New here? → Read [GUIDE.md](./GUIDE.md) to learn where to find things

### Project Context
- [Overview](./context/overview.md) - What this project does
- [Architecture](./context/architecture.md) - How it's structured
- [Decisions](./context/decisions/) - Important choices made

### Knowledge (Built over time)
- [Features](./knowledge/features/) - 0 documented
- [Components](./knowledge/components/) - 0 documented
- [Patterns](./knowledge/patterns/) - 0 documented

---

## 📊 Project Stats

- **Files in repo**: [Auto-update when knowledge is captured]
- **Test coverage**: [To be added]
- **Last commit**: [Auto-update]

---

## 🎯 Current Focus

- Setting up foundation knowledge management system
- Defining initial project structure
- Creating first features

---

## 💡 How This Works

1. When you build something, run `/capture`
2. AI analyzes what changed and creates documentation
3. INDEX.md updates automatically
4. Knowledge grows incrementally with each feature

This file is your dashboard - check here first every session.
```

### 3. `.ai/GUIDE.md` - Where to Look

**Purpose**: Teaches AI where to find specific types of information.

```markdown
# Navigation Guide - Where to Look

This guide helps you find information quickly without searching the entire repo.

---

## Common Questions → Where to Look

### "What does this project do?"
→ Read `.ai/context/overview.md`

### "How is it architected?"
→ Read `.ai/context/architecture.md`

### "Why was [decision] made?"
→ Check `.ai/context/decisions/` for Architecture Decision Records (ADRs)

### "How does [feature] work?"
→ Check `.ai/knowledge/features/[feature-name].md`
→ If not found, search codebase (knowledge not captured yet)

### "What components exist?"
→ Browse `.ai/knowledge/components/`

### "What coding patterns are used?"
→ Browse `.ai/knowledge/patterns/`

### "What changed recently?"
→ Check `.ai/INDEX.md` → Recent Changes section

### "How do I [add a feature / fix a bug / etc.]?"
→ Check if documented in `.ai/knowledge/`
→ If first time, build it and run `/capture` to document the process

---

## When Knowledge Doesn't Exist Yet

This knowledge base **grows over time**. If you can't find something:

1. Build the feature or fix the bug
2. Run `/capture` to document it
3. Next time, the knowledge will be here

Start simple, build incrementally.

---

## File Naming Conventions

- **Features**: `.ai/knowledge/features/feature-name.md` (kebab-case)
- **Components**: `.ai/knowledge/components/component-name.md` (kebab-case)
- **Patterns**: `.ai/knowledge/patterns/pattern-name.md` (kebab-case)
- **Decisions**: `.ai/context/decisions/NNN-short-title.md` (numbered ADRs)

---

## Quick Decision Tree

```
Need information?
│
├─ About project purpose/architecture?
│  └─ Read .ai/context/
│
├─ About a feature?
│  └─ Check .ai/knowledge/features/
│
├─ About how to do something?
│  └─ Check .ai/knowledge/patterns/
│
└─ Recent changes?
   └─ Check .ai/INDEX.md
```
```

### 4. Knowledge File Template

**Purpose**: Standard format for capturing feature/component knowledge.

```markdown
---
type: feature | component | pattern
name: User Authentication
status: implemented | in-progress | planned
created: 2025-11-08
updated: 2025-11-08
files:
  - src/auth/login.ts
  - src/middleware/auth.ts
related:
  - .ai/knowledge/components/database.md
tags: [auth, security, jwt]
---

# [Feature/Component Name]

## What It Does
[2-3 sentence description]

## How It Works
[Architecture explanation with file references]

**Key files:**
- `src/auth/login.ts:15` - Main authentication logic
- `src/middleware/auth.ts:8` - Request validation

## Important Decisions
- **Why JWT?**: Stateless auth for scalability
- **Token expiration**: 24 hours (configurable)

## Usage Example
```typescript
// Example code showing how to use this
```

## Testing
- Tests: `tests/auth.test.ts`
- Coverage: 95%

## Common Issues
- **Issue**: Token expiration not working
  - **Fix**: Check JWT_SECRET environment variable

## Future Ideas
- [ ] Add refresh tokens
- [ ] Support OAuth
```

---

## The `/capture` Command (Phase 1 - Simple Version)

**Purpose**: After building something, automatically document it.

### `.claude/commands/capture.md`

```markdown
You are running the /capture command to document recent work.

## Steps

1. **Analyze changes**
   - Run `git diff HEAD` or `git log -1 --stat` to see what changed
   - Identify files modified/added

2. **Understand what was built**
   - Read the changed files
   - Check commit messages for context
   - Identify if it's a feature, component, or pattern

3. **Create or update knowledge file**
   - If new feature → create `.ai/knowledge/features/[name].md`
   - If new component → create `.ai/knowledge/components/[name].md`
   - If new pattern → create `.ai/knowledge/patterns/[name].md`
   - Use the standard template with YAML frontmatter

4. **Update INDEX.md**
   - Add entry to "Recent Changes" section with date
   - Update knowledge counts
   - Add links to new knowledge files

5. **Validate**
   - Ensure all file references in knowledge docs exist
   - Check that frontmatter is valid YAML
   - Verify links work

## Output

Tell the user:
- What knowledge was captured
- Where it was saved
- Link to the file(s) created/updated

## Example

User runs: `/capture`

You respond:
"✅ Captured knowledge:
- Created `.ai/knowledge/features/user-login.md`
- Updated `.ai/INDEX.md` with recent changes
- Documented 3 key files and 2 design decisions"
```

---

## Initial Context Files

### `.ai/context/overview.md`

```markdown
# Project Overview

## What This Is

This is an AI knowledge management system for software projects. It helps AI assistants (Claude Code, Gemini, etc.) navigate codebases efficiently by maintaining structured knowledge about features, components, and patterns.

## The Problem It Solves

AI assistants often:
- Search entire repositories for context (slow, token-heavy)
- Ask repetitive clarifying questions
- Lack project-specific knowledge
- Don't learn from previous sessions

## The Solution

A structured knowledge base that:
- Tells AI where to look first (no full-repo searches)
- Captures decisions and patterns as you build
- Grows incrementally with each feature
- Works with any AI coding assistant

## How It Works

1. AI reads `claude.md` → knows to check `.ai/INDEX.md`
2. INDEX.md shows recent changes and knowledge map
3. AI follows links to specific knowledge files
4. After building something, `/capture` documents it automatically
5. Knowledge base grows, AI gets smarter about the project

## Status

Currently in **foundation phase** - setting up core structure.
```

### `.ai/context/architecture.md`

```markdown
# Architecture

## System Structure

This is a file-based knowledge management system with three layers:

### Layer 1: Entry Point
- **claude.md** - AI reads this first, gets oriented

### Layer 2: Navigation
- **.ai/INDEX.md** - Quick overview, recent changes, knowledge map
- **.ai/GUIDE.md** - Where to look for specific information

### Layer 3: Knowledge
- **.ai/context/** - Project purpose, architecture, decisions
- **.ai/knowledge/** - Features, components, patterns (grows over time)

### Layer 4: Automation
- **.claude/commands/** - Slash commands like `/capture`

## Design Decisions

- **Markdown + YAML**: Human-readable, git-friendly, tool-agnostic
- **Incremental growth**: Start empty, build with each feature
- **Discovery-first**: AI knows where to look, no searching
- **Tool-agnostic**: Works with Claude, Gemini, Cursor, etc.

## Knowledge Capture Flow

```
Build feature → Run /capture → AI analyzes changes → Creates knowledge docs → Updates INDEX.md
```

## Future Expansion

As the system matures, we may add:
- Workflows (standard processes)
- Agents (specialized AI roles)
- Skills (reusable capabilities)
- Archetypes (project templates)

Start simple, add complexity only when needed.
```

---

## Implementation Plan - Start Simple

### Phase 1: Foundation (Do This First) ✅

**Create:**
1. `claude.md` - AI entry point with clear instructions
2. `.ai/INDEX.md` - Empty knowledge base dashboard
3. `.ai/GUIDE.md` - Navigation guide
4. `.ai/context/overview.md` - What this project is
5. `.ai/context/architecture.md` - How it works
6. `.claude/commands/capture.md` - Basic knowledge capture
7. `.gitignore` - Ignore temp files
8. `README.md` - Human-readable overview

**Test:**
- Create a dummy feature
- Run `/capture`
- Verify it creates knowledge file correctly
- Verify INDEX.md updates

**Result:** Working foundation that's immediately useful

### Phase 2: First Real Usage (After Foundation)

**Use it:**
- Build your first real feature
- Run `/capture` after each addition
- Watch knowledge base grow organically

**Refine:**
- Adjust templates based on what works
- Add patterns you discover
- Update GUIDE.md with new navigation paths

**Result:** Proven system with real knowledge

### Phase 3: Expansion (Only When Needed)

**Add only if useful:**
- `.ai/workflows/` - If you repeat the same processes
- `.ai/agents/` - If you want specialized AI behaviors
- `.ai/skills/` - If you have reusable templates
- More `/` commands - Only for common tasks

**Result:** Mature system tailored to your needs

---

## Example: How It Works End-to-End

### Scenario 1: First Session (Foundation)

```
User: "Set up the knowledge management system"

Claude:
1. Reads claude.md (sees instructions to build .ai/ structure)
2. Creates foundation files
3. Commits and explains the system

User: "Build a user authentication feature"

Claude:
1. Reads claude.md → .ai/INDEX.md (empty, no auth knowledge)
2. Builds authentication feature
3. User runs /capture
4. Claude creates .ai/knowledge/features/authentication.md
5. Updates INDEX.md with new entry
```

### Scenario 2: Later Session (Knowledge Exists)

```
User: "Add password reset"

Claude:
1. Reads claude.md → .ai/INDEX.md
2. Sees authentication feature listed
3. Reads .ai/knowledge/features/authentication.md
4. Understands existing auth system (JWT, token structure, etc.)
5. Builds password reset using existing patterns
6. User runs /capture
7. Creates password-reset.md, links to authentication.md
8. Updates INDEX.md
```

### Scenario 3: Using with Different AI (Gemini)

```
User in Gemini: "How does authentication work here?"

[Pastes contents of claude.md to Gemini]

Gemini:
1. Sees instruction to read .ai/INDEX.md
2. Reads INDEX.md, finds authentication.md link
3. Reads authentication.md
4. Answers with full context, no search needed
```

**The system is tool-agnostic because it's just markdown files with clear instructions.**

---

## Why This Is Simpler Than Before

**Removed from initial version:**
- ❌ Workflows (add later if needed)
- ❌ Agents (add later if needed)
- ❌ Skills (add later if needed)
- ❌ Personas (add later if needed)
- ❌ Archetypes (add later if needed)
- ❌ Session tracking (probably don't need)
- ❌ Complex metadata (keep it simple)

**Keeping:**
- ✅ claude.md as entry point
- ✅ Simple INDEX.md dashboard
- ✅ GUIDE.md for navigation
- ✅ knowledge/ for features/components/patterns
- ✅ context/ for architecture/decisions
- ✅ /capture command for easy documentation

**Philosophy:** Start with the minimum that's useful. Add complexity only when you feel the need.

---

## Success Looks Like

### Week 1
- Foundation files created
- First `/capture` works
- 1-2 features documented

### Month 1
- 10+ features documented
- AI consistently finds info in .ai/ without searching
- You naturally run `/capture` after each feature

### Month 3
- Comprehensive knowledge base
- New developers (or AIs) get up to speed in minutes
- Patterns library helps maintain consistency
- INDEX.md is your project dashboard

---

## Ready to Build?

Once you approve, I'll create:

1. **claude.md** - Complete entry point
2. **.ai/INDEX.md** - Dashboard (starts empty)
3. **.ai/GUIDE.md** - Navigation guide
4. **.ai/context/overview.md** - Project overview
5. **.ai/context/architecture.md** - Architecture explanation
6. **.claude/commands/capture.md** - Knowledge capture command
7. **README.md** - Human-readable docs
8. **.gitignore** - Ignore temp files

Then we'll test `/capture` with a dummy feature to verify it works.

**This is the foundation. Everything else builds on it incrementally.**
