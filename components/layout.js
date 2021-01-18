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

      
      <svg width="4em" height="4em" viewBox="0 0 16 16" className={`${"bi bi-list"} ${styles.fa_bars}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
      
      <main className={styles.main}>{children}</main>

      <footer className={styles.footerContainer}>
        <p>Email us: osai-exec@lists.illinois.edu</p>
      </footer>
    </div>
  )
}
