# Azulize — company website

Marketing website and shared legal center for **Azulize LLC**, a U.S. software
studio that makes calm, ad-free, kid-safe apps for iPad and iPhone
(mascot: **Milo**).

- **Live site:** <https://www.azulize.com>
- **Repo:** `azulize.github.io` (GitHub Pages, user site)
- **Stack:** [Jekyll](https://jekyllrb.com/) via the `github-pages` gem — a static
  site, no database, no third-party trackers.

---

## Company facts

| | |
|---|---|
| Legal name | **Azulize LLC** |
| Brand | Azulize |
| Mascot | Milo |
| Registered | **United States** |
| Founded | 2025 |
| Contact | support@azulize.com |
| Domain | www.azulize.com |

These facts live once in [`_config.yml`](_config.yml) under `company:` and are
reused across the footer and the legal pages, so there is a single source of
truth.

---

## What the site does

1. **Markets the catalog** — a homepage that lists every app,
   grouped into age-based tiers.
2. **Hosts the shared legal center** — one Privacy Policy, Terms of Service and
   Cookie Policy that apply to *all* apps, linked from inside every
   app:
   - `/legal/privacy/`
   - `/legal/terms/`
   - `/legal/cookies/`

The apps point their in-app "Privacy / Terms / Cookies" links here, so legal
copy is maintained in one place instead of per app.

---

## The catalog — 18 apps, 6 tiers

One focused mechanic per app. Source of truth: [`_data/games.yml`](_data/games.yml)
(grouping order in [`_data/tiers.yml`](_data/tiers.yml)). Add or edit an app in
`games.yml` and the homepage grid **and** the legal "covered apps" list update
automatically.

### Foundation favorites — _the original six, the calm classics_
| App | Mechanic | Ages |
|---|---|---|
| 🎨 Kids Color | Coloring | 2–8 |
| 🔢 Kids Dots | Connect the dots | 2–8 |
| 🧩 Kids Puzzle | Jigsaw | 2–8 |
| 🃏 Kids Memory | Match the pairs | 2–8 |
| 🌀 Kids Maze | Maze | 2–8 |
| ✏️ Kids Trace | Handwriting | 2–8 |

### Numbers & music — _early maths, shapes and sound_
| App | Mechanic | Ages |
|---|---|---|
| 🔺 Kids Shapes | Classification | 2–6 |
| ➕ Kids Count | Counting & maths | 3–7 |
| 🎹 Kids Piano | Music | 3–8 |

### Puzzles & logic — _bite-size brain teasers_
| App | Mechanic | Ages |
|---|---|---|
| 📦 Kids Slide | Sokoban | 4–7 |
| 🧪 Kids Sort | Water sort | 4–7 |
| 🫧 Kids Pop | Arcade | 3–6 |
| ⚪ Kids Tilt | Marble maze | 4–7 |

### Pretend play — _imaginative role-play_
| App | Mechanic | Ages |
|---|---|---|
| 🩺 Kids Doctor | Role-play | 3–7 |
| 🍳 Kids Chef | Cooking | 3–7 |
| 🌟 Kids Stickers | Creative sandbox | 3–7 |

### For bigger kids — _a step up_
| App | Mechanic | Ages |
|---|---|---|
| 🧮 Kids Sudoku | Sudoku | 6+ |

### Learning to read — _our most educational title_
| App | Mechanic | Ages |
|---|---|---|
| 📖 Kids Words | Learn to read | 3–7 |

> App Store links live in the `appstore_url` field of each entry in
> `games.yml`. They are empty until a title ships; once set, the app card shows
> a real **App Store** button.

---

## Privacy & purchases model (reflected in the legal pages)

- **No ads, no analytics, no tracking SDKs**, no accounts, no personal data
  collected from children or adults.
- **Purchases & subscriptions** are the one exception: some apps offer optional
  in-app purchases — **auto-renewing subscriptions (monthly / yearly)** and a
  **one-time** option — processed by **Apple** and managed with
  **[RevenueCat](https://www.revenuecat.com/)** (`purchases-ios` 5.x).
  - Offering tiers: Monthly (`$rc_monthly`, `P1M`), Yearly (`$rc_annual`, `P1Y`),
    One-time (`$rc_lifetime`, non-consumable).
  - RevenueCat processes only a random app-user ID, receipt/purchase info and
    basic device data to deliver and restore purchases — never for advertising
    or cross-app tracking.
  - All purchases and outbound links sit **behind a parental gate**.
- Designed to align with **COPPA**, Apple's **Kids Category** guidelines and
  GDPR "age-appropriate design" principles.

---

## Tech & design

- **Jekyll** built through the **`github-pages`** gem for production parity with
  GitHub's own build.
- **Plugins:** `jekyll-feed`, `jekyll-sitemap`, `jekyll-seo-tag`.
- **Markdown:** kramdown with GFM input.
- **No external theme** — this repo ships its own layout, CSS and JS.
- **No Google Fonts / no third-party requests** — a system font stack keeps the
  site consistent with the privacy-first, zero-tracker cookie policy.
- **Brand palette** (from the Azulize "A" mark):
  - Sky `#55B7E8`
  - Periwinkle `#5B6BB8`
  - Deep blue `#123F92`
- **Custom domain:** `CNAME` → `www.azulize.com`.

---

## Project structure

```
.
├── _config.yml            # Site + company config (single source of truth)
├── CNAME                  # www.azulize.com
├── Gemfile                # github-pages gem + plugins
├── index.html             # Homepage (hero, tiers, values, about, contact)
├── 404.html               # Milo "not found" page
├── robots.txt             # Renders Sitemap URL
├── _data/
│   ├── games.yml          # The 18 apps
│   └── tiers.yml          # The 6 catalog tiers
├── _includes/
│   ├── head.html          # SEO tag, favicon, styles
│   ├── header.html        # Brand + nav
│   ├── footer.html        # Footer + legal links
│   ├── logo.svg           # Azulize "A" mark
│   └── milo.svg           # Mascot (placeholder art)
├── _layouts/
│   ├── default.html       # Page shell
│   └── legal.html         # Legal page wrapper (tabs, prose)
├── legal/
│   ├── privacy.md         # /legal/privacy/
│   ├── terms.md           # /legal/terms/
│   └── cookies.md         # /legal/cookies/
└── assets/
    ├── css/style.css      # Design system
    ├── js/main.js         # Mobile nav toggle only
    └── img/               # logo.svg, favicon.png, favicon-source.svg
```

---

## Local development

Requires Ruby (3.2+) and Bundler.

```bash
bundle install                 # install dependencies
bundle exec jekyll serve       # http://127.0.0.1:4000 with live reload
bundle exec jekyll build       # output to _site/
```

`_site/`, `.jekyll-cache/`, `vendor/` and `Gemfile.lock` are gitignored;
GitHub Pages builds the site from the `main` branch with its own gem versions.

### Common tasks

- **Add / edit an app:** copy a block in `_data/games.yml` and fill it in.
- **Re-order or rename a tier:** edit `_data/tiers.yml` (the `key` must match the
  `tier:` on each game).
- **Change company facts:** edit the `company:` block in `_config.yml`.
- **Edit legal copy:** the three files in `legal/` — the "covered apps" list is
  generated from `games.yml`, so no per-app edits are needed.

---

## Deployment

Pushing to `main` triggers a GitHub Pages build automatically (user site). In
**Settings → Pages**, the custom domain is `www.azulize.com` with **Enforce
HTTPS** enabled.

**DNS** (at the domain registrar):

- `CNAME` · `www` → `azulize.github.io`
- `A` · `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

---

## License

© 2025 Azulize LLC. All rights reserved.
