import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const ScaleOnHover = (props: PropsWithChildren & { factor?: number }) => {
  let factor = 1.05;
  if (props.factor) {
    factor = props.factor;
  }
  return (
    <motion.div
      whileHover={{ scale: factor }}
      whileTap={{ scale: factor }}
      {...props}
    />
  );
};

export default ScaleOnHover;
