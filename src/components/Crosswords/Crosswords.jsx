import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Crosswords.module.css'

const crosswords = [
  {
    publication: 'Wall Street Journal',
    date: '2/5/26',
    title: 'Down the Line',
    link: 'https://www.wsj.com/articles/down-the-line-thursday-crossword-february-5-75f903a4?gaa_at=eafs&gaa_n=AWEtsqdMbijHv6VnOZN6GMlPnKzD0FpAKWAMAt-XkMJEKbuzzapoQICCIhPKSY8bdEY%3D&gaa_ts=6990f8ba&gaa_sig=uPCuRfhMt2gl4oRfpzwSwCcOL-8J_0Dvp3sSKEGOYiTz8X9Gd8RSglx_J0WOp3SaVSITszuJEH9LX-iy7pELXA%3D%3D',
  },
  {
    publication: 'Apple News+',
    date: '2/4/26',
    title: "Who's First?",
    link: '',
  },
  {
    publication: 'Los Angeles Times',
    date: '1/13/26',
    title: 'Daily Crossword',
    link: '',
  },
  {
    publication: 'Wall Street Journal',
    date: '10/21/25',
    title: 'Centerpieces',
    link: 'https://www.wsj.com/articles/centerpieces-tuesday-crossword-october-21-baf40e5a?gaa_at=eafs&gaa_n=AWEtsqfCtkU4S177dnndtaEJavnG828CHGV_0f_JPdo4kzTvfIzOr8fq7XGUQCe-D4I%3D&gaa_ts=6990f7b5&gaa_sig=HtjWy3LTfvlt4EJDc0TPUqPFW5G-2wn_u3rx5ZEHQ_kmRffDpTExj1WjuDK5Uv3hupgvr9Hbwu6fCrrM1tJOFg%3D%3D',
  },
  {
    publication: 'New York Times',
    date: '10/13/25',
    title: 'Daily Crossword',
    link: 'https://www.nytimes.com/2025/10/12/crosswords/daily-puzzle-2025-10-13.html',
  },
]

function Crosswords() {
  const heading = useFadeIn()
  const rows = crosswords.map(() => useFadeIn())

  return (
    <section className={styles.container}>
      <div ref={heading.ref} className={`fadeIn ${heading.isVisible ? 'visible' : ''}`}>
        <h1 className={styles.heading}>Crosswords</h1>
        <p className={styles.blurb}>I write crosswords for fun sometimes - here are the ones that have been published!</p>
      </div>
      <div className={styles.grid}>
        {crosswords.map((crossword, index) => (
          <div key={index} ref={rows[index].ref} className={`${styles.row} fadeIn ${rows[index].isVisible ? 'visible' : ''}`}>
            <span className={styles.date}>{crossword.date}</span>
            <span className={styles.publication}>{crossword.publication}</span>
            {crossword.link ? (
              <a
                href={crossword.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.title}
              >
                {crossword.title}
              </a>
            ) : (
              <span className={styles.titleNoLink}>{crossword.title}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Crosswords
