# StoryCarousel Specification

## Overview
- Target: `src/components/StoryCarousel.tsx`
- Screenshot: `docs/design-references/05-story.webp`
- Interaction: hover + horizontal scroll buttons on narrow screens

## Screenshot-derived styles
- Section padding: 92 px 0 110 px.
- Header: title left (29 px, two lines) and paragraph right (11 px, 410 px wide).
- Cards row: four equal columns, 10 px gap, margin-top 44 px.
- Cards: 234 × 302 px, radius 4 px, image cover, bottom dark gradient.
- Card content: 16 px inset; eyebrow 9 px; title 14 px; description 9 px; chevron bottom-right.
- Controls centered below row, two 30 × 30 px black squares, 8 px gap.

## Content
Badge: Inside the House. Title: Thoughtfully Designed. Beautifully Considered.
Paragraph: Explore Avenor Row House in detail. View room by room highlights, key features, and how each space is designed for modern living in a historic setting.

Cards: Multipurpose Spaces; Private Walled Garden; Private Bedrooms; Period Character.

## Responsive
- Below 760 px: horizontal snap row, card width 78vw, controls scroll by one card.
