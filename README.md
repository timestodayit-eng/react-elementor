# Landing CMS Pro v3 — Elementor-style Builder

Next.js + Hostinger MySQL landing page CMS with a visual Elementor-inspired section/column/element builder.

## Builder model
- Section
  - 1–4 columns
  - Elements inside each column
  - Inner Section element with nested columns
- Elements: Heading, Text, Button, Image, YouTube Video, Divider, Spacer, Inner Section, Raw HTML/CSS/JS

## Visual controls
- Drag sections to reorder
- Drag elements between columns
- Drag elements into Inner Section columns
- Duplicate/remove section and elements
- Column width controls
- Section/column background colors
- Text and button colors
- Font size and weight
- Alignment
- Padding, margin and border radius
- Animations: fade, slide, zoom, bounce, pulse
- Desktop/mobile builder preview
- Raw Blocks JSON remains available
- Raw HTML/CSS/JS element remains sandboxed

## Tracking
The existing v2 global Tracking/GTM settings remain. Use the invisible global HEAD/BODY code fields for GTM, Meta Pixel, GA4 or trusted scripts that should apply site-wide.

## Upgrade from v2
The renderer keeps legacy fallback support. Existing flat v1/v2 blocks are normalized into sections when opened in the v3 builder. Saving a page stores the newer section/column/element JSON format.

## Hostinger
Environment variables stay the same as v2. Import `sql/schema-hostinger.sql` only when required; it uses IF NOT EXISTS and keeps existing tables/data.
