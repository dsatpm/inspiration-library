import { useId, useState } from 'react'
import { CaptureCard } from './CaptureCard.jsx'
import { StarIcon } from './StarIcon.jsx'
import { ChevronIcon } from './ChevronIcon.jsx'
import styles from './TypeSection.module.css'

export function TypeSection({ type, captures, onOpen }) {
  const [showVocab, setShowVocab] = useState(false)
  const vocabId = useId()

  return (
    <section className={styles.section} id={type.id} aria-labelledby={`${type.id}-name`}>
      <div className={styles.header}>
        <div className={styles.headingCol}>
          <h2 className={styles.name} id={`${type.id}-name`}>
            <StarIcon size={18} />
            {type.name}
          </h2>
          <span className={`${styles.count} tabular`}>
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

        <div className={styles.summaryCol}>
          <p className={styles.summary}>{type.summary}</p>
          <button
            type="button"
            className={styles.vocabToggle}
            onClick={() => setShowVocab((open) => !open)}
            aria-expanded={showVocab}
            aria-controls={vocabId}
          >
            <ChevronIcon open={showVocab} />
            {showVocab ? 'Hide vocabulary' : `Vocabulary · ${type.vocabulary.length} terms`}
          </button>
          {showVocab && (
            <ul className={styles.vocab} id={vocabId}>
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
