# SafePay Guard OS

**India's Financial Immune System** — one report becomes an antibody that immunizes thousands nearby, warns your family, and files with the government.

> Motto: **"Stop the scam before it spreads."**
> Built for the *Crack the Complexity* Designathon · FinTech track.

A cinematic, single-page web experience. No build step and no dependencies to install.

---

## Project structure

```
safepay-guard-os/
├── index.html        # markup + font/CDN links
├── css/
│   └── styles.css    # all styles (glassmorphism, layout, animations)
├── js/
│   └── app.js        # all logic (intro, radar, Scam DNA, Sentinel AI, shield, share…)
├── README.md
├── LICENSE
├── .gitignore
└── .nojekyll         # tells GitHub Pages to serve files as-is
```

---

## Run it locally

**Option 1 — open it**
Double-click `index.html`. It opens in your browser and runs. (Relative `css/` and `js/` paths work from disk.)

**Option 2 — local server (recommended)**
```bash
python -m http.server 8000
# then open http://localhost:8000
```
or
```bash
npx serve .
```

**Option 3 — live editing (auto-reload)**
Open the folder in VS Code, install **Live Server**, right-click `index.html` → **Open with Live Server**.

> Internet is used only for fonts and the smooth-scroll libraries (GSAP, Lenis). Fully offline it still runs — just with system fonts and native scrolling.

---

## Push to GitHub & go live

```bash
cd safepay-guard-os
git init
git add .
git commit -m "SafePay Guard OS"
git branch -M main
git remote add origin https://github.com/<your-username>/safepay-guard-os.git
git push -u origin main
```

Then enable the live URL: repo **Settings → Pages → Branch: `main` / root → Save**.
Your site goes live at:

```
https://<your-username>.github.io/safepay-guard-os/
```

Great for a QR code on your title slide.

---

## Features

- **Cinematic intro** — particle → glass sphere → India → red scam wave → cyan shield → logo.
- **Living Digital Twin of India** — a hero map built from glowing particles with attack/heal waves.
- **Live Scam Radar** — real India map with pulsing city hotspots.
- **Digital Scam Time Machine** — replays a scam spreading city to city, forecasts tomorrow's target.
- **Scam DNA Engine** — paste any message; it sequences fraud traits + risk (real rule-based logic).
- **Enter the Scam** — travel inside a scam step by step and expose each red flag.
- **AI Scam Simulator + Emotion Meter** — runs a scam safely, then dissects the manipulation.
- **Sentinel AI** — on-device assistant covering UPI & finance basics→advanced, transaction issues, and all scams.
- **Community Immune System** — protection visibly spreading through a network.
- **Golden Hour + Helplines** — the guided recovery timeline with tap-to-call fraud helplines.
- **Protection Shield** — after login, screens calls/SMS against a community blocklist (demo).
- **Auto-report to Government** — one tap builds the 1930 / cybercrime.gov.in complaint.
- **Alert family & friends** — share a scam warning to WhatsApp, Instagram, Telegram, X, and more.
- **Daily Fraud Briefing, Impact dashboard, Architecture, and a cinematic finale.**
- **Sign in / Create account** — email, password, profile picture, username, mobile, robot check.

---

## Honest notes (good to know for judging)

- **Sentinel AI is an on-device assistant** (rule + engine based), not a cloud LLM — deep on money/fraud, not open-domain. An LLM API is a future step (needs a backend).
- **Authentication and the Protection Shield are front-end demos.** Nothing is stored or sent; accounts live in the current browser session. For real accounts, use **Firebase Auth** (email + phone OTP; it hashes passwords) with **Firestore** for profiles/reports and **Firebase Storage** for profile pictures.
- **Real-time call/SMS blocking** requires the native mobile app with OS permissions (Android CallScreening/SMS filter, iOS Call Directory/Message Filter). The website demonstrates the shield and community blocklist that power it.
- Finance content is general guidance, not personalized financial advice.

---

## Tech

Vanilla HTML / CSS / JavaScript · Canvas 2D (intro, particle India, particle field, maps) · GSAP + Lenis (progressive enhancement) · Lucide icons (MIT) · General Sans / Inter / JetBrains Mono.
