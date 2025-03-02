# ClinerRules

Configuration files for Roo's CLI assistant.

## Overview

This package contains configuration files (`.clinerules-*`) and the `.roo` directory that define the behavior of Roo's CLI assistant modes. When installed, these files are automatically extracted to the root of your project.

## Installation

### NuGet

```bash
Install-Package ClinerRules
```

Or using the .NET CLI:

```bash
dotnet add package ClinerRules
```

The configuration files will be automatically extracted to your project root during build.

## What Gets Installed

The following files and directories will be extracted to your project root:

- `.clinerules-architect` - Configuration for Architect mode
- `.clinerules-ask` - Configuration for Ask mode
- `.clinerules-code` - Configuration for Code mode
- `.clinerules-commit` - Configuration for Commit mode
- `.clinerules-debug` - Configuration for Debug mode
- `.roo/` - Directory containing system prompts and other configuration files

## Conflict Handling

If any of these files already exist in your project:

1. The existing file will be backed up with a timestamp suffix (e.g., `.clinerules-code.backup-637809123456789000`)
2. The new file will be extracted, replacing the existing one

## Updating

To update to the latest configuration files:

```bash
Update-Package ClinerRules
```

Or using the .NET CLI:

```bash
dotnet add package ClinerRules --version x.y.z
```

This will install the specified version of the package and extract the updated configuration files during the next build.

## Versioning

This package follows semantic versioning:

- **Major version** changes indicate breaking changes to the configuration format
- **Minor version** changes indicate new features or enhancements
- **Patch version** changes indicate bug fixes or minor updates

When updating, check the release notes for any breaking changes.

## Manual Installation

If the automatic extraction fails or you need to manually install the files:

1. Install the package: `Install-Package ClinerRules`
2. Navigate to the package content directory (typically in the `packages` folder)
3. Copy the `.clinerules-*` files and `.roo` directory to your project root

## License

MIT