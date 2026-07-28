import FadeIn from '../FadeIn/FadeIn'
import ExternalLink from '../ExternalLink/ExternalLink'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Tractor',
    description: 'Play the card game Tractor online!',
    link: 'https://tractor.katherinexiong.com',
    // image: '/images/tractor.jpg',
  },
  {
    title: 'Spending Tracker',
    description: 'Analyze your credit card spending!',
    link: 'https://spending.katherinexiong.com',
    // image: '/images/spending.jpg',
  },
  {
    title: 'M.Eng. Thesis',
    description: 'Beyond Dark Patterns: A Concept-Based Framework for Ethical Software Design',
    link: 'https://dl.acm.org/doi/10.1145/3613904.3642781',
    // image: '/images/meng.jpg',
  },
  {
    title: 'MAS.863 How to Make (Almost) Anything',
    description: 'Every week was a different cool project :)',
    link: 'https://fab.cba.mit.edu/classes/863.21/EECS/people/katherine/index.html',
    // image: '/images/mas863.jpg',
  },
  {
    title: '6.170 Software Studio',
    description: 'Raft: A website to connect communities',
    link: 'https://drive.google.com/file/d/1D4ephEzGgG_fqhSLqFEiu6SoO4pzKEn9/view',
    // image: '/images/raft.jpg',
  },
  {
    title: '21M.385 Interactive Music Systems',
    description: 'Beat-Boxer: A karate music rhythm game',
    link: 'https://drive.google.com/file/d/1OK17rgkgRLVteq_VmrabuI3PWsjBNW79/view',
    // image: '/images/beatboxer.jpg',
  },
  {
    title: '6.835 Intelligent Multimodal User Interfaces',
    description: 'Virtual Rage Cage: Release your rage in a safe and contained manner',
    link: 'https://www.youtube.com/watch?v=angT3s0ER0Y',
    // image: '/images/ragecage.jpg',
  },
  {
    title: '6.08 Interconnected Embedded Systems',
    description: 'Music Sync Lights: LED light system that automatically syncs to music',
    link: 'https://www.youtube.com/watch?v=vCCKnwrtTOI',
    // image: '/images/608.jpg',
  },
  // {
  //   title: '6.4212 Robotic Manipulation',
  //   description: 'Robot Whack-a-Mole Player: A robot that plays Whack-a-Mole',
  //   link: 'https://www.youtube.com/watch?v=FfJWKTg6WFI',
  // },
]

function Projects() {
  return (
    <section className={styles.container}>
      <FadeIn>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.blurb}>From MIT and beyond!</p>
      </FadeIn>
      <div className={styles.grid}>
        {projects.map((project) => (
          <FadeIn
            key={project.title}
            as={ExternalLink}
            href={project.link}
            className={styles.card}
          >
            {project.image && (
              <img src={project.image} alt={project.title} className={styles.cardImage} />
            )}
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default Projects
