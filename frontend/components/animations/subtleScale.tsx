import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const SubtleScale = (props: PropsWithChildren & { delay?: number }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.02, 1, 1],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0.2, 0.4, 0.4],
        repeat: Infinity,
        repeatDelay: 1,
        delay: props.delay || 0,
      }}>
      {props.children}
    </motion.div>
  );
};

export default SubtleScale;
