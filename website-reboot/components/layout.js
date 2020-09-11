import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'

export const siteTitle = 'OSAI'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Official website for Open Source at Illinois Club"
        />
      </Head>
      <header className={styles.navbar}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/announcements">
          <a className={styles.link}>Announcements</a>
        </Link>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
        <Link href="/workshops">
          <a className={styles.link}>Workshops</a>
        </Link>
        <Link href="/members">
          <a className={styles.link}>Members</a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer>
        <p>Email us: osai-exec@lists.illinois.edu</p>
      </footer>
    </div>
  )
}
