import { captureImageUrl } from '../lib/images.js'
import { designTypeById } from '../data/designTypes.js'
import { StarIcon } from './StarIcon.jsx'
import styles from './CaptureCard.module.css'

const VISIBLE_TAGS = 3

export function CaptureCard({ capture, index, total, onOpen }) {
  const type = designTypeById[capture.typeId]
  const shown = capture.tags.slice(0, VISIBLE_TAGS)
  const hidden = capture.tags.length - shown.length

  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => onOpen(capture)}
      aria-label={`${capture.title} — ${capture.site}. Open details.`}
    >
      <div className={styles.thumb}>
        <img
          className={styles.shot}
          src={captureImageUrl(capture.image)}
          alt={`Screenshot of ${capture.title} on ${capture.site}`}
          loading="lazy"
          decoding="async"
        />
        {capture.verdict === 'avoid' && (
          <span className={styles.avoidFlag}>AVOID</span>
        )}
        <div className={styles.thumbFoot}>
          <span className={styles.type}>
            <StarIcon />
            {type.name}
          </span>
          <span className={styles.count}>
            {index + 1} of {total}
          </span>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{capture.title}</h3>
          <span className={styles.categories}>{capture.categories}</span>
        </div>
        <span className={styles.site}>{capture.site}</span>
        <ul className={styles.tags}>
          {shown.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
          {hidden > 0 && <li className={styles.more}>+{hidden}</li>}
        </ul>
      </div>
    </button>
  )
}
