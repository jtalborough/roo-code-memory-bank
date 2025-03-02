# Cline-Rules Package Directory Structure

This document provides an overview of the directory structure for both the NPM and NuGet packages.

## NPM Package Structure

```
cline-rules/
├── .npmignore                # Excludes unnecessary files from the package
├── CHECKLIST.md              # Implementation checklist
├── DIRECTORY-STRUCTURE.md    # This file
├── DOCUMENTATION.md          # Comprehensive documentation
├── IMPLEMENTATION.md         # Implementation details
├── LICENSE                   # MIT license
├── QUICK-START.md            # Simplified instructions
├── README.md                 # Basic usage information
├── SUMMARY.md                # Complete overview
├── index.js                  # Package entry point
├── package.json              # Package metadata and dependencies
├── publish-package.sh        # Script for publishing the package
├── sample/                   # Sample configuration files
│   ├── .clinerules-sample    # Sample configuration file
│   └── .roo/                 # Sample .roo directory
│       └── system-prompt-sample  # Sample system prompt file
└── scripts/
    └── extract-config.js     # Extraction script for config files
```

## NuGet Package Structure

```
cline-rules-nuget/
├── ClinerRules.nuspec        # NuGet package specification
├── README.md                 # Installation and usage instructions
├── build-package.ps1         # Script for building and publishing the package
├── build/                    # MSBuild files
│   └── ClinerRules.targets   # MSBuild targets for extraction
└── content/                  # Content files (created during build)
    ├── .clinerules-*         # Configuration files
    └── .roo/                 # .roo directory
        └── *                 # System prompt files
```

## Installed Files Structure

After installation, the following files and directories will be extracted to the root of your project:

```
your-project/
├── .clinerules-architect     # Configuration for Architect mode
├── .clinerules-ask           # Configuration for Ask mode
├── .clinerules-code          # Configuration for Code mode
├── .clinerules-commit        # Configuration for Commit mode
├── .clinerules-debug         # Configuration for Debug mode
└── .roo/                     # Directory containing system prompts
    ├── system-prompt-architect  # System prompt for Architect mode
    ├── system-prompt-ask        # System prompt for Ask mode
    ├── system-prompt-code       # System prompt for Code mode
    ├── system-prompt-commit     # System prompt for Commit mode
    └── system-prompt-debug      # System prompt for Debug mode
```

## Backup Files

If any of these files already exist in your project, they will be backed up with a timestamp suffix:

```
your-project/
├── .clinerules-architect.backup-1709402284000
├── .clinerules-ask.backup-1709402284000
└── .roo/
    └── system-prompt-architect.backup-1709402284000
```

## Package Development Structure

When developing the package, you may also see these additional directories:

```
cline-rules/
├── node_modules/            # NPM dependencies (not included in the package)
├── dist/                    # Build output (not included in the package)
└── *.tgz                    # Packed NPM package (not included in the package)

cline-rules-nuget/
└── dist/                    # Build output (not included in the package)
    └── ClinerRules.*.nupkg  # Packed NuGet package
```

## Source Control Structure

When committing to source control, consider this structure:

```
repository-root/
├── cline-rules/             # NPM package source
├── cline-rules-nuget/       # NuGet package source
├── memory-bank/             # Memory Bank files
│   ├── activeContext.md
│   ├── decisionLog.md
│   ├── productContext.md
│   ├── progress.md
│   └── tasks/
│       └── cline-rules-package.md
├── .gitignore               # Git ignore file
└── README.md                # Repository README