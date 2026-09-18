import { useMemo, useState } from 'react'
import { captures } from './data/captures.js'
import { designTypes } from './data/designTypes.js'
import { TypeSection } from './components/TypeSection.jsx'
import { CaptureModal } from './components/CaptureModal.jsx'
import styles from './App.module.css'

export function App() {
  const [selected, setSelected] = useState(null)

  const { populated, empty } = useMemo(() => {
    const byType = new Map(designTypes.map((type) => [type.id, []]))
    for (const capture of captures) byType.get(capture.typeId)?.push(capture)

    return {
      populated: designTypes
        .map((type) => ({ type, items: byType.get(type.id) ?? [] }))
        .filter((group) => group.items.length > 0),
      empty: designTypes.filter((type) => (byType.get(type.id) ?? []).length === 0),
    }
  }, [])

  const siteCount = new Set(captures.map((capture) => capture.site)).size

  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <h1 className={styles.title}>Inspiration Library</h1>
        <p className={styles.standfirst}>
          A local design reference archive, grouped by design type. Every capture
          carries the transferable rule it demonstrates, the vocabulary to brief
          it, and an image recipe you can send straight to Higgsfield.
        </p>
        <div className={styles.stats}>
          <span>{captures.length} captures</span>
          <span>{siteCount} sites</span>
          <span>{populated.length} design types</span>
          <span>
            {captures.filter((capture) => capture.verdict === 'avoid').length} avoid
          </span>
        </div>
        <nav className={styles.nav} aria-label="Design types">
          {populated.map(({ type, items }) => (
            <a key={type.id} className={styles.navLink} href={`#${type.id}`}>
              {type.name}
              <span className={styles.navCount}>{items.length}</span>
            </a>
          ))}
        </nav>
      </header>

      <main>
        {populated.map(({ type, items }) => (
          <TypeSection
            key={type.id}
            type={type}
            captures={items}
            onOpen={setSelected}
          />
        ))}

        {empty.length > 0 && (
          <section className={styles.empty} aria-label="Design types with no captures yet">
            Defined, no captures yet
            <ul className={styles.emptyList}>
              {empty.map((type) => (
                <li key={type.id} className={styles.emptyItem}>
                  {type.name}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      {selected && (
        <CaptureModal
          key={selected.id}
          capture={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
