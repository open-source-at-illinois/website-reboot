import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import openSourceSvg from '../public/open-source.svg'
import { Icon } from '@iconify/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open-Source at Illinois</title>
        <meta name="description" content="All things Open-Source" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-screen bg-slate-100 font-sans">
        {/* Hero section */}
        <div className='flex flex-col-reverse gap-10 md:flex-row items-center mx-10 p-5'>
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
            <p>
              At Open-Source @ Illinois, we take a deep dive into the engineering, ethics and philosophy that deeply impact the technological world.
              If that sounds like something you want to be a part of, we're excited to have you.
            </p>
            <button className="flex my-4 flex-row content-center text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg w-1/4 items-center gap-4 p-2">
            <Icon icon="akar-icons:discord-fill" color="white" className='text-xl'/>
              <div>
                Join the Discord
              </div>
            </button>
          </div>
        </div>

        
      </main>
    </>
  )
}

export default Home
