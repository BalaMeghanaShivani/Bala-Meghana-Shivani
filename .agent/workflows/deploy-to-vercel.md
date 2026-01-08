---
description: Deploy the application to Vercel
---

You can deploy this Vite application to Vercel using the CLI or Git integration.

### Option 1: Vercel CLI (Quickest)

1. **Login to Vercel**
   ```bash
   npx vercel login
   ```

2. **Deploy**
   Run the deploy command from the project root:
   ```bash
   npx vercel
   ```
   - Set up and deploy: `Y`
   - Scope: [Select your scope]
   - Link to existing project: `N`
   - Project Name: `bala-meghana-shivani` (or your choice)
   - Directory: `./`
   - **Build settings**: Vercel detects Vite automatically. Press Enter to confirm defaults.
     - Build Command: `vite build`
     - Output Directory: `dist`

3. **Production Deployment**
   To update the production deployment later:
   ```bash
   npx vercel --prod
   ```

### Option 2: Continuous Deployment (Git)

1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your repository.
4. Vercel will verify the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
