import { useEffect, useRef } from 'react'
import { vaultImageUrl } from '../lib/vaultUrl.js'
import styles from './VaultLightbox.module.css'

export function VaultLightbox({ typeId, typeName, files, index, onClose, onStep }) {
  const dialogRef = useRef(null)
  const file = files[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'ArrowRight') onStep(1)
      if (event.key === 'ArrowLeft') onStep(-1)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onStep])

  return (
    <dialog ref={dialogRef} className={styles.dialog} onClose={onClose}>
      <header className={styles.head}>
        <div className={styles.heading}>
          <span className={styles.type}>{typeName}</span>
          <code className={`${styles.file} tabular`}>{file}</code>
        </div>
        <div className={styles.controls}>
          <span className={`${styles.count} tabular`}>
            {String(index + 1).padStart(2, '0')} / {String(files.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            className={styles.step}
            onClick={() => onStep(-1)}
            aria-label="Previous capture"
          >
            &larr;
          </button>
          <button
            type="button"
            className={styles.step}
            onClick={() => onStep(1)}
            aria-label="Next capture"
          >
            &rarr;
          </button>
          <button
            type="button"
            className={styles.close}
            onClick={() => dialogRef.current.close()}
          >
            Close
          </button>
        </div>
      </header>

      <div className={styles.stage}>
        <img
          className={styles.image}
          src={vaultImageUrl(typeId, file)}
          alt={`${typeName} capture: ${file}`}
        />
      </div>

      <footer className={styles.foot}>
        <code className={styles.path}>
          ~/Screenshots/taste-vault/{typeId}/{file}
        </code>
        <span className={styles.note}>
          Memory aid. The rules in designTypes.js are what binds.
        </span>
      </footer>
    </dialog>
  )
}
