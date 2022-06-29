import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const FadeInView = (props: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}>
      {props.children}
    </motion.div>
  );
};
export default FadeInView;
