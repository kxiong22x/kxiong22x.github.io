import { useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './Navbar.module.css'

const links = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'crosswords', label: 'Crosswords' },
]

const sectionIds = links.map((link) => link.id)

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
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`${styles.link} ${activeId === link.id ? styles.active : ''}`}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
