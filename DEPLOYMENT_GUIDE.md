# 🚀 Deployment Guide: sahilmiya.in

## Option 1: Vercel (Recommended - Easiest)

### Why Vercel?
- ✅ Built for Next.js (automatic optimization)
- ✅ Free tier is generous
- ✅ Analytics included
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ One-click deployment

### Step-by-Step: Vercel Deployment

#### 1. Push to GitHub
```bash
cd sahilmiya-main

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Add blog system with LLM optimization"

# Add remote (create repo on GitHub first)
git remote add origin https://github.com/sahilvzn/sahilmiya.git

# Push
git push -u origin main
```

#### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repo
5. Configure:
   - **Framework**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click "Deploy"

#### 3. Configure Custom Domain

1. Go to Project Settings → Domains
2. Add `sahilmiya.in`
3. Add DNS records (provided by Vercel):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5-60 minutes)

#### 4. Environment Variables (if needed)

None required for now, but if you add APIs later:

1. Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL=https://sahilmiya.in`
   - Any API keys you use

#### 5. Automatic Deployments

Vercel automatically deploys when you push to `main`:

```bash
# Make changes
vim content/blog/new-post.mdx

# Commit and push
git add .
git commit -m "Add new blog post"
git push

# Vercel automatically rebuilds and deploys!
```

### Vercel Dashboard Features

- **Analytics**: Built-in traffic analytics
- **Speed Insights**: Performance monitoring
- **Deployment logs**: Debug issues
- **Preview deployments**: Test before going live

---

## Option 2: Netlify (Alternative)

### Step-by-Step: Netlify Deployment

#### 1. Push to GitHub (same as above)

#### 2. Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub
5. Select your repo
6. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
7. Click "Deploy site"

#### 3. Configure Custom Domain

1. Site settings → Domain management
2. Add custom domain: `sahilmiya.in`
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: YOUR-SITE.netlify.app
   ```

#### 4. Enable HTTPS

1. Domain settings → HTTPS
2. Click "Verify DNS configuration"
3. Click "Provision certificate" (automatic)

---

## Option 3: Self-Hosted (VPS)

### For Advanced Users Only

#### Requirements
- VPS (DigitalOcean, AWS, Linode)
- Node.js 18+
- PM2 or similar process manager
- Nginx for reverse proxy
- Let's Encrypt for SSL

#### Quick Setup

```bash
# On your VPS
git clone https://github.com/sahilvzn/sahilmiya.git
cd sahilmiya

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "sahilmiya" -- start

# Configure Nginx
# (See Nginx config below)

