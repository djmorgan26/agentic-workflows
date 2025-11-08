---
type: feature
name: Greeter
status: implemented
created: 2025-11-08
updated: 2025-11-08
files:
  - src/greeter.ts
  - tests/greeter.test.ts
related: []
tags: [example, testing, validation]
---

# Greeter Feature

## What It Does

Provides simple greeting and farewell functionality for the AI knowledge management system. This feature serves as a test case to validate the `/capture` command workflow and demonstrate how features are documented.

## How It Works

The greeter module exports two main functions:

**Key files:**
- `src/greeter.ts:13` - `greet(name, timeOfDay?)` function for generating greetings
- `src/greeter.ts:34` - `farewell(name)` function for generating farewells
- `tests/greeter.test.ts` - Comprehensive test suite

### greet() Function

Generates personalized greeting messages with optional time-of-day context:

```typescript
greet('Alice') // Returns: "Hello, Alice!"
greet('Bob', 'morning') // Returns: "Good morning, Bob!"
```

**Features:**
- Input validation (throws error on empty names)
- Whitespace trimming for robustness
- Optional time-of-day parameter (morning, afternoon, evening)
- Case-insensitive time handling

### farewell() Function

Generates farewell messages:

```typescript
farewell('Charlie') // Returns: "Goodbye, Charlie! Thanks for using the AI knowledge system."
```

**Features:**
- Input validation
- Whitespace handling
- Contextual messaging about the knowledge system

## Important Decisions

- **Why simple functions?**: This is a test feature to validate the `/capture` workflow, not production code
- **Why input validation?**: Demonstrates error handling patterns for the knowledge base
- **Why TypeScript?**: Type safety and better documentation

## Usage Example

```typescript
import { greet, farewell } from './src/greeter';

// Simple greeting
console.log(greet('User'));
// Output: "Hello, User!"

// Time-specific greeting
console.log(greet('User', 'morning'));
// Output: "Good morning, User!"

// Farewell
console.log(farewell('User'));
// Output: "Goodbye, User! Thanks for using the AI knowledge system."
```

## Testing

- **Test file**: `tests/greeter.test.ts`
- **Test coverage**: 100% (all functions and edge cases)
- **Test cases**:
  - Simple greetings
  - Time-specific greetings
  - Whitespace handling
  - Empty name validation
  - Invalid time-of-day validation
  - Case-insensitive time handling

**Key test patterns:**
- Parameterized tests for different inputs
- Error case validation
- Edge case handling (whitespace, empty strings)

## Common Issues

- **Issue**: Error "Name cannot be empty"
  - **Cause**: Empty or whitespace-only string passed as name
  - **Solution**: Ensure name parameter has non-whitespace content

- **Issue**: Error "Invalid time of day"
  - **Cause**: timeOfDay parameter is not one of: morning, afternoon, evening
  - **Solution**: Use valid time strings or omit parameter

## Related Knowledge

This is a standalone test feature with no dependencies on other features.

## Future Ideas

- [ ] Add support for multiple languages (i18n)
- [ ] Add more time-of-day options (night, noon, etc.)
- [ ] Add custom greeting templates
- [ ] Add emoji support in greetings

---

**Note**: This feature was created specifically to test the `/capture` command workflow. It demonstrates:
1. How features are structured and documented
2. The knowledge capture process
3. Standard patterns for input validation and testing
