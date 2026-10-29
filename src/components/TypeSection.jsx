import { useState } from 'react'
import { vaultImageUrl } from '../lib/vaultUrl.js'
import { VaultLightbox } from './VaultLightbox.jsx'
import styles from './TypeSection.module.css'

function RuleList({ label, items, tone }) {
  if (!items?.length) return null

  return (
    <div className={styles.block} data-tone={tone}>
      <h3 className={styles.blockLabel}>{label}</h3>
      <ol className={styles.rules}>
        {items.map((rule, index) => (
          <li key={rule} className={styles.rule}>
            <span className={`${styles.index} tabular`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={styles.ruleBody}>{rule}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function TypeSection({ type, index, captures = [] }) {
  const provisional = !type.aesthetics || !type.palette?.length
  const [open, setOpen] = useState(null)

  function step(direction) {
    setOpen((current) => {
      if (current === null) return current
      return (current + direction + captures.length) % captures.length
    })
  }

  return (
    <section id={type.id} className={styles.section}>
      <header className={styles.head}>
        <span className={`${styles.number} tabular`}>
          {String(index + 1).padStart(2, '0')} /
        </span>
        <h2 className={styles.name}>{type.name}</h2>
        {provisional && <span className={styles.provisional}>provisional</span>}
        <ul className={styles.tags}>
          {type.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <p className={styles.summary}>{type.summary}</p>

      {type.aesthetics && (
        <p className={styles.aesthetics}>{type.aesthetics}</p>
      )}

      {captures.length > 0 && (
        <div className={styles.captures}>
          <h3 className={styles.blockLabel}>
            Vault <span className="tabular">({captures.length})</span>
          </h3>
          <ul className={styles.thumbs}>
            {captures.map((file, position) => (
              <li key={file}>
                <button
                  type="button"
                  className={styles.thumb}
                  onClick={() => setOpen(position)}
                >
                  <img
                    className={styles.thumbImage}
                    src={vaultImageUrl(type.id, file)}
                    alt={`${type.name} capture ${position + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {open !== null && (
        <VaultLightbox
          typeId={type.id}
          typeName={type.name}
          files={captures}
          index={open}
          onStep={step}
          onClose={() => setOpen(null)}
        />
      )}

      <div className={styles.blocks}>
        <RuleList label="Vocabulary" items={type.vocabulary} tone="vocabulary" />
        <RuleList label="Mechanics" items={type.mechanics} tone="mechanics" />
        <RuleList label="Never" items={type.never} tone="never" />
      </div>

      <footer className={styles.foot}>
        <div className={styles.footBlock}>
          <h3 className={styles.blockLabel}>Palette</h3>
          {type.palette?.length ? (
            <ul className={styles.palette}>
              {type.palette.map((hex) => (
                <li key={hex} className={styles.swatch}>
                  <span
                    className={styles.swatchChip}
                    style={{ '--swatch': hex }}
                    aria-hidden="true"
                  />
                  <code className={`${styles.swatchHex} tabular`}>{hex}</code>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.footNote}>
              No palette sampled yet. Read the grounds and accents off the vault
              folder before briefing colour for this type.
            </p>
          )}
        </div>

        <div className={styles.footBlock}>
          <h3 className={styles.blockLabel}>Vault</h3>
          <code className={styles.vault}>{type.references}</code>
        </div>
      </footer>
    </section>
  )
}
