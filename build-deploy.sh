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

# Initialize git
git init

# Configure git
git config user.name "Deploy Bot"
git config user.email "deploy@github.com"

# Copy all built files
cp -r ../HRMS.UI/dist/HRMS.UI/browser/* .

# Add .nojekyll
touch .nojekyll

# Create simple index.html that won't redirect
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>HRMSUI</title>
  <base href="/HRMS/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
  <script src="main-KJ3R2COD.js" type="module"></script>
</body>
</html>
EOF

# Create 404.html same as index.html for SPA routing
cp index.html 404.html

# Add all files
git add -A

# Commit
git commit -m "Deploy build: $(date)"

# Set branch to gh-pages
git branch -M gh-pages

# Add remote
git remote add origin https://github.com/jeMEspOnd/HRMS.git

# Force push
git push -u origin gh-pages --force

cd ..
rm -rf temp-deploy

echo "✅ Build and deployment complete!"
echo "🌐 Your site: https://jemespond.github.io/HRMS/"
echo "⏱️  Wait 2 minutes, then hard refresh (Ctrl+Shift+R)"
