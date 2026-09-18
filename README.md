# Inspiration Library

The design-type registry. Rules, not pictures.

`src/data/designTypes.js` is the archive: one entry per design type, each with
the vocabulary to brief it, the mechanics that make it work, and the failures
specific to it — plus a shared `craftFloor` that binds every type.

Screenshots live at `~/Screenshots/taste-vault/<design-type-id>/`, outside this
repo. Nothing here reads them.

```bash
npm run dev       # browse the registry
npm run build
npm run lint
```

The `design-bakeoff` skill writes its output to `~/dev/demos/taste-vault/` —
local-only, never committed.

See `CLAUDE.md` for the rules on editing the registry.
