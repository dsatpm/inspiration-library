import { useState } from 'react'
import { CaptureCard } from './CaptureCard.jsx'
import { StarIcon } from './StarIcon.jsx'
import styles from './TypeSection.module.css'

export function TypeSection({ type, captures, onOpen }) {
  const [showVocab, setShowVocab] = useState(false)

  return (
    <section className={styles.section} id={type.id}>
      <div className={styles.header}>
        <div className={styles.headingCol}>
          <h2 className={styles.name}>
            <StarIcon size={18} />
            {type.name}
          </h2>
          <span className={styles.count}>
            {captures.length} {captures.length === 1 ? 'capture' : 'captures'}
          </span>
          <ul className={styles.typeTags}>
            {type.tags.map((tag) => (
              <li key={tag} className={styles.typeTag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.summary}>{type.summary}</p>
          <button
            type="button"
            className={styles.vocabToggle}
            onClick={() => setShowVocab((open) => !open)}
            aria-expanded={showVocab}
          >
            {showVocab ? '− Hide vocabulary' : `+ Vocabulary (${type.vocabulary.length})`}
          </button>
          {showVocab && (
            <ul className={styles.vocab}>
              {type.vocabulary.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles.grid}>
        {captures.map((capture, index) => (
          <CaptureCard
            key={capture.id}
            capture={capture}
            index={index}
            total={captures.length}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}
