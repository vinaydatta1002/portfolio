# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages in just a few minutes!

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your portfolio code (already set up!)

## 🎯 Deployment Steps

### **Step 1: Create a GitHub Repository**

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name options:
   - **For personal site**: `your-username.github.io` (e.g., `vinaydatta.github.io`)
     - This will be available at: `https://vinaydatta.github.io`
   - **For project site**: `portfolio` or any name
     - This will be available at: `https://vinaydatta.github.io/portfolio`
4. Choose **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README (we already have one)
6. Click **"Create repository"**

### **Step 2: Connect Local Repository to GitHub**

Open your terminal in the portfolio folder and run:

```bash
# Add the remote repository (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Example for user site:
# git remote add origin https://github.com/vinaydatta/vinaydatta.github.io.git

# Example for project site:
# git remote add origin https://github.com/vinaydatta/portfolio.git
```

### **Step 3: Commit and Push Your Code**

```bash
# Stage all changes
git add .

# Commit with a message
git commit -m "Initial portfolio deployment - Professional DevOps Engineer site"

# Push to GitHub (use 'master' or 'main' depending on your branch)
git push -u origin master

# If you're using 'main' branch:
# git push -u origin main
```

### **Step 4: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll down and click **"Pages"** (left sidebar)
4. Under **"Build and deployment"**:
   - Source: **"GitHub Actions"**
5. That's it! GitHub Actions will automatically deploy your site

### **Step 5: Wait for Deployment** ⏳

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running called **"Deploy to GitHub Pages"**
3. Wait 2-3 minutes for it to complete (green checkmark ✅)
4. Your site will be live!

### **Step 6: Access Your Portfolio** 🎉

- **User site**: `https://your-username.github.io`
- **Project site**: `https://your-username.github.io/repository-name`

Example: `https://vinaydatta.github.io`

---

## 🔄 Future Updates

Every time you make changes:

```bash
# Make your changes to the code
# ...

# Stage, commit, and push
git add .
git commit -m "Update experience section"
git push

# GitHub Actions will automatically rebuild and deploy!
```

---

## 🛠️ Troubleshooting

### Issue: Workflow not running

**Solution**: 
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select **"Read and write permissions"**
3. Click **"Save"**

### Issue: 404 Page Not Found

**Solution**: 
- If using a project site (not `username.github.io`), make sure you set the base path:
  ```bash
  # Set the environment variable
  export NEXT_PUBLIC_BASE_PATH="/repository-name"
  # or on Windows:
  set NEXT_PUBLIC_BASE_PATH=/repository-name
  
  # Then rebuild
  npm run build
  git add .
  git commit -m "Fix base path"
  git push
  ```

### Issue: CSS/Images not loading

**Solution**: Already handled! The `.nojekyll` file in `/public` ensures assets load correctly.

---

## 📊 What Happens Automatically

✅ GitHub Actions builds your portfolio  
✅ Runs TypeScript checks  
✅ Creates optimized static files  
✅ Deploys to GitHub Pages  
✅ Site updates within 2-3 minutes  

---

## 🎨 Custom Domain (Optional)

Want to use your own domain like `vinaydatta.dev`?

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In GitHub: Settings → Pages → Custom domain → Enter your domain
3. In your domain provider's DNS settings, add:
   - Type: `A` Record
   - Host: `@`
   - Value: 
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Type: `CNAME` Record
   - Host: `www`
   - Value: `your-username.github.io`

4. Wait 24-48 hours for DNS propagation

---

## 📞 Need Help?

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review the [GitHub Actions logs](https://github.com/your-username/repository-name/actions)

---

## ✅ Quick Checklist

- [ ] Created GitHub repository
- [ ] Connected local repo to GitHub
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages (GitHub Actions)
- [ ] Verified deployment in Actions tab
- [ ] Accessed live site URL
- [ ] Shared portfolio link with recruiters! 🎯

---

**Your portfolio is now live and will automatically update whenever you push changes!** 🚀
