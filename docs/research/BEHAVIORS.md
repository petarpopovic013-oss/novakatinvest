# Behaviors

The supplied source is a static screenshot, so behavior cannot be observed directly. The implemented interactions preserve the visible interaction model without inventing navigation flows.

- Header links and buttons: opacity/background transitions, 180 ms ease.
- Hero arrows: button press changes the hero image between the supplied local placeholders; transition is a short opacity fade.
- Primary and secondary CTA buttons: invert foreground/background on hover.
- Gallery images: subtle 1.025 scale on hover, 500 ms cubic easing.
- Story cards: subtle image scale and dark-overlay lift on hover; arrow buttons scroll the row on narrow viewports.
- Inquiry form: native input focus states; submit prevents navigation and displays a small success message.
- Responsive: desktop reference at 1024 px; inferred breakpoints at 820 px and 640 px because no mobile reference was supplied.
- No sticky header, parallax, smooth-scroll library, scroll-snap or autoplay behavior is visible in the source.
