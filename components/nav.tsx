import Link from 'next/link'
import styles from 'styles/nav.module.scss'

export default function Nav() {
  return (
    <nav>
      <ul className={styles.row}>
        <li><Link className={styles.link} href="/">HOME</Link></li>
        <li><Link className={styles.link} href="/about">ABOUT</Link></li>
        <li><Link className={styles.link} href="/news">NEWS</Link></li>
      </ul>
    </nav>
  )
}