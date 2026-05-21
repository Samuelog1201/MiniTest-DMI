import { motion } from 'framer-motion';

/**
 * Tarjeta de preguntas
 * Renderiza la pregunta y opciones de respuesta
 */
const QuestionCard = ({ question, onAnswer, isAnswering }) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const answerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      className="relative z-10 w-full max-w-2xl px-6 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Pregunta */}
      <motion.h2
        variants={questionVariants}
        className="text-3xl md:text-4xl font-bold mb-12 text-black leading-tight"
      >
        {question.question}
      </motion.h2>

      {/* Opciones de respuesta */}
      <motion.div className="space-y-3 md:space-y-4">
        {question.answers.map((answer, index) => (
          <motion.button
            key={index}
            variants={answerVariants}
            whileHover={!isAnswering ? 'hover' : {}}
            whileTap={!isAnswering ? 'tap' : {}}
            onClick={() => !isAnswering && onAnswer(answer.type)}
            disabled={isAnswering}
            className="w-full p-5 md:p-6 text-left bg-white border-2 border-icesi-gray-2 rounded-2xl font-medium text-lg hover:border-icesi-blue transition-smooth cursor-pointer disabled:cursor-not-allowed group"
          >
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-icesi-gray-2 group-hover:border-icesi-blue transition-smooth" />
              <span className="text-black group-hover:text-icesi-blue transition-smooth">
                {answer.text}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Indicador de carga */}
      {isAnswering && (
        <motion.div
          className="mt-8 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-icesi-blue"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuestionCard;
