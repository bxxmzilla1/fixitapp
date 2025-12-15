# Deployment Guide

## Prerequisites

- Node.js installed
- A Vercel account (free tier works)
- A Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

## Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run locally with Vercel CLI (recommended for API routes):**
   ```bash
   npm install -g vercel
   vercel dev
   ```
   
   Or use Vite dev server (frontend only, API won't work):
   ```bash
   npm run dev
   ```

## Generate PWA Icons

1. Open `scripts/generate-icons.html` in your browser
2. Click "Generate" buttons to create the icons
3. Click "Download" buttons to save them
4. Place the downloaded icons in the `public` folder as:
   - `public/icon-192.png`
   - `public/icon-512.png`

Alternatively, you can create your own icons (192x192 and 512x512 PNG files) and place them in the `public` folder.

## Deploy to Vercel

### Option 1: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set environment variable in Vercel Dashboard:**
   - Go to your project settings on Vercel
   - Navigate to "Environment Variables"
   - Add `GEMINI_API_KEY` with your API key value
   - Redeploy if needed

### Option 2: Using GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable `GEMINI_API_KEY` in project settings
   - Deploy

## Environment Variables

**Important:** Never commit your `.env` or `.env.local` files. They are already in `.gitignore`.

For Vercel deployment, set the environment variable in the Vercel dashboard:
- Variable name: `GEMINI_API_KEY`
- Value: Your Gemini API key

## PWA Features

The app is configured as a Progressive Web App (PWA) with:
- ✅ Service Worker for offline support
- ✅ Web App Manifest
- ✅ Installable on mobile and desktop
- ✅ Offline caching

Users can install the app on their devices for a native-like experience.

## Security Notes

- The Gemini API key is now stored server-side in Vercel environment variables
- API calls are made through the `/api/generate-fix` endpoint
- The API key is never exposed to the client-side code

