import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export const AnimatedCounter = ({ value, suffix = '', delay = 0, className = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(count, value, {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1],
      });
      return controls.stop;
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [value, delay, count]);

  return (
    <motion.span className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
