---
source: https://newcastleartgallery.nsw.gov.au/
brand: Newcastle Art Gallery
captured: 2026-09-17
category: footer
verdict: avoid
tags: [sticky-header, z-index-collision, overlapping-text, insufficient-padding, footer, accessibility, regression]
---

The sticky `SEARCH` / `MENU` header sits on top of the footer's `Connect` column: the word `Facebook` is overlapped by `SEARCH`, and the gallery's round logo mark lands on top of `Connect`. Both strings are rendered unreadable.

**The failure mechanism:** a persistently fixed header with no reserved space in the document flow, combined with a footer whose top padding is smaller than the header's height. Everywhere else on the page the header floats over photography or empty black and looks fine — the collision only appears where the footer's first row of text happens to land at the same y-position as the header's right-hand controls.

**The rule:** any element fixed to the viewport must have a corresponding minimum offset reserved on every region that can scroll beneath it — usually `padding-block-start` on the footer and on section starts, at least equal to the header height. Never rely on "there is usually nothing there."

**Why it is easy to ship:** it is invisible at most scroll positions and at most viewport widths. It only reproduces at the very bottom of the page. Test sticky headers explicitly at scroll-end, not just mid-page.

Secondary failure: the header has no background fill, so it is legible only when the content behind it is dark or empty. A translucent or solid header band would have prevented the text-on-text case entirely, at the cost of the transparent aesthetic used in [[hero]].
