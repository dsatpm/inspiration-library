import { vaultPath } from '../data/designTypes.js'
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

export function TypeSection({ type, index }) {
  const provisional = type.exemplars.length === 0

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

      <div className={styles.blocks}>
        <RuleList label="Vocabulary" items={type.vocabulary} tone="vocabulary" />
        <RuleList label="Mechanics" items={type.mechanics} tone="mechanics" />
        <RuleList label="Never" items={type.never} tone="never" />
      </div>

      <footer className={styles.foot}>
        <div className={styles.footBlock}>
          <h3 className={styles.blockLabel}>Read off</h3>
          {type.exemplars.length > 0 ? (
            <ul className={styles.exemplars}>
              {type.exemplars.map((exemplar) => (
                <li key={exemplar.url} className={styles.exemplar}>
                  <a className={styles.exemplarLink} href={exemplar.url}>
                    {exemplar.site}
                  </a>
                  <span className={styles.exemplarNote}>{exemplar.note}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.exemplarNote}>
              No capture yet. Mechanics are derived from the vocabulary — harden
              them the first time a screenshot lands in the vault.
            </p>
          )}
        </div>

        <div className={styles.footBlock}>
          <h3 className={styles.blockLabel}>Vault</h3>
          <code className={styles.vault}>{vaultPath(type.id)}</code>
        </div>
      </footer>
    </section>
  )
}
