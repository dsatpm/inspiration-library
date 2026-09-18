# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This repo is the **design-type registry** — the source of truth for design
decisions in this project and every other one. It holds rules, not pictures.

When building or reviewing UI anywhere, read the registry first to ground
typography, spacing, colour, motion and layout in captured mechanics rather than
defaults.

**Screenshots do not live here.** They live at
`~/Screenshots/taste-vault/<design-type>/`, outside the repo, untracked and
unbundled. Nothing in the app reads them. If a screenshot teaches something, the
rule goes into `src/data/designTypes.js` and the image stays in the vault as a
memory aid. The repo must stay text-only.

## `src/data/designTypes.js` is the archive

One entry per design type. Five fields carry everything:

| Field | Job |
|---|---|
| `summary` | what the mode is, in one paragraph |
| `vocabulary` | the devices that **are** the type — name these when briefing |
| `mechanics` | the measurable rules, read off real pages |
| `never` | the failure modes specific to this type |
| `exemplars` | `{ site, url, note }` — where the rules came from, no image |

Plus one shared export, `craftFloor`: engineering failures no direction excuses
(fixed-header offset, placeholder-as-label, measure limits, reduced motion).

Rules that matter:

- **A mechanic must be measurable or falsifiable.** "Nice hierarchy" is
  worthless. "Display serif near 8rem against 0.8rem labels — a 10:1 ratio"
  is usable. Name the mechanism: ratio, grid, contrast, easing, ordering.
- A type with an empty `exemplars` array is **provisional** — its mechanics were
  derived from the vocabulary, not read off a page. The app badges it. Harden it
  the first time a real capture lands in its vault folder.
- **If a capture does not clearly belong to an existing type, ask rather than
  guessing.** Inventing a near-duplicate type fragments the grouping. `SERIF
  NOIR` was coined for this archive; every other name came from the user.
- Adding a type means adding a vault folder: `~/Screenshots/taste-vault/<id>/`.

## The vault

```
~/Screenshots/taste-vault/<design-type-id>/<site-slug>--<what>.png
```

Flat, one folder per design type, no sidecars, no `library/` vs `avoid/` split —
an anti-pattern is recorded as a line in that type's `never` array, not as a
directory. Filenames are the only metadata. Anything worth remembering about a
screenshot belongs in `designTypes.js` before the screenshot is worth keeping.

## The app

`src/` renders the registry. It is a reading tool, not a design example.

```bash
npm run dev       # dev server
npm run build     # production build to dist/
npm run preview   # serve the build
npm run lint      # eslint .
```

Stack: Vite 8, React 19 (React Compiler via `@rolldown/plugin-babel` in
`vite.config.js`), ESLint flat config, CSS Modules. No TypeScript, no test
runner, no Tailwind — adding any of those is a dependency decision, discuss
first. No runtime dependencies beyond React.

```
src/
  data/designTypes.js       # the only content file
  components/TypeSection    # one panel per type
  App.jsx                   # masthead, craft floor, types
```

Nothing globs outside `src/`. If you find yourself adding an image glob, stop —
that is the thing this layout exists to prevent.

## Bakeoffs

Bakeoff output is **local-only and never committed**. The `design-bakeoff` skill
writes to `~/dev/demos/taste-vault/<idea-slug>/` — a shared `BRIEF.md`, five
`directions/vN.md` contracts, five `vN/` folders holding `impeccable.html` and
`taste.html`, a `manifest.json`, and a generated `index.html` split viewer.
Scope is a full landing page on a fixed seven-section spine.

`bakeoffs/` is gitignored here as a guard against it drifting back in.

## Using the registry when building UI

1. Pick the design type, or ask which one applies.
2. Read its `summary` + `vocabulary` to brief, its `mechanics` to build, its
   `never` to review.
3. Check `craftFloor` before shipping.
4. Cite what you drew from — `designTypes.js → SERIF NOIR → mechanics[3]` — when
   explaining a choice.

Never invent a design principle and attribute it here. If the registry has no
relevant entry, say so and design from first principles instead.

## Git

Local-only repository — there is no remote. Commit directly to `main`; the
global "always open a PR" rule does not apply here.

Commit types: `docs:` for registry edits, `chore:` for reorganisation,
`feat:`/`fix:` for the app.
