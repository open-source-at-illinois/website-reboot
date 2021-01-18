import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Announcements.module.scss';
import date from 'date-and-time';

export default function Announcements() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost:6464/messages?count=7',
          );
          setMessages(result.data);
        };

        fetchData();
      }, []);

    let messageMapper = messages.map((message)=>{
            let currDate = Date.parse(message.created);
            const d = new Date(currDate);
            // const pattern = date.compile('ddd, MMM DD YYYY');
            // date.format(d, pattern);    
            return(<div className={styles.messageModal}>
                <p id={styles.messageTime}>{d.toString()}</p>
                <p>{message.content}</p>
            </div>)
        }   
    ) 

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