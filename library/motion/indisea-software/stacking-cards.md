---
source: https://indiseasoftware.com
captured: 2026-09-17
category: motion
verdict: adopt
tags: [stacking-cards, scroll-pinning, oversized-numerals, colour-coded-steps, rounded-corners, split-card, b2b]
---

Scroll-driven stacking cards: each card pins, the next slides up over it, corner radius on the incoming card revealing the one beneath. Captured mid-transition with three layers visible — blue, amber, green.

Two mechanisms:

1. **Each step gets its own hue, and the hue is the step's identity.** Because the cards overlap, a sliver of the previous card's colour stays visible at the top edge — the user can see how many steps they have passed without a progress indicator. Colour carries position.
2. **Split each card: content left, an oversized numeral right.** The numeral is set enormous — cropped by the card edges, easily 600px — in a tint of the card's own colour. It reads as texture rather than text, but still answers "which step is this." Giant numerals are the cheapest way to fill the empty half of a card without stock imagery.

Copy discipline per card: eyebrow (`07 / WHY COMPANIES CALL US`), sub-label (`REASON 3`), heading at ~3rem, one short paragraph. Stacking cards fail when each card holds more than one idea — the reader cannot scroll back.

The rounded top corners are structural, not decorative: they are what make the stack read as sheets of paper rather than a hard cut.
