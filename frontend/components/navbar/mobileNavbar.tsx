import { Icon } from '@iconify/react';
import Link from 'next/link';
import ThemeSwitch from '../buttons/themeSwitch';

const MobileNavbar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: any;
}) => {
  return (
    <div
      className={`flex fixed h-14 bg-white text-md flex-row px-10 w-full top-0 text-primary-darkBlue dark:text-gray-400 justify-between items-center my-0 z-30`}>
      <Link href='/'>
        <a className='hover:text-primary-lightBlue duration-300'>
          Open-Source @ Illinois
        </a>
      </Link>
      {/*burger menu*/}
      <div className='flex flex-row items-center gap-5'>
        <Link href='/calendar'>
          <Icon
            icon='akar-icons:calendar'
            className='text-lg text-primary-darkBlue dark:text-gray-400 hover:text-primary-lightBlue duration-200'
          />
        </Link>
        <a
          className='hover:text-primary-lightBlue duration-300'
          href='/logistics'>
          <Icon
            icon='fluent:fast-acceleration-20-regular'
            className='text-xl text-primary-darkBlue dark:text-gray-400 hover:text-primary-lightBlue duration-200'
          />
        </a>
        <a
          className='hover:text-primary-lightBlue duration-300'
          href='https://discord.gg/sKYtc9QhuP'>
          <Icon
            icon='akar-icons:discord-fill'
            className='text-lg text-primary-darkBlue dark:text-gray-400 hover:text-primary-lightBlue duration-200'
          />
        </a>
        <ThemeSwitch setTheme={setTheme} theme={theme} />
      </div>
    </div>
  );
};

export default MobileNavbar;
