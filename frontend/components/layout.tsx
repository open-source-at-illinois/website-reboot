import { useTheme } from 'next-themes';
import { Children, PropsWithChildren, useEffect } from 'react';
import Footer from './footer';
import Navbar from './navbar/navbar';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <div className={`flex flex-col overflow-x-clip`}>
        <Navbar />
        {/* mt needs to match navbar height */}
        <main className='mt-14 md:mt-20 dark:bg-dark-bg dark:text-gray-300'>
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
