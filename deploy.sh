#!/bin/bash

# Deploy Angular App to GitHub Pages with correct base href
cd HRMS.UI

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building Angular app with GitHub Pages base href..."
npm run build -- --configuration production --base-href="/HRMS/"

echo "📤 Deploying to GitHub Pages..."
cd ../
rm -rf gh-pages 2>/dev/null || true
git clone --depth 1 --branch gh-pages https://github.com/jeMEspOnd/HRMS.git gh-pages || mkdir gh-pages

cd gh-pages
rm -rf *
cp -r ../HRMS.UI/dist/HRMS.UI/browser/* .

git config user.name "GitHub Actions"
git config user.email "actions@github.com"
git add -A
git commit -m "Deploy: $(date)" || echo "No changes to commit"
git push origin gh-pages

cd ..
echo "✅ Deployment complete!"
echo "🌐 Your site is live at: https://jeMEspOnd.github.io/HRMS/"
