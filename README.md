# Simple Link-in-Bio Page

A minimal single-page site (inspired by Linktree) with your photo, a stack of link buttons, and a dark/light theme toggle.

## How to run

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

