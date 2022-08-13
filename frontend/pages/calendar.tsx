import { Icon } from '@iconify/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FadeInView from '../components/animations/fadeInView';
import CalendarButton from '../components/buttons/calendarButton';
import EventDetailCard from '../components/cards/eventDetailCard';
import dreamingSvg from '../public/dreaming.svg';
import useSWR, { Fetcher } from 'swr';
import UpNextEvent from '../components/cards/upNextEvent';

export interface MaskedEventType {
  name: string;
  description: string;
  when: string;
  where: string;
  points: number;
  active: boolean;
}

export const cardStyleByPoints = (points: number) => {
  if (points <= 10) {
    return 'bg-white dark:bg-dark-bg';
  } else if (points <= 20) {
    return 'bg-yellow-50 dark:bg-dark-darkBlue font-semibold';
  } else {
    return 'bg-blue-100 dark:bg-blue-900';
  }
};

export const PRIORITY_THRESHOLD = 10;

const Calendar: NextPage = () => {
  const fetcher: Fetcher<MaskedEventType[]> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:7000/events', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const upNextEvent = data[0];
  const events = data.slice(1);
  return (
    <>
      <Head>
        <title>Calendar | Open-Source @ Illinois</title>
        <meta
          name='description'
          content='The Open Source at Illinois Calendar. Find latest events and meetings here.'
        />
        <link rel='icon' href='../public/favicon.ico' />
      </Head>
      <main className='flex flex-col font-sans'>
        <section className='flex flex-col m-5 text-center items-center'>
          <h1 className='text-xl my-2'>
            Meetings, events, socials. All in one place.
          </h1>
          <p className='mb-4'>
            Add the Open-Source at Illinois Calendar and stay updated with the
            latest events.
          </p>
          <CalendarButton />
        </section>
        <h2 className='text-center text-2xl my-3 font-medium'>Up Next</h2>
        <section className='mx-auto p-3 mb-5'>
          {upNextEvent ? <UpNextEvent event={upNextEvent} /> : <></>}
        </section>
        <h2 className='text-center text-2xl my-3 font-medium'>
          Upcoming Events
        </h2>
        <section className='flex flex-row flex-wrap gap-5 p-4 justify-center mb-5 text-sm '>
          {events.map((event, index) => (
            <EventDetailCard event={event} key={index} />
          ))}
        </section>
        {/* This calendar embed is awful, re-include at your own risk! (Tip: add dark:hidden to protect your users' eyes) */}
        {/* <div className='hidden md:flex w-full justify-center flex-col items-center'>
          <iframe
            src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=America%2FChicago&title&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&showDate=1&mode=MONTH&src=a3M4ZWt0czBtaHFjdjNnZGhoOTltNWtqZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5'
            style={iframeStyle}
            width='600'
            height='600'
            scrolling='no'></iframe>
        </div> */}
      </main>
    </>
  );
};

export default Calendar;
