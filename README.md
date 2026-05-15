# 50/30/20 Budget Calculator — Sharpline

A clean, responsive, single-page budget calculator that splits income into **Needs**, **Wants**, and **Savings** using the popular 50/30/20 rule.

---

## ✨ Features

- **Multi-currency support** — USD (default), BRL (R$), GBP (£), EUR, CAD, AUD
- **Multiple income periods** — Monthly, Annual, Weekly, Bi-Weekly (all auto-converted to monthly)
- **Instant breakdown** — Summary boxes + full monthly/annual table
- **Fully responsive** — Works on mobile, tablet, and desktop
- **Accessible** — ARIA labels, live regions, keyboard navigation, reduced-motion support
- **Google AdSense integrated** — Publisher ID `ca-pub-8775883855490271`
- **Zero dependencies** — Pure HTML, CSS, and vanilla JS

---

## 📁 File Structure

```
sharpline-budget-calculator/
├── index.html          # Main page & markup
├── css/
│   └── styles.css      # All styles (CSS custom properties, responsive)
├── js/
│   └── calculator.js   # Calculation logic & DOM updates
└── README.md
```

---

## 🚀 Getting Started

### Option 1 — Open directly in browser

Just open `index.html` in any modern browser. No build step or server required.

### Option 2 — Serve locally

```bash
# Python 3
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## 💱 Supported Currencies

| Symbol | Code | Name             |
|--------|------|------------------|
| $      | USD  | US Dollar (default) |
| R$     | BRL  | Brazilian Real   |
| £      | GBP  | UK Pound         |
| €      | EUR  | Euro             |
| CA$    | CAD  | Canadian Dollar  |
| A$     | AUD  | Australian Dollar |

To add more currencies, edit the `<select id="currency">` block in `index.html`.

---

## ⚙️ How It Works

| Budget Category | Split | Description |
|----------------|-------|-------------|
| Needs          | 50%   | Essential, unavoidable expenses |
| Wants          | 30%   | Lifestyle and discretionary spending |
| Savings        | 20%   | Emergency fund, investments, debt payoff |

All income amounts are converted to a **monthly** figure before splitting:

| Input Period | Conversion |
|-------------|------------|
| Monthly     | ÷ 1        |
| Annual      | ÷ 12       |
| Weekly      | × 52 ÷ 12  |
| Bi-Weekly   | × 26 ÷ 12  |

---

## 📢 AdSense

AdSense is loaded via the standard async script tag. Two ad slots are present:

1. **Top banner** — below the header
2. **Mid-page** — between results and the info section

Replace `ca-pub-8775883855490271` with your own publisher ID if forking.

---

## 🎨 Customisation

All colours and spacing are defined as **CSS custom properties** in `css/styles.css`:

```css
:root {
  --color-red:      #e94560;   /* primary accent */
  --color-navy:     #0f3460;   /* secondary / needs */
  --color-teal:     #1abc9c;   /* savings */
  /* ... */
}
```

Change these to retheme the entire calculator instantly.

---

## 🌐 Deployment

This is a **static site** — deploy to any host that serves HTML files:

- **GitHub Pages** — push to `main` branch, enable Pages in repo settings
- **Netlify / Vercel** — drag-and-drop the folder or connect the repo
- **Any web host** — upload via FTP/SFTP

---

## 📄 License

© Sharpline. All rights reserved.

This project is intended for use on Sharpline-branded properties. If you fork it, please remove Sharpline branding and the AdSense publisher ID before publishing.

---

> **Disclaimer:** This tool provides estimates for informational purposes only and does not constitute financial advice. Consult a qualified financial advisor for personalised guidance.
