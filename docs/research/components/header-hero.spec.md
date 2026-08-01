# HeaderHero Specification

## Overview
- Target: `src/components/HeaderHero.tsx`
- Screenshot: `docs/design-references/01-hero.webp`
- Interaction: click-driven hero arrows; hover-driven nav/buttons

## DOM structure
Rounded hero figure containing full-bleed image, top navigation overlay, bottom progress rule and two square arrow buttons.

## Screenshot-derived styles at 1024 px
- Hero x/y: 22/23; width: 980; height: 494; radius: 6 px; overflow: hidden.
- Image: absolute fill; object-fit: cover; focal point centered.
- Overlay: linear gradient, rgba(0,0,0,.2) at top and rgba(0,0,0,.32) at bottom.
- Nav width: about 490 px; top: 44 px; centered horizontally; white text, 12 px.
- Logo: 78 × 24 px, white.
- Contact button: 84 × 30 px; white background; black 11 px text; radius 3 px.
- Slider arrows: 31 × 31 px, 9 px gap; right: 24 px; bottom: 22 px.
- Progress ticks: left: 24 px; bottom: 24 px; six 28 px segments.

## States
- Arrow click swaps local hero imagery with a 300 ms opacity fade.
- Links move from opacity .82 to 1 on hover.
- Buttons move from white/black to black/white on hover, 180 ms ease.

## Assets and text
- `/images/hero.jpg`, `/images/landscape.jpg`, `/images/garden.jpg`
- Logo text: avenor
- Links: Home, About, Collection, Services; button: Contact Us

## Responsive
- Tablet: nav stays centered; contact remains.
- Mobile: hero height 520 px, link list hidden, logo left and contact right, arrow controls retained.
