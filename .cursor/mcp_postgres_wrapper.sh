#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"

# Load POSTGRES_URL from .env.local file
if [ -f "$PROJECT_ROOT/.env.local" ]; then
    # Extract PostgreSQL URL from .env.local
    POSTGRES_URL=$(grep -E "^POSTGRES_URL=" "$PROJECT_ROOT/.env.local" | cut -d '=' -f2- | tr -d "'" | tr -d '"')
    
    # Check if POSTGRES_URL is defined
    if [ -z "$POSTGRES_URL" ]; then
        echo "Error: POSTGRES_URL not found in .env.local"
        exit 1
    fi
else
    echo "Error: .env.local file not found at $PROJECT_ROOT/.env.local"
    exit 1
fi

# Print connection info for debugging
echo "Connecting to PostgreSQL using URL from .env.local"
echo "POSTGRES_URL found"

# Run the MCP server for PostgreSQL
exec npx -y @modelcontextprotocol/server-postgres "$POSTGRES_URL" 