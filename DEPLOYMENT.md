# Vercel Deployment Guide

## Quick Deploy (3 Minutes)

### Method 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate.

3. **Deploy**
   ```bash
   cd d:\multiport
   vercel
   ```
   
   - Press **Enter** to accept default settings
   - Your site will be deployed instantly!
   - You'll get a live URL like: `https://multiport-xxx.vercel.app`

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

### Method 2: Deploy via GitHub + Vercel Dashboard (Recommended)

#### Step 1: Push to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name: `multiport` or `portfolio`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Push your code**
   ```bash
   cd d:\multiport
   git remote add origin https://github.com/YOUR_USERNAME/multiport.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy on Vercel

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Select your `multiport` repository
   - Click "Import"

3. **Configure (Auto-detected)**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live! 🎉

---

## Your Live URLs

Once deployed, you'll get:

- **Production URL**: `https://your-project.vercel.app`
- **Preview URLs**: Auto-generated for each commit
- **Custom Domain**: Can be added in Vercel dashboard

---

## Adding a Custom Domain

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `benardgomashie.com`)
4. Follow DNS configuration instructions
5. Your site will be live on your custom domain!

---

## Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** → Production deployment
- **Every pull request** → Preview deployment
- **Instant rollbacks** available in Vercel dashboard

---

## Environment Variables (If Needed)

If you add any environment variables later:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add variables for:
   - Production
   - Preview
   - Development

Then redeploy.

---

## Build Optimization

Your site is already optimized with:
- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible
- ✅ Image optimization (Next.js Image component ready)
- ✅ Code splitting
- ✅ Edge network (CDN)
- ✅ Automatic HTTPS

---

## Troubleshooting

### Build Fails?
- Check the build logs in Vercel dashboard
- Run `npm run build` locally to test
- Ensure all TypeScript errors are fixed

### 404 Errors?
- Make sure all routes are in the `app/` directory
- Check that file names are lowercase

### Slow Loading?
- Add `priority` prop to your profile image:
  ```tsx
  <Image src="/profile.jpg" priority />
  ```

---

## Post-Deployment Checklist

- [ ] Site loads on Vercel URL
- [ ] All pages work (/, /founder, /developer, /researcher, /contact)
- [ ] Mobile responsive
- [ ] Images load correctly
- [ ] Links work (social media, email, phone)
- [ ] Add custom domain (optional)
- [ ] Update social media with new link
- [ ] Share your portfolio! 🚀

---

## Useful Commands

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm PROJECT_NAME
```

---

## Your Portfolio is Ready! 🎉

**What You've Built:**

✅ Professional multi-persona portfolio  
✅ 3 specialized profiles (Founder, Developer, Researcher)  
✅ Fully responsive design  
✅ SEO-optimized  
✅ Production-ready  

**Share your work:**
- LinkedIn: Update with portfolio link
- GitHub: Add to profile README
- Resume: Add portfolio URL
- Email signature: Include link

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: support@vercel.com

**Good luck with your opportunities! 🚀**
