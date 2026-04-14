# Renukasakshi V Patil — Portfolio

Personal portfolio website for Renukasakshi V Patil, AI undergraduate at NIT Surathkal.

**Live site:** https://sakrenu.github.io/Portfolio_renukasakshi

---

## Running locally

This is a plain HTML/CSS/JS site — no build tools required.

**Option 1 — VS Code Live Server (recommended)**
1. Open the folder in VS Code.
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
3. Right-click `index.html` → **Open with Live Server**.

**Option 2 — Python**
```bash
cd Portfolio_renukasakshi
python3 -m http.server 8080
# visit http://localhost:8080
```

**Option 3 — Node (existing server.js)**
```bash
npm install
node server.js
```

---

## Deploying to GitHub Pages

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

Then in the repo → **Settings → Pages → Source: main / (root)** → Save.

---

## One-time setup: Formspree contact form

The contact form currently uses a placeholder Formspree endpoint.  
To activate it:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form — set the destination email to `renukasakshivpatil@gmail.com`.
3. Copy the form ID (e.g. `xpwzabcd`).
4. In `index.html`, find this line and replace `YOUR_FORM_ID`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```

---

## Project cards — update with real repos

The Projects section in `index.html` uses placeholder descriptions.  
Search for `<!-- project-card -->` comments (or the `.project-card` divs) and update:
- `card-title` — real project name
- `card-text` — real description
- `btn-github` href — direct link to the GitHub repo

---

## Libraries used (all CDN — no npm needed for the site)

| Library | Version | Purpose |
|---|---|---|
| Bootstrap | 5.3.0 | Layout, navbar, carousel |
| AOS | 2.3.4 | Scroll-triggered fade/slide animations |
| Font Awesome | 6.4.0 | GitHub icon on project cards |

---

## File structure

```
Portfolio_renukasakshi/
├── index.html      # All page content
├── styles.css      # All styling
├── app.js          # Interactions (AOS, nav highlight, contact form)
├── pics/           # Images
│   ├── abtmepic.jpeg
│   ├── iudx iisc.png
│   ├── rocketium.png
│   ├── nitk.png
│   ├── ml school.png
│   ├── jpmc cfg.png
│   ├── gssoc.png
│   ├── conference.png
│   ├── iet.png
│   ├── cfg_carou.jpeg
│   ├── iudx_carou.jpeg
│   └── jpmc_carou.jpeg
├── Rockcer.pdf
├── server.js       # Optional local Node server
└── package.json
```
