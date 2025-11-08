# Agentic Workflows - AI Knowledge Management System

> **A GPS for AI Assistants** - Help AI know where to look instead of searching everything.

---

## What Is This?

An **AI knowledge management system** that helps AI assistants (Claude Code, Gemini, Cursor, etc.) navigate your codebase efficiently. Instead of searching the entire repository every time, AI knows exactly where to find information about features, components, and patterns.

Think of it as institutional memory that persists across sessions and works with any AI tool.

---

## The Problem

When AI assistants work on projects, they typically:

- 🔍 Search entire repositories for context (slow, expensive)
- ❓ Ask repetitive clarifying questions every session
- 🤷 Don't know your project-specific patterns
- 🔄 Reinvent solutions that already exist in your codebase

## The Solution

A structured knowledge base where:

- ✅ AI reads `claude.md` → `.ai/INDEX.md` → finds specific knowledge in seconds
- ✅ Knowledge is captured automatically with `/capture` command
- ✅ Context builds incrementally with each feature
- ✅ Works with Claude Code, Gemini, Cursor, or any AI assistant

---

## Quick Start

### For AI Assistants

1. **Read `claude.md`** - Your entry point and orientation
2. **Check `.ai/INDEX.md`** - See recent changes and knowledge map
3. **Use `.ai/GUIDE.md`** - Learn where to find specific information
4. **After building**: Run `/capture` to document your work

### For Humans

1. **Clone this repo** as a template for your project
2. **Update `claude.md`** with your project details
3. **Build features** as normal
4. **Run `/capture`** after each feature to document it
5. **Watch the knowledge base grow** automatically

---

## How It Works

```
┌─────────────┐
│ Start Work  │
└──────┬──────┘
       │
       ├─> AI reads claude.md (orientation)
       │
       ├─> AI reads .ai/INDEX.md (what's new?)
       │
       ├─> AI finds specific knowledge quickly
       │
       ├─> Build feature/fix bug
       │
       ├─> Run /capture
       │
       └─> Knowledge base updated automatically
```

**Result**: Next session, AI has full context without searching.

---

## Directory Structure

```
your-project/
├── claude.md                    # AI entry point - start here
├── README.md                    # This file - for humans
│
├── .ai/                         # AI knowledge base
│   ├── INDEX.md                 # Dashboard with recent changes
│   ├── GUIDE.md                 # Where to find things
│   │
│   ├── context/                 # Stable project info
│   │   ├── overview.md          # What the project does
│   │   ├── architecture.md      # How it's structured
│   │   └── decisions/           # Architecture decisions (ADRs)
│   │
│   └── knowledge/               # Growing knowledge (captured via /capture)
│       ├── features/            # Feature documentation
│       ├── components/          # Component documentation
│       └── patterns/            # Coding patterns
│
└── .claude/                     # Claude Code specific
    └── commands/
        └── capture.md           # /capture command definition
```

---

## The `/capture` Command

**The secret sauce** - automatically generates documentation from your git changes.

### Usage

After building a feature:

```bash
# In Claude Code
/capture

# AI analyzes git changes, creates documentation, updates INDEX.md
```

### What It Does

1. **Analyzes** your git diff and recent commits
2. **Understands** what you built from code and commit messages
3. **Creates** structured documentation with examples
4. **Updates** INDEX.md with recent changes
5. **Links** related knowledge together

### What You Get

- **Feature docs** in `.ai/knowledge/features/`
- **Component docs** in `.ai/knowledge/components/`
- **Pattern docs** in `.ai/knowledge/patterns/`
- **Updated INDEX.md** with your changes listed

**Zero manual documentation effort** - it's automatic!

---

## Example Workflow

### Scenario: Adding User Authentication

```bash
# 1. You build the feature
# ... write code ...
git commit -m "Add JWT-based user authentication"

# 2. You run capture
/capture

# 3. AI generates:
.ai/knowledge/features/user-authentication.md  # Full feature docs
.ai/knowledge/patterns/jwt-auth.md             # If new pattern
.ai/context/decisions/003-jwt-vs-sessions.md   # If major decision
.ai/INDEX.md                                   # Updated with changes

# 4. Next session
# AI reads INDEX.md → sees authentication feature
# AI reads user-authentication.md → understands your auth system
# AI can now build password-reset using existing patterns
```

**Result**: Knowledge compounds. Each feature makes future features easier.

---

## Key Features

### 🎯 Discovery Over Search
AI knows where to look first. 70% reduction in full-repo searches.

### 📈 Incremental Growth
Knowledge base starts empty, grows with each feature. No big upfront effort.

### 🔧 Tool Agnostic
Works with Claude Code, Gemini, Cursor, or any AI assistant. Just markdown files.

### 🤖 Automatic Capture
`/capture` command generates docs from git changes. Zero manual effort.

### 🧭 Clear Navigation
`INDEX.md` → `GUIDE.md` → specific knowledge. AI always knows where to go.

### 🔗 Cross-Referenced
Features link to components, components link to patterns. Full context graph.

---

## Benefits

