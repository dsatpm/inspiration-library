import { useEffect, useState } from 'react'

/**
 * Reads the vault manifest the dev server exposes at `/vault/index.json`.
 *
 * Absent vault, absent dev server, built `dist/` — all return `{}` and the app
 * renders exactly as it did before thumbnails existed. The rules are the
 * record; the pictures are a convenience.
 */
export function useVault() {
  const [manifest, setManifest] = useState({})

  useEffect(() => {
    let live = true

    async function load() {
      try {
        const response = await fetch('/vault/index.json')
        if (!response.ok) return
        const data = await response.json()
        if (live) setManifest(data)
      } catch {
        // Served without the vault plugin. Nothing to show, nothing to say.
      }
    }

    load()
    return () => {
      live = false
    }
  }, [])

  return manifest
}
