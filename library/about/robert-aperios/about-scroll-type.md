---
source: https://www.runrobrun.com/
brand: Robert Aperios
captured: 2026-09-17
category: about
verdict: adopt
tags: [scroll-transition, type-swap, grotesk, mirrored-columns, motion, off-white, captured-mid-animation]
---

Captured mid-scroll-transition — two statements (`THOUGHTFUL IDEAS SHAPED WITH MEANING` left, `BOLD SYSTEMS BUILT TO HOLD ATTENTION` right) are swapping in, with the outgoing line still ghosted behind the incoming one. The blur/overlap is the animation, not a rendering bug.

The transferable rule: **mirrored typographic columns let you state two parallel claims as a single composition.** Left column is flush-left, right column is flush-right; the gap between them holds the 3D object. The symmetry is what signals the two claims are of equal weight — a stacked layout would imply ranking.

The mid-transition state is worth keeping as reference in its own right: the incoming text arrives per-line with the previous line still fading, so the block is never blank. **Never animate a text block from zero opacity if the space would otherwise be empty** — overlap the exit and entry so the composition holds at every frame.

Persistent framing elements (`ABOUT`, `LOCATION: ENGLAND`, live clock, corner crosshairs) stay fixed through the transition and give the motion something stable to move against.
