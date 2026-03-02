# Deployment Pipeline Quick Start

## What You Now Have

✅ **GitHub Actions CI/CD** (.github/workflows/)
  - Automated linting on every push
  - Build verification
  - Bundle size analysis
  - Automatic Docker image builds and pushes

✅ **Staging & Production Deployments**
  - Auto-deploy to staging on push to main
  - Auto-deploy to production on version tags (v1.0.0)
  - SSH-based deployments to your servers
  - Smoke tests after each deployment

✅ **Environment Management**
  - Separate configs for staging/production
  - Docker Compose files for each environment
  - Kubernetes manifests for scalable deployments

✅ **Setup Automation**
  - setup-deployment.sh (Linux/macOS)
  - setup-deployment.ps1 (Windows PowerShell)

---

## Quick Start (5 minutes)

### 1. Run Setup Script

**Linux/macOS:**
```bash
bash setup-deployment.sh
```

**Windows (PowerShell):**
```powershell
.\setup-deployment.ps1
```

This will:
- Generate SSH keys
- Create environment files
- Update configuration values
- Test connections to your servers

### 2. Add GitHub Secrets

Go to your GitHub repo → Settings → Secrets and variables → Actions

Add:
- `STAGING_HOST` - Your staging server IP
- `STAGING_USER` - SSH username for staging
- `STAGING_DEPLOY_KEY` - Private key for staging
- `PRODUCTION_HOST` - Your production server IP
- `PRODUCTION_USER` - SSH username for production
- `PRODUCTION_DEPLOY_KEY` - Private key for production

### 3. Configure Environment Variables

Edit `.env.staging` and `.env.production` with your Supabase credentials:
```bash
VITE_SUPABASE_URL=https://your-url.supabase.co
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your-key
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Test Staging Deployment

```bash
git add .
git commit -m "Deploy pipeline setup"
git push origin main
```

Check GitHub Actions for deployment status.

### 5. Trigger Production Deployment

```bash
git tag v1.0.0
git push origin v1.0.0
```

Production deployment starts automatically.

---

## Files Created

```
.github/workflows/
├── ci.yml              # Linting, builds, bundle analysis
├── docker-build.yml    # Docker image builds
└── deploy.yml          # Staging & production deployments

docker-compose.staging.yml
docker-compose.production.yml

k8s/
└── deployment.yaml     # Kubernetes manifests (optional)

.deploy/
├── staging_key         # SSH private key (generated)
├── staging_key.pub     # SSH public key (generated)
├── production_key      # SSH private key (generated)
└── production_key.pub  # SSH public key (generated)

.env.staging.example
.env.production.example

setup-deployment.sh     # Setup automation (Linux/macOS)
setup-deployment.ps1    # Setup automation (Windows)

DEPLOYMENT_SETUP.md     # Full documentation
```

---

## Workflow

### Development Cycle
```
1. Make changes on develop branch
2. Push to develop
   └─ Runs: Lint & Build tests
   └─ Result: Dev image built (not deployed)

3. Create pull request to main
   └─ Runs: Same tests again

4. Merge PR to main
   └─ Runs: Full CI pipeline
   └─ Builds Docker image
   └─ Auto-deploys to staging
   └─ Runs smoke tests
```

### Release Cycle
```
1. Create version tag (v1.0.0)
2. Push tag
   └─ Runs: Full CI pipeline
   └─ Builds versioned Docker image
   └─ Auto-deploys to production
   └─ Runs smoke tests
   └─ Updates GitHub deployment record
```

---

## Common Commands

### View deployment logs
```bash
# SSH to server
ssh -i .deploy/staging_key user@staging-host

# Check container status
docker ps -a

# View app logs
docker-compose logs -f app

# Check container stats
docker stats
```

### Rollback deployment
```bash
# SSH to server
ssh -i .deploy/production_key user@production-host

# Go to app directory
cd /opt/werdnerd-production

# Pull previous image
docker-compose pull

# Restart with previous image
docker-compose down
docker-compose up -d
```

### Manual deployment (if needed)
```bash
# SSH to server
ssh -i .deploy/production_key user@production-host

cd /opt/werdnerd-production

# Update image and restart
docker-compose pull
docker-compose up -d

# Clean up old images
docker system prune -f
```

### Monitor deployment health
```bash
# Check app health
curl https://yourdomain.com

# Check container health
docker inspect werdnerd-app | grep -A 5 "Health"

# View real-time metrics
docker stats --no-stream
```

---

## Environment Variables

Your app receives these environment variables at build time:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY` - Supabase key
- `VITE_SUPABASE_ANON_KEY` - Supabase anon key
- `NODE_ENV` - Set to "production" in deployed images

These are embedded in the built image, so they can't be changed without rebuilding.

---

## Troubleshooting

### "Docker build fails in GitHub Actions"
Check the build logs in GitHub Actions → Your workflow → Build step
Common causes:
- Missing dependencies in package.json
- Invalid Dockerfile syntax
- npm install failure (cache issue or network)

### "Deployment SSH fails"
```bash
# Test SSH connection manually
ssh -i .deploy/staging_key user@host "echo works"

# Verify SSH key is in authorized_keys on server
ssh user@host "cat ~/.ssh/authorized_keys | grep deployment"

# Check firewall allows SSH
ssh -v user@host
```

### "App fails to start after deployment"
```bash
# Check container logs
docker-compose logs app

# Common issues:
# - Missing environment variables
# - Supabase connection failure
# - Port already in use
# - Insufficient disk space (docker system df)
```

### "GitHub Actions can't access Docker registry"
- GITHUB_TOKEN is automatically provided
- Should work out of the box for ghcr.io
- Check token permissions in repo settings

---

## Next Steps

After basic setup works:

1. **Add monitoring**
   - Set up container monitoring
   - Add application performance monitoring (APM)
   - Configure alerts for failures

2. **Improve security**
   - Use Docker Secrets for sensitive data
   - Enable RBAC on Kubernetes
   - Regular security scanning

3. **Scale up**
   - Switch to Kubernetes for multi-node deployments
   - Add load balancing
   - Set up auto-scaling policies

4. **Optimize**
   - Monitor and optimize Docker image size
   - Implement caching strategies
   - Use CDN for static assets

5. **Add features**
   - Database migrations as part of deployment
   - Feature flags for gradual rollouts
   - Canary deployments
   - A/B testing infrastructure

---

## Support

For detailed documentation, see: `DEPLOYMENT_SETUP.md`

For GitHub Actions reference: https://docs.docker.com/build/ci/github-actions/

For Docker Compose: https://docs.docker.com/compose/

For Kubernetes: https://kubernetes.io/docs/
