# Mangalyam: design and interaction notes

The supplied reference remains the visual anchor for the first homepage section. The hero, service cards and benefit strip are retained together; new scrolling content follows them.

## Homepage sequence
1. Reference hero, services and benefit strip.
2. Celebration styles: asymmetrical image mosaic with contemporary, garden and traditional concepts; links prefilter venues.
3. Three venue previews: capacity, location, features, local favourites and links to individual concepts.
4. A photographic planning walkthrough: explore, shortlist, prepare a brief.
5. Practical FAQs using native keyboard-accessible disclosure elements.
6. Burgundy closing section and navigation footer.

## Visual choices
Warm ivory and burgundy connect the modern sections to the original. Gold is an accent. New imagery includes a contemporary glass-pavilion reception so the brand is not exclusively associated with palaces. The new sections use simple corners, readable copy and varied layouts. Photography has explicit dimensions, lazy loading and compressed WebP exports. Motion respects reduced-motion preferences.

## Scope
Seven navigation pages, no new dependencies. Hash routing works on static hosting. Style and venue query parameters initialize the collection filters. Favourites persist as venue IDs on this browser, with session fallback when storage fails. Enquiries create a copyable local brief only.

Names, venue capacities, package inclusions and generated images are illustrative. Promotional claims and the phone number retained from the reference have not been verified. Login and app-download dialogs explain their demo status. No testimonials, real-client case studies or operational booking claims were added.

## Research
- https://www.wedmegood.com/ — discovery by venue type and city.
- https://www.weddingwire.in/ — separation of venues, vendors and planning information.
- https://shaadisquad.com/services/ — concrete planning responsibilities.
- https://www.zola.com/ — clear benefit-led actions.

Original layouts and copy were created for this assignment; competitor branding and imagery were not copied.


## Shared shell and support refinement
Navigation now uses a sticky ivory header. Route focus no longer triggers an extra scroll; the menu is positioned below the mobile header so opening it does not push page content. Inner pages share a quieter introduction, back-to-home link, refined cards and a consistent footer. The service collection uses category-specific imagery.

A floating help panel provides clearly labelled local guidance; WhatsApp becomes an external business-contact link when configured. Missing phone numbers never produce a dialable placeholder. An enquiry brief can be shared through configured channels only after the visitor reviews it. See CLIENT_SETUP.md for deployment boundaries.
