# GitHub Pages Deployment Guide

## Prerequisites
- Your repository is already set up with git
- You have configured the project for GitHub Pages deployment

## Step 1: Commit and Push Your Changes

First, commit all your changes to the repository:

```bash
git add .
git commit -m "Add GWA Calculator landing page with GitHub Pages configuration"
git push origin compyle/landing-page-gwa
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Build and deployment", set:
   - Source: "Deploy from a branch"
   - Branch: `compyle/landing-page-gwa` (or your main branch)
   - Folder: `/ (root)`
5. Click "Save"

## Step 3: Automated Deployment (Recommended)

Once you've set up GitHub Pages in your repository settings, you can use the automated deployment:

```bash
npm run deploy
```

This will:
- Build your project
- Deploy the `dist` folder to the `gh-pages` branch
- Make it available at: `https://[your-username].github.io/GWA-Calculator/`

## Step 4: Manual Alternative

If the automated deployment doesn't work, you can manually push the built files:

```bash
# Build the project
npm run build

# Copy dist files to root and commit
cp -r dist/* ./
git add .
git commit -m "Deploy to GitHub Pages"
git push origin compyle/landing-page-gwa
```

## URL Structure

Your deployed site will be available at:
- Primary: `https://[your-username].github.io/GWA-Calculator/`
- Alternative: `https://[your-username].github.io/GWA-Calculator/?` (if using root folder)

## Important Notes

1. **Base Path**: The project is configured with `base: '/GWA-Calculator/'` in vite.config.js for proper routing on GitHub Pages.

2. **Build Folder**: The built files are in the `dist/` folder and will be automatically deployed.

3. **GitHub Actions**: For future deployments, you can also set up GitHub Actions for automatic deployment when you push to main.

## Troubleshooting

### If the site shows a blank page:
- Check the browser console for 404 errors
- Verify that the `base` path in vite.config.js matches your repository name

### If assets are not loading:
- Ensure all paths in the built HTML use the correct base path
- Check that the GitHub Pages settings point to the correct branch

### If navigation doesn't work:
- The smooth scrolling should work, but test all navigation links
- Verify that section IDs match the navigation targets

## Next Steps

After deployment:
1. Test all functionality on the live site
2. Check responsive design on different devices
3. Verify the calculator works correctly
4. Share your deployed site URL!

## Local Development

To continue local development:
```bash
npm run dev
```

The development server will still run at `http://localhost:3000/`