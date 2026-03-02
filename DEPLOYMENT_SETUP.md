# Deployment Pipeline Setup Guide

## Overview

This deployment pipeline provides:
- **CI/CD automation** via GitHub Actions
- **Automated testing** (linting, builds, bundle analysis)
- **Docker builds** with caching via GitHub's buildx
- **Staging and production deployments**
- **Environment management** with separate configs
- **Kubernetes support** for scalable deployments

## Pipeline Stages

### 1. CI Pipeline (`ci.yml`)
Runs on every push and pull request:
- **Linting**: ESLint checks for code quality
- **Build**: Builds the production bundle
- **Bundle Analysis**: Generates and uploads bundle stats

### 2. Docker Build (`docker-build.yml`)
Builds and pushes Docker images to GitHub Container Registry:
- Automatic image tagging (branch, semantic versioning, commit SHA)
- Cache optimization for faster builds
- Pushed on: main, develop branches, and all tags

### 3. Deployment (`deploy.yml`)
Handles staging and production deployments:
- **Staging**: Auto-deploys on push to main
- **Production**: Auto-deploys when tags are pushed (v*)
- Runs smoke tests to verify deployments
- Updates GitHub deployment status

## Setup Instructions

### 1. GitHub Secrets Configuration

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

#### For Docker Registry:
```
GITHUB_TOKEN (automatically available)
```

#### For Staging Deployment:
```
STAGING_HOST: IP or hostname of staging server
STAGING_USER: SSH username for staging server
STAGING_DEPLOY_KEY: SSH private key (generate via ssh-keygen)
```

#### For Production Deployment:
```
PRODUCTION_HOST: IP or hostname of production server
PRODUCTION_USER: SSH username for production server
PRODUCTION_DEPLOY_KEY: SSH private key (generate via ssh-keygen)
```

### 2. SSH Key Setup

Generate deployment SSH keys:
```bash
ssh-keygen -t ed25519 -f deploy_key -N ""
```

Add the public key (`deploy_key.pub`) to your server's `~/.ssh/authorized_keys`:
```bash
cat deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Paste the private key content in GitHub Secrets (STAGING_DEPLOY_KEY / PRODUCTION_DEPLOY_KEY)

### 3. Environment Files

Create environment-specific files:

#### .env.staging
```bash
cp .env.staging.example .env.staging
# Update with your staging Supabase credentials
```

#### .env.production
```bash
cp .env.production.example .env.production
# Update with your production Supabase credentials
```

### 4. Update Configuration Values

In workflow files and docker-compose files, replace:
- `yourdomain.com` → Your actual domain
- `yourusername` → Your GitHub username
- `STAGING_USER`, `PRODUCTION_USER` → Your SSH usernames
- `STAGING_HOST`, `PRODUCTION_HOST` → Your server IPs/hostnames

### 5. Server Setup

On your staging and production servers:

```bash
# Create app directories
sudo mkdir -p /opt/werdnerd-staging /opt/werdnerd-production

# Set permissions
sudo chown $USER:$USER /opt/werdnerd-staging /opt/werdnerd-production

# Copy docker-compose files
cp docker-compose.staging.yml /opt/werdnerd-staging/docker-compose.yml
cp docker-compose.production.yml /opt/werdnerd-production/docker-compose.yml

# Create .env files on servers
# (copy .env.staging and .env.production with actual values)

# Set up cron job for automatic pulls from latest code (optional)
# Add to crontab: 0 * * * * cd /opt/werdnerd-staging && docker-compose pull
```

### 6. Docker Hub / GitHub Container Registry Login

On your servers, authenticate with the registry:

```bash
echo $GITHUB_TOKEN | docker login ghcr.io -u $GITHUB_USERNAME --password-stdin
```

## Deployment Workflow

### Development
Push to `develop` branch:
- Runs linting and build tests
- Builds Docker image (tagged `develop`)
- Image available but not deployed

### Staging
Push to `main` branch:
- Runs full CI pipeline
- Builds and pushes Docker image
- Auto-deploys to staging via SSH
- Runs smoke tests

### Production
Create a release tag (e.g., `v1.0.0`):
```bash
git tag v1.0.0
git push origin v1.0.0
```

- Runs full CI pipeline
- Builds and pushes Docker image with version tag
- Auto-deploys to production via SSH
- Creates GitHub deployment record
- Runs smoke tests

## Monitoring Deployments

### GitHub Actions
Monitor pipeline status in your GitHub repository under "Actions" tab

### Server Logs
SSH to servers and check:
```bash
docker-compose logs -f app
docker ps
```

### Health Checks
The app includes a health check endpoint. Verify:
```bash
curl https://yourdomain.com
```

## Rollback Procedure

If deployment fails:

1. **Check logs**:
   ```bash
   docker-compose logs app
   ```

2. **Revert to previous image**:
   ```bash
   # Update docker-compose.yml to previous image tag
   docker-compose down
   docker-compose up -d
   ```

3. **Manual redeploy**:
   ```bash
   cd /opt/werdnerd-production
   docker-compose pull
   docker-compose up -d
   ```

## Kubernetes Deployment (Optional)

For larger-scale deployments, use the provided Kubernetes manifests:

```bash
# Update k8s/deployment.yaml with your image, domain, and credentials
kubectl apply -f k8s/deployment.yaml

# Verify deployment
kubectl get pods -n werdnerd
kubectl get svc -n werdnerd
```

The K8s manifest includes:
- 2 replicas with automatic scaling (2-5 pods)
- CPU and memory requests/limits
- Health checks (liveness and readiness probes)
- Service with LoadBalancer type
- ConfigMaps and Secrets for environment variables

## Troubleshooting

### Docker build fails in CI
- Check build logs in GitHub Actions
- Verify all dependencies in package.json
- Check Dockerfile for syntax errors
- Ensure nginx.conf is valid

### Deployment SSH failures
- Verify SSH keys are added to authorized_keys on server
- Check firewall rules allow SSH access
- Verify IP addresses/hostnames in secrets
- Test SSH manually: `ssh -i deploy_key user@host`

### Application fails after deployment
- Check container logs: `docker-compose logs app`
- Verify environment variables are set correctly
- Check Supabase connectivity
- Verify HTTPS certificates if using HTTPS

### Build cache issues
- GitHub Actions caches are cleared after 7 days of inactivity
- Force rebuild: push a new commit to trigger fresh build

## Best Practices

1. **Always test changes** in develop/staging before production
2. **Use semantic versioning** for releases (v1.0.0, v1.0.1, etc.)
3. **Monitor disk space** on servers: `docker system df`
4. **Clean up old images**: `docker system prune --all`
5. **Keep SSH keys secure**: Never commit them to the repo
6. **Use environment-specific configs**: Don't mix staging/prod secrets
7. **Regular backups**: Back up your .env files with actual credentials
8. **Review logs regularly**: Set up log aggregation for production

## Further Improvements

Consider adding:
- **Slack notifications** for deployment status
- **Email alerts** on failed deployments
- **Automated rollback** on failed smoke tests
- **Performance monitoring** with APM tools
- **Security scanning** with Docker Scout
- **Database migrations** as part of deployment
- **Load testing** before production deployments
- **Canary deployments** for gradual rollouts
