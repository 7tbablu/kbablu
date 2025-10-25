

In this guide, we’ll walk through how to **deploy your Next.js 15 App Router** project to **Vercel**, connect it to a **custom domain hosted on Hostinger**, and configure your **environment variables** correctly.

By the end, your website will be **live, secure, and production-ready** .



## Initialize a Git Repository

Open your Next.js project in the terminal and run:

```bash
git init
git add .
git commit -m "Initial Next.js 15 project"
```



## Create a New GitHub Repository

1. Go to [GitHub](https://github.com/).  
2. Click **New Repository** → name it (e.g., `my-nextjs-app`).  
3. Keep it **public** or **private** (your choice).  
4. Copy the remote URL provided by GitHub.

Then, connect your local repo to GitHub:

```bash
git remote add origin https://github.com/your-username/my-nextjs-app.git
git branch -M main
git push -u origin main
```

 Your project is now on GitHub.



## Deploy to Vercel

1. Visit [https://vercel.com](https://vercel.com).  
2. Sign in with **GitHub** (recommended).  
3. Click **Add New Project** → select your Next.js repo.  
4. Vercel will automatically detect it’s a **Next.js 15** app.  
5. Click **Deploy** .

Within a few seconds, your app will be live on a temporary Vercel domain like:

```
https://my-nextjs-app.vercel.app
```



## Add Environment Variables on Vercel

If your project uses any API keys, database URLs, or Clerk credentials, you’ll need to set them on Vercel.

1. Go to your project’s **Settings → Environment Variables**.  
2. Click **Add New** and add each variable you use in your local `.env` file.

For example:

| Name | Value | Environment |
|------|--------|--------------|
| DATABASE_URL | postgresql://user:password@host/db | Production |
| NEXT_PUBLIC_API_URL | https://api.example.com | Production |
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY | pk_live_xxxx | All |

> 💡 **Never commit your .env file** to GitHub — always use Vercel’s Environment settings.



## Connect Your Hostinger Domain to Vercel

If you own a custom domain on **Hostinger**, follow these steps:

1. In Vercel Dashboard → open your project → **Settings → Domains**.  
2. Click **Add** and enter your domain (e.g., `kbablu.dev`).  
3. Vercel will show you two **A records** and one **CNAME record** to add.

Now go to your Hostinger **DNS Zone Editor**:

| Record Type | Name | Value | TTL |
|--------------|------|--------|-----|
| A | @ | 76.76.21.21 | Default |
| CNAME | www | cname.vercel-dns.com | Default |

Save your changes.



## Wait for DNS Propagation

DNS propagation may take up to **15–30 minutes**.  
You can check it using:

 [https://dnschecker.org](https://dnschecker.org)

Once complete, your domain (e.g., `https://kbablu.dev`) will point directly to your Vercel app 🎉



## Update Your Environment Variables for Production

If you have environment-specific URLs, update them like this:

```bash
# .env.local (for development)
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# .env.production (for Vercel)
NEXT_PUBLIC_API_URL=https://kbablu.dev/api
```

In Vercel, go to **Settings → Environment Variables → Import** from local `.env`  
or manually update the values to match your production setup.


## Redeploy to Apply Changes

After updating environment variables or DNS, redeploy your project:

```bash
vercel --prod
```

Or, on the dashboard → click **Deploy** again.



## (Optional) Configure Automatic GitHub Deployments

Vercel auto-deploys on every GitHub push.  
You can control it via the **Vercel Git Integration**:

- Push to `main` → triggers **production deploy**  
- Push to other branches → triggers **preview deploy**

This keeps your app always up to date.


## Final Check

Here’s what you’ve achieved:
- ✅ Uploaded your Next.js app to GitHub  
- ✅ Deployed it to Vercel  
- ✅ Linked a Hostinger custom domain  
- ✅ Secured environment variables  
- ✅ Set up automatic redeployments

Your app is now **fully live** with a professional setup



## Adding HTTPS and Redirects

Vercel automatically enables **HTTPS** via Let’s Encrypt.  
If you want to redirect all traffic from `www` to non-www (or vice versa), add this to your Vercel config:

```json
// vercel.json
{
  "redirects": [
    { "source": "/www/(.*)", "destination": "/$1", "permanent": true }
  ]
}
```


## Conclusion

Deploying a **Next.js 15** app is simpler than ever in 2025.  
With GitHub, Vercel, and Hostinger, you can launch a professional-grade website in under 30 minutes — fully automated, secure, and custom-branded.

Now your portfolio or full-stack app is live for the world to see



**#Nextjs #Vercel #Deployment #GitHub #Hostinger #Kbablu**