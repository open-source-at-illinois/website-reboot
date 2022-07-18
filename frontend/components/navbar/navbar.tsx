import Link from 'next/link';
import ThemeSwitch from '../buttons/themeSwitch';
import MobileNavbar from './mobileNavbar';

const Navbar = () => {
  const iconStyle =
    'text-primary-darkBlue dark:text-gray-400 hover:text-primary-lightBlue duration-200';

  return (
    <header>
      <div
        className={`hidden md:flex fixed h-20 bg-white dark:bg-black text-xl flex-row px-10 w-full top-0 text-primary-darkBlue dark:text-dark-text justify-between items-center my-0 z-30`}>
        <Link href='/'>
          <a className='hover:text-primary-lightBlue duration-300'>
            Open-Source @ Illinois
          </a>
        </Link>
        <div className='flex gap-10'>
          <Link href='/calendar'>
            <a className='hover:text-primary-lightBlue duration-300'>
              Calendar
            </a>
          </Link>
          <a
            className='hover:text-primary-lightBlue duration-300'
            href='/logistics'>
            Logistics
          </a>
          <a
            className='hover:text-primary-lightBlue duration-300'
            href='https://discord.gg/sKYtc9QhuP'>
            Discord
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
