# Simple Link-in-Bio Page

A minimal single-page site (inspired by Linktree) with your photo, a stack of link buttons, and a dark/light theme toggle.

## Deploy live (GitHub Pages + custom domain)

**1. Turn on GitHub Pages** (if you haven’t already)  
Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main**, folder: **/ (root)** → Save.  
Your site will be at: `https://harryz-code.github.io/linktree-and-more/`

**2. Use a custom domain** (e.g. `links.yourname.com` or `yourname.com`)  
- Buy a domain from a registrar (Namecheap, Google Domains, Cloudflare, Porkbun, etc.) if you don’t have one.  
- In the repo: **Settings** → **Pages** → **Custom domain** → enter your domain (e.g. `links.yourname.com`) → Save.  
- At your domain’s DNS (where you bought it), add one of these:

  **Option A – Subdomain (e.g. `links.yourname.com`)**  
  - Type: **CNAME**  
  - Name: `links` (or whatever subdomain you chose)  
  - Value: `harryz-code.github.io`

  **Option B – Apex/root domain (e.g. `yourname.com`)**  
  - Add **A** records pointing to GitHub’s IPs:  
    `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`  
  - In GitHub Pages settings, leave “Enforce HTTPS” off until the domain is working, then turn it on.

- Wait 5–60 minutes for DNS to propagate, then in **Pages** enable **Enforce HTTPS**.

That’s it. Your link-in-bio page will be live on your domain.

## How to run locally

1. Open `index.html` directly in your browser, or
2. Serve the folder with a basic HTTP server (recommended for future extensions):
   - Python 3: `python -m http.server 8000`
   - Node: `npx serve .`

Then visit `http://localhost:8000` in your browser.

## How to customize

- **Photo**: In `index.html`, update the `src` on the `img.avatar` to your own image file or URL.
- **Name & tagline**: In `index.html`, change the `Your Name` and the small bio line.
- **Buttons & links**: In `index.html` inside the `.links` section, edit the text and `href` attributes. Add/remove `a.link-button` elements as needed.
- **Colors / look**: Tweak CSS variables at the top of `styles.css` to adjust colors, radius, and spacing. Dark/light themes are controlled via the `[data-theme='light']` override block.

