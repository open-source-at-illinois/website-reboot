import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import openSourceSvg from '../public/open-source.svg';
import vcsSvg from '../public/vcs.svg';
import technologySvg from '../public/technology.svg';
import DiscordButton from '../components/buttons/discordButton';
import GithubButton from '../components/buttons/githubButton';
import CalendarButton from '../components/buttons/calendarButton';
import LogisticsButton from '../components/buttons/logisticsButton';
import PageLink from '../components/pagelink';
import Link from 'next/link';
import { descriptionText } from '../components/content';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open-Source at Illinois</title>
        <meta name='description' content={descriptionText} />
      </Head>

      <main className='flex flex-col font-sans'>
        {/* Hero section */}
        <section className='flex flex-col-reverse gap-10 md:flex-row items-center mb-5 md:mx-10 my-5 p-5'>
          <div className='justify-center p-5'>
            <Image
              className='h-40'
              src={openSourceSvg}
              alt='Illustration of Open-source Software'
            />
          </div>
          <div className='flex flex-col w-full my-4 break-words'>
            <h3 className='text-2xl mb-4'>
              Public facing software, accessible to all.
            </h3>
            <p>
              Open-Source software runs our smart watches, elevators, traffic
              signals and countless other systems we use every day.
            </p>
            <p className='my-1'>
              At Open-Source @ Illinois, we take a deep dive into the
              engineering, ethics and philosophy that deeply impact the
              technological world. If that sounds like something you want to be
              a part of, we're excited to have you.
            </p>
            <div className='flex flex-row gap-5 my-4 justify-center md:justify-start w-full'>
              <DiscordButton />
              <GithubButton />
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center my-5 text-center p-5 bg-recruit py-10'>
          <h3 className='text-2xl font-bold text-gray-900 my-4 '>
            We're looking for change makers.
          </h3>
          <p className=''>
            We are looking for passionate, growth minded people to join our team
          </p>
          <p>
            Find our current openings, and apply using the link below.
            Application expires 24th July, 2022.
          </p>
          <div className='flex flex-row gap-5 my-4 justify-center align-center w-full'>
            <a
              className='flex text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center p-2 px-3'
              href='https://forms.gle/pnvQ691NpL7avckj7'
              target='_blank'
              rel='noopener noreferrer'>
              Make an Impact
            </a>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className='flex justify-center blob items-center my-5 text-center h-[50vh] p-5'>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-bold text-gray-900 my-4 '>
              How do I get involved?
            </h3>
            <p className=''>
              Open-Source at Illinois holds weekly meetings and special events
              throughout the year.
            </p>
            <p>
              To get started, just join our discord server. To stay updated, add
              the open-source calendar.
            </p>
            <div className='flex flex-row gap-5 my-4 justify-center align-center w-full'>
              <DiscordButton />
              <CalendarButton />
            </div>
          </div>
        </section>

        {/* More information */}
        <section className='flex flex-col-reverse gap-10 md:flex-row items-center mx-5 md:mx-10 my-5 p-5'>
          <div className='flex flex-col w-full my-4 break-words'>
            <h3 className='text-2xl my-4'>Learn. Collaborate. Create.</h3>
            <p>
              Open-Source at Illinois has a curated set of workshops you can do
              at your own pace. Learn and apply version control, REST APIs,
              static site generators, and more!
            </p>
            <p className='my-2'>
              Collaborate with other developers and gain real world experience
              by working on our open-source club projects like{' '}
              <PageLink href='https://cherry.opensourceatillinois.com/'>
                Cherry
              </PageLink>{' '}
              and{' '}
              <PageLink href='https://github.com/open-source-at-illinois/osai-bot'>
                Sudo
              </PageLink>
              .
            </p>
            <p className='my-2'>
              Or, start your own project and leverage the Open-Source at
              Illinois community to guide you along the way
            </p>
          </div>
          <div className='justify-center p-5'>
            <Image
              className='h-40'
              src={vcsSvg}
              alt='Illustration of Open-source Software'
            />
          </div>
        </section>

        {/* Logistics & Technology */}
        <section className='flex flex-col gap-10 md:flex-row items-center mx-5 md:mx-10 my-5 p-5'>
          <div className='justify-center p-5'>
            <Image
              className='h-40'
              src={technologySvg}
              alt='Illustration of Open-source Software'
            />
          </div>
          <div className='flex flex-col w-full my-4 break-words'>
            <h3 className='text-2xl my-4'>Workflow & Automation</h3>
            <p>
              We're on a quest to make the Open-Source at Illinois experience as
              easy and fun as possible.
            </p>
            <p className='my-1'>
              Leveraging awesome tools like bots, webhooks and CI/CD helps us
              focus on our community and our mission to further the ideas of
              open source and information freedom.
            </p>
            <div className='flex flex-row gap-5 my-4 justify-center md:justify-start w-full'>
              <LogisticsButton />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
