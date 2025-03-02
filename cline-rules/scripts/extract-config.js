#!/usr/bin/env node

/**
 * Cline-Rules Config Extraction Script
 * 
 * This script extracts configuration files from the cline-rules package
 * to the root of the consuming project during installation.
 */

const fs = require('fs-extra');
const path = require('path');

// Determine package root and project root
const packageRoot = path.resolve(__dirname, '..');
const projectRoot = process.env.INIT_CWD || process.cwd();

// Skip extraction if running in a CI environment or as a dependency of another package
if (process.env.CI || packageRoot === projectRoot) {
  console.log('Skipping config extraction in CI environment or when installing as a dependency.');
  process.exit(0);
}

console.log('Extracting cline-rules configuration files...');

// Files and directories to extract
const filesToExtract = [
  '.clinerules-architect',
  '.clinerules-ask',
  '.clinerules-code',
  '.clinerules-commit',
  '.clinerules-debug'
];

const dirsToExtract = [
  '.roo'
];

// Function to extract a file with conflict handling
async function extractFile(sourceFile, targetFile) {
  try {
    // Check if target file already exists
    const exists = await fs.pathExists(targetFile);
    
    if (exists) {
      // Read both files to compare
      const sourceContent = await fs.readFile(sourceFile, 'utf8');
      const targetContent = await fs.readFile(targetFile, 'utf8');
      
      // If files are identical, skip
      if (sourceContent === targetContent) {
        console.log(`Skipping identical file: ${path.basename(targetFile)}`);
        return;
      }
      
      // Create backup of existing file
      const backupFile = `${targetFile}.backup-${Date.now()}`;
      await fs.copy(targetFile, backupFile);
      console.log(`Created backup of existing file: ${path.basename(backupFile)}`);
    }
    
    // Copy the file
    await fs.copy(sourceFile, targetFile, { overwrite: true });
    console.log(`Extracted: ${path.basename(targetFile)}`);
  } catch (err) {
    console.error(`Error extracting ${path.basename(sourceFile)}: ${err.message}`);
  }
}

// Function to extract a directory with conflict handling
async function extractDir(sourceDir, targetDir) {
  try {
    // Check if target directory exists
    const exists = await fs.pathExists(targetDir);
    
    if (exists) {
      console.log(`Directory already exists: ${targetDir}`);
      
      // Copy files individually to handle conflicts
      const files = await fs.readdir(sourceDir, { withFileTypes: true });
      
      for (const file of files) {
        const sourcePath = path.join(sourceDir, file.name);
        const targetPath = path.join(targetDir, file.name);
        
        if (file.isDirectory()) {
          await extractDir(sourcePath, targetPath);
        } else {
          await extractFile(sourcePath, targetPath);
        }
      }
    } else {
      // Directory doesn't exist, copy the whole directory
      await fs.copy(sourceDir, targetDir);
      console.log(`Extracted directory: ${path.basename(targetDir)}`);
    }
  } catch (err) {
    console.error(`Error extracting directory ${path.basename(sourceDir)}: ${err.message}`);
  }
}

// Main extraction process
async function extractConfigs() {
  try {
    // Extract individual files
    for (const file of filesToExtract) {
      const sourceFile = path.join(packageRoot, file);
      const targetFile = path.join(projectRoot, file);
      
      // Check if source file exists
      if (await fs.pathExists(sourceFile)) {
        await extractFile(sourceFile, targetFile);
      } else {
        console.warn(`Source file not found: ${file}`);
      }
    }
    
    // Extract directories
    for (const dir of dirsToExtract) {
      const sourceDir = path.join(packageRoot, dir);
      const targetDir = path.join(projectRoot, dir);
      
      // Check if source directory exists
      if (await fs.pathExists(sourceDir)) {
        await extractDir(sourceDir, targetDir);
      } else {
        console.warn(`Source directory not found: ${dir}`);
      }
    }
    
    console.log('Configuration extraction completed successfully.');
  } catch (err) {
    console.error(`Error during extraction: ${err.message}`);
    process.exit(1);
  }
}

// Run the extraction
extractConfigs();