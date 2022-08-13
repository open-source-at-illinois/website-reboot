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
import Error from '../components/views/error';
import Loading from '../components/views/loading';
import moment from 'moment-timezone';

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

const PageHead = () => {
  return (
    <Head>
      <title>Calendar | Open-Source @ Illinois</title>
      <meta
        name='description'
        content='The Open Source at Illinois Calendar. Find latest events and meetings here.'
      />
      <link rel='icon' href='../public/favicon.ico' />
    </Head>
  );
};

const Hero = () => {
  return (
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
  );
};

const Calendar: NextPage = () => {
  const fetcher: Fetcher<MaskedEventType[]> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:7000/events', fetcher);

  if (error)
    return (
      <>
        <PageHead />
        <Error />
      </>
    );
  if (!data)
    return (
      <>
        <PageHead />
        <Hero />
        <Loading />
      </>
    );

  moment().tz('America/Chicago').format();
  moment().year(2022);

  const activeEvents = data.filter((event) => event.active);
  const inactiveEvents = data.filter((event) => !event.active);

  const sortedEvents = activeEvents.sort(sortEventsChronologically);

  const upNextEvent = sortedEvents[0];

  const events = sortedEvents.slice(1);
  return (
    <>
      <PageHead />
      <Hero />
      <main className='flex flex-col font-sans'>
        <section className='mb-5 w-full'>
          <h2 className='text-center text-2xl mt-3 mb-6 font-medium'>
            Up Next
          </h2>
          {upNextEvent ? <UpNextEvent event={upNextEvent} /> : <></>}
        </section>
        <h2 className='text-center text-2xl my-3 font-medium'>Other Events</h2>
        <section className='flex flex-row flex-wrap gap-5 p-4 justify-center mb-5 text-sm'>
          {events.map((event, index) => (
            <EventDetailCard event={event} key={index} />
          ))}
        </section>
        {inactiveEvents.length > 0 ? (
          <>
            <h2 className='text-center text-2xl my-3 font-medium'>
              Trip down memory lane
            </h2>
            <section className='flex flex-row flex-wrap gap-5 p-4 justify-center mb-5 text-sm '>
              {inactiveEvents.map((event, index) => (
                <EventDetailCard event={event} key={index} />
              ))}
            </section>
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

const sortEventsChronologically = (a: MaskedEventType, b: MaskedEventType) => {
  const DATE_FORMAT = 'MMM DD hh:mm A';

  const mom_a = moment(a.when, DATE_FORMAT, true);
  const mom_b = moment(b.when, DATE_FORMAT, true);

  if (!mom_a.isValid() || !mom_b.isValid()) {
    return 0;
  }

  return mom_a.isAfter(mom_b) ? 1 : -1;
};

export default Calendar;
