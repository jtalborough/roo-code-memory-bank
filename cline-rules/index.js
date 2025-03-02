/**
 * Cline-Rules
 * 
 * This package contains configuration files for Roo's CLI assistant.
 * The actual functionality is in the postinstall script that extracts
 * the configuration files to the project root.
 * 
 * This file exists primarily to provide a main entry point for the package,
 * but it doesn't contain any runtime functionality.
 */

// Export the package version
exports.version = require('./package.json').version;

// Export a function to get the paths of the configuration files
exports.getConfigFilePaths = function() {
  return [
    '.clinerules-architect',
    '.clinerules-ask',
    '.clinerules-code',
    '.clinerules-commit',
    '.clinerules-debug'
  ];
};

// Export a function to get the paths of the configuration directories
exports.getConfigDirPaths = function() {
  return [
    '.roo'
  ];
};