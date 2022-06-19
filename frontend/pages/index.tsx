import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import openSourceSvg from '../public/open-source.svg'
import { Icon } from '@iconify/react';
import blob from '../public/blob.svg'
import DiscordButton from '../components/buttons/discordButton';
import GithubButton from '../components/buttons/githubButton';
import CalendarButton from '../components/buttons/calendarButton';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open-Source at Illinois</title>
        <meta name="description" content="All things Open-Source" />
        <link rel="icon" href="/favicon-32.png" />
      </Head>

      <main className='flex flex-col h-screen font-sans'>
        {/* Hero section */}
        <section className='flex flex-col-reverse gap-10 md:flex-row items-center mx-10 p-5'>
          <div className='justify-center p-5'>
            <Image className='h-40' src={openSourceSvg} alt='Illustration of Open-source Software' />
          </div>
          <div className="flex flex-col w-full my-4 break-words">
            <h3 className='text-2xl my-4'>
              Public facing software, accessible to all.
            </h3>
            <p>
              Open-Source software runs our smart watches, elevators, traffic signals and countless other systems we use every day.
            </p>
            <p className='my-1'>
              At Open-Source @ Illinois, we take a deep dive into the engineering, ethics and philosophy that deeply impact the technological world.
              If that sounds like something you want to be a part of, we're excited to have you.
            </p>
            <div className="flex flex-row gap-5 my-4 justify-center md:justify-start w-full">
              <DiscordButton />
              <GithubButton />
            </div>
          </div>
        </section>
        {/* Get Involved Section */}
        <section className="flex justify-center blob items-center text-center h-[50vh]">
          <div className='flex flex-col'>
            <h3 className='text-2xl font-bold text-gray-900 my-4 '>
              How do I get involved?
            </h3>
            <p className=''>
              Open-Source at Illinois holds weekly meetings and special events throughout the year.
            </p>
            <p>
              To get started, just join our discord server. To stay updated, add the open-source calendar.
            </p>
            <div className="flex flex-row gap-5 my-4 justify-center align-center w-full">
              <DiscordButton />
              <CalendarButton />
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home
