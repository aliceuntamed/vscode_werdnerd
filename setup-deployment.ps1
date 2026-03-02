# Deployment Pipeline Setup Script (PowerShell)
# This script helps configure the deployment pipeline for your app

$ErrorActionPreference = "Stop"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Werdnerd Deployment Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check prerequisites
Write-Host "Checking prerequisites..." -ForegroundColor Yellow

$dockerInstalled = $null -ne (Get-Command docker -ErrorAction SilentlyContinue)
if (-not $dockerInstalled) {
    Write-Host "❌ Docker is not installed. Please install Docker first." -ForegroundColor Red
    exit 1
}

Write-Host "✓ Docker is installed" -ForegroundColor Green
Write-Host ""

# 1. Generate SSH keys if they don't exist
Write-Host "Step 1: SSH Key Generation" -ForegroundColor Yellow
Write-Host "==========================" -ForegroundColor Yellow
Write-Host ""

if (-not (Test-Path ".deploy")) {
    New-Item -ItemType Directory -Path ".deploy" -Force | Out-Null
}

if (-not (Test-Path ".deploy/staging_key")) {
    Write-Host "Generating SSH keys for deployments..." -ForegroundColor Yellow
    
    # Using ssh-keygen if available, otherwise guide user
    $sshKeygenExists = $null -ne (Get-Command ssh-keygen -ErrorAction SilentlyContinue)
    
    if ($sshKeygenExists) {
        ssh-keygen -t ed25519 -f ".deploy/staging_key" -N "" -C "staging deployment key"
        ssh-keygen -t ed25519 -f ".deploy/production_key" -N "" -C "production deployment key"
        Write-Host ""
        Write-Host "✓ SSH keys generated in .deploy/ directory" -ForegroundColor Green
        Write-Host ""
        Write-Host "📋 Add these public keys to your servers:" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Staging server (.ssh/authorized_keys):" -ForegroundColor Yellow
        Get-Content ".deploy/staging_key.pub"
        Write-Host ""
        Write-Host "Production server (.ssh/authorized_keys):" -ForegroundColor Yellow
        Get-Content ".deploy/production_key.pub"
    } else {
        Write-Host "⚠️  ssh-keygen not found. Please generate SSH keys manually:" -ForegroundColor Yellow
        Write-Host "  1. Install Git for Windows (includes ssh-keygen)"
        Write-Host "  2. Run: ssh-keygen -t ed25519 -f .deploy/staging_key -N \"\""
        Write-Host "  3. Run: ssh-keygen -t ed25519 -f .deploy/production_key -N \"\""
    }
    Write-Host ""
} else {
    Write-Host "✓ SSH keys already exist in .deploy/" -ForegroundColor Green
}

Write-Host ""
Read-Host "Press Enter after adding public keys to your servers"
Write-Host ""

# 2. Create environment files
Write-Host "Step 2: Environment Configuration" -ForegroundColor Yellow
Write-Host "==================================" -ForegroundColor Yellow
Write-Host ""

if (-not (Test-Path ".env.staging")) {
    Write-Host "Creating .env.staging..." -ForegroundColor Yellow
    Copy-Item ".env.staging.example" ".env.staging"
    Write-Host "❌ Please edit .env.staging with your staging Supabase credentials" -ForegroundColor Red
} else {
    Write-Host "✓ .env.staging exists" -ForegroundColor Green
}

if (-not (Test-Path ".env.production")) {
    Write-Host "Creating .env.production..." -ForegroundColor Yellow
    Copy-Item ".env.production.example" ".env.production"
    Write-Host "❌ Please edit .env.production with your production Supabase credentials" -ForegroundColor Red
} else {
    Write-Host "✓ .env.production exists" -ForegroundColor Green
}

Write-Host ""

# 3. Ask for configuration values
Write-Host "Step 3: Configure Deployment Settings" -ForegroundColor Yellow
Write-Host "=====================================" -ForegroundColor Yellow
Write-Host ""

$githubUser = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your GitHub repository name (e.g., werdnerd)"
$stagingHost = Read-Host "Enter your staging server IP/hostname"
$stagingUser = Read-Host "Enter your staging SSH username"
$productionHost = Read-Host "Enter your production server IP/hostname"
$productionUser = Read-Host "Enter your production SSH username"
$domain = Read-Host "Enter your domain name (e.g., yourdomain.com)"

