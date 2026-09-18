import { useEffect, useRef, useState } from 'react'
import { captureImageUrl } from '../lib/images.js'
import { designTypeById } from '../data/designTypes.js'
import { StarIcon } from './StarIcon.jsx'
import styles from './CaptureModal.module.css'

const RECIPE_HEAD =
  'IMAGE RECIPE — fill [SUBJECT], send to Higgsfield gpt_image_2 @ 2K'

function buildImagePrompt(capture) {
  return capture.recipe.prompt.replace(
    '[SUBJECT]',
    `[SUBJECT: ${capture.recipe.subject}]`,
  )
}

function buildBrief(capture, type) {
  return [
    `${capture.title} — ${capture.site}`,
    capture.url,
    '',
    `Design type: ${type.name}`,
    `Categories: ${capture.categories}`,
    capture.verdict === 'avoid' ? 'Verdict: AVOID — anti-pattern' : null,
    '',
    capture.brief,
    '',
    'Tags:',
    ...capture.tags.map((tag) => `- ${tag}`),
    '',
    `${type.name} — ${type.summary}`,
    '',
    'Vocabulary:',
    ...type.vocabulary.map((term) => `- ${term}`),
    '',
    `Sidecar: ${capture.sidecar}`,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

export function CaptureModal({ capture, onClose }) {
  const dialogRef = useRef(null)
  const [copied, setCopied] = useState(null)
  const type = designTypeById[capture.typeId]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(null), 2400)
    return () => clearTimeout(timer)
  }, [copied])

  async function copy(kind, text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied({ kind, ok: true })
    } catch {
      // Clipboard access can be refused (insecure context, denied permission).
      // Say so rather than leaving the button looking inert.
      setCopied({ kind, ok: false })
    }
  }

  function buttonLabel(kind, idle) {
    if (copied?.kind !== kind) return idle
    return copied.ok ? 'Copied ✓' : 'Copy failed — select manually'
  }

  const imagePrompt = buildImagePrompt(capture)

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      onClick={(event) => {
        // Clicking the backdrop lands on the dialog element itself.
        if (event.target === dialogRef.current) dialogRef.current.close()
      }}
      aria-labelledby="capture-modal-title"
    >
      <div className={styles.scroll}>
        <div className={styles.shotWrap}>
          <img
            className={styles.shot}
            src={captureImageUrl(capture.image)}
            alt={`Screenshot of ${capture.title} on ${capture.site}`}
          />
        </div>

        <div className={styles.body}>
          <div className={styles.heading}>
            <h2 className={styles.title} id="capture-modal-title">
              {capture.title}
            </h2>
            <span className={styles.categories}>{capture.categories}</span>
          </div>

          <div className={styles.meta}>
            <span className={styles.typeChip}>
              <StarIcon />
              {type.name}
            </span>
            {capture.verdict === 'avoid' && (
              <span className={styles.avoidChip}>AVOID</span>
            )}
            <a
              className={styles.sourceLink}
              href={capture.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {capture.site}
            </a>
            <span>{capture.sidecar}</span>
          </div>

          <p className={styles.brief}>{capture.brief}</p>

          <div className={styles.section}>
            <span className={styles.label}>Tags</span>
            <ul className={styles.tags}>
              {capture.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <span className={styles.label}>{type.name}</span>
            <p className={styles.typeSummary}>{type.summary}</p>
            <ul className={styles.vocab}>
              {type.vocabulary.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <span className={styles.label}>Image recipe</span>
            <pre className={styles.recipe}>
              <span className={styles.recipeHead}>{RECIPE_HEAD}</span>
              {'\n'}
              <span className={styles.subject}>
                [SUBJECT: {capture.recipe.subject}]
              </span>
              {capture.recipe.prompt.replace('[SUBJECT]', '')}
            </pre>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => copy('brief', buildBrief(capture, type))}
            >
              {buttonLabel('brief', 'Copy brief')}
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() => copy('prompt', imagePrompt)}
            >
              {buttonLabel('prompt', 'Copy image prompt')}
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() => dialogRef.current.close()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