# SSL with Let's Encrypt
certbot --nginx -d sahilmiya.in -d www.sahilmiya.in
```

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name sahilmiya.in www.sahilmiya.in;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name sahilmiya.in www.sahilmiya.in;

    ssl_certificate /etc/letsencrypt/live/sahilmiya.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sahilmiya.in/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Post-Deployment Checklist

### Immediately After Deployment

- [ ] Visit your site and test navigation
- [ ] Check blog listing page: `/blog`
- [ ] Check individual blog post: `/blog/multi-llm-content-engine`
- [ ] Test mobile responsiveness
- [ ] Check all links work
- [ ] Verify images load

### Within 24 Hours

- [ ] Submit sitemap to Google Search Console
- [ ] Test site speed (PageSpeed Insights)
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Test OpenGraph preview (LinkedIn, Twitter)
- [ ] Verify Analytics is tracking

### Within 1 Week

- [ ] Monitor for any errors in console
- [ ] Check indexing status in Google Search Console
- [ ] Test all forms/CTAs
- [ ] Review first analytics data
- [ ] Make any needed adjustments

---

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: ENOENT: no such file or directory**
- Check file paths are correct
- Ensure `content/blog/` directory exists

### Site Not Loading

**Check deployment logs**
- Vercel: Deployment tab → View logs
- Netlify: Deploys → Failed deploy → View logs

**Common issues:**
- Missing environment variables
- Build errors not caught locally
- File path case sensitivity (Linux is case-sensitive)

### Images Not Loading

**Ensure:**
- Images are in `/public/blog/`
- Referenced as `/blog/image.png` (not `./blog/`)
- Images are committed to git

### Slow Site Performance

**Optimize:**
```bash
# Convert images to WebP
npm install -g sharp-cli
sharp -i public/blog/*.png -o public/blog/ -f webp

# Update references in MDX files
# .png → .webp
```

---

## Monitoring Your Site

### Google Search Console

1. Add property: `https://sahilmiya.in`
2. Verify ownership (DNS or HTML file)
3. Submit sitemap: `https://sahilmiya.in/sitemap.xml`
4. Monitor:
   - Indexing coverage
   - Performance (clicks, impressions)
   - Errors

### Vercel Analytics

Dashboard → Analytics shows:
- Page views
- Top pages
- Referrers
- Devices
- Real-time visitors

### Uptime Monitoring

Use [UptimeRobot](https://uptimerobot.com) (free):
1. Add monitor: `https://sahilmiya.in`
2. Check interval: 5 minutes
3. Email alerts on downtime

---

## Updating Your Site

### Adding New Blog Posts

```bash
# 1. Create post
vim content/blog/new-post.mdx

# 2. Add images (if any)
cp ~/Downloads/image.png public/blog/

# 3. Test locally
npm run dev

# 4. Commit and push
git add .
git commit -m "Add blog post: New Post Title"
git push

# 5. Vercel automatically deploys!
```

### Updating Site Content

```bash
# Make changes to any file
vim components/hero-section.tsx

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update hero section"
git push

# Vercel redeploys automatically
```

---

## Performance Optimization

### Image Optimization

```bash
# Install sharp
npm install sharp

# Create optimization script
node scripts/optimize-images.js
```

### Code Splitting

Already optimized with Next.js automatic code splitting.

### Caching

Vercel handles caching automatically:
- Static assets: 1 year
- HTML: No cache (always fresh)
- API routes: Configurable

---

## Security

### Current Setup ✅
- HTTPS enabled (automatic)
- Headers configured (Next.js defaults)
- No sensitive data exposed
- Dependencies updated regularly

### Best Practices
- Don't commit `.env` files
- Use environment variables for secrets
- Keep dependencies updated: `npm audit fix`
- Monitor security alerts: GitHub Dependabot

---

## Scaling

Your current setup handles:
- **10,000+ daily visitors** (no issues)
- **100+ blog posts** (static generation)
- **Global traffic** (CDN)

If you grow beyond this:
1. Consider Edge Functions for dynamic content
2. Add ISR (Incremental Static Regeneration)
3. Implement caching strategies
4. Consider paid Vercel/Netlify plans

---

## Backup Strategy

### Code Backup
- ✅ Git on GitHub (automatic)
- ✅ Vercel keeps deployment history

### Content Backup

```bash
# Backup blog posts
tar -czf blog-backup-$(date +%Y%m%d).tar.gz content/blog/

# Upload to cloud storage (Dropbox, Google Drive, etc.)
```

### Automatic Backup (Advanced)

Create GitHub Action:
```yaml
# .github/workflows/backup.yml
name: Backup Content
on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly
jobs:
  backup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Create backup
        run: tar -czf backup.tar.gz content/
      - name: Upload to S3
        # ... upload to cloud storage
```

---

## Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [MDX Docs](https://mdxjs.com)

### Community
- Next.js Discord
- Vercel Discord
- Reddit: r/nextjs

### Need Help?
- **LinkedIn**: [linkedin.com/in/sahilvzn](https://linkedin.com/in/sahilvzn)
- **Email**: sahil.vzn@gmail.com

---

**Your site is production-ready. Deploy and start shipping content! 🚀**
