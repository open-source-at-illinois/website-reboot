import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import FadeInView from '../components/animations/fadeInView';
import CalendarButton from '../components/buttons/calendarButton';
import dreamingSvg from '../public/dreaming.svg';

const Calendar: NextPage = () => {
  interface Event {
    title: string;
    description?: string;
    fancy?: boolean;
    when?: string;
    where?: string;
  }

  const events: Event[] = [
    {
      title: 'Beginnings of Open-Source',
      when: 'August 22nd',
      fancy: true,
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Programming Languages',
      when: 'August 29th',
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Software in teams: Version Control with Git',
      when: 'August 29th',
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Programming Languages',
      when: 'August 29th',
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Beginnings of Open-Source',
      when: 'August 22nd',
      fancy: true,
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Software in teams: Version Control with Git',
      when: 'August 29th',
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Software in teams: Version Control with Git',
      when: 'August 29th',
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Beginnings of Open-Source',
      when: 'August 22nd',
      fancy: true,
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Programming Languages',
      when: 'August 29th',
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
    {
      title: 'Beginnings of Open-Source',
      when: 'August 22nd',
      fancy: true,
      where: 'Siebel Center for Computer Science, Room T.B.D',
    },
  ];

  const iframeStyle = {
    borderWidth: 0,
  };
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
        <section className='flex flex-col my-5 text-center items-center'>
          <h1 className='text-xl my-2'>
            Meetings, events, socials. All in one place.
          </h1>
          <p className='mb-4'>
            Add the Open-Source at Illinois Calendar and stay updated with the
            latest events.
          </p>
          <CalendarButton />
        </section>
        <section className='flex flex-row flex-wrap gap-5 p-4 justify-center mb-5 text-sm '>
          {events.map((event) => (
            <div
              className={`flex flex-col items-stretch justify-between w-80 shadow-card dark:text-white dark:shadow-dark-card dark:hover:shadow-dark-card-hover hover:shadow-card-hover p-5 rounded-xl duration-500 ${
                event.fancy
                  ? 'bg-blue-100 dark:bg-dark-darkBlue'
                  : 'bg-white dark:bg-dark-bg'
              }`}>
              <h2 className='text-center text-lg mb-2'>{event.title}</h2>
              <div>
                <p className='text-left text-gray-700 dark:text-gray-300'>
                  {event.when}
                </p>
                <p className='text-left text-gray-700 dark:text-gray-300'>
                  {event.where}
                </p>
              </div>
            </div>
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
