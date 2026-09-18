# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a **local-only design reference archive**, not a product. It stores screenshots of websites, landing pages, assets, components, and other visually appealing content collected from sources like awwwards.com.

Its job is to be a **source of truth for design decisions** — in this repo and in every other project. When building or reviewing UI anywhere, read from this library first to ground typography, spacing, color, motion, and layout choices in concrete captured examples rather than defaults.

Two directions of use:
- **Positive reference** — patterns worth reproducing (`library/`).
- **Negative reference** — patterns to avoid (`avoid/`), equally important. Never discard a bad example; file it.

## The browsing app

`src/` is a local directory UI over the archive, grouped by **design type**. It is a reading tool for the library, not a design example in itself.

```bash
npm run dev       # dev server
npm run build     # production build to dist/
npm run preview   # serve the build
npm run lint      # eslint .
```

Stack: Vite 8, React 19 (React Compiler enabled via `@rolldown/plugin-babel` in `vite.config.js`), ESLint flat config, CSS Modules. No TypeScript, no test runner, no Tailwind — adding any of those is a dependency decision, discuss first. The app has no runtime dependencies beyond React.

```
src/
  data/designTypes.js   # the genre registry: summary + vocabulary per type
  data/captures.js      # one entry per capture — the app's whole content model
  lib/images.js         # import.meta.glob over /library and /avoid
  components/           # CaptureCard, CaptureModal, TypeSection, StarIcon
```

**`src/data/captures.js` is the file you edit most.** Every capture needs `image`,
`sidecar`, `title`, `site`, `url`, `typeId`, `categories`, `tags`, `brief` and
`recipe`. `image` is the repo-root-relative path (`/library/...`), resolved to a
bundled URL by the glob in `src/lib/images.js` — the archive deliberately lives
outside `src/`, so the glob reaches up to the project root.

Adding a capture is two steps: file the `.png` + `.md` under `library/`, then add
the entry to `captures.js`. Nothing is derived from the sidecars at build time;
the sidecar is the durable record and `captures.js` is the app's index of it.
Keep them consistent by hand.

### Design types

Types are the app's top-level grouping and live in `src/data/designTypes.js`.
Each has a `summary` (what the mode is) and a `vocabulary` list (the terms needed
to brief or critique it). Types with no captures yet are still listed, so the
vocabulary exists before an example arrives.

**If a capture does not clearly belong to an existing type, ask rather than
guessing.** Inventing a near-duplicate type fragments the grouping. `SERIF NOIR`
was coined for this archive; every other type name came from the user.

### Image recipes

Each capture carries a `recipe` for regenerating comparable art:
`recipe.subject` fills the `[SUBJECT]` slot in `recipe.prompt`, and the modal's
**Copy image prompt** button emits the joined string for Higgsfield
`gpt_image_2`. Prompts state a STRICT palette and reserve empty space for
typography — keep that convention when writing new ones.

## Archive layout

Screenshots live outside `src/`, so the build never bundles them:

```
library/<category>/<source-slug>/        # e.g. library/landing-pages/linear-com/
  <name>.png                             # the capture
  <name>.md                              # required sidecar
avoid/<category>/<source-slug>/          # same shape, for anti-patterns
```

Categories are created as needed (`landing-pages/`, `components/`, `typography/`, `motion/`, `color/`, `assets/`, …). Keep the slug tied to the origin site so provenance survives.

## Sidecar metadata (required)

Every capture gets a `.md` file with the same basename. Without it an image is unsearchable and useless as a reference. Format:

```markdown
---
source: https://example.com/pricing
captured: 2026-09-17
category: landing-pages
verdict: adopt | avoid
tags: [dark-mode, split-hero, serif-display, scroll-reveal]
---

What works (or fails) and **why** — the transferable rule, not a description of the picture.
Name the mechanism: type scale ratio, grid, contrast, easing, hierarchy.
```

Rules that matter:
- `verdict` must match the directory (`library/` = adopt, `avoid/` = avoid).
- `captured` is an absolute date, never relative.
- The body must state a **reusable principle**. "Nice hero" is worthless; "display serif at ~7rem against 1rem body sets a 7:1 scale that carries the whole page" is usable.
- Tags are the primary retrieval path — be liberal and consistent with existing tags.

## Using the library when building UI

Before writing UI in any project:
1. Grep the sidecar `.md` files by tag/keyword for the pattern at hand.
2. Read the matching sidecars, then view the images with the Read tool for the actual visual.
3. Check `avoid/` for the same tags — knowing the failure mode is as valuable as the model.
4. Cite the reference you drew from (`library/components/stripe-com/nav.md`) when explaining a design choice.

Never invent a design principle and attribute it here. If the library has no relevant entry, say so and design from first principles instead.

## Git

Local-only repository — there is no remote. Commit directly to `main`; the global "always open a PR" rule does not apply here. Image binaries are committed intentionally; do not add `*.png` to `.gitignore`.

Commit types for archive work: `docs:` for sidecar/metadata edits, `chore:` for adding or reorganizing captures, `feat:`/`fix:` reserved for the browsing app.
