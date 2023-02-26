import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { Icon } from '@iconify/react';

const images = [
  'https://i.imgur.com/MvlT6Jm.jpg',
  'https://imgur.com/XJbwMFI.jpg',
  'https://imgur.com/FNTRZxi.jpg',
  'https://i.imgur.com/cxMqxOA.jpg',
  'https://imgur.com/Zxzidsu.jpg',
  'https://imgur.com/wldOdf8.jpg',
  'https://imgur.com/voHVGC1.jpg',
  'https://imgur.com/sOF4XHb.jpg',
  'https://imgur.com/2hHrJMN.jpg',
  'https://imgur.com/V0QKJDU.jpg',
  'https://imgur.com/RV0PNfs.jpg',
  'https://imgur.com/ga8NMR9.jpg',
  'https://i.imgur.com/nOyAEOf.jpg',
  'https://imgur.com/LTtiWZS.jpg',
  'https://imgur.com/P5Gyluh.jpg',
  'https://imgur.com/3b1lhu2.jpg',
  'https://imgur.com/8mqJCn0.jpg',
  'https://imgur.com/K0gAfSh.jpg',
];

// Borrowed from https://www.framer.com/motion/animate-presence/

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImageCards = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className='flex relative justify-center items-center overflow-clip w-80 md:w-96 h-96 rounded-lg'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className='absolute max-w-md'
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <div
        className='absolute top-44 w-10 select-none h-10 flex justify-center items-center font-bold z-10 rounded-full right-2'
        onClick={() => paginate(1)}>
        <Icon
          className='text-4xl text-white '
          icon='material-symbols:chevron-right-rounded'
        />
      </div>
      <div
        className='absolute top-44 w-10 select-none transform h-10 flex justify-center items-center font-bold z-10 rounded-full left-2'
        onClick={() => paginate(-1)}>
        <Icon
          className='text-4xl text-white '
          icon='material-symbols:chevron-left-rounded'
        />
      </div>
    </div>
  );
};

export default ImageCards;
