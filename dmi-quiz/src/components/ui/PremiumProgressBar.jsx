import { motion } from 'framer-motion';

/**
 * Barra de progreso premium animada con glow effect
 */
export const PremiumProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <motion.div
      className="w-full px-6 py-4 backdrop-blur-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-3">
        <motion.span
          className="text-sm font-semibold text-icesi-gray-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Pregunta {current} de {total}
        </motion.span>
        <motion.span
          className="text-sm font-bold text-icesi-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
      
      <div className="relative w-full h-3 bg-gradient-to-r from-icesi-gray-2 to-icesi-gray-2 rounded-full overflow-hidden shadow-lg">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-icesi rounded-full shadow-glow"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1 bg-white opacity-30 blur-sm"
          animate={{ x: [0, 300, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
};

export default PremiumProgressBar;