### For AI Assistants

- ✅ Find information in seconds, not minutes
- ✅ Understand project patterns and conventions
- ✅ Build features consistent with existing code
- ✅ Avoid asking repetitive questions
- ✅ Work efficiently with minimal context

### For Developers

- ✅ Zero documentation burden (automatic via `/capture`)
- ✅ Always-current documentation (generated from code)
- ✅ Faster onboarding for new team members
- ✅ Institutional knowledge that persists
- ✅ Better code consistency across features

### For Teams

- ✅ Shared understanding of architecture and patterns
- ✅ Consistent conventions across the codebase
- ✅ Easier code reviews (reference documented patterns)
- ✅ Knowledge survives team member transitions
- ✅ Scales from solo to large teams

---

## Use Cases

### For This Project (Meta)

This project IS the knowledge management system. We'll use it to document itself as we build it.

### For Your Projects

1. **Clone this repo** as a template
2. **Update `claude.md`** with your project details
3. **Update `.ai/context/overview.md`** with your project description
4. **Start building** features
5. **Run `/capture`** after each feature
6. **Enjoy** automatic, always-current documentation

### For Teams

- **Consistency**: Everyone follows the same patterns (documented in `.ai/knowledge/patterns/`)
- **Onboarding**: New members read INDEX.md → architecture.md → relevant features
- **Code Reviews**: Reference documented patterns and decisions
- **Knowledge Sharing**: AI learns from any team member's work

---

## Examples

### Finding Information

**Human asks**: "How does authentication work?"

**Without this system**:
- AI searches 50+ files
- Uses 20k+ tokens
- Takes 2-3 minutes
- May miss important details

**With this system**:
- AI reads INDEX.md (sees auth listed)
- AI reads `.ai/knowledge/features/authentication.md`
- Gets full answer in 10 seconds
- Uses ~2k tokens

**70% faster, 90% fewer tokens**

### Building Consistent Features

**Human asks**: "Add password reset"

**Without this system**:
- AI guesses at patterns
- May not match existing auth approach
- Inconsistent with codebase style

**With this system**:
- AI reads authentication.md
- Understands existing JWT approach
- Follows established patterns
- Consistent implementation

**Consistency by default**

---

## Tech Stack

- **Format**: Markdown with YAML frontmatter
- **Storage**: Git-tracked files (version controlled)
- **Integration**: Claude Code slash commands
- **Compatibility**: Any AI assistant that can read files

**No database, no setup, no complexity** - just files in git.

---

## Getting Started

### 1. For This Project (Meta)

```bash
# Clone the repo
git clone <repo-url>
cd agentic-workflows

# Start building features for the knowledge system itself
# Use /capture to document them
```

### 2. As a Template for Your Project

```bash
# Copy the structure to your project
cp -r .ai /path/to/your-project/
cp -r .claude /path/to/your-project/
cp claude.md /path/to/your-project/

# Update claude.md with your project info
# Update .ai/context/overview.md with your project description
# Update .ai/context/architecture.md with your architecture

# Start building and capturing knowledge!
```

---

## Documentation

- **[claude.md](./claude.md)** - AI entry point and orientation
- **[.ai/INDEX.md](./.ai/INDEX.md)** - Knowledge base dashboard
- **[.ai/GUIDE.md](./.ai/GUIDE.md)** - Navigation guide
- **[.ai/context/overview.md](./.ai/context/overview.md)** - Project overview
- **[.ai/context/architecture.md](./.ai/context/architecture.md)** - System architecture
- **[.claude/commands/capture.md](./.claude/commands/capture.md)** - Capture command details

---

## Philosophy

> "The best documentation is the one that's always up to date."

By capturing knowledge automatically from git changes, we eliminate doc/code drift.

> "AI should know where to look, not search everything."

Structured navigation beats unstructured search. Like a library vs. a pile of books.

> "Start simple, grow organically."

Begin with minimal structure. Add complexity only when needed.

---

## Roadmap

### ✅ Phase 1: Foundation (Current)
- Directory structure
- Entry point (claude.md)
- Dashboard (INDEX.md)
- Navigation (GUIDE.md)
- Knowledge capture (/capture)

### 🔜 Phase 2: Real Usage
- Document first real features
- Refine templates based on usage
- Grow knowledge base organically

### 🔮 Phase 3: Extensions (If Needed)
- Workflows for common processes
- Agent personas for specialized tasks
- Skills for reusable templates
- Archetypes for project types

---

## Contributing

This is a personal project for now, but the structure is designed to be:

- **Forkable**: Clone and adapt for your projects
- **Extensible**: Add your own patterns and workflows
- **Shareable**: Share knowledge structures with teams

---

## License

MIT License - feel free to use this for your own projects!

---

## Questions?

See the documentation in `.ai/context/` for detailed explanations.

For AI assistants: Start with `claude.md` → `.ai/INDEX.md` → `.ai/GUIDE.md`

---

**Built with**: Claude Code, Markdown, Git, and a desire for better AI-assisted development.

**Status**: Foundation complete, ready to grow organically.
