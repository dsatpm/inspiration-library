/** Dev-server route for a vault image. Nothing is bundled or copied. */
export function vaultImageUrl(typeId, file) {
  return `/vault/${encodeURIComponent(typeId)}/${encodeURIComponent(file)}`
}
