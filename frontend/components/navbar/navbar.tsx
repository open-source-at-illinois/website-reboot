import { Icon } from '@iconify/react';
import Link from 'next/link';
import ThemeSwitch from '../buttons/themeSwitch';
import MobileNavbar from './mobileNavbar';

const Navbar = () => {
  return (
    <header>
      <div
        className={`hidden md:flex fixed h-20 duration-500 bg-white dark:bg-dark-bg text-xl flex-row px-10 w-full top-0 text-primary-darkBlue dark:text-dark-text justify-between items-center my-0 z-30`}>
        <Link href='/'>
          <a className='hover:text-primary-lightBlue duration-300'>
            Open-Source @ Illinois
          </a>
        </Link>
        <div className='flex gap-10'>
          <Link href='/calendar'>
            <a className='hover:text-primary-lightBlue duration-300'>
              Events
            </a>
          </Link>
          <Link href='/README'>
            <a className='hover:text-primary-lightBlue duration-300'>README</a>
          </Link>
          <Link href='/about'>
            <a className='hover:text-primary-lightBlue duration-300'>About</a>
          </Link>
          <a
            className='flex hover:text-primary-lightBlue duration-300'
            href='https://discord.gg/sKYtc9QhuP'
            target='_blank'
            rel='noopener noreferrer'>
            <Icon
              icon='akar-icons:discord-fill'
              className='flex self-center text-lg text-primary-darkBlue dark:text-dark-text hover:text-primary-lightBlue duration-200'
            />
          </a>
          <ThemeSwitch />
        </div>
      </div>
      <div className='md:hidden'>
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Navbar;
