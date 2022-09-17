import Image from 'next/image';
import PageLink from './pagelink';

const Footer = () => {
  return (
    <footer className='flex flex-col bg-gray-100 dark:bg-gray-600 p-5'>
      <div className='flex flex-col text-center md:flex-row md:text-left justify-center space-x-8 bottom-0 text-primary-darkBlue dark:text-dark-text pt-5'>
        <div className='flex flex-row items-center justify-center m-5'>
          <Image
            src='/UofI-wordmark.png'
            alt='University of Illinois wordmark'
            height={50}
            width={192}
          />
        </div>
        <div className='flex flex-row items-center justify-center m-5'>
          <Image
            src='/OSAI tranparent 1.png'
            alt='Illinois Open-Source Logo'
            width={150}
            height={150}
          />
        </div>
        <div className='flex flex-col px-5 md:flex-row space-y-5 md:space-y-0 md:space-x-10'>
          <div className='flex flex-col'>
            <h1 className='text-lg text-black dark:text-white'>Links</h1>
            <hr className='mt-1 mb-2' />
            <ul>
              <li>
                <a href='https://discord.gg/sKYtc9QhuP'>Discord</a>
              </li>
              <li>
                <a href='https://www.instagram.com/osai.uiuc/'>Instagram</a>
              </li>
              <li>
                <a href='/calendar'>Calendar</a>
              </li>
              <li>
                <a href='https://illinois.campuslabs.com/engage/organization/open-source-at-illinois'>
                  Campus Labs
                </a>
              </li>
              <li>
                <a href='https://github.com/open-source-at-illinois'>Github</a>
              </li>
              <li>
                <a href='https://open-source-at-illinois.github.io/constitution/'>
                  Constitution
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-lg text-black dark:text-white'>Projects</h1>
            <hr className='mt-1 mb-2' />
            <ul>
              <li>
                <a href='https://cherry.opensourceatillinois.com/'>Cherry</a>
              </li>
              <li>
                <a href='https://github.com/open-source-at-illinois/osai-bot'>
                  osai-bot
                </a>
              </li>
              <li>
                <a href='https://github.com/open-source-at-illinois/website-reboot/'>
                  Website
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-lg text-black dark:text-white'>Contact</h1>
            <hr className='mt-1 mb-2' />
            <ul>
              <li>
                {/* Obfuscated email to prevent spam harvesting */}
                <a href='mailto:&#111;&#112;&#101;&#110;&#115;&#111;&#117;&#114;&#099;&#101;&#105;&#108;&#108;&#105;&#110;&#111;&#105;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'>
                  opensourceillinois (at) gmail.com
                </a>
              </li>
              <li>
                <a href='mailto:&#111;&#115;&#097;&#105;&#045;&#101;&#120;&#101;&#099;&#064;&#108;&#105;&#115;&#116;&#115;&#046;&#105;&#108;&#108;&#105;&#110;&#111;&#105;&#115;&#046;&#101;&#100;&#117;'>
                  osai-exec (at) lists.illinois.edu
                </a>
              </li>
              <li>or reach out via Discord!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-sm text-center mt-5'>
        <div>Copyright 2022 Open-Source @ Illinois</div>
        <div>
          Illustrations by <PageLink href='https://undraw.co/'>Undraw</PageLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
