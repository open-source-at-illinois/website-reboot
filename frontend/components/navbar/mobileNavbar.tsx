import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import FadeInView from '../animations/fadeInView';
import ThemeSwitch from '../buttons/themeSwitch';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`flex fixed h-14 bg-white dark:bg-dark-bg text-md flex-row px-5 w-full top-0 text-primary-darkBlue dark:text-dark-text justify-between items-center my-0 z-30`}>
        <Link href='/'>
          <a className='hover:text-primary-lightBlue duration-300'>
            Open-Source @ Illinois
          </a>
        </Link>
        {/*burger menu*/}
        <button onClick={() => setOpen(!open)}>
          <Icon
            icon={
              open ? 'akar-icons:cross' : 'icon-park-outline:hamburger-button'
            }
            className='flex text-xl'
          />
        </button>
      </div>
      {open && (
        <div className='fixed right-0 mt-14 z-50 flex flex-col p-3 m-3 items-center gap-5 rounded-md bg-gray-100 dark:bg-dark-darkBlue'>
          <Link href='/calendar'>Calendar</Link>
          <Link
            className='hover:text-primary-lightBlue duration-300'
            href='/README'>
            README
          </Link>
          <Link
            className='hover:text-primary-lightBlue duration-300'
            href='/about'>
            About
          </Link>
          {/* <a
            className='hover:text-primary-lightBlue duration-300'
            href='https://discord.gg/sKYtc9QhuP'>
            <Icon
              icon='akar-icons:discord-fill'
              className='flex self-center text-lg text-primary-darkBlue dark:text-dark-text hover:text-primary-lightBlue duration-200'
            />
          </a> */}
          <ThemeSwitch />
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
