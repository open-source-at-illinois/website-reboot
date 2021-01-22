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
            We are an RSO registered with UIUC dedicated to discussing, developing, and utilizing FOSS and open-source 
            software in order to promote a healthy and free internet. 
          </p>
          <h2>MEETINGS</h2>
          <p>
          We hold general meetings on Saturdays at 12:30PM CT. We also host project meetings and educational workshops to learn more about open-source!
          </p>
          <h2>DISCORD</h2>
          <p>
            Come join our active development community on Discord at <a href='https://discord.gg/yumdCzf' target="_blank">https://discord.gg/yumdCzf</a>! We collaborate on projects and discuss all things open-source.
          </p>
        </section>
      </section>
    </Layout>  
  )
}
