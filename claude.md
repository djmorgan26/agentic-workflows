# Agentic Workflows - AI Knowledge Management System

**Project Type**: AI Knowledge Management System
**Purpose**: Help AI assistants navigate projects efficiently through structured knowledge
**Status**: Foundation Phase
**Last Updated**: 2025-11-08

---

## For AI Assistants 🤖

> **READ THIS FIRST** every time you start working on this project.

### Your First 3 Steps (Every Session)

1. **Read `.ai/INDEX.md`** - Your dashboard with recent changes and knowledge map
2. **Check `.ai/GUIDE.md`** - Learn where to find specific types of information
3. **Review recent changes** - See what's new in INDEX.md before starting

### Knowledge Base Structure

```
.ai/
├── INDEX.md              ← Start here: dashboard with recent changes
├── GUIDE.md              ← Where to look for common questions
│
├── context/              ← Project architecture and key decisions
│   ├── overview.md       ← What this project does
│   ├── architecture.md   ← How it's structured
│   └── decisions/        ← Important decisions (ADRs)
│
└── knowledge/            ← Captured knowledge (grows over time)
    ├── features/         ← Feature documentation
    ├── components/       ← Component documentation
    └── patterns/         ← Coding patterns used
```

### How This System Works

**The Core Concept:**
- Instead of searching the entire repository, you know exactly where to look
- Knowledge is captured incrementally as features are built
- Every session starts with INDEX.md to see what's new
- GUIDE.md tells you where to find specific types of information

**The Flow:**
```
Read claude.md → Read INDEX.md → Read GUIDE.md → Find specific knowledge → Build → Capture
```

### Before Making Changes

1. **Check `.ai/INDEX.md`** for recent updates that might affect your work
2. **Look for related features** in `.ai/knowledge/features/` to understand existing patterns
3. **Review relevant patterns** in `.ai/knowledge/patterns/` to maintain consistency
4. **Check architecture** in `.ai/context/` if making structural changes

### After Making Changes

1. **Run `/capture`** to document what you built (knowledge capture workflow)
2. **Ensure tests pass** (if tests exist)
3. **Commit with clear messages** explaining what and why

### Available Commands

- **`/capture`** - Automatically document recent work (run after building features)

### Navigation Quick Reference

| Need to know... | Look in... |
|----------------|------------|
| What's new? | `.ai/INDEX.md` → Recent Changes |
| How does X work? | `.ai/knowledge/features/[feature].md` |
| Why was Y decided? | `.ai/context/decisions/` |
| What patterns to use? | `.ai/knowledge/patterns/` |
| Project architecture? | `.ai/context/architecture.md` |
| What components exist? | `.ai/knowledge/components/` |

### Working Principles

1. **Discovery over Search**: Use INDEX.md and GUIDE.md to find what you need
2. **Context First**: Always read relevant knowledge before building
3. **Capture After**: Run `/capture` after completing work to document it
4. **Incremental Growth**: The knowledge base grows with each feature
5. **Consistency**: Follow existing patterns found in `.ai/knowledge/patterns/`

### Tool Agnostic Design

This knowledge base works with **any AI assistant**:
- **Claude Code**: Full integration with `/capture` command
- **Gemini/Cursor/Other**: Read `claude.md` → `INDEX.md` → `GUIDE.md`, same flow
- **Human Developers**: All files are human-readable markdown

---

## Project Overview

### What This Is

An AI knowledge management system for software projects. It helps AI assistants navigate codebases efficiently by maintaining structured knowledge about features, components, and architectural decisions.

### The Problem It Solves

AI assistants typically:
- Search entire repositories for context (slow, expensive)
- Ask repetitive clarifying questions
- Lack project-specific knowledge
- Don't learn from previous sessions

### The Solution

A structured knowledge base where:
- AI knows where to look first
- Knowledge is captured automatically via `/capture`
- Context builds incrementally with each feature
- Works with any AI coding assistant

### Tech Stack

This is a **meta-project** - it's a system for managing knowledge about other projects.

- **Format**: Markdown + YAML frontmatter
- **Storage**: Git-tracked files
- **Tools**: Compatible with Claude Code, Gemini, Cursor, and other AI assistants
- **Future**: May add automation scripts as needed

### Current Status

**Phase**: Foundation
**Features**: 0 documented
**Components**: 0 documented
**Patterns**: 0 documented

See `.ai/context/overview.md` for full details.

---

## For Human Developers

### Quick Start

1. Read this file to understand the system
2. Read `README.md` for human-readable documentation
3. Browse `.ai/` directory to see knowledge structure
4. After building features, run `/capture` to document them

### Maintaining This System

- **Weekly**: Review Recent Changes in INDEX.md
- **After Features**: Always run `/capture`
- **Keep Current**: Update INDEX.md, GUIDE.md as the project grows

### Philosophy

> "AI should know where to look, not search everything."

This system is designed to:
- Start simple and grow organically
- Capture knowledge with minimal overhead
- Work with any AI assistant
- Stay maintainable as projects scale

For more details, see `README.md` and `.ai/context/architecture.md`.
