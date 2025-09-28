#!/bin/bash

# --- Configuration ---
# Set the full path to your project directory
PROJECT_DIR="/var/www/virtual/masri/webmasri"
# Set the name of your supervisor service
SERVICE_NAME="my-app-ssr"
# --- End of Configuration ---

# Exit immediately if a command exits with a non-zero status.
set -e

# Change to the project directory
cd "$PROJECT_DIR" || exit

echo "🚀 Starting deployment..."

# 1. Stop the live SSR service to free up memory
echo "⚙️ Stopping SSR service: $SERVICE_NAME"
supervisorctl stop "$SERVICE_NAME"

# 2. Pull the latest code from the 'main' branch
echo "🔄 Pulling latest changes from git..."
git pull origin main

# 3. Perform a clean install of npm dependencies
echo "📦 Installing npm dependencies..."
rm -rf node_modules
npm install

# 4. Build assets with an increased memory limit
echo "🛠️ Building assets for production (SSR)..."
NODE_OPTIONS=--max-old-space-size=2048 npm run build

# 5. Clear Laravel caches to ensure new code is used
echo "🧹 Clearing Laravel caches..."
php artisan optimize:clear

# 6. Restart the SSR service with the new build
echo "▶️ Starting SSR service: $SERVICE_NAME"
supervisorctl start "$SERVICE_NAME"

echo "✅ Deployment finished successfully!"

# 7. Show the final status of the service
echo "📊 Current service status:"
supervisorctl status "$SERVICE_NAME"
