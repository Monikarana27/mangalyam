# Mangalyam — Celebration Planning Website

A React frontend extending the supplied Mangalyam homepage reference into seven connected navigation pages. A reference-led homepage transitions into modern ivory and burgundy inner pages. Sticky navigation, consistent footers and responsive planning help connect the experience.

## Run locally

Use a Node.js version supported by the Vite dependency in package.json.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

Vercel settings: Vite preset, build command `npm run build`, output `dist`. No environment variables are required.

## Pages and interactions

- Home: reference-based hero and service cards, followed by celebration styles, featured venues, a planning walkthrough, FAQs and footer navigation. Style links prefilter the venue collection.
- About: brand concept, planning approach and service links.
- Services: six categories with imagery and enquiry links.
- Venues: six fictional venue concepts, combined search/location/setting/capacity filters, reset and empty states, detail dialogs.
- Packages: three illustrative packages, inclusions, expandable FAQs and preselected enquiry links.
- Blog: three original planning articles with readable article views.
- Contact: labelled form fields and browser validation; creates a local, copyable celebration brief.

Hash navigation (`#/venues`, for example) works on static hosting without rewrite configuration. Browser back/forward work normally. Navigation marks the current page. Route changes reset scroll instantly and move focus with preventScroll so the sticky header stays visible. A skip link and native dialogs support keyboard navigation.

## Organisation

- `src/pages/`: route-specific components.
- `src/components/`: shared header, footer, page intro, decorative elements and homepage components.
- `src/data/catalog.js`: illustrative venues, packages and editorial content.
- `src/data/services.js`: service category data.
- `src/hooks/useRoute.js`: hash navigation subscription.
- `src/pages.css`: interior page layouts and responsive styling.
- `src/App.css`: existing homepage and shared styles.
- `public/images/`: original project artwork plus illustrative celebration assets, including compressed WebP images for homepage sections.

## Design and research

The reference homepage determines the visual language. Interior pages use quieter cream backgrounds, simple rounded image cards and generous reading space. Grid layouts collapse at tablet and mobile breakpoints.

Research informed venue discovery and enquiry patterns, not copied branding, text or assets:

- https://www.weddingwire.in/wedding-venues
- https://help.weddingwire.in/hc/en-in/articles/49669129952276-How-do-I-request-a-quote-from-a-vendor
- https://theweddingvenues.com/venues

Original article copy covers venue selection, budgeting and guest logistics. No fake reviews, testimonials or new business statistics were added.

## Assets

The original homepage artwork was recreated with AI assistance. Three additional AI-generated photographs are stored as `palace.png`, `garden.png`, and `details.png`. They depict illustrative settings, not real bookable properties. The source briefs are documented in `ASSET_PROMPTS.md`.

Google Fonts loads Great Vibes, Lora and Nunito Sans, with local fallbacks. No paid UI or icon library is required.

## Scope and limitations

This is a frontend assignment demonstration, not an operational booking marketplace.

- Venue names, capacities and package inclusions are illustrative and marked as such.
- No live prices, availability, real supplier directory, payments or reservations are connected.
- Contact prepares a brief in page memory; it does not transmit or persist personal details. Copying requires browser clipboard permission; the brief is also selectable manually.
- Favourites work across the homepage, venue collection and header. Venue IDs are stored locally in the browser; blocked storage falls back to session memory. The inactive login action has been replaced by Plan an event. App-store links are configurable and unavailable downloads are explained.
- Business contact details are configured in `src/config/site.js`; blank fields do not link to sample numbers. Existing homepage promotional claims are supplied reference content, not independently verified business claims.
- Imagery and font choices approximate the supplied reference rather than using original brand assets.

## Validation

ESLint and production build pass. Desktop browser checks covered navigation, combined venue filters and empty state, package-to-contact preselection and local brief creation. Homepage iframe viewport checks at 375, 768 and 1440px showed no horizontal overflow. Desktop browser checks also verified style-to-venue filtering and favourites persisting after reload. Physical-device and full cross-browser testing remain to be done. The existing screenshots represent the earlier homepage and should be refreshed after installation.

## Next steps for production

Connect real supplier data, validated contact endpoints, consent and privacy information, authentication and booking services. Replace illustrative imagery with licensed venue photography before commercial use.


## Business configuration and support
See `CLIENT_SETUP.md`. Contact numbers, WhatsApp, email, address, hours, social and store links live in `src/config/site.js`. The floating helper answers basic planning questions locally and identifies itself as instant guidance, not a live agent. Configured WhatsApp and email actions open a draft for the visitor; nothing is sent automatically.

## Latest validation
ESLint and production build passed. Browser checks verified sticky navigation while scrolling, navigation returning to scroll position zero, local chat topic responses, mobile menu routing and chat layout at 375px. Services page iframe viewports at 375, 768 and 1440px showed no horizontal overflow. Contact URL unit checks covered missing/invalid settings, encoded message text and HTTPS-only external links. Real WhatsApp delivery, email delivery, physical phones and broad cross-browser coverage were not tested.
