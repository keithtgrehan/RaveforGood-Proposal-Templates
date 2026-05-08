# Rave for Good Proposal Template

Reusable venue proposal template for **Rave for Good e.V.**

The goal is simple:

> Edit one content file → preview the proposal → export as PDF.

Team members should not need to edit HTML, CSS, or code unless changing the design.

---

## What this template is for

Use this template to create polished venue proposals for:

- Clubs
- Outdoor venues
- Festivals
- Cultural spaces
- Event partners

The current design uses a dark, editorial Rave for Good style and is designed to export cleanly as a 2-page A4 PDF.

---

## File structure

```text
RaveforGood-Proposal-Templates/
  public/
    assets/
      rgf-logo.png
      kater-flyer.png
      mensch-meier-flyer.png

  artifacts/
    proposal/
      public/
        data/
          proposal.json

  src/
    styles.css

  README.md
  package.json
```

---

## Main file to edit

For normal proposal updates, edit only:

```text
artifacts/proposal/public/data/proposal.json
```

This file contains the editable proposal content:

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

Do **not** edit HTML or CSS unless intentionally changing the design.

---

## How to create a new venue proposal

### 1. Duplicate the proposal data file

Copy:

```text
artifacts/proposal/public/data/proposal.json
```

Save a backup copy as:

```text
artifacts/proposal/public/data/proposal.about-blank.json
```

Then edit the live file:

```text
artifacts/proposal/public/data/proposal.json
```

Only the live `proposal.json` file is loaded by the proposal page.

---

### 2. Edit the proposal content

Open:

```text
artifacts/proposal/public/data/proposal.json
```

Update the fields for the new venue.

Example:

```json
{
  "venue": {
    "name": "About Blank",
    "city": "Berlin",
    "address": "Markgrafendamm 24c, 10245 Berlin"
  }
}
```

Change this to the new venue details.

---

### 3. Update dates, timings, and format

Edit the event format section.

Example:

```json
{
  "format": {
    "dateRange": "Between May 23rd and the end of September 2026",
    "capacity": "Approx. 200–250 guests throughout the day",
    "timings": [
      "14:00–22:00 outdoor",
      "22:00–04:00 optional micro floor / shed afterparty"
    ],
    "preferredAreas": [
      "Garden",
      "Beachfloor",
      "Wintergarten",
      "Circus Tent"
    ]
  }
}
```

Keep text length roughly similar where possible. Very long text may overflow the two-page layout.

---

## Updating images

Place new image files in:

```text
public/assets/
```

Then update the image paths inside:

```text
artifacts/proposal/public/data/proposal.json
```

Example:

```json
{
  "image": "/assets/new-flyer.png"
}
```

Recommended image types:

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`

Use high-quality images. Avoid screenshots if original flyers/photos are available.

---

## Image guidance

For best results:

- Use real event flyers
- Use real event/crowd photos where possible
- Avoid AI-generated images
- Avoid stock photos
- Use dark/high-contrast visuals when possible
- Keep file names simple and readable

Good file names:

```text
kater-flyer.png
mensch-meier-flyer.png
rave-the-planet.jpg
```

Avoid file names like:

```text
Screenshot 2026-05-07 at 20.49.59.png
```

---

## How to run the preview

Install dependencies:

```bash
npm install
```

Start the local preview:

```bash
npm run dev
```

Open the preview URL shown in the terminal.

In Replit, use the preview panel or open the preview in a new browser tab.

---

## Before exporting

Check the proposal visually:

- It should be exactly **2 A4 pages**
- No text should be clipped
- No third page should appear
- Images should not be awkwardly cropped
- The logo should appear correctly
- Contact details should be visible
- The print/export button should not appear in the final PDF

If text overflows, shorten the content slightly inside:

```text
artifacts/proposal/public/data/proposal.json
```

Do not change layout/CSS unless necessary.

---

## How to export as PDF

Open the proposal in a browser tab.

Press:

```text
Cmd + P
```

or on Windows:

```text
Ctrl + P
```

Use these print settings:

```text
Destination: Save as PDF
Paper size: A4
Margins: None or Minimum
Scale: 100%
Background graphics: Enabled
Headers and footers: Disabled
```

Then save the PDF.

Recommended file name format:

```text
RFG_Proposal_AboutBlank_2026_EN.pdf
RFG_Proposal_AboutBlank_2026_DE.pdf
RFG_Proposal_KaterBlau_2026_EN.pdf
```

---

## Creating English and German versions

Recommended workflow:

1. Create/export the English version first.
2. Duplicate the live data file:

```text
artifacts/proposal/public/data/proposal.json
```

3. Save the copy as:

```text
artifacts/proposal/public/data/proposal.en.json
```

4. Translate/edit the live file into German.
5. Export the German PDF.
6. Save the German copy as:

```text
artifacts/proposal/public/data/proposal.de.json
```

Optional structure:

```text
artifacts/proposal/public/data/
  proposal.json
  proposal.en.json
  proposal.de.json
  proposal.about-blank.json
