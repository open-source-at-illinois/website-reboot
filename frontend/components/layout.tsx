import { Children, PropsWithChildren, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import Footer from './footer';
import Navbar from './navbar';

const Layout = (props: PropsWithChildren) => {
  let defaultDark = false;
  if (typeof window !== 'undefined') {
    defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  useEffect(() => {
    console.log('changed', theme);
  }, [theme]);

  return (
    <>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <div className={`flex flex-col overflow-x-clip`}>
          <Navbar theme={theme} setTheme={setTheme} />
          {/* mt needs to match navbar height */}
          <main className='mt-14 md:mt-20 mb-5 dark:bg-dark-bg dark:text-gray-400'>
            {props.children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
