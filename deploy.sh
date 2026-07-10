#!/bin/bash

# Deploy Angular App to GitHub Pages
# Usage: bash deploy.sh

cd HRMS.UI

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building Angular app..."
npm run build

echo "📤 Deploying to GitHub Pages..."
cd dist/HRMS.UI/browser

# Initialize git in dist folder if not already
git init
git add -A
git commit -m "Deploy: $(date)"
git branch -M gh-pages
git remote add origin https://github.com/jeMEspOnd/HRMS.git 2>/dev/null || true
git push -u origin gh-pages --force

echo "✅ Deployment complete!"
echo "🌐 Your site is live at: https://jeMEspOnd.github.io/HRMS/"
