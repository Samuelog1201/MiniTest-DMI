import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Pantalla de bienvenida premium con animaciones
 */
export const WelcomeScreen = ({ onStart }) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10">
        {/* Shapes flotantes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              backgroundColor: ['#5454E9', '#865CF0', '#4CB979', '#E9683B'][i],
              left: `${20 * i}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Contenedor principal */}
      <motion.div
        className="relative z-10 w-full max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Etiqueta superior */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="text-sm font-bold text-icesi-blue bg-blue-50 px-4 py-2 rounded-full">
            Descubre tu perfil DMI
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-6 text-black leading-tight"
        >
          ¿Qué perfil DMI{' '}
          <span className="bg-gradient-to-r from-icesi-blue via-icesi-purple to-icesi-blue bg-clip-text text-transparent">
            vibra más contigo?
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-icesi-gray-1 font-medium mb-12 leading-relaxed"
        >
          Un test interactivo para descubrir si tu perfil es más UX, UI o DEV. 
          Además, conoce tu ruta vocacional en el mundo digital.
        </motion.p>

        {/* Características */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {[
            { icon: '⚡', label: '2 minutos', desc: 'Rápido y divertido' },
            { icon: '🎯', label: '6 preguntas', desc: 'Precisas y reales' },
            { icon: '🚀', label: 'Tu ruta', desc: 'Personalizada para ti' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl border border-icesi-gray-2 hover:border-icesi-blue transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(84, 84, 233, 0.1)' }}
            >
              <div className="text-4xl mb-2">{feature.icon}</div>
              <p className="font-bold text-black">{feature.label}</p>
              <p className="text-sm text-icesi-gray-1">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón Principal */}
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.08, boxShadow: '0 0 50px rgba(84, 84, 233, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-icesi text-white font-bold text-lg rounded-2xl shadow-glow cursor-pointer border-none transition-all"
        >
          Comenzar el test
          <ArrowRight size={24} />
        </motion.button>

        {/* Indicador de scroll */}
        <motion.div
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-icesi-blue"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
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
    </motion.div>
  );
};

export default WelcomeScreen;
