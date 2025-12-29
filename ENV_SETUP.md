# Vercel Environment Variables Setup

## Quick Setup via Dashboard

1. Go to: https://vercel.com/nisshchayas-projects/gitverse/settings/environment-variables

2. Remove the empty variables (if they exist):
   - Click the X on any empty DATABASE_URL, GEMINI_API_KEY, JWT_SECRET entries

3. Add these THREE environment variables for **Production**:

### 1. DATABASE_URL

**Name:** DATABASE_URL
**Value:**

```
postgresql://neondb_owner:npg_WNoQ7iAvHKO1@ep-dawn-dew-a1jd5jmj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&schema=public
```

**Environment:** Production

### 2. GEMINI_API_KEY

**Name:** GEMINI_API_KEY
**Value:**

```
AIzaSyD3Y54aET7vv9VK70Rfv09l65Ns9GGTBms
```

**Environment:** Production

### 3. JWT_SECRET

**Name:** JWT_SECRET
**Value:**

```
your-super-secret-jwt-key-change-this-in-production
```

**Environment:** Production

4. Click "Save" on each variable

5. Redeploy: Go to Deployments → Click on the latest deployment → Click "Redeploy"

## After Adding Variables

Once you've added all three environment variables:

1. Your API will have access to the database
2. AI features will work with Gemini
3. JWT authentication will work properly

The application should now deploy and run successfully!
