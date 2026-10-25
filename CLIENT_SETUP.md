# Client setup

## Contact and business fields
Edit `src/config/site.js`. Use confirmed business information only.

| Field | Value |
| --- | --- |
| name, tagline | Business display name and tagline |
| phone | Real international-format telephone number |
| phoneLabel | Optional human-readable phone formatting |
| whatsapp | Country code + real number, digits only; no + or spaces required |
| email | Business inbox |
| address | Business address |
| supportHours | Actual support hours |
| instagram | Full HTTPS profile URL |
| playStore, appStore | Full HTTPS store URLs, if apps exist |

Blank contact fields are omitted. The WhatsApp button explains that contact details are unavailable until a valid number is configured. It never sends visitors to a made-up number. Adding a number enables WhatsApp links in the floating button, footer, contact page and brief-sharing action. Visitors review and send their own messages in WhatsApp. Email opens their mail application; it is not a server-side form submission.

## Content edits
- `src/data/catalog.js`: venue names, cities, capacities, features, images, packages and articles.
- `src/data/services.js`: service categories and descriptions.
- `src/pages/ServicesPage.jsx`: category image mapping and planning inclusions.
- `public/images/`: logo and imagery. Preserve filenames or update the matching references.
- `src/components/Footer.jsx` and `Hero.jsx`: supplied reference promotional copy. Verify claims before business launch.
- `index.html`: document metadata; update for the confirmed public brand and domain.

## Support behaviour
The chat widget provides local, rule-based planning guidance. It does not use an LLM, contact a human operator or retain conversations after refresh. The widget says this explicitly. A genuine live support inbox requires a provider or backend integration. Do not label it live support without that integration.

## Ready-to-use frontend features
Sticky navigation, route scroll reset, mobile menu, seven pages, local favourites, filterable venues, venue dialogs, package links, articles, FAQ disclosures, local enquiry brief, configured WhatsApp/email sharing, responsive chat guidance and shared footer.

## Production requirements
Replace illustrative venue and package data with approved real content; confirm original reference claims, imagery permissions and business details. Live inventory, payments, booking confirmations and inbox delivery are not connected. Contact configuration alone does not turn this frontend into a booking marketplace.

## Install this update
Back up your local `src` directory and README first. Extract `mangalyam-polish-update.zip` into the existing project root. This archive replaces frontend source and includes all seven optimized WebP images; it does not replace package files, Git history or the original logo/background PNG assets.

Run `npm run lint`, `npm run build` and `npm run dev`. Once reviewed, commit source/docs/assets and push to your GitHub repository for the existing deployment workflow. Do not commit downloaded ZIP files or backup archives.
