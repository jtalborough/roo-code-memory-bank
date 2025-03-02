 # Cline-Rules Quick Start Guide

This guide provides quick instructions for installing and using the Cline-Rules package in your projects.

## NPM Package

### Installation

```bash
npm install --save-dev cline-rules
```

The configuration files will be automatically extracted to your project root during installation.

### Verification

After installation, you should see the following files in your project root:

- `.clinerules-architect`
- `.clinerules-ask`
- `.clinerules-code`
- `.clinerules-commit`
- `.clinerules-debug`
- `.roo/` directory with system prompt files

### Updating

```bash
npm update cline-rules
```

## NuGet Package

### Installation

Using Package Manager Console:
```powershell
Install-Package ClinerRules
```

Using .NET CLI:
```bash
dotnet add package ClinerRules
```

The configuration files will be automatically extracted to your project root during the next build.

### Verification

After building your project, you should see the following files in your project root:

- `.clinerules-architect`
- `.clinerules-ask`
- `.clinerules-code`
- `.clinerules-commit`
- `.clinerules-debug`
- `.roo/` directory with system prompt files

### Updating

Using Package Manager Console:
```powershell
Update-Package ClinerRules
```

Using .NET CLI:
```bash
dotnet add package ClinerRules --version x.y.z
```

## Common Issues

### Files Not Extracted

**NPM:**
- Try running `node node_modules/cline-rules/scripts/extract-config.js` manually
- Check if you have write permissions to your project root

**NuGet:**
- Try cleaning and rebuilding your project
- Check if you have write permissions to your project root

### Conflicts with Existing Files

Both packages create backups of existing files before overwriting them. Look for files with `.backup-` suffix.

## Next Steps

For more detailed information, refer to:

- [README.md](./README.md) - Basic usage information
- [DOCUMENTATION.md](./DOCUMENTATION.md) - Comprehensive documentation
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Implementation details