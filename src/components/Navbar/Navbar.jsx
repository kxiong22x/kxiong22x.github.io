import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#about" className={styles.link}>About Me</a>
      <a href="#projects" className={styles.link}>Projects</a>
      <a href="#crosswords" className={styles.link}>Crosswords</a>
    </nav>
  )
}

export default Navbar
