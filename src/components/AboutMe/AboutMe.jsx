import ExternalLink from '../ExternalLink/ExternalLink'
import { FacebookIcon, InstagramIcon, LinkedInIcon, EmailIcon } from '../icons/SocialIcons'
import styles from './AboutMe.module.css'
import profilePhoto from '/images/profile_new.jpg'

function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.photoWrapper}>
        <img
          src={profilePhoto}
          alt="Katherine Xiong"
          className={styles.photo}
        />
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>Hi, I'm Katherine</h1>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <p>Massachusetts Institute of Technology</p>
          <p>B.S., M.Eng. Computer Science (2022, 2023)</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Interests</h2>
          <p>Coding | Investing</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Hobbies</h2>
          <p>Crosswords | Crochet | Pottery</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactRow}>
            <ExternalLink href="https://www.facebook.com/katherine.xiong.14" className={styles.contactButton} aria-label="Facebook">
              <FacebookIcon />
            </ExternalLink>
            <ExternalLink href="https://www.instagram.com/katherine_xiong52" className={styles.contactButton} aria-label="Instagram">
              <InstagramIcon />
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/katherine-xiong-ba1241171/?trk=profile-badge" className={styles.contactButton} aria-label="LinkedIn">
              <LinkedInIcon />
            </ExternalLink>
            <a href="mailto:kxiongtx@gmail.com" className={styles.contactButton} aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
