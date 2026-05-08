# Rave for Good Proposal Template

Reusable proposal template for **Rave for Good e.V.** venue outreach.

The goal is simple:

> Edit one JSON file → preview the proposal → export as PDF.

No one should edit HTML or CSS unless they are intentionally changing the design.

---

## Current working setup

### Live editable file

Edit this file to update the actual proposal shown in the browser:

```text
public/proposal-data.json
```

### Example/template file

This is only a reusable example for future proposals:

```text
public/proposal-data.example.json
```

Editing `public/proposal-data.example.json` will **not** update the live preview.

### Assets folder

Images are stored in:

```text
public/
```

Examples:

```text
public/logo.png
public/flyer-kater.jpg
public/flyer-meier.jpg
public/opengraph.jpg
```

Image paths inside `proposal-data.json` usually look like:

```json
"/logo.png"
"/flyer-kater.jpg"
"/flyer-meier.jpg"
```

---

## Quick start

From your terminal:

```bash
cd ~/RaveforGood-Proposal-Templates
git pull
corepack prepare pnpm@10.18.3 --activate
pnpm install
pnpm run dev
```

Then open:

```text
http://localhost:5173
```

If the browser does not open automatically, copy the URL from the terminal into Chrome.

---

## Important: use pnpm, not npm

This project should be run with **pnpm**.

Do **not** use:

```bash
npm install
```

Use:

```bash
pnpm install
```

If `pnpm@latest` fails because of Node version issues, use:

```bash
corepack prepare pnpm@10.18.3 --activate
pnpm install
pnpm run dev
```

This works with Node 20.

---

## How to edit an existing proposal

### 1. Open the repo in VS Code

```bash
cd ~/RaveforGood-Proposal-Templates
code .
```

### 2. Open the live data file

In VS Code, open:

```text
public/proposal-data.json
```

Do **not** edit:

```text
public/proposal-data.example.json
```

unless updating the reusable example for future proposals.

### 3. Edit the content

Inside `public/proposal-data.json`, update fields such as:

- Venue name
- Venue address
- Proposal year
- Hero title/subtitle
- Section headings
- Body copy
- Dates and timings
- Guest capacity
- Preferred venue areas
- Track record events
- Stats
- Music/setup details
- Awareness/safety text
- Contact details
- Image paths

### 4. Save

Press:

```text
Cmd + S
```

### 5. Refresh the browser

Go to:

```text
http://localhost:5173
```

Hard refresh:

```text
Cmd + Shift + R
```

Your changes should appear.

You do **not** need to commit to Git before previewing local changes.

---

## How to confirm you edited the correct file

If the browser is not updating, check the live file from Terminal.

```bash
cd ~/RaveforGood-Proposal-Templates
grep -n "About Blank" public/proposal-data.json
```

Or search for your new venue name:

```bash
grep -n "Tresor" public/proposal-data.json
```

If your new text appears, you edited the correct file.

---

## Creating a new venue proposal

### 1. Back up the current proposal

```bash
cp public/proposal-data.json public/proposal-data.about-blank.json
```

Use clear backup names:

```text
public/proposal-data.about-blank.json
public/proposal-data.tresor.json
public/proposal-data.kater-blau.json
```

### 2. Start from the example file

```bash
cp public/proposal-data.example.json public/proposal-data.json
```

### 3. Edit the live file

Open:

```text
public/proposal-data.json
```

Update the venue, dates, copy, stats, contact details, and image paths.

### 4. Preview

```bash
pnpm run dev
```

Open:

```text
http://localhost:5173
```

Hard refresh after edits:

```text
Cmd + Shift + R
```

---

## Updating images

### 1. Add image files

Place new images directly in:

```text
public/
```

Example:

```text
public/flyer-tresor.jpg
public/flyer-zur-klappe.png
public/logo-transparent.png
```

### 2. Reference them in JSON

Inside `public/proposal-data.json`, use paths like:

```json
"/flyer-tresor.jpg"
"/flyer-zur-klappe.png"
"/logo-transparent.png"
```

