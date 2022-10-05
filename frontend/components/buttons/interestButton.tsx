import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import ScaleOnHover from '../animations/scaleOnHover';
import SubtleScale from '../animations/subtleScale';

const InterestButton = () => {
  return (
    <ScaleOnHover>
      <a
        className='flex flex-row text-primary-darkOrange border-2 border-primary-darkOrange hover:border-primary-lightOrange hover:text-primary-lightOrange duration-300 rounded-lg items-center gap-4 p-2'
        href='http://eepurl.com/h-hO_j'
        target='_blank'
        rel='noopener noreferrer'>
        <Icon
          icon='codicon:mail-read'
          className='text-xl hidden md:flex'
          color='orange'
        />
        <div className='mr-2'>Our Interest Form</div>
      </a>
    </ScaleOnHover>
  );
};

export default InterestButton;
