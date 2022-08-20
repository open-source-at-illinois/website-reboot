import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import FadeInView from '../components/animations/fadeInView';
import DiscordButton from '../components/buttons/discordButton';
import GithubButton from '../components/buttons/githubButton';
import { descriptionText } from '../components/content';
import teamWork from '../public/teamwork.svg';
import execInfos from '../utils/execInfos';

export interface ExecInfo {
  name: string;
  email: string;
  designation: string;
  bio: string;
  headshot: string;
}

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open-Source at Illinois</title>
        <meta name='description' content={descriptionText} />
      </Head>

      <main className='flex flex-col font-sans'>
        {/* Hero section */}
        <section className='flex flex-col gap-10 md:flex-row-reverse items-center md:mx-10 my-5 p-8'>
          <div className='justify-center p-5'>
            <FadeInView>
              <Image
                src={teamWork}
                alt='Illustration of teamwork'
                height={400}
              />
            </FadeInView>
          </div>
          <div className='flex flex-col w-full my-4 break-words'>
            <h3 className='text-2xl mb-4'>A space for everyone.</h3>
            <p>
              Founded in 2018, Open-Source at Illinois is a growing hub of
              students passionate about technology.
            </p>
            <p className='my-1'>
              Whether you're a computer wizard running a custom Arch Linux
              distribution or a laid back Apple user, you'll find stories,
              people and experiences here that will keep you coming back.
            </p>
          </div>
        </section>
        <section className='flex flex-col items-center mb-8'>
          <h3 className='text-center text-2xl font-medium mb-5'>
            Meet the Team
          </h3>
          {execInfos.map((exec, index) => (
            <div
              className={`flex flex-col my-5 md:flex-row${
                index % 2 == 0 ? '' : '-reverse'
              } gap-16`}>
              <a href={`mailto:${exec.email}`} className='mx-auto'>
                <Image
                  className='rounded-full'
                  src={exec.headshot || '/../public/headshots/missing.png'}
                  width={220}
                  height={220}
                />
              </a>
              <p
                className={`px-8 text-center ${
                  index % 2 == 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                <h3 className='text-xl'>{exec.name}</h3>
                <h3 className='text-lg text-gray-500 mb-4'>
                  {exec.designation}
                </h3>
                <p className='md:max-w-xl text-justify'>{exec.bio}</p>
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default About;
