#!/bin/bash
set -e

echo "🔨 Building Angular app..."
cd HRMS.UI
npm install
npm run build

echo "📤 Deploying to GitHub Pages..."
cd dist/HRMS.UI/browser

# Initialize git in the dist folder
git init
git config user.name "Deploy Bot"
git config user.email "deploy@bot.com"

# Add all files
git add -A

# Commit
git commit -m "Deploy: $(date)"

# Create gh-pages branch
git branch -M gh-pages

# Add remote
git remote add origin https://github.com/jeMEspOnd/HRMS.git 2>/dev/null || git remote set-url origin https://github.com/jeMEspOnd/HRMS.git

# Force push to gh-pages
git push -u origin gh-pages --force

echo "✅ Deployment complete!"
echo "🌐 Your site: https://jemespond.github.io/HRMS/"
