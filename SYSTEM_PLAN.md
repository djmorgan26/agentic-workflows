# AI-Assisted Development Knowledge Management System - Design Plan

## Executive Summary

This system provides a structured, AI-agnostic knowledge base that captures development context, patterns, and decisions. It enables AI assistants to quickly find relevant information without searching the entire repository, while building institutional knowledge over time.

---

## Core Design Principles

1. **Discovery Over Search**: AI knows where to look first, reducing latency and token usage
2. **Incremental Knowledge Capture**: Every feature/fix adds to the knowledge base
3. **Tool Agnostic**: Works with Claude Code, Gemini, Cursor, and other AI coding tools
4. **Human Readable**: All metadata in markdown/YAML for easy browsing and editing
5. **Structured Navigation**: Hierarchical index → specific knowledge → code references
6. **Low Overhead**: Simple commands to capture knowledge, no complex setup per task

---

## Directory Structure

```
agentic-workflows/
├── .ai/                          # Tool-agnostic AI knowledge base (main system)
│   ├── INDEX.md                  # Master index - AI starts here
│   ├── NAVIGATION.md             # "Where to look" guide for common questions
│   ├── context/                  # Project context and architecture
│   │   ├── architecture.md       # System architecture overview
│   │   ├── decisions/            # Architecture Decision Records (ADRs)
│   │   │   ├── 001-choice-of-framework.md
│   │   │   └── 002-database-selection.md
│   │   ├── domain-model.md       # Core domain concepts
│   │   └── tech-stack.md         # Technology choices and rationale
│   ├── knowledge/                # Captured feature/component knowledge
│   │   ├── features/             # Feature-specific knowledge
│   │   │   ├── authentication.md
│   │   │   └── user-management.md
│   │   ├── components/           # Component documentation
│   │   │   ├── api-gateway.md
│   │   │   └── database-layer.md
│   │   └── patterns/             # Coding patterns used in this project
│   │       ├── error-handling.md
│   │       └── dependency-injection.md
│   ├── workflows/                # Repeatable task workflows
│   │   ├── add-feature.md        # Steps for adding a new feature
│   │   ├── fix-bug.md            # Bug fix workflow
│   │   ├── refactor.md           # Refactoring workflow
│   │   ├── add-test.md           # Testing workflow
│   │   └── release.md            # Release process
│   ├── archetypes/               # Project structure templates
│   │   ├── rest-api/             # REST API service template
│   │   │   ├── template.md       # Structure description
│   │   │   └── example/          # Example implementation
│   │   ├── cli-tool/             # CLI application template
│   │   └── library/              # Library/package template
│   ├── agents/                   # Specialized AI agent configurations
│   │   ├── code-reviewer.md      # Code review focus areas
│   │   ├── test-writer.md        # Test generation guidelines
│   │   ├── docs-writer.md        # Documentation standards
│   │   └── security-auditor.md   # Security review checklist
│   ├── personas/                 # AI working modes
│   │   ├── senior-engineer.md    # Senior dev perspective
│   │   ├── architect.md          # Architecture focus
│   │   └── mentor.md             # Teaching/explaining mode
│   ├── skills/                   # Reusable AI capabilities
│   │   ├── generate-tests.md     # Test generation templates
│   │   ├── update-changelog.md   # Changelog update rules
│   │   ├── create-migration.md   # Database migration patterns
│   │   └── api-documentation.md  # API doc generation
│   └── sessions/                 # Session history (optional, git-ignored)
│       └── 2025-11-08-feature-x.md
│
├── .claude/                      # Claude Code specific configurations
│   ├── commands/                 # Slash commands
│   │   ├── capture.md            # /capture - Knowledge capture workflow
│   │   ├── workflow.md           # /workflow <name> - Execute workflow
│   │   ├── agent.md              # /agent <type> - Activate agent persona
│   │   └── ask.md                # /ask <topic> - Query knowledge base
│   └── hooks/                    # Claude Code hooks
│       └── session-start.sh      # Load project context on start
│
├── docs/                         # Human-readable documentation
│   ├── README.md                 # Project overview
│   ├── getting-started.md        # Setup guide
│   ├── architecture/             # Architecture docs (mirrors .ai/context)
│   └── api/                      # API documentation
│
├── claude.md                     # Claude Code project configuration
├── .gitignore                    # Ignore sessions, temp files
└── README.md                     # Project entry point
```

