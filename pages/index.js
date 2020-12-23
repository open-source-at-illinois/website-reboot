import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.container}>
        <img src="./images/Logo.png" className={styles.image}/>

        <section className={styles.homeText}>
          <h1>WELCOME</h1>
          <h2>ABOUT OPEN SOURCE</h2>
          <p>
            We are an RSO registered with UIUC dedicated to developing open-source 
            software to promote a healthy and free internet. 
          </p>
          <h2>ANNOUNCEMENTS</h2>
          <p>
            First general meeting this Saturday (2020.9.5)!
          </p>
          <h2>DISCORD</h2>
          <p>
            Come join our active development community on Discord at <a href='https://discord.gg/yumdCzf' target="_blank">https://discord.gg/yumdCzf</a>! We collaborate on projects, post helpful articles on various topics.
          </p>
        </section>
      </section>
    </Layout>  
  )
}
