#!/bin/bash

# Deployment Pipeline Setup Script
# This script helps configure the deployment pipeline for your app

set -e

echo "================================"
echo "Werdnerd Deployment Setup"
echo "================================"
echo ""

# Check prerequisites
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v ssh-keygen &> /dev/null; then
    echo "❌ ssh-keygen is not available. Please install OpenSSH."
    exit 1
fi

echo "✓ Prerequisites check passed"
echo ""

# 1. Generate SSH keys if they don't exist
echo "Step 1: SSH Key Generation"
echo "=========================="

if [ ! -f ".deploy/staging_key" ]; then
    echo "Generating SSH keys for deployments..."
    mkdir -p .deploy
    
    ssh-keygen -t ed25519 -f .deploy/staging_key -N "" -C "staging deployment key"
    ssh-keygen -t ed25519 -f .deploy/production_key -N "" -C "production deployment key"
    
    chmod 600 .deploy/staging_key
    chmod 600 .deploy/production_key
    
    echo ""
    echo "✓ SSH keys generated in .deploy/ directory"
    echo ""
    echo "📋 Add these public keys to your servers:"
    echo ""
    echo "Staging server (.ssh/authorized_keys):"
    cat .deploy/staging_key.pub
    echo ""
    echo "Production server (.ssh/authorized_keys):"
    cat .deploy/production_key.pub
    echo ""
else
    echo "✓ SSH keys already exist in .deploy/"
fi

echo ""
read -p "Press Enter after adding public keys to your servers..."
echo ""

# 2. Create environment files
echo "Step 2: Environment Configuration"
echo "=================================="

if [ ! -f ".env.staging" ]; then
    echo "Creating .env.staging..."
    cp .env.staging.example .env.staging
    echo "❌ Please edit .env.staging with your staging Supabase credentials"
else
    echo "✓ .env.staging exists"
fi

if [ ! -f ".env.production" ]; then
    echo "Creating .env.production..."
    cp .env.production.example .env.production
    echo "❌ Please edit .env.production with your production Supabase credentials"
else
    echo "✓ .env.production exists"
fi

echo ""

# 3. Ask for configuration values
echo "Step 3: Configure Deployment Settings"
echo "======================================"

read -p "Enter your GitHub username: " GITHUB_USER
read -p "Enter your GitHub repository name (e.g., werdnerd): " REPO_NAME
read -p "Enter your staging server IP/hostname: " STAGING_HOST
read -p "Enter your staging SSH username: " STAGING_USER
read -p "Enter your production server IP/hostname: " PRODUCTION_HOST
read -p "Enter your production SSH username: " PRODUCTION_USER
read -p "Enter your domain name (e.g., yourdomain.com): " DOMAIN

echo ""
echo "Updating workflow files..."

# Update GitHub Actions workflows
sed -i.bak "s|yourusername|$GITHUB_USER|g" .github/workflows/*.yml
sed -i.bak "s|yourdomain.com|$DOMAIN|g" .github/workflows/*.yml docker-compose.*.yml

# Update docker-compose files
sed -i.bak "s|yourusername|$GITHUB_USER|g" docker-compose.*.yml
sed -i.bak "s|yourdomain.com|$DOMAIN|g" docker-compose.*.yml

# Update Kubernetes manifest
mkdir -p k8s
sed -i.bak "s|yourusername|$GITHUB_USER|g" k8s/*.yaml
sed -i.bak "s|yourdomain.com|$DOMAIN|g" k8s/*.yaml

rm -f .github/workflows/*.bak docker-compose.*.bak k8s/*.yaml.bak

echo "✓ Configuration files updated"
echo ""

# 4. Create deployment directories on servers
echo "Step 4: Create Server Directories"
echo "=================================="

echo "Setting up staging server..."
ssh -i .deploy/staging_key $STAGING_USER@$STAGING_HOST << EOF
    echo "Creating staging directory..."
    sudo mkdir -p /opt/werdnerd-staging
    sudo chown $STAGING_USER:$STAGING_USER /opt/werdnerd-staging
    echo "✓ Staging directory created"
EOF

echo ""
echo "Setting up production server..."
ssh -i .deploy/production_key $PRODUCTION_USER@$PRODUCTION_HOST << EOF
    echo "Creating production directory..."
    sudo mkdir -p /opt/werdnerd-production
    sudo chown $PRODUCTION_USER:$PRODUCTION_USER /opt/werdnerd-production
    echo "✓ Production directory created"
EOF

echo ""

# 5. GitHub Secrets configuration
echo "Step 5: GitHub Secrets Setup"
echo "============================"
echo ""
echo "⚠️  IMPORTANT: Add these secrets to your GitHub repository:"
echo "   Go to: Settings → Secrets and variables → Actions → New repository secret"
echo ""

echo "1. STAGING_HOST = $STAGING_HOST"
echo "2. STAGING_USER = $STAGING_USER"
echo "3. STAGING_DEPLOY_KEY = (contents of .deploy/staging_key)"
echo ""
echo "4. PRODUCTION_HOST = $PRODUCTION_HOST"
echo "5. PRODUCTION_USER = $PRODUCTION_USER"
echo "6. PRODUCTION_DEPLOY_KEY = (contents of .deploy/production_key)"
echo ""

echo "To add SSH keys as secrets:"
echo ""
echo "Staging:"
echo "  cat .deploy/staging_key | xclip -selection clipboard"
echo ""
echo "Production:"
echo "  cat .deploy/production_key | xclip -selection clipboard"
echo ""

# 6. Final verification
echo ""
echo "Step 6: Verification"
echo "===================="

docker ps > /dev/null 2>&1 && echo "✓ Docker is accessible" || echo "❌ Docker is not accessible"

if ssh -i .deploy/staging_key -o ConnectTimeout=3 $STAGING_USER@$STAGING_HOST "echo" > /dev/null 2>&1; then
    echo "✓ SSH connection to staging server works"
else
    echo "❌ SSH connection to staging server failed"
fi

if ssh -i .deploy/production_key -o ConnectTimeout=3 $PRODUCTION_USER@$PRODUCTION_HOST "echo" > /dev/null 2>&1; then
    echo "✓ SSH connection to production server works"
else
    echo "❌ SSH connection to production server failed"
fi

echo ""
echo "================================"
echo "Setup Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Edit .env.staging with your Supabase staging credentials"
echo "2. Edit .env.production with your Supabase production credentials"
echo "3. Add GitHub Secrets (see above)"
echo "4. Test: Push to main branch to trigger staging deployment"
echo "5. Create a git tag (v1.0.0) to trigger production deployment"
echo ""
echo "For more details, see DEPLOYMENT_SETUP.md"
echo ""