---

## System Components

### 1. **INDEX.md** - AI Starting Point

The master index that AI reads first. Contains:
- Quick links to most frequently accessed knowledge
- "Last updated" sections for recent changes
- Current project phase/focus
- Quick stats (features count, components, etc.)

```markdown
# AI Knowledge Base Index

**Last Updated**: 2025-11-08
**Project Phase**: Development
**Active Features**: 3

## Start Here

### For New Sessions
1. Read [NAVIGATION.md](.ai/NAVIGATION.md) - Learn where to find what
2. Read [architecture.md](.ai/context/architecture.md) - System overview
3. Check [Recent Changes](#recent-changes)

### Quick Links
- [Features](.ai/knowledge/features/) - 3 documented features
- [Components](.ai/knowledge/components/) - 5 core components
- [Workflows](.ai/workflows/) - 5 standard workflows
- [Patterns](.ai/knowledge/patterns/) - 8 coding patterns

## Recent Changes
- **2025-11-08**: Added user authentication feature → [authentication.md](.ai/knowledge/features/authentication.md)
- **2025-11-07**: Refactored database layer → [database-layer.md](.ai/knowledge/components/database-layer.md)

## Project Overview
[2-3 sentence description of what this project does]
```

### 2. **NAVIGATION.md** - "Where to Look" Guide

Teaches AI where to find specific types of information:

