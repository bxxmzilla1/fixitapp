<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# FixIt AI - Construction Repair Visualizer

A Progressive Web App (PWA) that uses AI to visualize construction repairs and room cleanups. Upload a photo, describe what needs fixing, and see the result with AI-powered image generation.

## Features

- 🎨 AI-powered image generation for construction repairs and room cleanups
- 📱 Progressive Web App (PWA) - installable on mobile and desktop
- 🔒 Secure API key handling (server-side only)
- 🚀 Ready for deployment on Vercel
- 💾 Offline support with service worker caching

## Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the app:**
   
   For full functionality (including API routes), use Vercel CLI:
   ```bash
   npm install -g vercel
   vercel dev
   ```
   
   Or use Vite dev server (frontend only):
   ```bash
   npm run dev
   ```

## Generate PWA Icons

Before deploying, generate the PWA icons:

1. Open `scripts/generate-icons.html` in your browser
2. Click the generate and download buttons
3. Place the downloaded icons in the `public` folder as `icon-192.png` and `icon-512.png`

## Deploy to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick steps:
1. Push to GitHub
2. Import to Vercel
3. Set `GEMINI_API_KEY` environment variable in Vercel dashboard
4. Deploy!

## Security

- API keys are stored server-side only (Vercel environment variables)
- Never exposed to client-side code
- All API calls go through secure serverless functions

## PWA Features

- ✅ Installable on devices
- ✅ Offline support
- ✅ App-like experience
- ✅ Fast loading with service worker caching
