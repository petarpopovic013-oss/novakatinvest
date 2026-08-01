# Page Topology

## Source and coordinate system

- Source of truth: `Materials/example.jpg`, 1024 × 4436 px.
- No source URL was supplied, so DOM/computed-style extraction from the original is impossible. Measurements below are taken directly from the screenshot and mapped to CSS pixels at a 1024 px viewport.
- Main page is a warm off-white canvas with a 10–14 px outer gutter and softly rounded media.

## Section order

1. `HeaderHero` — image-backed hero with overlaid logo/nav and slider arrows; static layout with hover controls.
2. `PropertyOverview` — property name, short description, guide price and two CTAs.
3. `PropertyFeatures` — centered badge/title and an eight-card facts grid.
4. `PropertyGallery` — centered title and a 2 × 3 editorial image grid.
5. `Specifications` — split dark facts panel and pale three-floor line drawing.
6. `StoryCarousel` — heading/copy row, four editorial cards and arrow controls.
7. `InquirySection` — full-width landscape image with centered dark form panel.
8. `SiteFooter` — charcoal link area and oversized Avenor wordmark.

All sections are in normal document flow. Header content overlays the hero image, but it is not sticky. Gallery and story cards use image overlays. There is no visible evidence of scroll-snap or time-driven motion.

## Responsive plan

- Desktop reference: 1024 px screenshot, scaled fluidly up to a 1440 px max canvas.
- Tablet: retain two-column galleries; stack the specifications split below 820 px.
- Mobile: collapse grids to one column, replace nav links with a compact contact button, stack overview and footer columns, and allow story cards to scroll horizontally.
