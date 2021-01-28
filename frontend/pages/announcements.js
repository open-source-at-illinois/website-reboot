import Head from 'next/head';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Announcements.module.scss';
import Loader from 'react-loader-spinner';
import Countdown from 'react-countdown';
import Router from 'next/router';
import Linkify from 'react-linkify'

export default function Announcements() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetchData();
    }, [reload]);
    
    const fetchData = async () => {
        console.log('fetching started');
        try{
            const result = await axios(
                'https://api.opensourceatillinois.com/messages?count=6',
            );
            setMessages(result.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    let messageMapper = messages.map((message)=>{
            let currDate = Date.parse(message.created);
            const d = new Date(currDate); 
            return(<div className={styles.messageModal}>
                <p id={styles.messageTime}>{d.toString()}</p>
                <Linkify>
                    {message.content.split("\n").map(msg => <p>{msg}</p>)}
                </Linkify>
            </div>)
        }   
    ) 

    const Completionist = () => 
        <div className={styles.loaderContainer}>
            <p>There seems to be a problem!</p>
            <a onClick={()=>{Router.reload(window.location.pathname)}}>Reload</a>
        </div>;
 
    const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className={styles.loaderContainer}>
                <Loader type="BallTriangle" color="#FFA91D" height={120} width={120} />
                <p>Reload in {seconds}</p>
            </div>
        );
    }
    };

    if(loading){
        return (
            <Layout>
                <Head>
                    <title>OSAI Announcements</title>
                </Head>
                <div className={styles.loaderContainer}>
                    <Countdown date={Date.now() + 5000} renderer={renderer}/>
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