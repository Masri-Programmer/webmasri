#!/bin/bash

set -e

PROJECT_DIR="/var/www/virtual/masri/webmasri"
SERVICE_NAME="my-app-ssr"

cd "$PROJECT_DIR" || exit

echo "🚀 Starting deployment..."

echo "⚙️ Stopping SSR service: $SERVICE_NAME"
supervisorctl stop "$SERVICE_NAME"

echo "🔄 Pulling latest changes from git..."
git pull origin main

echo "📦 Installing npm dependencies..."
rm -rf node_modules
npm install

echo "🛠️ Building assets for production (SSR)..."
NODE_OPTIONS=--max-old-space-size=2048 npm run build

echo "🧹 Clearing Laravel caches..."
php artisan optimize:clear

echo "🗺️ Generating sitemap..."
php artisan sitemap:generate

echo "▶️ Starting SSR service: $SERVICE_NAME"
supervisorctl start "$SERVICE_NAME"

echo "✅ Deployment finished successfully!"

echo "📊 Current service status:"
supervisorctl status "$SERVICE_NAME"
