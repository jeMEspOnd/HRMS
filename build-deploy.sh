#!/bin/bash
set -e

echo "🔨 Building Angular app..."
cd HRMS.UI
npm install --legacy-peer-deps
npm run build -- --configuration production

echo "📤 Deploying to GitHub Pages..."
cd ..

# Remove old temp folder
rm -rf temp-deploy
mkdir temp-deploy
cd temp-deploy

# Clone gh-pages branch or create new
git clone --depth 1 https://github.com/jeMEspOnd/HRMS.git . 2>/dev/null || git init

# Remove all old files
rm -rf * .nojekyll .gitignore

# Copy new build files
cp -r ../HRMS.UI/dist/HRMS.UI/browser/* .

# Add .nojekyll to disable Jekyll
touch .nojekyll

# Setup git
git config user.name "Deploy Bot"
git config user.email "deploy@github.com"

# Add all files
git add -A

# Commit
git commit -m "Deploy build: $(date)" || echo "No changes"

# Setup branch
git branch -M gh-pages

# Add remote and push
git remote add origin https://github.com/jeMEspOnd/HRMS.git 2>/dev/null || git remote set-url origin https://github.com/jeMEspOnd/HRMS.git
git push -u origin gh-pages --force

cd ..
rm -rf temp-deploy

echo "✅ Build and deployment complete!"
echo "🌐 Site: https://jemespond.github.io/HRMS/"
echo "⏱️  Wait 2 minutes and hard refresh (Ctrl+Shift+R)"
