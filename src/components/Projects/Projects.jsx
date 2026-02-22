import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'M.Eng. Thesis',
    description: 'Beyond Dark Patterns: A Concept-Based Framework for Ethical Software Design',
    link: 'https://dl.acm.org/doi/10.1145/3613904.3642781',
  },
  {
    title: 'MAS.863 How to Make (Almost) Anything',
    description: 'Every week was a different cool project :)',
    link: 'https://fab.cba.mit.edu/classes/863.21/EECS/people/katherine/index.html',
  },
  {
    title: '6.170 Software Studio',
    description: 'Raft: A website to connect communities',
    link: 'https://drive.google.com/file/d/1D4ephEzGgG_fqhSLqFEiu6SoO4pzKEn9/view',
  },
  {
    title: '21M.385 Interactive Music Systems',
    description: 'Beat-Boxer: A karate music rhythm game',
    link: 'https://drive.google.com/file/d/1OK17rgkgRLVteq_VmrabuI3PWsjBNW79/view',
  },
  {
    title: '6.835 Intelligent Multimodal User Interfaces',
    description: 'Virtual Rage Cage: Release your rage in a safe and contained manner',
    link: 'https://www.youtube.com/watch?v=angT3s0ER0Y',
  },
  {
    title: '6.08 Interconnected Embedded Systems',
    description: 'Music Sync Lights: LED light system that automatically syncs to music',
    link: 'https://www.youtube.com/watch?v=vCCKnwrtTOI',
  },
  {
    title: '6.4212 Robotic Manipulation',
    description: 'Robot Whack-a-Mole Player: A robot that plays Whack-a-Mole',
    link: 'https://www.youtube.com/watch?v=FfJWKTg6WFI',
  },
  {
    title: 'Tractor',
    description: 'Play the card game Tractor online!',
    link: 'https://kxiong22x.github.io/tractor'
  }
]

function Projects() {
  const heading = useFadeIn()
  const cards = projects.map(() => useFadeIn())

  return (
    <section className={styles.container}>
      <div ref={heading.ref} className={`fadeIn ${heading.isVisible ? 'visible' : ''}`}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.blurb}>From MIT and beyond!</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} ref={cards[index].ref} className={`${styles.card} fadeIn ${cards[index].isVisible ? 'visible' : ''}`}>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              Link
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
