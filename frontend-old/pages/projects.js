import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle('Projects')}</title>
            </Head>
            <div style={{width:'100vw', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <h2>Not yet implemented. Want to help? </h2>
                <p>Come join our Discord at <a href='https://discord.gg/yumdCzf' target="_blank">https://discord.gg/yumdCzf</a> and reach out to exec!</p>
            </div>
        </Layout>
    )
}