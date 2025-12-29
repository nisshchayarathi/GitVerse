# GitVerse Vercel Deployment Guide

## Full-Stack Deployment Setup

Your application is now configured for full-stack deployment on Vercel with:

- **Frontend**: React + Vite (builds to `dist/`)
- **Backend**: Node.js Express API (serverless functions in `api/`)

## Deployment Steps

### 1. Via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `nisshchayarathi/GitVerse`
4. Select project name: `gitverse`
5. In **"Environment Variables"**, add these:

   ```
   DATABASE_URL=postgresql://neondb_owner:npg_WNoQ7iAvHKO1@ep-dawn-dew-a1jd5jmj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&schema=public

   GEMINI_API_KEY=AIzaSyD3Y54aET7vv9VK70Rfv09l65Ns9GGTBms

   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

6. Click **"Deploy"**

### 2. Via Vercel CLI

```bash
# Set environment variables
vercel env add DATABASE_URL --prod
# Paste: postgresql://neondb_owner:npg_WNoQ7iAvHKO1@ep-dawn-dew-a1jd5jmj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&schema=public

vercel env add GEMINI_API_KEY --prod
# Paste: AIzaSyD3Y54aET7vv9VK70Rfv09l65Ns9GGTBms

vercel env add JWT_SECRET --prod
# Paste: your-super-secret-jwt-key-change-this-in-production

# Deploy
vercel --prod
```

## What Gets Deployed

### Frontend

- React Single Page Application
- Vite optimized build
- Static hosting via Vercel CDN

### Backend

- Express.js API
- Serverless Functions (Node.js runtime)
- Routes:
  - `/api/auth` - Authentication
  - `/api/repositories` - Repository management
  - `/api/users` - User profile & settings
  - `/api/ai` - AI chat features
  - `/api/integrations` - Integrations

## Architecture

```
User Request
    ↓
Vercel Edge Network
    ├─ Static Files (dist/) → Served directly
    └─ API Requests (/api/*) → Node.js Serverless Functions
         ↓
    Express.js Server
         ↓
    PostgreSQL (Neon)
```

## Environment Variables

Required for production:

- `DATABASE_URL` - Neon PostgreSQL connection string
- `GEMINI_API_KEY` - Google Gemini API key for AI features
- `JWT_SECRET` - Secret for JWT token signing

## Post-Deployment

After successful deployment:

1. Update the `VITE_API_URL` in Settings if needed (defaults to same origin in production)
2. Test the API: `https://your-gitverse-domain.vercel.app/api/health`
3. Your app will be available at: `https://your-gitverse-domain.vercel.app`

## Automatic Deployments

Once connected to GitHub, every push to `main` branch will automatically deploy to production.

## Troubleshooting

If API calls fail:

1. Check environment variables are set correctly in Vercel dashboard
2. Verify database connection with: `https://your-gitverse-domain.vercel.app/api/health`
3. Check Vercel logs: Dashboard → Project → Deployments → View Logs

## Support

For more info on Vercel deployments, see:

- [Vercel Documentation](https://vercel.com/docs)
- [Node.js on Vercel](https://vercel.com/docs/functions/nodejs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
