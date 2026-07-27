import { useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { SECTIONS } from '../../constants/sections'
import styles from './Navbar.module.css'

const sectionIds = SECTIONS.map((section) => section.id)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const activeId = useActiveSection(sectionIds)

  return (
    <nav className={styles.nav}>
      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={styles.menuIcon} />
      </button>
      <div className={`${styles.linkList} ${isOpen ? styles.linkListOpen : ''}`}>
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${styles.link} ${activeId === section.id ? styles.active : ''}`}
            onClick={closeMenu}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
