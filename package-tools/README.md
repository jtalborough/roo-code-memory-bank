# Roo Code Memory Bank Package Tools

This directory contains implementations for distributing Cline configuration files as packages for both NPM (JavaScript/Node.js) and NuGet (.NET) ecosystems. These packages automatically extract configuration files to the root of consuming projects during installation or build.

## Overview

The configuration files include:
- `.clinerules-*` files: Configuration files for different Cline modes
- `.roo/` directory: System prompt files and other Cline-related configurations

## Package Implementations

### NPM Package (`npm-package/`)

The NPM package uses a postinstall script to extract configuration files from the repository root to the root of the consuming project during installation.

Key features:
- Automatic extraction during `npm install`
- Manual extraction via `npx cline-rules-extract`
- Extracts files directly from the repository root
- Preserves existing files to avoid overwriting local modifications

See the [NPM package README](npm-package/README.md) for detailed instructions.

### NuGet Package (`nuget-package/`)

The NuGet package uses MSBuild targets to extract configuration files to the root of the consuming project during build.

Key features:
- Automatic extraction during project build
- Integration with MSBuild pipeline
- Preserves existing files to avoid overwriting local modifications

See the [NuGet package README](nuget-package/README.md) for detailed instructions.

## Choosing the Right Package

- **For JavaScript/TypeScript/Node.js projects**: Use the NPM package (`@automateeverything.cc/roo-code-memory-bank`)
- **For .NET/C# projects**: Use the NuGet package (`RooCodeMemoryBank`)

## Updating Configuration Files

When updating the configuration files:

1. Update the files in the repository root
2. Increment the version number according to semantic versioning:
   - **Patch version** (1.0.x): For minor changes or corrections
   - **Minor version** (1.x.0): For new features or non-breaking changes
   - **Major version** (x.0.0): For breaking changes

3. Publish both packages to their respective repositories

## Development Workflow

1. Make changes to configuration files in the repository root
2. Test the packages locally
3. Update version numbers
4. Publish the packages (manually or via GitHub Actions)
5. Update documentation as needed

## Continuous Integration and Deployment

This repository includes GitHub Actions workflows for automated building, testing, and publishing of both packages:

- **Main Workflow** (`.github/workflows/build-packages.yml`): Runs on main branch, pull requests, and releases
- **Development Workflow** (`.github/workflows/dev-builds.yml`): Runs on all branches except main

These workflows provide:

- **Continuous Integration**: Builds and tests both packages on multiple operating systems and runtime versions
- **Artifact Generation**: Creates package artifacts for each build configuration
- **Automated Publishing**: Publishes packages to NPM and NuGet when a GitHub release is created
- **Documentation Updates**: Automatically updates version references in documentation files

## Build Types

Different build types are available:

- **Release builds**: When a GitHub release is created (tag: latest)
- **Beta builds**: When code is pushed to the main branch (tag: beta)
- **Nightly builds**: From daily scheduled runs (tag: nightly)
- **PR builds**: When a PR is opened against main (tag: pr-{number})
- **Branch builds**: When code is pushed to non-main branches (tag: dev-{branch-name})

## Publishing

To use the GitHub Actions workflow for publishing:

1. Set up the required secrets in your GitHub repository:
   - `NPM_TOKEN`: Your NPM authentication token
   - `NUGET_API_KEY`: Your NuGet API key

2. Create a new release in GitHub with the appropriate version tag (e.g., `v1.0.0`)

3. The workflow will automatically build, test, and publish both packages to their respective registries

The workflows run automatically on:
- Push to any branch (development builds via dev-builds.yml)
- Push to main branch (via build-packages.yml)
- Pull requests to the main branch (via build-packages.yml)
- Creation of a new release (via build-packages.yml)

## License

MIT