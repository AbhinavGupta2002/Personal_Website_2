# Experience section logos

These files are **shipped with the site** (no third-party logo APIs), so they always load on GitHub Pages.

| File | Notes |
|------|--------|
| `bell.svg` | From Wikimedia Commons (Bell Canada mark). |
| `openlane.svg` | Official header logo from [openlane.com](https://www.openlane.com) (`/wp-content/themes/openlane2024/images/logo.svg`). |
| `tutorocean.svg` | Official logo from TutorOcean’s static assets (`tutorocean-black.svg`). |
| `deloitte.svg` | Simplified placeholder; replace with an official Deloitte asset if you prefer. |
| `serv2u.svg` | Placeholder mark (Serv2U is shown **without** a link in the timeline). |

Tesla uses the official vector from the `simple-icons` package in `TimeLineLogo.js` (bundled in JS).

To add a logo: put `companyname.svg` here, then map it in `src/TimeLineLogo.js` (`BRAND_FILES`).
