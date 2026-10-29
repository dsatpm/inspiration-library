import { createReadStream } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import { homedir } from 'node:os'
import { extname, join, resolve, sep } from 'node:path'

/**
 * Serves `~/Screenshots/taste-vault/` over the dev server so the app can show
 * thumbnails without a single image entering the repo.
 *
 * Dev only, by design. `vite build` produces a `dist/` with no vault routes —
 * the screenshots are a local memory aid, not part of the artefact.
 */

export const VAULT_ROOT = join(homedir(), 'Screenshots', 'taste-vault')

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
}

/**
 * One path segment. Screenshot tools name files with spaces and dots
 * (`Screenshot 2026-09-17 at 10.34.34 PM.png`), so the guard rejects
 * separators, traversal and dotfiles rather than policing the character set —
 * `resolve()` containment below is what actually keeps reads inside the vault.
 */
function isSafeSegment(name) {
  return (
    typeof name === 'string' &&
    name.length > 0 &&
    !name.startsWith('.') &&
    !name.includes('/') &&
    !name.includes('\\') &&
    !name.includes('\0') &&
    !name.split(sep).includes('..')
  )
}

function isImage(name) {
  return extname(name).toLowerCase() in MIME
}

/** True when `filePath` really sits inside the vault, symlink tricks included. */
function insideVault(filePath) {
  const root = resolve(VAULT_ROOT)
  const target = resolve(filePath)
  return target === root || target.startsWith(root + sep)
}

/** `{ [typeId]: ['scrnli_x.png', …] }` — read fresh on every request. */
async function readManifest() {
  const entries = await readdir(VAULT_ROOT, { withFileTypes: true })
  const folders = entries.filter(
    (entry) => entry.isDirectory() && isSafeSegment(entry.name),
  )

  const pairs = await Promise.all(
    folders.map(async (folder) => {
      const files = await readdir(join(VAULT_ROOT, folder.name))
      return [
        folder.name,
        files.filter((name) => isSafeSegment(name) && isImage(name)).sort(),
      ]
    }),
  )

  return Object.fromEntries(pairs)
}

export function vault() {
  return {
    name: 'taste-vault',
    apply: 'serve',

    configureServer(server) {
      server.middlewares.use('/vault', async (req, res, next) => {
        const path = decodeURIComponent((req.url ?? '/').split('?')[0])

        if (path === '/index.json') {
          try {
            const manifest = await readManifest()
            res.setHeader('Content-Type', 'application/json')
            res.setHeader('Cache-Control', 'no-store')
            res.end(JSON.stringify(manifest))
          } catch {
            // No vault on this machine is a valid state — the registry is the
            // durable record, the screenshots are optional.
            res.setHeader('Content-Type', 'application/json')
            res.end('{}')
          }
          return
        }

        const [, typeId, file, ...rest] = path.split('/')
        if (
          rest.length > 0 ||
          !isSafeSegment(typeId) ||
          !isSafeSegment(file) ||
          !isImage(file)
        ) {
          next()
          return
        }

        const filePath = join(VAULT_ROOT, typeId, file)
        if (!insideVault(filePath)) {
          next()
          return
        }

        try {
          const info = await stat(filePath)
          if (!info.isFile()) {
            next()
            return
          }

          res.setHeader('Content-Type', MIME[extname(file).toLowerCase()])
          res.setHeader('Content-Length', info.size)
          createReadStream(filePath).pipe(res)
        } catch {
          next()
        }
      })
    },
  }
}
