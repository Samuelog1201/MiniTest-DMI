import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/**
 * Tarjeta de respuesta premium con efectos avanzados
 */
export const AnswerCard = ({ answer, onSelect, isSelected, isDisabled }) => {
  const isAnswerType = answer.type || answer.profile || answer.route;

  return (
    <motion.button
      onClick={() => onSelect(answer)}
      disabled={isDisabled}
      className={`
        relative w-full p-6 text-left rounded-2xl font-medium text-lg
        transition-all duration-300 group
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
        ${isSelected
          ? 'bg-gradient-icesi text-white shadow-glow'
          : 'bg-white border-2 border-icesi-gray-2 text-black hover:border-icesi-blue hover:shadow-lg'
        }
      `}
      whileHover={!isDisabled ? { y: -4 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-1">
          {/* Círculo indicador */}
          <motion.div
            className={`
              w-6 h-6 rounded-full border-2 flex-shrink-0
              ${isSelected
                ? 'bg-white border-white'
                : 'border-icesi-gray-2 group-hover:border-icesi-blue'
              }
            `}
            animate={isSelected ? { scale: 1 } : {}}
          >
            {isSelected && (
              <motion.div
                className="w-full h-full rounded-full bg-icesi-blue flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <span className="text-white text-sm">✓</span>
              </motion.div>
            )}
          </motion.div>
          
          <span className="flex-1">{answer.text}</span>
        </div>

        {/* Flecha indicadora */}
        <motion.div
          className={isSelected ? 'text-white' : 'text-icesi-gray-2 group-hover:text-icesi-blue'}
          animate={isSelected ? { x: 4 } : {}}
        >
          <ChevronRight size={20} />
        </motion.div>
      </div>

      {/* Efecto glow al hover */}
      {!isDisabled && !isSelected && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-icesi-blue to-icesi-purple opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        />
      )}
    </motion.button>
  );
};

export default AnswerCard;
