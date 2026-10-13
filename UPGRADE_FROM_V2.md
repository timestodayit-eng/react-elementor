# Upgrade from Landing CMS Pro v2 to v3

## What changed
The page builder is now section/column/element based, similar to Elementor:

- Root Section
- 1–4 Columns per Section
- Drag/drop Elements between Columns
- Inner Section with nested Columns
- Drag/drop Elements into Inner Section Columns
- Heading/Text/Button/Image/Video/Divider/Spacer/Raw HTML-CSS-JS
- Color controls
- Typography size/weight controls
- Button color and radius controls
- Padding and margin controls
- Section/column backgrounds
- Animations
- Desktop and mobile editor preview
- Raw Blocks JSON remains available

## Database
No destructive migration is required. The page JSON stays in the existing `pages` / template JSON fields. Existing flat blocks are normalized to section-based blocks when opened in the new builder.

## Global tracking
The v2 global invisible HEAD/BODY tracking fields remain. Keep GTM/Meta/GA4 in the global tracking settings instead of pasting the same script into every page.

## Deployment
Keep the same Hostinger environment variables and database connection. Replace the application code with v3, deploy, then open a page/template in the editor and Save once to persist the new JSON structure.
