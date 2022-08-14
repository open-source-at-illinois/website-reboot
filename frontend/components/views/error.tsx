import Image from 'next/image';
import { FC } from 'react';
import errorSvg from '../../public/error.svg';
import PageLink from '../pagelink';

const Error: FC<{}> = () => {
  return (
    <main className='flex flex-col w-screen h-[70vh] justify-center'>
      <Image
        className='h-40 w-40 mx-auto my-5'
        src={errorSvg}
        height={200}
        alt='Illustration of software bugs'
      />
      <p className='flex flex-col mx-auto my-5 text-center'>
        <p>Whoops, Something went wrong!</p>
        <PageLink href='https://github.com/open-source-at-illinois/website-reboot/issues'>
          If this happens again, we hope you create an issue
        </PageLink>
      </p>
    </main>
  );
};

export default Error;
