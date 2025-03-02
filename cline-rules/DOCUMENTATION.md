# Cline-Rules Package Documentation

This document provides comprehensive information about the Cline-Rules package, including installation, usage, versioning, and troubleshooting for both NPM and NuGet ecosystems.

## Table of Contents

1. [Overview](#overview)
2. [NPM Package](#npm-package)
   - [Installation](#npm-installation)
   - [Publishing](#npm-publishing)
   - [Updating](#npm-updating)
3. [NuGet Package](#nuget-package)
   - [Installation](#nuget-installation)
   - [Publishing](#nuget-publishing)
   - [Updating](#nuget-updating)
4. [Configuration Files](#configuration-files)
5. [Versioning Strategy](#versioning-strategy)
6. [Conflict Resolution](#conflict-resolution)
7. [Troubleshooting](#troubleshooting)

## Overview

The Cline-Rules package contains configuration files (`.clinerules-*`) and the `.roo` directory that define the behavior of Roo's CLI assistant modes. These files are automatically extracted to the root of your project during installation or build.

## NPM Package

### NPM Installation

To install the NPM package:

```bash
npm install --save-dev cline-rules
```

The configuration files will be automatically extracted to your project root during installation via the `postinstall` script.

### NPM Publishing

To publish a new version of the NPM package:

1. Update the version in `package.json`
2. Update the configuration files as needed
3. Run the following commands:

```bash
# Login to npm (if not already logged in)
npm login

# Publish the package
npm publish
```

### NPM Updating

To update to the latest version of the NPM package:

```bash
npm update cline-rules
```

Or to update to a specific version:

```bash
npm install --save-dev cline-rules@x.y.z
```

## NuGet Package

### NuGet Installation

To install the NuGet package:

Using Package Manager Console:
```powershell
Install-Package ClinerRules
```

Using .NET CLI:
```bash
dotnet add package ClinerRules
```

The configuration files will be automatically extracted to your project root during build via MSBuild targets.

### NuGet Publishing

To publish a new version of the NuGet package:

1. Update the version in `ClinerRules.nuspec`
2. Update the configuration files as needed
3. Run the following commands:

```bash
# Pack the NuGet package
nuget pack ClinerRules.nuspec

# Push the package to NuGet.org
nuget push ClinerRules.x.y.z.nupkg -Source https://api.nuget.org/v3/index.json -ApiKey YOUR_API_KEY
```

### NuGet Updating

To update to the latest version of the NuGet package:

Using Package Manager Console:
```powershell
Update-Package ClinerRules
```

Using .NET CLI:
```bash
dotnet add package ClinerRules --version x.y.z
```

## Configuration Files

The following files and directories are included in the package:

- `.clinerules-architect` - Configuration for Architect mode
- `.clinerules-ask` - Configuration for Ask mode
- `.clinerules-code` - Configuration for Code mode
- `.clinerules-commit` - Configuration for Commit mode
- `.clinerules-debug` - Configuration for Debug mode
- `.roo/` - Directory containing system prompts and other configuration files

## Versioning Strategy

This package follows semantic versioning:

- **Major version** changes indicate breaking changes to the configuration format
- **Minor version** changes indicate new features or enhancements
- **Patch version** changes indicate bug fixes or minor updates

When updating the package, consider the following guidelines:

1. **Major Version Changes (1.0.0 → 2.0.0)**
   - Breaking changes to configuration format
   - Removal of configuration files
   - Significant changes to system prompts that alter behavior

2. **Minor Version Changes (1.0.0 → 1.1.0)**
   - Addition of new configuration files
   - New features in existing configuration files
   - Non-breaking enhancements to system prompts

3. **Patch Version Changes (1.0.0 → 1.0.1)**
   - Bug fixes in configuration files
   - Minor text corrections
   - Performance improvements

## Conflict Resolution

Both the NPM and NuGet packages include conflict resolution mechanisms:

1. **File Backup**
   - Existing files are backed up with a timestamp suffix before being overwritten
   - Example: `.clinerules-code.backup-1709402284000`

2. **Directory Handling**
   - For the `.roo` directory, individual files are copied to preserve existing files not included in the package
   - Conflicting files are backed up before being overwritten

3. **Manual Resolution**
   - If automatic conflict resolution fails, you can manually copy the files from the package to your project root
   - NPM: Files are located in `node_modules/cline-rules/`
   - NuGet: Files are located in the package content directory (typically in the `packages` folder)

## Troubleshooting

### NPM Package Issues

1. **Extraction Fails During Installation**
   - Check if the `postinstall` script is being skipped (e.g., in CI environments)
   - Try running `node node_modules/cline-rules/scripts/extract-config.js` manually

2. **Permission Issues**
   - Ensure you have write permissions to your project root
   - Try running npm with elevated privileges (not recommended for security reasons)

3. **Files Not Updated After Update**
   - Delete the `node_modules/cline-rules` directory and reinstall
   - Check if the files were backed up instead of overwritten

### NuGet Package Issues

1. **Files Not Extracted During Build**
   - Check if the MSBuild target is being executed
   - Try cleaning and rebuilding the project
   - Check the build output for any error messages

2. **Permission Issues**
   - Ensure you have write permissions to your project root
   - Try running Visual Studio or MSBuild with elevated privileges

3. **Files Not Updated After Update**
   - Clean the project and rebuild
   - Check if the files were backed up instead of overwritten