import { motion } from 'framer-motion';
import FloatingShapes from './FloatingShapes';

/**
 * Pantalla de resultados
 * Muestra el perfil personalizado del usuario basado en sus respuestas
 */
const ResultScreen = ({ result, scores, onRestart }) => {
  // Configuración por perfil
  const profileConfig = {
    ux: {
      title: 'Eres UX',
      description: 'Piensas en las personas primero. Te importa cómo se siente, entiende y vive una experiencia digital. Eres empático, curioso y obsesionado con resolver problemas reales.',
      color: 'icesi-green',
      gradient: 'gradient-ux',
      icon: '👥',
      traits: ['Empatía', 'Investigación', 'Resolución de problemas', 'Diseño centrado en usuario'],
    },
    ui: {
      title: 'Eres UI',
      description: 'Tu mente conecta con lo visual, la estética y cómo una interfaz comunica emociones. Eres detallista, creativo y obsesionado con la belleza y coherencia visual.',
      color: 'icesi-purple',
      gradient: 'gradient-ui',
      icon: '🎨',
      traits: ['Creatividad', 'Atención al detalle', 'Estética', 'Comunicación visual'],
    },
    dev: {
      title: 'Eres DEV',
      description: 'Te emociona construir experiencias funcionales, interactivas y técnicamente sólidas. Eres lógico, pragmático y obsesionado con la arquitectura y el rendimiento.',
      color: 'icesi-orange',
      gradient: 'gradient-dev',
      icon: '⚙️',
      traits: ['Lógica', 'Problemática técnica', 'Escalabilidad', 'Performance'],
    },
  };

  const config = profileConfig[result];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: 'backOut',
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <FloatingShapes />

      <motion.div
        className="relative z-10 w-full max-w-2xl px-6 py-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icono del perfil */}
        <motion.div
          variants={iconVariants}
          className={`text-7xl md:text-8xl mb-6`}
        >
          {config.icon}
        </motion.div>

        {/* Título del resultado */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-${config.color} to-${config.color} bg-clip-text text-transparent`}
        >
          {config.title}
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-icesi-gray-1 mb-12 font-medium leading-relaxed"
        >
          {config.description}
        </motion.p>

        {/* Tarjeta de características */}
        <motion.div
          variants={itemVariants}
          className={`bg-${config.color} bg-opacity-5 border-2 border-${config.color} border-opacity-20 rounded-2xl p-8 mb-12`}
        >
          <h3 className="text-lg font-bold text-black mb-4">Tus fortalezas</h3>
          <div className="grid grid-cols-2 gap-3">
            {config.traits.map((trait, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-3 bg-white bg-${config.color} bg-opacity-10 rounded-xl font-semibold text-black`}
              >
                {trait}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gráfico de scores */}
        <motion.div
          variants={itemVariants}
          className="mb-12 space-y-4"
        >
          <h3 className="text-lg font-bold text-black mb-6">Tu puntuación</h3>
          {Object.entries(scores).map(([key, value]) => {
            const percentage = (value / 100) * 100; // Asumiendo máx 100 puntos
            const profileNames = { ux: 'UX', ui: 'UI', dev: 'DEV' };
            return (
              <div key={key} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-black">{profileNames[key]}</span>
                  <span className="font-bold text-icesi-blue">{value}</span>
                </div>
                <div className="w-full h-3 bg-icesi-gray-2 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-${profileNames[key].toLowerCase()}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Botón de reinicio */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="px-8 py-4 md:px-12 md:py-5 bg-white border-2 border-icesi-blue text-icesi-blue font-bold text-lg rounded-2xl cursor-pointer transition-smooth hover:bg-icesi-blue hover:text-white"
        >
          Hacer el test nuevamente
        </motion.button>

        {/* Mensaje inspirador */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-sm text-icesi-gray-1 italic"
        >
          Recuerda: lo mejor es combinar los 3 perfiles para crear experiencias digitales excepcionales.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ResultScreen;
