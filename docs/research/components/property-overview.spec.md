# PropertyOverview Specification

## Overview
- Target: `src/components/PropertyOverview.tsx`
- Screenshot: `docs/design-references/01-hero.webp`
- Interaction: hover-driven CTA styling

## DOM and screenshot-derived styles
- Two-row grid immediately below hero; 28 px top padding and 38 px bottom padding.
- First row: title left and description right; second row: price left and two equal-width buttons right.
- Title: 27 px, weight 400, line-height 1.05, letter-spacing -0.04em.
- Description: 11 px, #555, maximum width 460 px, line-height 1.5.
- Label: 10 px; price: 19 px.
- Buttons: 190 × 40 px at 1024 viewport; primary #1f1f1f/white; secondary transparent with #b9b9b5 border; 11 px text.

## Content
- Avenor Row House
- A discreet four-bedroom Georgian townhouse arranged across three floors, with original cornicing, sash windows and a walled private garden a short walk from Royal Crescent.
- Guide Price / From £925,000
- Book Private Viewing / Request Brochure

## Responsive
- Below 720 px, all copy and buttons stack; buttons span full width.
