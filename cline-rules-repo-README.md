# Cline-Rules

Configuration files for Roo's CLI assistant, packaged for both NPM and NuGet ecosystems.

## Repository Structure

This repository contains the implementation of the Cline-Rules package for both NPM and NuGet:

- `cline-rules/`: NPM package implementation
- `cline-rules-nuget/`: NuGet package implementation
- `memory-bank/`: Memory Bank files for project tracking

## Package Overview

The Cline-Rules package provides a mechanism for distributing configuration files (`.clinerules-*`) and the `.roo` directory to consuming projects. These files define the behavior of Roo's CLI assistant modes.

Key features:

- Automatic extraction of configuration files to project root
- Support for both NPM and NuGet ecosystems
- Robust conflict resolution
- Comprehensive documentation

## NPM Package

### Installation

```bash
npm install --save-dev cline-rules
```

The configuration files will be automatically extracted to your project root during installation.

### Documentation

- [README.md](./cline-rules/README.md): Basic usage information
- [DOCUMENTATION.md](./cline-rules/DOCUMENTATION.md): Comprehensive documentation
- [QUICK-START.md](./cline-rules/QUICK-START.md): Simplified instructions
- [IMPLEMENTATION.md](./cline-rules/IMPLEMENTATION.md): Implementation details
- [DIRECTORY-STRUCTURE.md](./cline-rules/DIRECTORY-STRUCTURE.md): Directory structure overview
- [SUMMARY.md](./cline-rules/SUMMARY.md): Complete overview
- [CHECKLIST.md](./cline-rules/CHECKLIST.md): Implementation checklist

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

The configuration files will be automatically extracted to your project root during build.

### Documentation

- [README.md](./cline-rules-nuget/README.md): Installation and usage instructions

## Development

### Building the NPM Package

```bash
cd cline-rules
./publish-package.sh --version 1.0.0 --dry-run
```

### Building the NuGet Package

```powershell
cd cline-rules-nuget
./build-package.ps1 -Version 1.0.0
```

## Memory Bank

The Memory Bank contains project tracking information:

- [activeContext.md](./memory-bank/activeContext.md): Current session context
- [productContext.md](./memory-bank/productContext.md): Project overview
- [progress.md](./memory-bank/progress.md): Progress tracking
- [decisionLog.md](./memory-bank/decisionLog.md): Decision logging
- [tasks/cline-rules-package.md](./memory-bank/tasks/cline-rules-package.md): Task list

## License

MIT