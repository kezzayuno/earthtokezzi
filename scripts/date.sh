#!/bin/bash

# This script updates date to the last edited.

DOCS_DIR = "src/pages"

# Find all the markdown files
find "$DOCS_DIR" -type f -name "*.md" | while read file; do
    # Get the last updated date from Git for the file 
    LAST_UPDATED_DATE = $(git log -1 --format="%ad" --date=iso "$file" || echo "Untracked file")
    
    # Check if the file is untracked 
    if [ "$LAST_UPDATED_DATE" == "Untracked file" ]; then
        echo "Skipping untracked file: $file."
        continue
    fi

    # Check if the file already has a 'date' field
    if grep -q "^date:" "$file"; then
        # Update the existing 'date' field
        sed -i '' "s/^date: .*/date: \"$LAST_UPDATED\"/" "$file"
    else
        # Or, add a new 'date' field
        sed -i '' "1s/^/date: \"$LAST_UPDATED\"\n/" "$file"
    fi

    echo "Updated date for $file to $LAST_UPDATED_DATE."
done

