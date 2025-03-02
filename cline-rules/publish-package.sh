#!/bin/bash
# Script to publish the cline-rules NPM package

# Set default values
VERSION=""
DRY_RUN=false
TAG="latest"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --version|-v)
      VERSION="$2"
      shift 2
      ;;
    --dry-run|-d)
      DRY_RUN=true
      shift
      ;;
    --tag|-t)
      TAG="$2"
      shift 2
      ;;
    --help|-h)
      echo "Usage: $0 [options]"
      echo "Options:"
      echo "  --version, -v VERSION   Set package version (required)"
      echo "  --dry-run, -d           Perform a dry run without publishing"
      echo "  --tag, -t TAG           Set npm tag (default: latest)"
      echo "  --help, -h              Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Use --help for usage information"
      exit 1
      ;;
  esac
done

# Check if version is provided
if [ -z "$VERSION" ]; then
  echo "Error: Version is required"
  echo "Use --help for usage information"
  exit 1
fi

# Update version in package.json
echo "Updating version to $VERSION in package.json..."
npm version $VERSION --no-git-tag-version

# Install dependencies
echo "Installing dependencies..."
npm install

# Build package (if needed)
# echo "Building package..."
# npm run build

# Create package
echo "Creating package..."
npm pack

# Publish package
if [ "$DRY_RUN" = true ]; then
  echo "Dry run: Would publish cline-rules-$VERSION.tgz with tag $TAG"
else
  echo "Publishing package with tag $TAG..."
  npm publish cline-rules-$VERSION.tgz --tag $TAG
  
  if [ $? -eq 0 ]; then
    echo "Package published successfully!"
  else
    echo "Failed to publish package"
    exit 1
  fi
fi

echo "Done!"