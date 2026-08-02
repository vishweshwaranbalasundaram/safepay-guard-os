[README.md](https://github.com/user-attachments/files/30628800/README.md)
# SafePay Guard OS

**India's Financial Immune System** — one report becomes an antibody that immunizes thousands nearby.

> Motto: **"Stop the scam before it spreads."**
> Built for the *Crack the Complexity* Designathon · FinTech track.

Live experience in a single self-contained file: `index.html`. No build step, no dependencies to install.

---

## Run it

**Option 1 — just open it (simplest)**
Double-click `index.html`. It opens in your browser and runs immediately.

**Option 2 — local server (recommended, cleaner)**
From this folder, run one of:

```bash
# Python 3
python -m http.server 8000
```
```bash
# Node (if you have it)
npx serve .
```
Then open http://localhost:8000 in your browser.

**Option 3 — live editing (auto-reload)**
Open the folder in VS Code, install the **Live Server** extension, right-click `index.html` → **Open with Live Server**. Every save refreshes the page in real time.

> Internet is used only for fonts and smooth-scroll libraries. Fully offline it still runs — just with system fonts and native scrolling.

---

## Put it on GitHub (and get a live link)

```bash
git init
git add index.html README.md
git commit -m "SafePay Guard OS"
git branch -M main
git remote add origin https://github.com/<your-username>/safepay-guard.git
git push -u origin main
```

Then enable the live URL: repo **Settings → Pages → Branch: `main` / root → Save**.
Your site goes live at:

```
https://<your-username>.github.io/safepay-guard/
```

That link is perfect for a QR code on your title slide.

---

## What's inside

- **Cinematic intro** — particle → glass sphere → India → red scam wave → cyan shield repair → logo reveal.
- **Live Scam Pulse** — counters that tick in real time.
- **Live Scam Radar** — command-center India map with pulsing hotspots.
- **Digital Scam Time Machine** — replays a scam spreading city to city, forecasts tomorrow's target.
- **Scam DNA Engine** — paste any message; it sequences fraud traits and returns a risk verdict (real rule-based logic).
- **AI Scam Simulator + Emotional Manipulation Meter** — runs a scam safely, then dissects every trick.
- **Community Immune System** — protection visibly spreading through a network.
- **Golden Hour** — the guided first-hour recovery timeline.
- **Sentinel AI** — an on-device assistant that answers fraud questions and checks messages.
- **Daily Fraud Briefing** — a brief that rotates each day, linking real sources.
- **Impact dashboard, architecture, and a cinematic finale.**
- **Sign in / Create account** — email, password, profile picture, username, mobile number, with an "I'm not a robot" check.

---

## Honest notes (good to know for judging)

- **Sentinel AI is an on-device assistant** (rule + fraud-engine based), not a cloud LLM — so it's deep on fraud but not open-domain. Plugging in a real LLM API is a future step (needs a backend).
- **Authentication is a front-end demo.** Nothing is stored or sent anywhere — accounts live only in the current browser session. For real accounts, use **Firebase Auth** (email + phone OTP; it hashes passwords for you) with **Firestore** for profiles/reports and **Firebase Storage** for profile pictures. Never store raw passwords, and protect data with Firestore Security Rules.

---

## Tech

Vanilla HTML / CSS / JavaScript · Canvas 2D (intro, globe, neural field, maps) · GSAP + Lenis (progressive enhancement) · Lucide icons (MIT) · General Sans / Satoshi / JetBrains Mono.
