---
source: https://weevolveit.com/
brand: WeEvolveIT
captured: 2026-09-17
category: motion
verdict: adopt
tags: [horizontal-scroll, ghost-numerals, monospace, step-progress-indicator, light-mode, scroll-hijack, section-pinning]
---

Horizontally scrolling method section, captured mid-transition between panels: the outgoing step (`Diagnose.`) exits left while the incoming (`Design.`) enters right.

Mechanisms worth taking:

1. **Ghost numerals behind each panel.** Each step has its index (`02`, `03`) set enormous in a pale tint directly behind the heading. As the section scrolls the numerals move at a different rate to the text, so parallax depth comes free from an element that is also a progress indicator.
2. **An explicit step rail at the bottom.** `DISCOVER · DIAGNOSE · DESIGN` with connector lines and dots, the current step filled in magenta, the remaining steps as hollow dots. **Horizontal scroll must always show how far the track runs** — the single biggest failure of the pattern is trapping the user in a section of unknown length. This rail states both position and total.
3. Bullet lists inside each panel use an em-dash prefix rather than a disc, keeping the monospace grid intact.

Note the theme inverts from the site's dark hero to a light ground for this section — the section change is signalled by full inversion, the same colour-block-boundary principle as [[talk-to-us]].
