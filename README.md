# Rave for Good — Proposal Template

A JSON-driven, print-ready A4 proposal document for charity rave events.  
All editable content lives in **one file**: `public/proposal-data.json`.  
The HTML and CSS define structure and design only — never need editing for content changes.

---

## How to create a new venue proposal

1. **Duplicate** `public/proposal-data.example.json`
2. **Rename** the copy to `public/proposal-data.json` (replacing the existing file)
3. **Edit** venue name, address, copy, stats, event details, and contact info inside the file
4. **Place new images** in `public/assets/` and reference them by path (e.g. `/assets/flyer-newvenue.png`)
5. **Run the preview locally** (see below)
6. **Check** that the proposal still renders as exactly 2 A4 pages with no clipped text
7. **Export as PDF** using the button in the top bar, or via browser print

---

## How to export as PDF

Click **Export as PDF** in the top bar, or use your browser's print function with these settings:

| Setting | Value |
|---|---|
| Destination | Save as PDF |
| Paper size | A4 |
| Margins | None (or Minimum) |
| Background graphics | Enabled |
| Headers and footers | Disabled |
| Scale | 100% |

---

## Running the preview locally

```bash
# Install dependencies (first time only)
pnpm install

# Start the dev server
pnpm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

---

## Project structure

```
artifacts/proposal/
├── public/
│   ├── proposal-data.json          ← EDIT THIS for each new venue
│   ├── proposal-data.example.json  ← Reference template (do not edit)
│   ├── logo.png                    ← Rave for Good logo
│   ├── flyer-kater.png             ← Event flyer images
│   └── flyer-meier.png
├── src/
│   └── styles.css                  ← Design only — do not edit for content
├── index.html                      ← Template only — do not edit for content
└── vite.config.ts
```

---

## Editing content

Open `public/proposal-data.json` in any text editor. Key fields:

| Field | What it controls |
|---|---|
| `meta.pageTitle` | Browser tab title |
| `meta.exportBarLabel` | Top bar label text |
| `hero.titleVenue` | Venue name in the large hero title |
| `hero.addressName / addressStreet` | Recipient address block |
| `sections[*].label / heading / body` | The four body sections on page 1 |
| `events[*]` | Track record event entries + flyer images |
| `stats.items` | The four stat boxes |
| `lowerSections[*]` | Music, Awareness, and Questions sections |
| `contact.items` | Contact details in the footer block |

Keep text roughly the same length as the existing copy to avoid layout overflow.

---

## Building for production

```bash
pnpm run build
```

Output goes to `dist/public/`. Open `dist/public/index.html` in a browser to verify before sharing.
