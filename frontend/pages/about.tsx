import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ImageCards from '../components/cards/imageCards';
import { descriptionText } from '../components/content';
import execInfos from '../utils/execInfos';

export interface ExecInfo {
  name: string;
  email: string;
  designation: string;
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
        <section className='flex flex-col gap-10 md:flex-row-reverse items-center md:mx-20 mb-5 px-8'>
          <div className='p-5'>
            <ImageCards />
          </div>
          <div className='flex flex-col w-full my-4 break-words'>
            <h3 className='text-2xl mb-4'>A space for everyone.</h3>
            <p>
              Founded in 2018, Open-Source at Illinois is a growing hub of
              students passionate about technology.
            </p>
            <p className='my-1'>
              Whether you're a computer wizard running a custom Linux
              distribution or a laid back Apple user, you'll find stories,
              people and experiences here that will keep you coming back.
            </p>
          </div>
        </section>
        <h3 className='text-center text-2xl font-medium mb-5'>
            Meet the Team
          </h3>
        <section className='grid md:grid-cols-3 mb-8 grid-cols-1'>
          
          {execInfos.map((exec, index) => (
            <div
              className={`flex flex-col my-5 `}>
              <a href={`mailto:${exec.email}`} className='mx-auto'>
                <Image
                  className='rounded-full'
                  src={exec.headshot || '/headshots/missing.png'}
                  width={220}
                  height={220}
                />
              </a>
              <p
                className={`px-8 text-center`}>
                <h3 className='text-xl'>{exec.name}</h3>
                <h3 className='text-lg text-gray-500 mb-4'>
                  {exec.designation}
                </h3>
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default About;