```markdown
# Navigation Guide - Where to Look

## Common Questions → Where to Find Answers

### "How does [feature] work?"
1. Check `.ai/knowledge/features/[feature].md`
2. Look for related components in `.ai/knowledge/components/`
3. Review code at file paths referenced in feature doc

### "What's the architecture?"
1. Read `.ai/context/architecture.md`
2. Review `.ai/context/domain-model.md`
3. Check relevant `.ai/context/decisions/*.md`

### "How do I add a feature?"
1. Follow `.ai/workflows/add-feature.md`
2. Use relevant archetype from `.ai/archetypes/`
3. Reference similar features in `.ai/knowledge/features/`

### "What patterns are used here?"
1. Browse `.ai/knowledge/patterns/`
2. Check `.ai/context/architecture.md` for pattern overview

### "What changed recently?"
1. Check `.ai/INDEX.md` → Recent Changes section
2. Review recent commits
3. Check `.ai/sessions/` for recent session notes
```

### 3. **Knowledge Capture Metadata Schema**

Every feature/component knowledge file uses YAML frontmatter:

```markdown
---
type: feature | component | pattern | decision
name: User Authentication
status: implemented | in-progress | planned | deprecated
created: 2025-11-08
updated: 2025-11-08
owner: djmorgan26
related:
  - .ai/knowledge/components/database-layer.md
  - .ai/knowledge/features/user-management.md
tags: [auth, security, jwt]
files:
  - src/auth/authenticator.ts
  - src/middleware/auth.ts
  - tests/auth.test.ts
dependencies:
  - jsonwebtoken
  - bcrypt
decisions:
  - .ai/context/decisions/003-jwt-vs-sessions.md
---

# User Authentication

## Overview
[What this feature does - 2-3 sentences]

## How It Works
[Architecture/flow explanation with code references]

## Key Components
- **Authenticator** (src/auth/authenticator.ts:15) - Main auth logic
- **Auth Middleware** (src/middleware/auth.ts:8) - Request validation

## Important Decisions
- **Why JWT?**: [Link to ADR or inline explanation]
- **Token expiration**: 24 hours (configurable in .env)

## Usage Examples
[Code examples showing how to use this feature]

## Testing
- Unit tests: tests/auth.test.ts
- Integration tests: tests/integration/auth.integration.test.ts
- Coverage: 95%

## Common Issues & Solutions
- **Issue**: Token expiration not working
  - **Solution**: Check system clock, verify JWT_SECRET is set

## Future Enhancements
- [ ] Add refresh tokens
- [ ] Support OAuth providers
- [ ] Implement 2FA
```

### 4. **Workflow System**

Each workflow file is a step-by-step guide for AI to follow:

```markdown
---
workflow: add-feature
description: Standard process for adding a new feature
version: 1.0
---

# Add Feature Workflow

## Pre-Execution Checklist
- [ ] Feature is defined and understood
- [ ] Architecture implications considered
- [ ] Similar features reviewed for patterns

## Steps

### 1. Plan & Design (5 min)
**Actions:**
- Review similar features in `.ai/knowledge/features/`
- Check relevant patterns in `.ai/knowledge/patterns/`
- Identify affected components in `.ai/knowledge/components/`
- Create feature plan (what files will change, new dependencies, etc.)

**Output:** Design document or inline plan

### 2. Implement (varies)
**Actions:**
- Follow project patterns (see `.ai/knowledge/patterns/`)
- Write code with clear comments
- Use appropriate archetype from `.ai/archetypes/` if creating new structure

**Output:** Working implementation

### 3. Test (10-15 min)
**Actions:**
- Use `.ai/skills/generate-tests.md` for test templates
- Write unit tests
- Write integration tests if needed
- Ensure coverage > 80%

**Output:** Passing tests with good coverage

### 4. Document (5-10 min)
**Actions:**
- Update/create feature doc in `.ai/knowledge/features/[feature-name].md`
- Update affected component docs
- Update `.ai/INDEX.md` with recent change
- Add ADR in `.ai/context/decisions/` if significant decision was made

**Output:** Updated knowledge base

### 5. Capture Knowledge (AUTO via /capture)
**Actions:**
- Run `/capture` command
- AI analyzes git diff, commit history
- AI generates/updates knowledge files
- AI updates INDEX.md

**Output:** Systematic knowledge capture

## Post-Execution Checklist
- [ ] All tests pass
- [ ] Knowledge base updated
- [ ] INDEX.md has recent change entry
- [ ] Code committed with clear message
```

### 5. **Agent Configurations**

Specialized AI behaviors for different tasks:

```markdown
---
agent: code-reviewer
focus: Code quality, best practices, security
activation: /agent code-reviewer
---

# Code Reviewer Agent

## Role
You are a senior code reviewer focused on code quality, maintainability, and security.

## Review Checklist

### Code Quality
- [ ] Follows project patterns (see `.ai/knowledge/patterns/`)
- [ ] Clear variable/function names
- [ ] Appropriate comments for complex logic
- [ ] No code duplication
- [ ] Functions are focused and single-purpose

### Security
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] Authentication/authorization checked

### Testing
- [ ] Unit tests present
- [ ] Edge cases covered
- [ ] Error handling tested
- [ ] Coverage > 80%

### Documentation
- [ ] Public APIs documented
- [ ] Complex algorithms explained
- [ ] Knowledge base updated

## Knowledge to Reference
- Project patterns: `.ai/knowledge/patterns/`
- Security guidelines: `.ai/agents/security-auditor.md`
- Testing standards: `.ai/skills/generate-tests.md`
```

---

## Knowledge Capture System - The Key Innovation

### The `/capture` Command

This is the **core innovation** - a post-feature workflow that systematically captures knowledge.

**User runs:** `/capture` or `/capture --feature "user authentication"`

**AI executes:**

1. **Analyze Changes**
   - Run `git diff` to see what changed
   - Identify modified/new files
   - Extract key functions/classes changed

2. **Extract Context**
   - Read commit messages for "why"
   - Identify patterns used
   - Note decisions made

3. **Generate Knowledge**
   - Create/update feature doc in `.ai/knowledge/features/`
   - Update affected component docs in `.ai/knowledge/components/`
   - Create ADR if significant architectural decision
   - Update related pattern docs

4. **Update Index**
   - Add entry to `.ai/INDEX.md` Recent Changes
   - Update statistics (feature count, etc.)
   - Add cross-references

5. **Validate**
   - Check all files referenced exist
   - Ensure proper frontmatter
   - Verify links are valid

### Knowledge Capture Metadata Template

When `/capture` runs, it creates/updates files like:

```markdown
---
type: feature
name: [Extracted from context]
status: implemented
created: [Current date]
updated: [Current date]
owner: [Git user]
related: [Auto-detected from imports/references]
tags: [Auto-extracted from code/commits]
files: [All files changed in git diff]
dependencies: [Detected from package.json/imports]
decisions: [Links to any ADRs created]
session_id: [If session tracking enabled]
commit: [Git commit SHA]
---

# [Feature Name]

## Overview
[AI-generated summary from commits and code]

## What Changed
[List of changes with file references]

## How It Works
[AI-generated explanation with code references]

## Key Decisions
[Extracted from commit messages or inline comments]

## Testing
[Links to test files created]

## Related Knowledge
[Auto-linked related features/components]
```

---

## Slash Commands for Claude Code

### `/capture` - Knowledge Capture
```markdown
Analyze recent changes and capture knowledge systematically:

1. Run git diff to see what changed since last commit
2. Read modified files to understand changes
3. Extract key information:
   - What was built/fixed
   - Why (from commits/comments)
   - How it works (from code)
   - Patterns used
   - Dependencies added
4. Create/update knowledge files:
   - Feature doc if new feature
   - Component doc if component modified
   - Pattern doc if new pattern used
   - ADR if architectural decision
5. Update .ai/INDEX.md with recent change
6. Validate all references and links

Optional: /capture --feature "name" to specify feature name
```

### `/workflow <name>` - Execute Workflow
```markdown
Execute the specified workflow from .ai/workflows/:

1. Read .ai/workflows/[name].md
2. Follow each step systematically
3. Check off items as completed
4. Auto-run /capture at the end if workflow succeeded

Example: /workflow add-feature
```

### `/agent <type>` - Activate Agent
```markdown
Activate a specialized agent persona:

1. Read .ai/agents/[type].md
2. Adopt the role, focus, and checklist from that agent
3. Reference the specified knowledge files
4. Perform task with that agent's perspective

Example: /agent code-reviewer
```

### `/ask <topic>` - Query Knowledge Base
```markdown
Query the knowledge base intelligently:

1. Start with .ai/INDEX.md
2. Use .ai/NAVIGATION.md to determine where to look
3. Read relevant knowledge files
4. Provide answer with file references

Example: /ask "how does authentication work?"
```

---

## Integration with claude.md

The `claude.md` file ties everything together:

```markdown
# Agentic Workflows Project

## Project Overview
[Description of the project]

## For AI Assistants

### Getting Started
1. **Always start** by reading `.ai/INDEX.md`
2. Learn navigation from `.ai/NAVIGATION.md`
3. Check recent changes in `.ai/INDEX.md`
4. Review architecture in `.ai/context/architecture.md`

### Knowledge Base Structure
- **Features**: `.ai/knowledge/features/` - Implemented features
- **Components**: `.ai/knowledge/components/` - System components
- **Patterns**: `.ai/knowledge/patterns/` - Coding patterns
- **Workflows**: `.ai/workflows/` - Standard processes
- **Agents**: `.ai/agents/` - Specialized behaviors
- **Context**: `.ai/context/` - Architecture and decisions

### Available Commands
- `/capture` - Capture knowledge after changes
- `/workflow <name>` - Execute standard workflow
- `/agent <type>` - Activate specialized agent
- `/ask <topic>` - Query knowledge base

### Working with This Project

**Before making changes:**
1. Read relevant knowledge from `.ai/knowledge/`
2. Check if a workflow exists in `.ai/workflows/`
3. Review related patterns in `.ai/knowledge/patterns/`

**After making changes:**
1. Run `/capture` to update knowledge base
2. Ensure tests pass
3. Commit with clear messages

### Coding Standards
[Link to patterns and standards in .ai/knowledge/patterns/]

## Tech Stack
[Details from .ai/context/tech-stack.md]

## Architecture
See `.ai/context/architecture.md` for full details.
```

---

## Tool Agnostic Design

### Why It Works with Any AI Tool

1. **Standard Formats**: All knowledge in markdown with YAML frontmatter
2. **Clear Instructions**: claude.md and INDEX.md tell ANY AI where to start
3. **No Tool-Specific Features**: Core system doesn't rely on Claude-specific features
4. **Prompt-Based**: Slash commands are just markdown files with instructions
5. **File-Based**: No special APIs or integrations required

### Using with Other Tools

**Gemini/Cursor/Copilot:**
1. Read `claude.md` → tells them to start with `.ai/INDEX.md`
2. Follow same navigation patterns
3. Use workflows as step-by-step guides (even without slash commands)
4. Update knowledge files manually or with simple prompts

**Claude Code:**
1. Full integration with slash commands
2. Automated workflows
3. Session hooks for auto-loading context

---

## Implementation Phases

### Phase 1: Foundation (Start Here)
**Goal:** Basic structure and core files

**Create:**
- Directory structure (`.ai/`, `.claude/`, `docs/`)
- `claude.md` with project overview and AI instructions
- `.ai/INDEX.md` - Master index
- `.ai/NAVIGATION.md` - Navigation guide
- `.ai/context/architecture.md` - Initial architecture doc
- `.ai/context/tech-stack.md` - Technology choices
- `.gitignore` - Ignore `.ai/sessions/`

**Result:** AI can navigate empty structure, foundation for knowledge

### Phase 2: Workflows & Commands
**Goal:** Implement knowledge capture system

**Create:**
- `.ai/workflows/add-feature.md`
- `.ai/workflows/fix-bug.md`
- `.claude/commands/capture.md` - Knowledge capture command
- `.claude/commands/workflow.md` - Workflow executor
- First knowledge capture test (create dummy feature, run /capture)

**Result:** Working knowledge capture workflow

### Phase 3: Agents & Skills
**Goal:** Specialized AI behaviors

**Create:**
- `.ai/agents/code-reviewer.md`
- `.ai/agents/test-writer.md`
- `.ai/skills/generate-tests.md`
- `.ai/skills/update-changelog.md`
- `.claude/commands/agent.md` - Agent activator

**Result:** AI can adopt specialized roles

### Phase 4: Archetypes & Patterns
**Goal:** Reusable templates

**Create:**
- `.ai/archetypes/rest-api/` - REST API template
- `.ai/knowledge/patterns/error-handling.md`
- `.ai/knowledge/patterns/dependency-injection.md`

**Result:** Consistent project structure across features

### Phase 5: Refinement
**Goal:** Optimize based on usage

**Actions:**
- Add more workflows based on common tasks
- Expand patterns library
- Create more agent personas
- Optimize INDEX.md for faster navigation
- Add session summaries

**Result:** Mature, efficient knowledge system

---

## Success Metrics

### Quantitative
- **Discovery Time**: Time to find relevant info (target: < 30 seconds)
- **Search Reduction**: % reduction in full-repo searches (target: 70%+)
- **Knowledge Coverage**: % of features documented (target: 100%)
- **Index Hit Rate**: % of times AI finds answer in INDEX.md first (target: 60%+)

### Qualitative
- AI provides context-aware answers without asking clarifying questions
- New features follow established patterns automatically
- Code reviews reference project-specific standards
- Knowledge base grows organically with each feature

---

## Example: End-to-End Feature Addition

### Scenario: User asks "Add password reset feature"

**AI's Process:**

1. **Reads INDEX.md** → Knows this is an auth-related feature
2. **Checks NAVIGATION.md** → "For auth features, check .ai/knowledge/features/authentication.md"
3. **Reads authentication.md** → Understands current auth system (JWT-based)
4. **Checks .ai/workflows/add-feature.md** → Follows standard workflow
5. **Reviews .ai/knowledge/patterns/error-handling.md** → Uses project patterns
6. **Implements feature** following established patterns
7. **Writes tests** using `.ai/skills/generate-tests.md` template
8. **Runs /capture** command:
   - Analyzes git diff
   - Creates `.ai/knowledge/features/password-reset.md`
   - Updates `.ai/knowledge/features/authentication.md` (adds related link)
   - Updates `.ai/INDEX.md` with recent change
   - Creates `.ai/context/decisions/004-password-reset-token-strategy.md`
9. **Commits** with knowledge base updated

**Result:** Feature added with full knowledge capture, following project patterns, zero searches of full codebase.

---

## Maintenance & Evolution

### Weekly
- Review Recent Changes in INDEX.md
- Ensure all features from past week are captured
- Clean up old sessions in `.ai/sessions/`

### Monthly
- Review and consolidate similar patterns
- Update archetypes based on new patterns
- Add new workflows for repeated tasks
- Archive deprecated knowledge

### Quarterly
- Major INDEX.md reorganization if needed
- Update NAVIGATION.md with new question patterns
- Review success metrics
- Prune unused agents/skills

---

## Appendix: Sample File Contents

### Sample .ai/INDEX.md (Populated)

```markdown
# AI Knowledge Base Index

**Last Updated**: 2025-11-08
**Project Phase**: Active Development
**Features**: 5 implemented, 2 in progress
**Components**: 8 core components
**Patterns**: 12 documented patterns

## Start Here - New Session Checklist

### First Time?
1. Read [claude.md](../claude.md) - Project overview
2. Read [NAVIGATION.md](./NAVIGATION.md) - Where to find things
3. Read [architecture.md](./context/architecture.md) - System design

### Returning?
1. Check [Recent Changes](#recent-changes) below
2. Review active features in [knowledge/features/](./knowledge/features/)

## Quick Stats
- **Lines of Code**: ~5,200
- **Test Coverage**: 87%
- **Last Commit**: 2 hours ago
- **Active Branch**: main

## Recent Changes

### 2025-11-08
- ✅ **Added**: Password reset feature → [password-reset.md](./knowledge/features/password-reset.md)
- ✅ **Updated**: Authentication system → [authentication.md](./knowledge/features/authentication.md)
- 📝 **Decision**: Token-based reset strategy → [ADR-004](./context/decisions/004-password-reset-token-strategy.md)

### 2025-11-07
- 🔧 **Refactored**: Database connection pooling → [database-layer.md](./knowledge/components/database-layer.md)
- ✅ **Added**: Error handling pattern → [error-handling.md](./knowledge/patterns/error-handling.md)

### 2025-11-06
- ✅ **Added**: User management API → [user-management.md](./knowledge/features/user-management.md)
- 🧪 **Testing**: Improved integration test coverage to 85%

## Knowledge Map

### Features (5 implemented, 2 in progress)
- ✅ [User Authentication](./knowledge/features/authentication.md) - JWT-based auth
- ✅ [User Management](./knowledge/features/user-management.md) - CRUD operations
- ✅ [Password Reset](./knowledge/features/password-reset.md) - Token-based reset
- ✅ [Email Notifications](./knowledge/features/email-notifications.md) - SendGrid integration
- ✅ [Audit Logging](./knowledge/features/audit-logging.md) - User action tracking
- 🚧 [Two-Factor Auth](./knowledge/features/two-factor-auth.md) - In progress
- 📋 [OAuth Integration](./knowledge/features/oauth.md) - Planned

### Core Components (8)
- [API Gateway](./knowledge/components/api-gateway.md) - Express-based routing
- [Database Layer](./knowledge/components/database-layer.md) - PostgreSQL with TypeORM
- [Auth Middleware](./knowledge/components/auth-middleware.md) - JWT validation
- [Email Service](./knowledge/components/email-service.md) - SendGrid wrapper
- [Logger](./knowledge/components/logger.md) - Winston-based logging
- [Config Manager](./knowledge/components/config-manager.md) - Environment config
- [Error Handler](./knowledge/components/error-handler.md) - Global error handling
- [Validator](./knowledge/components/validator.md) - Input validation

### Patterns (12)
- [Error Handling](./knowledge/patterns/error-handling.md) - Standard error flows
- [Dependency Injection](./knowledge/patterns/dependency-injection.md) - Constructor injection
- [Repository Pattern](./knowledge/patterns/repository-pattern.md) - Data access abstraction
- [Service Layer](./knowledge/patterns/service-layer.md) - Business logic organization
- [Middleware Pattern](./knowledge/patterns/middleware-pattern.md) - Express middleware
- [DTO Pattern](./knowledge/patterns/dto-pattern.md) - Data transfer objects
- [Factory Pattern](./knowledge/patterns/factory-pattern.md) - Object creation
- [Singleton Pattern](./knowledge/patterns/singleton-pattern.md) - Config, logger
- [Observer Pattern](./knowledge/patterns/observer-pattern.md) - Event handling
- [Strategy Pattern](./knowledge/patterns/strategy-pattern.md) - Auth strategies
- [Decorator Pattern](./knowledge/patterns/decorator-pattern.md) - Route decorators
- [Builder Pattern](./knowledge/patterns/builder-pattern.md) - Query building

### Workflows (5 active)
- [Add Feature](./workflows/add-feature.md) - Standard feature development
- [Fix Bug](./workflows/fix-bug.md) - Bug resolution process
- [Refactor](./workflows/refactor.md) - Code improvement workflow
- [Add Test](./workflows/add-test.md) - Test creation process
- [Release](./workflows/release.md) - Release preparation

### Available Agents (4)
- [Code Reviewer](./agents/code-reviewer.md) - Code quality focus
- [Test Writer](./agents/test-writer.md) - Test generation specialist
- [Docs Writer](./agents/docs-writer.md) - Documentation expert
- [Security Auditor](./agents/security-auditor.md) - Security review

### Skills (6)
- [Generate Tests](./skills/generate-tests.md) - Test templates
- [Update Changelog](./skills/update-changelog.md) - Changelog management
- [Create Migration](./skills/create-migration.md) - DB migration patterns
- [API Documentation](./skills/api-documentation.md) - OpenAPI/Swagger docs
- [Error Messages](./skills/error-messages.md) - User-friendly error messages
- [Validation Rules](./skills/validation-rules.md) - Input validation

## Architecture Overview

**Type**: REST API Service
**Language**: TypeScript/Node.js
**Framework**: Express
**Database**: PostgreSQL
**ORM**: TypeORM
**Testing**: Jest
**Documentation**: See [architecture.md](./context/architecture.md)

## Key Decisions

1. [Choice of Framework](./context/decisions/001-choice-of-framework.md) - Why Express
2. [Database Selection](./context/decisions/002-database-selection.md) - Why PostgreSQL
3. [JWT vs Sessions](./context/decisions/003-jwt-vs-sessions.md) - Auth strategy
4. [Password Reset Tokens](./context/decisions/004-password-reset-token-strategy.md) - Token handling

## Project Status

### Current Focus
- Implementing Two-Factor Authentication
- Improving test coverage to 90%
- Adding OAuth support

### Upcoming
- API rate limiting
- Redis caching layer
- GraphQL endpoint

### Tech Debt
- Refactor user controller (too large)
- Add integration tests for email service
- Update dependencies (3 minor, 1 major)
```

---

## Next Steps for Implementation

Once you approve this plan, I will:

1. **Create the foundation** (Phase 1):
   - All directory structure
   - `claude.md` with full AI instructions
   - `.ai/INDEX.md` and `.ai/NAVIGATION.md`
   - Initial context files

2. **Implement `/capture` command** (Phase 2):
   - `.claude/commands/capture.md` with full workflow
   - Test it by creating a dummy feature
   - Validate it correctly generates knowledge files

3. **Add remaining workflows and commands**:
   - `/workflow`, `/agent`, `/ask` commands
   - Core workflow files

4. **Create initial agents and skills**:
   - Code reviewer, test writer agents
   - Test generation, changelog update skills

5. **Documentation**:
   - Add usage examples to README.md
   - Create getting-started guide

---

## Questions for You

Before implementing, please confirm:

1. **Directory name**: Is `.ai/` good, or prefer `.agentic/`, `.knowledge/`, or something else?
2. **Session tracking**: Should we track session history in `.ai/sessions/` or skip it?
3. **Archetypes**: What type of projects will you build? (REST APIs, CLIs, libraries, etc.)
4. **Workflows**: What are your most common tasks? (beyond add-feature, fix-bug)
5. **Integration**: Any specific tools besides Claude Code you want to ensure compatibility with?
6. **Tech stack**: What languages/frameworks will you primarily use?

This plan creates a self-improving knowledge system that gets smarter with every feature you build. The key innovation is the `/capture` command that makes knowledge accumulation automatic rather than manual.

Ready to proceed?
