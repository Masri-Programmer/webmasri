#!/bin/bash

# set -e
# PROJECT_DIR="/var/www/virtual/masri/webmasri"
SERVICE_NAME="my-app-ssr"
# ⚠️ Find it with: systemctl list-units | grep fpm
# PHP_FPM_SERVICE="php8.2-fpm"


# cd "$PROJECT_DIR" || exit

echo "🚀 Starting deployment..."

echo "⚙️ Stopping SSR service: $SERVICE_NAME"
supervisorctl stop "$SERVICE_NAME"

echo "🔄 Pulling latest changes from git..."
git pull origin main

echo "📦 Installing npm dependencies..."

npm ci

echo "🛠️ Building assets for production (SSR)..."
NODE_OPTIONS=--max-old-space-size=2048 npm run build:ssr

# --- START: NEW CACHING STEPS ---

echo "🧹 Clearing old Laravel caches..."
php artisan optimize:clear

echo "🔥 Caching for production..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# echo "🔄 Reloading PHP-FPM to clear OPcache..."
# sudo systemctl reload "$PHP_FPM_SERVICE"

# --- END: NEW CACHING STEPS ---

echo "🗺️ Generating sitemap..."
php artisan sitemap:generate

echo "▶️ Starting SSR service: $SERVICE_NAME"
supervisorctl start "$SERVICE_NAME"

echo "✅ Deployment finished successfully!"

echo "📊 Current service status:"
supervisorctl status "$SERVICE_NAME"