Write-Host ""
Write-Host "Updating workflow files..." -ForegroundColor Yellow

# Function to replace text in files
function Replace-InFile {
    param(
        [string]$FilePath,
        [string]$Find,
        [string]$Replace
    )
    if (Test-Path $FilePath) {
        $content = Get-Content $FilePath -Raw
        $content = $content -replace [regex]::Escape($Find), $Replace
        Set-Content $FilePath $content -Encoding UTF8
    }
}

# Update GitHub Actions workflows
Get-ChildItem -Path ".github/workflows" -Filter "*.yml" | ForEach-Object {
    Replace-InFile $_.FullName "yourusername" $githubUser
    Replace-InFile $_.FullName "yourdomain.com" $domain
}

# Update docker-compose files
Get-ChildItem -Path "." -Filter "docker-compose.*.yml" | ForEach-Object {
    Replace-InFile $_.FullName "yourusername" $githubUser
    Replace-InFile $_.FullName "yourdomain.com" $domain
}

# Update Kubernetes manifest
if (-not (Test-Path "k8s")) {
    New-Item -ItemType Directory -Path "k8s" -Force | Out-Null
}

Get-ChildItem -Path "k8s" -Filter "*.yaml" -ErrorAction SilentlyContinue | ForEach-Object {
    Replace-InFile $_.FullName "yourusername" $githubUser
    Replace-InFile $_.FullName "yourdomain.com" $domain
}

Write-Host "✓ Configuration files updated" -ForegroundColor Green
Write-Host ""

# 4. GitHub Secrets configuration
Write-Host "Step 4: GitHub Secrets Setup" -ForegroundColor Yellow
Write-Host "===========================" -ForegroundColor Yellow
Write-Host ""
Write-Host "⚠️  IMPORTANT: Add these secrets to your GitHub repository:" -ForegroundColor Yellow
Write-Host "   Go to: Settings → Secrets and variables → Actions → New repository secret" -ForegroundColor Yellow
Write-Host ""

Write-Host "1. STAGING_HOST = $stagingHost" -ForegroundColor Cyan
Write-Host "2. STAGING_USER = $stagingUser" -ForegroundColor Cyan
Write-Host "3. STAGING_DEPLOY_KEY = (contents of .deploy/staging_key)" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. PRODUCTION_HOST = $productionHost" -ForegroundColor Cyan
Write-Host "5. PRODUCTION_USER = $productionUser" -ForegroundColor Cyan
Write-Host "6. PRODUCTION_DEPLOY_KEY = (contents of .deploy/production_key)" -ForegroundColor Cyan
Write-Host ""

Write-Host "To get SSH key contents for GitHub Secrets:" -ForegroundColor Yellow
if (Test-Path ".deploy/staging_key") {
    Write-Host ""
    Write-Host "Staging (copy this to STAGING_DEPLOY_KEY):" -ForegroundColor Yellow
    Get-Content ".deploy/staging_key" | Set-Clipboard
    Write-Host "✓ Staging key copied to clipboard"
    Write-Host ""
    Write-Host "Production (copy this to PRODUCTION_DEPLOY_KEY):" -ForegroundColor Yellow
    Get-Content ".deploy/production_key" | Set-Clipboard
    Write-Host "✓ Production key copied to clipboard"
}

# 5. Final verification
Write-Host ""
Write-Host "Step 5: Verification" -ForegroundColor Yellow
Write-Host "==================" -ForegroundColor Yellow

$dockerWorks = $null -ne (docker ps 2>$null)
if ($dockerWorks) {
    Write-Host "✓ Docker is accessible" -ForegroundColor Green
} else {
    Write-Host "❌ Docker is not accessible" -ForegroundColor Red
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Edit .env.staging with your Supabase staging credentials" -ForegroundColor White
Write-Host "2. Edit .env.production with your Supabase production credentials" -ForegroundColor White
Write-Host "3. Add GitHub Secrets (see above)" -ForegroundColor White
Write-Host "4. Test: Push to main branch to trigger staging deployment" -ForegroundColor White
Write-Host "5. Create a git tag (v1.0.0) to trigger production deployment" -ForegroundColor White
Write-Host ""
Write-Host "For more details, see DEPLOYMENT_SETUP.md" -ForegroundColor Yellow
Write-Host ""
