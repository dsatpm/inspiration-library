import { craftFloor, designTypes } from './data/designTypes.js'
import { TypeSection } from './components/TypeSection.jsx'
import { useVault } from './hooks/useVault.js'
import styles from './App.module.css'

export function App() {
  const vault = useVault()
  const complete = designTypes.filter(
    (type) => type.aesthetics && type.palette?.length,
  )
  const captureCount = Object.values(vault).reduce(
    (total, files) => total + files.length,
    0,
  )
  const mechanicsCount = designTypes.reduce(
    (total, type) => total + type.mechanics.length + type.never.length,
    0,
  )

  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <h1 className={styles.title}>Design Types</h1>
        <p className={styles.standfirst}>
          The genre registry this archive briefs from. Each type states what the
          mode is, the vocabulary to name its devices, the mechanics that make it
          work, and the failures specific to it. Screenshots live outside this
          repo — the rules are the durable record, not the pictures.
        </p>
        <div className={styles.stats}>
          <span className="tabular">{designTypes.length} types</span>
          <span className="tabular">{complete.length} fully specified</span>
          <span className="tabular">{mechanicsCount} rules</span>
          {captureCount > 0 && (
            <span className="tabular">{captureCount} captures</span>
          )}
        </div>
        <nav className={styles.nav} aria-label="Design types">
          {designTypes.map((type) => (
            <a key={type.id} className={styles.navLink} href={`#${type.id}`}>
              {type.name}
            </a>
          ))}
        </nav>
      </header>

      <section className={styles.floor} aria-labelledby="craft-floor">
        <h2 id="craft-floor" className={styles.floorTitle}>
          Craft floor
        </h2>
        <p className={styles.floorNote}>
          Engineering failures, not stylistic ones. No direction excuses them.
        </p>
        <ol className={styles.floorList}>
          {craftFloor.map((rule, index) => (
            <li key={rule} className={styles.floorRule}>
              <span className={`${styles.floorIndex} tabular`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </section>

      <main>
        {designTypes.map((type, index) => (
          <TypeSection
            key={type.id}
            type={type}
            index={index}
            captures={vault[type.id] ?? []}
          />
        ))}
      </main>

    </div>
  )
}
