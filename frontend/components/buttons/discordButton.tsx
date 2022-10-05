import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import ScaleOnHover from '../animations/scaleOnHover';
import SubtleScale from '../animations/subtleScale';

const DiscordButton = () => {
  return (
    <ScaleOnHover>
      <a
        className='flex flex-row text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center gap-4 p-2 border-2 border-primary-lightBlue hover:border-primary-darkBlue'
        href='https://discord.gg/sKYtc9QhuP'>
        <Icon
          icon='akar-icons:discord-fill'
          color='white'
          className='text-xl hidden md:flex'
        />
        <div className='mr-2'>Join the Discord</div>
      </a>
    </ScaleOnHover>
  );
};

export default DiscordButton;
