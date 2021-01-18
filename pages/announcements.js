import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Announcements.module.scss';
import Loader from 'react-loader-spinner'


export default function Announcements() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://api.opensourceatillinois.com/messages?count=6',
          );
          setMessages(result.data);
        };

        fetchData();
      }, []);

    let messageMapper = messages.map((message)=>{
            let currDate = Date.parse(message.created);
            const d = new Date(currDate); 
            return(<div className={styles.messageModal}>
                <p id={styles.messageTime}>{d.toString()}</p>
                <p>{message.content}</p>
            </div>)
        }   
    ) 

    if(messages.length==0){
        return (
            <Layout>
                <Head>
                    <title>OSAI Announcements</title>
                </Head>
                <div className={styles.loaderContainer}>
                    <Loader type="BallTriangle" color="#FFA91D" height={120} width={120} />
                </div>
            </Layout>
        )  
    }

    return (
        <Layout>
            <Head>
                <title>OSAI Announcements</title>
            </Head>
            <div className={styles.announcementsContainer}>
                <h2>Announcements</h2>
                {messageMapper}
            </div>
        </Layout>
    )   
}