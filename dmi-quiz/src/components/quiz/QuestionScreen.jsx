import { motion, AnimatePresence } from 'framer-motion';
import { AnswerCard } from '../ui/AnswerCard';
import PremiumProgressBar from '../ui/PremiumProgressBar';

/**
 * Pantalla de preguntas mejorada
 */
export const QuestionScreen = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  isAnswering,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Progress Bar */}
      <PremiumProgressBar current={currentIndex + 1} total={totalQuestions} />

      {/* Contenido Principal */}
      <motion.div
        className="flex-1 flex items-center justify-center px-6 py-12"
        variants={questionVariants}
      >
        <div className="w-full max-w-2xl">
          {/* Pregunta */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-sm font-bold text-icesi-blue bg-blue-50 px-3 py-1 rounded-full">
                Pregunta {currentIndex + 1}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              {question.question}
            </h2>
          </motion.div>

          {/* Opciones de Respuesta */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {question.answers.map((answer, index) => (
                <AnswerCard
                  key={index}
                  answer={answer}
                  onSelect={() => !isAnswering && onAnswer(answer)}
                  isDisabled={isAnswering}
                  isSelected={false}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Indicador de procesamiento */}
          {isAnswering && (
            <motion.div
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-icesi-blue"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuestionScreen;
