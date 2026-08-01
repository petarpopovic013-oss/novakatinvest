# PropertyGallery Specification

## Overview
- Target: `src/components/PropertyGallery.tsx`
- Screenshot: `docs/design-references/03-gallery.webp`
- Interaction: hover-driven image treatment

## Screenshot-derived styles
- Section bottom padding: 112 px.
- Badge/title centered; title 30 px, two lines; gap to grid: 50 px.
- Gallery width: 844 px; 2 columns × 3 rows; 10 px gaps.
- Card aspect ratio: 1.52 / 1; border-radius: 6 px; overflow hidden.
- Image cover; bottom overlay gradient transparent to rgba(0,0,0,.48).
- Number left and label right, both 10 px white, 22 px inset.

## States
- Hover: image scale 1 → 1.025, transition 500 ms cubic-bezier(.2,.7,.2,1).

## Assets/content
01 Living Room `/images/living-room.jpg`; 02 Dining & Kitchen Room `/images/kitchen.jpg`; 03 Private Garden `/images/garden.jpg`; 04 Bathroom `/images/bathroom.jpg`; 05 Bedroom `/images/bedroom.jpg`; 06 Office Room `/images/office.jpg`.

## Responsive
- Desktop/tablet: two columns.
- Below 640 px: one column; 4:3 cards.
