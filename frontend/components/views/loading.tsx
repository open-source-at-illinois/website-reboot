import Image from 'next/image';
import { FC } from 'react';
import errorSvg from '../../public/error.svg';
import LoadingDots from '../animations/loadingDots';
import PageLink from '../pagelink';

const Loading: FC<{}> = () => {
  return (
    <main className='flex flex-col w-screen h-[70vh] justify-center'>
      <div className='flex mx-auto'>
        <LoadingDots />
      </div>
    </main>
  );
};

export default Loading;
