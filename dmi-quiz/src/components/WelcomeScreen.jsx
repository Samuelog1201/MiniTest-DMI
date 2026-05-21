import { motion } from 'framer-motion';
import FloatingShapes from './FloatingShapes';

/**
 * Pantalla de bienvenida
 * Primera impresión del usuario con animaciones atractivas
 */
const WelcomeScreen = ({ onStart }) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(84, 84, 233, 0.4)',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <FloatingShapes />

      {/* Contenedor principal */}
      <motion.div
        className="relative z-10 w-full max-w-2xl px-6 py-12 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Título */}
        <motion.h1
          variants={titleVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-black leading-tight"
        >
          ¿Qué perfil DMI{' '}
          <span className="bg-gradient-to-r from-icesi-blue to-icesi-purple bg-clip-text text-transparent">
            vibra más contigo?
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={subtitleVariants}
          className="text-lg md:text-xl text-icesi-gray-1 mb-12 font-medium leading-relaxed"
        >
          Descubre si tu mente conecta más con la experiencia, el diseño visual o el desarrollo interactivo.
        </motion.p>

        {/* Botón de inicio */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={onStart}
          className="px-8 py-4 md:px-12 md:py-5 bg-gradient-icesi text-white font-bold text-lg rounded-2xl shadow-glow cursor-pointer transition-smooth border-none"
        >
          Comenzar el test
        </motion.button>

        {/* Elemento decorativo inferior */}
        <motion.div
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-icesi-blue"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
