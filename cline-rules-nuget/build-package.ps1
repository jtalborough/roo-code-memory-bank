# Build-Package.ps1
# PowerShell script to build the ClinerRules NuGet package

# Parameters
param(
    [string]$Version = "1.0.0",
    [string]$OutputDir = ".\dist",
    [switch]$Publish = $false,
    [string]$ApiKey = "",
    [string]$Source = "https://api.nuget.org/v3/index.json"
)

# Ensure output directory exists
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
    Write-Host "Created output directory: $OutputDir"
}

# Update version in nuspec file
$nuspecPath = ".\ClinerRules.nuspec"
$nuspec = [xml](Get-Content $nuspecPath)
$nuspec.package.metadata.version = $Version
$nuspec.Save($nuspecPath)
Write-Host "Updated version in nuspec file to $Version"

# Copy sample files to content directory for packaging
$contentDir = ".\content"
if (-not (Test-Path $contentDir)) {
    New-Item -ItemType Directory -Path $contentDir | Out-Null
    Write-Host "Created content directory: $contentDir"
}

# Copy .clinerules-* files
$clinerulesSrcDir = "..\cline-rules\sample"
$clinerulesDstDir = "$contentDir"
if (Test-Path $clinerulesSrcDir) {
    if (-not (Test-Path $clinerulesDstDir)) {
        New-Item -ItemType Directory -Path $clinerulesDstDir | Out-Null
    }
    Copy-Item -Path "$clinerulesSrcDir\*" -Destination $clinerulesDstDir -Recurse -Force
    Write-Host "Copied sample files to content directory"
}

# Copy .roo directory
$rooSrcDir = "..\cline-rules\sample\.roo"
$rooDstDir = "$contentDir\.roo"
if (Test-Path $rooSrcDir) {
    if (-not (Test-Path $rooDstDir)) {
        New-Item -ItemType Directory -Path $rooDstDir | Out-Null
    }
    Copy-Item -Path "$rooSrcDir\*" -Destination $rooDstDir -Recurse -Force
    Write-Host "Copied .roo directory to content directory"
}

# Build the package
$packagePath = "$OutputDir\ClinerRules.$Version.nupkg"
& nuget pack $nuspecPath -OutputDirectory $OutputDir
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to build NuGet package"
    exit 1
}
Write-Host "Built NuGet package: $packagePath"

# Publish the package if requested
if ($Publish) {
    if ([string]::IsNullOrEmpty($ApiKey)) {
        Write-Error "API key is required for publishing"
        exit 1
    }
    
    & nuget push $packagePath -ApiKey $ApiKey -Source $Source
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to publish NuGet package"
        exit 1
    }
    Write-Host "Published NuGet package to $Source"
}

Write-Host "Package build completed successfully"