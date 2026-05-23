import { motion } from 'framer-motion';

/**
 * Barras de porcentaje animadas con glow effect
 */
export const PercentageBar = ({ label, percentage, color = 'icesi-blue', delay = 0 }) => {
  const maxValue = 100;
  const displayPercentage = Math.round(percentage);

  const colorClasses = {
    'icesi-blue': 'from-icesi-blue to-icesi-purple',
    'icesi-green': 'from-icesi-green to-emerald-500',
    'icesi-purple': 'from-icesi-purple to-indigo-600',
    'icesi-orange': 'from-icesi-orange to-red-500',
  };

  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-black text-lg">{label}</span>
        <motion.span
          className="font-bold text-2xl text-transparent bg-gradient-to-r bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--color-start), var(--color-end))`,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 0.6,
            delay: delay + 0.3,
          }}
        >
          {displayPercentage}%
        </motion.span>
      </div>

      {/* Barra de progreso */}
      <div className="relative w-full h-4 bg-icesi-gray-2 rounded-full overflow-hidden shadow-md">
        <motion.div
          className={`h-full bg-gradient-to-r ${colorClasses[color]} rounded-full shadow-lg`}
          initial={{ width: 0 }}
          animate={{ width: `${displayPercentage}%` }}
          transition={{
            duration: 1.2,
            delay: delay + 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />

        {/* Brillo animado */}
        {displayPercentage > 0 && (
          <motion.div
            className="absolute inset-y-0 right-0 w-2 bg-white opacity-50 blur-sm"
            animate={{
              boxShadow: [
                '0 0 0px rgba(84, 84, 233, 0.4)',
                '0 0 20px rgba(84, 84, 233, 0.8)',
                '0 0 0px rgba(84, 84, 233, 0.4)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default PercentageBar;
