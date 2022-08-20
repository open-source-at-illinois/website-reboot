import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import FadeInView from '../components/animations/fadeInView';
import DiscordButton from '../components/buttons/discordButton';
import GithubButton from '../components/buttons/githubButton';
import { descriptionText } from '../components/content';
import teamWork from '../public/teamwork.svg';

export interface ExecInfo {
  name: string;
  email: string;
  designation: string;
  bio: string;
  headshot: string;
}

const execInfos: ExecInfo[] = [
  {
    name: 'Soham Kukarni',
    email: 'sohamk2@illinois.edu',
    designation: 'President',
    bio: "Hi! I’m Soham, and I’m a rising Junior. I’m super passionate  \
    about new technologies and using them for social good. That’s       \
    one of the reasons why I love open-source software. I'm really      \
    good at making dad jokes and building things with code, so if       \
    either of those interst you, I'm more than happy to hang out and    \
    chat :)",
    headshot: '/../public/headshots/soham.jpg',
  },
  {
    name: 'Max Fan',
    email: 'myfan3@illinois.edu',
    designation: 'Vice President',
    bio: '',
    headshot: '',
  },
  {
    name: 'Arnav Shah',
    email: 'arnavss2@illinois.edu',
    designation: 'Treasurer',
    bio: '',
    headshot: '',
  },
  {
    name: 'Athena Fung',
    email: 'affung2@illinois.edu',
    designation: 'Secretary',
    bio: '',
    headshot: '',
  },
  {
    name: 'Kiran Kaur',
    email: 'kaur18@illinois.edu',
    designation: 'Membership Director',
    bio: "Hi, I'm Kiran! I'm a Junior in Industrial Engineering (but some may \
      call me a fake CS major). I love learning new skills. Recently, I picked\
       up ukulele and have really enjoyed that journey! I am also a very extroverted\
        person and I talk A LOT as you will find out at Open Source events!",
    headshot: '',
  },
  {
    name: 'Anagha Tiwari',
    email: 'anaghat3@illinois.edu',
    designation: 'Freshman Representative',
    bio: 'Hello :)) My name is Anagha, and I’m a freshman majoring in CS & \
    Statistics. This year, I am super excited to meet fellow Illini from diverse\
     majors, cultures, and experiences, while also developing my academic interests \
     at the university. Specifically at Open Source at Illinois, I hope to be a part \
     of a welcoming and supportive environment where we can collaborate with one another \
     to create projects and contribute to the open source community! During my free time, \
     I love taking walks around campus, playing cards with friends, swimming, working out, \
     and eating spicy food!',
    headshot: '',
  },
  {
    name: 'Prakhar Gupta',
    email: 'prakhar7@illinois.edu',
    designation: 'Freshman Representative',
    bio: " I'm Prakhar, an incoming freshman. I'm going to be majoring \
    in Electrical Engineering and will be staying at ISR this year.    \
    I play the guitar and enjoy listening to hip-hop music. \
    I'm also into cooking and a bit of basketball. I'm \
    excited to be a part of Open Source at Illinois this fall, \
    and I can't wait to get started!",
    headshot: '/../public/headshots/prakhar.jpg',
  },
  {
    name: 'Akshata Tiwari',
    email: 'atiwari5@illinois.edu',
    designation: 'Freshman Representative',
    bio: 'Hi everyone! I am a freshman studying Computer Science +\
     Economics this fall. I love to paint, play poker, work out, and\
      eat chipotle bowls. I am passionate about social outreach initiatives\
       that enable digital advocacy and transparency, something I hope to\
        continue at Open Source! I am excited to explore campus opportunities,\
         programs, and cool RSOs while meeting new friends along the way, and I\
          can’t wait to become part of the open source community with all of you!',
    headshot: '',
  },
];

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open-Source at Illinois</title>
        <meta name='description' content={descriptionText} />
      </Head>

      <main className='flex flex-col font-sans'>
        {/* Hero section */}
        <section className='flex flex-col gap-10 md:flex-row-reverse items-center md:mx-10 my-5 p-8'>
          <div className='justify-center p-5'>
            <FadeInView>
              <Image
                src={teamWork}
                alt='Illustration of teamwork'
                height={400}
              />
            </FadeInView>
          </div>
          <div className='flex flex-col w-full my-4 break-words'>
            <h3 className='text-2xl mb-4'>A space for everyone.</h3>
            <p>
              Founded in 2018, Open-Source at Illinois is a growing hub of
              students passionate about technology.
            </p>
            <p className='my-1'>
              Whether you're a computer wizard running a custom Arch Linux
              distribution or a laid back Apple user, you'll find stories,
              people and experiences here that will keep you coming back.
            </p>
          </div>
        </section>
        <section className='flex flex-col items-center mb-8'>
          <h3 className='text-center text-2xl font-medium mb-5'>
            Meet the Team
          </h3>
          {execInfos.map((exec, index) => (
            <div
              className={`flex flex-col my-5 md:flex-row${
                index % 2 == 0 ? '' : '-reverse'
              } gap-16`}>
              <a href={`mailto:${exec.email}`} className='mx-auto'>
                <Image
                  className='rounded-full'
                  src={exec.headshot || '/../public/headshots/missing.png'}
                  width={220}
                  height={220}
                />
              </a>
              <p
                className={`px-8 text-center ${
                  index % 2 == 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                <h3 className='text-xl'>{exec.name}</h3>
                <h3 className='text-lg text-gray-500 mb-4'>
                  {exec.designation}
                </h3>
                <p className='md:max-w-xl text-justify'>{exec.bio}</p>
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default About;
