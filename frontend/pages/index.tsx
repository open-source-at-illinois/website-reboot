import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import DiscordButton from '../components/buttons/discordButton';
import GithubButton from '../components/buttons/githubButton';
import InterestButton from '../components/buttons/interestButton';
import LogisticsButton from '../components/buttons/logisticsButton';
import UpNextEventWithAPI from '../components/cards/upNextEventWithAPI';
import ImageCards from '../components/cards/imageCards';
import { descriptionText } from '../components/content';
import PageLink from '../components/pagelink';
import openSourceSvg from '../public/open-source.svg';
import technologySvg from '../public/technology.svg';
import vcsSvg from '../public/vcs.svg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open-Source at Illinois</title>
        <meta name='description' content={descriptionText} />
      </Head>

      <main className='flex flex-col font-sans'>
        {/* Human Centered Software Event */}
        {/* <div className='flex flex-col items-center w-full fluid-gradient p-5'>
          <h4 className='text-center text-xl font-bold my-2 text-gray-300'>
            OSAI + SCD Presents
          </h4>
          <h3 className='text-center text-2xl font-bold mb-2 text-white'>
            Human Centered Software Workshop
          </h3>
          <p className='text-center text-gray-100 font-bold '>
            In collaboration with the Siebel Center for Design
          </p>
          <p className='text-center text-gray-100'>
            Wednesday, Nov 9th at 5-7 PM
          </p>
          <p className='text-center text-gray-200 '>
            Learn how to make equitable technology that works for everyone.
          </p>
          <div className='flex flex-row gap-5 my-3 justify-center align-center w-full'>
            <a
              className='flex text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center p-2 px-3'
              href='https://forms.gle/3dN2JBtFrGESTxxQA'>
              RSVP Now
            </a>
          </div>
        </div> */}

        {/* Quad Day 2022 */}
        <section className='flex flex-col justify-center rear-info-bg items-center text-center'>
          <div className='backdrop-brightness-[0.55] backdrop-blur-[2px] text-white w-full h-full py-10'>
            <h3 className='text-2xl font-bold my-4 '>
              Make an impact in the Illinois community
            </h3>
            <p>Board and OpenDev Applications now open for 2023-24 term</p>

            <div className='flex flex-col md:flex-row gap-5 my-4 md:justify-center items-center align-center w-full'>
              <a
                className='flex text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 w-fit rounded-lg items-center p-2 px-3'
                href='https://forms.gle/gb1f4Mneh7GEnEG37'>
                Board Application
              </a>
              <a
                className='flex text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 w-fit rounded-lg items-center p-2 px-3'
                href='https://forms.gle/zm64ASaxDzgb1Z5t5'>
                OpenDev Application
              </a>
              {/* <a
                className='flex text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center p-2 px-3'
                href='http://eepurl.com/h-hO_j'>
                Interest Form
              </a> */}
            </div>
          </div>
        </section>

        {/* Hero section */}
        <section className='flex flex-col-reverse gap-10 md:flex-row items-center md:mx-10 mb-5 px-5 pb-5'>
          <div className='justify-center p-5'>
            <Image
              className='h-40'
              src={openSourceSvg}
              alt='Illustration of Open-source Software'
            />
          </div>
          <div className='flex flex-col w-full my-4 break-words'>
            <TypeAnimation
              sequence={[
                'Technology, made transparent',
                2000, // Waits 1s
                'Technology, made equitable',
                2000, // Waits 2s
                'Technology, made accessible',
                2000,
                'Technology, made inclusive',
                2000,
              ]}
              wrapper='div'
              cursor={false}
              repeat={Infinity}
              style={{
                fontSize: '1.5rem',
                lineHeight: '2rem',
                marginBottom: '1rem',
              }}
            />
            {/* <p>
              Open-source software runs our world. From supercomputers to
              traffic signals and everything in between.
            </p> */}
            <p className='my-1'>
              At Open-Source @ Illinois, our primary focus is empowering developers and engineers, enabling them to actively contribute to the tools they rely on.
              By embracing open-source principles, we aim to cultivate a culture where members freely share ideas, expertise, maintain shared resources, and drive the development of impactful projects that benefit the wider community.
            </p>
            <p className='my-1'>
              Our mission is to democratize access to knowledge and technology, fostering a collaborative environment that celebrates collective intelligence and leaves a lasting impact.
            </p>
            <div className='flex flex-row gap-5 my-4 justify-center md:justify-start w-full'>
              <DiscordButton />
              <GithubButton />
            </div>
          </div>
        </section>

        {/* hacktoberfest 2022 */}
        {/* <section className='flex flex-col justify-center hacktoberfest-bg items-center text-center'>
          <div className='backdrop-brightness-[0.35] backdrop-blur-[2px] text-white w-full h-full py-10'>
            <h3 className='text-2xl font-bold my-4 '>
              Hacktoberfest 2022 is here.
            </h3>
            <p>
              A month long event to celebrate open-source. Code, Collaborate,
              and Win T-shirts!
            </p>
            <div className='flex flex-row gap-5 my-4 justify-center align-center w-full'>
                <a
                  className='flex text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center p-2 px-3'
                  href='https://hacktoberfest.com/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Learn more
                </a>
            </div>
          </div>
        </section> */}

        <section className='flex flex-col my-5'>
          <UpNextEventWithAPI />
        </section>

        {/* Recruitment Section, Keeping for future use */}
        {/* <section className='flex flex-col justify-center items-center my-5 text-center p-5 bg-recruit py-10'>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white  my-4 '>
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
            <ScaleOnHover>
              <a
                className='flex text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center p-2 px-3'
                href='https://forms.gle/pnvQ691NpL7avckj7'
                target='_blank'
                rel='noopener noreferrer'>
                Make an Impact
              </a>
            </ScaleOnHover>
          </div>
        </section> */}

        {/* Get Involved Section */}
        <section className='flex justify-center bg-radial items-center my-5 text-center h-[50vh] p-5'>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white my-4 '>
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
              <InterestButton />
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
                osai-bot
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
