import { motion } from 'framer-motion';

/**
 * Barra de progreso animada
 * Muestra el avance del usuario en el quiz
 */
const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full px-6 py-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-icesi-gray-1">
          Pregunta {current} de {total}
        </span>
        <span className="text-sm font-medium text-icesi-gray-1">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-2 bg-icesi-gray-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-icesi rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          layoutId="progress"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