Recommended image types:

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`

Use real event flyers/photos. Avoid AI-generated images, stock photos, low-resolution screenshots, and messy file names.

---

## Before exporting

Check the proposal visually:

- Exactly **2 A4 pages**
- No clipped text
- No third page
- Images are not awkwardly cropped
- Logo appears correctly
- Contact details are visible
- Export/print button does not appear in the PDF
- Background colours export correctly
- Text remains readable

If something breaks, first shorten content in:

```text
public/proposal-data.json
```

Do not edit CSS unless content shortening is not enough.

---

## How to export as PDF

Open:

```text
http://localhost:5173
```

Use the on-page export button if available.

Or use browser print:

```text
Cmd + P
```

Print settings:

```text
Destination: Save as PDF
Paper size: A4
Margins: None or Minimum
Scale: 100%
Background graphics: Enabled
Headers and footers: Disabled
```

Recommended filenames:

```text
RFG_Proposal_AboutBlank_2026_EN.pdf
RFG_Proposal_AboutBlank_2026_DE.pdf
RFG_Proposal_Tresor_2026_EN.pdf
RFG_Proposal_KaterBlau_2026_EN.pdf
```

---

## English and German versions

### English

```bash
cp public/proposal-data.json public/proposal-data.en.json
```

### German

Translate/edit `public/proposal-data.json`, export the German PDF, then save:

```bash
cp public/proposal-data.json public/proposal-data.de.json
```

Only `public/proposal-data.json` is used by the live preview unless language switching is added later.

---

## Content length warning

The template is designed for a fixed **2-page A4** proposal.

If you add too much text, the layout may break.

Signs content is too long:

- Text is clipped
- A third page appears
- Columns become too tight
- Footer/contact details disappear
- Images become squeezed
- Page 2 bottom sections overflow

Fix by shortening text inside:

```text
public/proposal-data.json
```

Typical places to shorten:

- Venue-specific explanation
- Artist lists
- “What we would love to know” bullets
- Track record descriptions
- Awareness/safety copy

---

## Git workflow

Before editing:

```bash
cd ~/RaveforGood-Proposal-Templates
git pull
```

After editing and checking the proposal:

```bash
git status
git add public/proposal-data.json
git commit -m "Update proposal content for [Venue Name]"
git push
```

If you added new images:

```bash
git add public/proposal-data.json public/flyer-tresor.jpg
git commit -m "Update proposal content for Tresor"
git push
```

---

## Troubleshooting

### Preview does not update

```bash
grep -n "YOUR_NEW_TEXT" public/proposal-data.json
```

Then hard refresh Chrome:

```text
Cmd + Shift + R
```

If still not working:

```text
Ctrl + C
pnpm run dev
```

### You edited the example file by mistake

If you edited:

```text
public/proposal-data.example.json
```

copy the relevant edits into:

```text
public/proposal-data.json
```

Then save and hard refresh.

### npm install fails

Use pnpm:

```bash
corepack prepare pnpm@10.18.3 --activate
pnpm install
pnpm run dev
```

Do not use:

```bash
npm install
```

### pnpm latest fails

If you see an error about Node version or `node:sqlite`, use pnpm 10:

```bash
corepack prepare pnpm@10.18.3 --activate
pnpm install
pnpm run dev
```

### PDF has missing background colours

Enable:

```text
Background graphics
```

### PDF exports as 3 pages

Shorten copy in:

```text
public/proposal-data.json
```

### Logo has a white box

Use a transparent PNG logo and update the path inside:

```text
public/proposal-data.json
```

### Images do not load

Check:

- Image is inside `public/`
- File name matches exactly
- Path starts with `/`
- Extension is correct

Example:

```json
"/flyer-kater.jpg"
```

---

## Final proposal checklist

Before sending:

- Venue name is correct
- Address is correct
- Dates are correct
- Capacity is correct
- Preferred areas/floors are correct
- Tech rider is correct
- Event examples are relevant
- Images match the proposal
- Contact email is correct
- Language version is correct
- PDF exports as exactly 2 pages
- File name is clear
- Final PDF is saved in the shared Rave for Good folder

---

## Golden rule

Edit content here:

```text
public/proposal-data.json
```

Do not edit:

```text
public/proposal-data.example.json
```

unless updating the reusable example.

Only edit code/design files if intentionally changing the template itself.