```

Only `proposal.json` is used by the live template unless the code is changed to support language switching.

---

## Keeping the design safe

The design is controlled by the HTML/CSS.

Normal team members should only edit:

```text
artifacts/proposal/public/data/proposal.json
```

Do not edit:

```text
src/styles.css
```

unless changing the visual design.

Do not edit:

```text
artifacts/proposal/index.html
```

unless changing the page structure or template logic.

---

## Content length warning

The template is designed for a fixed 2-page A4 proposal.

If you add too much text, the layout may break.

Signs the content is too long:

- Text is clipped
- A third page appears
- Columns become too tight
- Footer/contact details disappear
- Images become squeezed

Fix by shortening text inside:

```text
artifacts/proposal/public/data/proposal.json
```

---

## Recommended proposal checklist

Before sending a proposal, confirm:

- Venue name is correct
- Address is correct
- Dates are correct
- Capacity is correct
- Preferred areas/floors are correct
- Tech rider is correct
- Event examples are relevant
- Images match the proposal
- Contact email is correct
- PDF exports as exactly 2 pages
- File name is clear
- Final PDF is saved in the shared Rave for Good folder

---

## Git workflow

Before making changes:

```bash
git pull
```

After editing and checking the proposal:

```bash
git status
git add .
git commit -m "Update proposal content for [Venue Name]"
git push
```

Example:

```bash
git commit -m "Update proposal content for About Blank"
```

---

## Suggested storage workflow

Use:

- **GitHub** for the reusable template and version control
- **Replit/Vercel** for previewing the live proposal
- **Google Drive/shared folder** for final exported PDFs

Recommended folder structure for final PDFs:

```text
Rave for Good/
  Proposals/
    About Blank/
      RFG_Proposal_AboutBlank_2026_EN.pdf
      RFG_Proposal_AboutBlank_2026_DE.pdf
    Kater Blau/
    Zur Klappe/
    Ziegra/
```

---

## Troubleshooting

### Images do not load

Check:

- Image is inside `public/assets/`
- File name matches exactly
- Path starts with `/assets/`

Example:

```json
"/assets/kater-flyer.png"
```

---

### PDF has missing background colours

In browser print settings, enable:

```text
Background graphics
```

Also check that CSS includes:

```css
html,
body {
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
```

---

### PDF exports as 3 pages

The text is probably too long.

Fix:

- Shorten copy in `proposal.json`
- Reduce number of bullet points
- Shorten artist lists
- Shorten venue-specific explanation

---

### Logo has a white box

Use a transparent PNG logo if available.

Recommended file:

```text
public/assets/rgf-logo-transparent.png
```

Then update the JSON/image reference if needed.

---

### Text is clipped

Fix by:

- Shortening the relevant text
- Checking for very long unbroken lines
- Avoiding overly long venue names
- Reducing artist lists where needed

Do not immediately change CSS unless content editing cannot fix the issue.

---

## Golden rule

Edit content here:

```text
artifacts/proposal/public/data/proposal.json
```

Only edit design/code if you intentionally want to change the template itself.
