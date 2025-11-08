#!/bin/bash
# Migrate existing project from copied preferences to symlinked preferences

TEMPLATE=/Users/davidmorgan/Documents/Repositories/agentic-workflows

echo "Migrating .ai/preferences to symlink..."

# Check if .ai/preferences exists
if [ ! -d ".ai/preferences" ]; then
    echo "❌ Error: .ai/preferences not found. Are you in a project with AI knowledge system?"
    exit 1
fi

# Remove copied preferences
echo "Removing copied preferences..."
rm -rf .ai/preferences

# Create symlink
echo "Creating symlink to template..."
ln -s $TEMPLATE/.ai/preferences .ai/preferences

# Verify
if [ -L ".ai/preferences" ]; then
    echo "✅ Success! .ai/preferences now links to template"
    echo ""
    echo "Verify: ls -la .ai/preferences"
    echo "Next: git add .ai/preferences && git commit -m 'Link preferences to template'"
else
    echo "❌ Error: Failed to create symlink"
    exit 1
fi
