import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const ScaleOnHover = (props: PropsWithChildren) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      {...props}
    />
  );
};

export default ScaleOnHover;
