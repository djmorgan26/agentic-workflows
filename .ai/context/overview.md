# Project Overview

**Project Name**: Agentic Workflows - AI Knowledge Management System
**Created**: 2025-11-08
**Status**: Foundation Phase
**Repository**: djmorgan26/agentic-workflows

---

## What This Is

An **AI knowledge management system** for software projects. It's a meta-system that helps AI assistants (Claude Code, Gemini, Cursor, etc.) navigate codebases efficiently by maintaining structured, incremental knowledge about features, components, patterns, and architectural decisions.

Think of it as a **GPS for AI assistants** - instead of searching the entire map (codebase), they know exactly where to go.

---

## The Problem It Solves

### Current AI Assistant Challenges

When working on software projects, AI assistants typically:

1. **Search Everything**: Scan entire repositories to find context (slow, token-expensive)
2. **Ask Repetitive Questions**: No memory of past sessions or decisions
3. **Lack Project Context**: Don't understand project-specific patterns or conventions
4. **Inconsistent Approach**: May not follow established patterns without explicit guidance
5. **No Institutional Memory**: Knowledge doesn't persist between sessions

### Real-World Impact

- ⏱️ **Time waste**: AI spends minutes searching instead of seconds navigating
- 💰 **Token costs**: Full-repo searches consume unnecessary tokens
- 🔄 **Repetitive work**: Same questions asked every session
- 📉 **Quality drift**: Features built without knowledge of existing patterns
- 🧠 **Context switching**: Developers must repeatedly explain project context

---

## The Solution

### Structured Knowledge Base

A file-based system where:

1. **`claude.md`** tells AI where to start
2. **`.ai/INDEX.md`** shows recent changes and knowledge map
3. **`.ai/GUIDE.md`** teaches where to find specific information
4. **`.ai/context/`** contains stable project architecture and decisions
5. **`.ai/knowledge/`** captures features, components, and patterns as they're built

### Key Innovation: Automatic Knowledge Capture

The **`/capture`** command analyzes git changes and automatically generates documentation:
- No manual documentation burden
- Knowledge captured in context, not forgotten
- Consistent format across all knowledge files
- Incremental growth with every feature

### Discovery Over Search

Instead of:
```
AI: "Let me search the entire codebase for authentication..."
[Searches 50+ files, uses thousands of tokens]
```

We get:
```
AI reads claude.md → INDEX.md → "Authentication documented in knowledge/features/authentication.md"
[Finds answer in seconds, uses minimal tokens]
```

---

## How It Works

### The Flow

```
┌─────────────┐
│ New Session │
└──────┬──────┘
       │
       ├─> Read claude.md (orientation)
       │
       ├─> Read .ai/INDEX.md (what's new?)
       │
       ├─> Read .ai/GUIDE.md (where to look?)
       │
       ├─> Find specific knowledge
       │
       ├─> Build feature/fix bug
       │
       ├─> Run /capture
       │
       └─> Knowledge base updated
```

### Knowledge Capture Process

1. **Build something** (feature, component, fix)
2. **Run `/capture`**
3. **AI analyzes** git diff and changed files
4. **AI generates** structured documentation
5. **INDEX.md updates** with recent changes
6. **Next session**: Knowledge is available

### Incremental Growth

- **Day 1**: Foundation with 0 documented features
- **Week 1**: 2-3 features documented, patterns emerging
- **Month 1**: 10+ features, comprehensive pattern library
- **Month 3**: Complete knowledge base, AI rarely searches codebase

---

## Core Design Principles

### 1. Discovery Over Search
AI knows where to look first, reducing time and token costs

### 2. Incremental Knowledge Capture
Every feature adds to the knowledge base automatically

### 3. Tool Agnostic
Works with Claude Code, Gemini, Cursor, or any AI assistant

### 4. Human Readable
All files are markdown + YAML, easy to read and edit

### 5. Structured Navigation
Hierarchical: claude.md → INDEX.md → GUIDE.md → specific knowledge → code

### 6. Low Overhead
Simple `/capture` command, no complex setup per task

### 7. Git-Friendly
Plain text files tracked in git, merges easily, diff-able

---

## Current Status

### Phase: Foundation

**What's Built**:
- ✅ Directory structure (`.ai/`, `.claude/`)
- ✅ Entry point (`claude.md`)
- ✅ Dashboard (`INDEX.md`)
- ✅ Navigation guide (`GUIDE.md`)
- ✅ Context files (`overview.md`, `architecture.md`)
- ✅ Knowledge capture (`/capture` command)

**What's Next**:
1. Test `/capture` with dummy feature
2. Validate knowledge capture workflow
3. Begin building real features
4. Watch knowledge base grow organically

### Metrics (Current)

- **Features**: 0 documented
- **Components**: 0 documented
- **Patterns**: 0 documented
- **Decisions**: 0 recorded
- **Total knowledge files**: 5 (foundation files)

---

## Use Cases

### For This Project (Meta-System)

This project IS the knowledge management system itself. It's self-documenting - as we build features for the system, we use `/capture` to document them.

### For Future Projects

Once established, this system can be:

1. **Copied to new projects** as a template
2. **Customized** for specific tech stacks
3. **Extended** with project-specific patterns
4. **Shared** across teams for consistency

### For Different AI Tools

- **Claude Code**: Full integration with `/capture` command and slash commands
- **Gemini/Bard**: Read `claude.md`, follow same file structure
- **Cursor**: Point to knowledge files, same navigation
- **GitHub Copilot**: Can reference knowledge files in prompts
- **Human Developers**: All files human-readable, serves as documentation

---

## Success Criteria

### Quantitative

- **Discovery time**: < 30 seconds to find relevant information
- **Search reduction**: 70%+ reduction in full-repo searches
- **Knowledge coverage**: 100% of features documented
- **Index hit rate**: 60%+ of questions answered from INDEX.md

### Qualitative

- AI provides context-aware answers without clarifying questions
- New features automatically follow established patterns
- Code reviews reference project-specific standards
- Knowledge base grows organically with minimal effort
- New developers (human or AI) get up to speed in minutes

---

## Technology Stack

### Current (Meta-System)

- **Format**: Markdown with YAML frontmatter
- **Storage**: Git-tracked files
- **Integration**: Claude Code slash commands
- **Tools**: Standard git, markdown, text editors

### Future (Optional)

As needed, we may add:
- **Scripts**: Automation for common tasks
- **Validation**: Ensure knowledge file format consistency
- **Search**: Full-text search across knowledge base
- **Analytics**: Track knowledge usage and coverage

---

## Related Documentation

- [Architecture](./architecture.md) - How the system is structured
- [Decisions](./decisions/) - Major architectural decisions (empty for now)
- [INDEX.md](../INDEX.md) - Current state and recent changes
- [GUIDE.md](../GUIDE.md) - How to navigate the knowledge base
- [claude.md](../../claude.md) - AI entry point and orientation

---

## Philosophy

> "The best documentation is the one that's always up to date."

By capturing knowledge automatically as features are built, we eliminate the doc/code drift problem. Documentation is generated from reality (git changes) not aspirational intentions.

> "AI should know where to look, not search everything."

Structured navigation beats unstructured search. Like a well-organized library vs. a pile of books.

> "Start simple, grow organically."

Begin with minimal structure. Add complexity only when needed. Let the project guide its evolution.

---

**Last Updated**: 2025-11-08 (Foundation)
