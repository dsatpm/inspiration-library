/**
 * Resolves the repo-root-relative capture paths in `src/data/captures.js` to
 * bundled asset URLs. The archive lives outside `src/` on purpose, so the glob
 * reaches up to the project root.
 */
const modules = import.meta.glob('/{library,avoid}/**/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function captureImageUrl(path) {
  return modules[path]
}

/** Paths listed in captures.js that have no matching file on disk. */
export function missingImages(captures) {
  return captures.filter((capture) => !modules[capture.image]).map((c) => c.image)
}
