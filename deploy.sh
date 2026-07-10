#!/bin/bash

# Build and Deploy Angular App to GitHub Pages
set -e

echo "📦 Installing dependencies..."
cd HRMS.UI
npm install

echo "🔨 Building Angular app with correct base href..."
npm run build -- --configuration production --base-href="/HRMS/"

echo "📤 Preparing GitHub Pages deployment..."
cd ..

# Remove old gh-pages clone if exists
rm -rf .gh-pages-temp
mkdir .gh-pages-temp
cd .gh-pages-temp

# Clone gh-pages branch
git clone --depth 1 --branch gh-pages https://github.com/jeMEspOnd/HRMS.git . || {
  git init
  git remote add origin https://github.com/jeMEspOnd/HRMS.git
  git checkout -b gh-pages
}

# Clear old files and copy new build
rm -rf *
cp -r ../HRMS.UI/dist/HRMS.UI/browser/* .

# Add .nojekyll to disable Jekyll processing
touch .nojekyll

# Configure git
git config user.name "GitHub Actions Bot"
git config user.email "bot@github.com"

# Stage and commit
git add -A
git commit -m "Deploy: Built at $(date)" || echo "No changes to deploy"

# Push to gh-pages
git push origin gh-pages --force

cd ..
rm -rf .gh-pages-temp

echo "✅ Build and deployment complete!"
echo "🌐 Your site is live at: https://jemespond.github.io/HRMS/"
echo "⏱️  Please wait 1-2 minutes for changes to appear."
