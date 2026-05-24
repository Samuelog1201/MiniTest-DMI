import { motion } from 'framer-motion';
import { Share2, RotateCw } from 'lucide-react';
import DynamicAvatar from '../ui/DynamicAvatar';
import PercentageBar from '../ui/PercentageBar';
import { vocationalRoutes } from '../../data/questions';
import { profileResults, routeResults } from '../../data/results';

/**
 * Pantalla de resultados premium con visuales avanzadas
 */
export const ResultScreen = ({ scores, dominantProfile, vocationalRoute, onRestart }) => {
  const profiles = ['ux', 'ui', 'dev'];
  const profileLabels = {
    ux: 'UX',
    ui: 'UI',
    dev: 'DEV',
  };

  const profileColors = {
    ux: 'icesi-green',
    ui: 'icesi-purple',
    dev: 'icesi-orange',
  };

  const profileDescriptions = {
    ux: 'Diseñador de Experiencias',
    ui: 'Creador Visual',
    dev: 'Constructor Digital',
  };

  const route = vocationalRoutes[vocationalRoute] || vocationalRoutes['product-management'];
  const profileData = profileResults[dominantProfile];
  const routeData = routeResults[vocationalRoute];

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

  return (
    <motion.div
      className="w-full min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div
        className="relative py-16 px-6 text-center overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Fondo con blur */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-${dominantProfile} opacity-5 blur-3xl`} />
        </div>

        {/* Avatar dinámico */}
        <div className="flex justify-center mb-8">
          <DynamicAvatar profile={dominantProfile} animated={true} />
        </div>

        {/* Descripción del perfil */}
        <motion.p
          className="text-xl text-icesi-gray-1 font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {profileDescriptions[dominantProfile]}
        </motion.p>
      </motion.div>

      {/* Sección de Porcentajes */}
      <motion.div
        className="max-w-2xl mx-auto px-6 py-12 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-black mb-8">Tu Puntuación</h3>
          <div className="space-y-8">
            {profiles.map((profile, index) => (
              <PercentageBar
                key={profile}
                label={profileLabels[profile]}
                percentage={(scores[profile] / 5) * 100}
                color={profileColors[profile]}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sección de Ruta Vocacional */}
      <motion.div
        className="max-w-2xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className={`bg-gradient-to-br ${route.color} rounded-2xl p-8 text-white overflow-hidden`}>
          {/* Imagen de ruta si existe */}
          {routeData?.image && (
            <motion.div
              className="mb-6 rounded-lg overflow-hidden h-48 -mx-8 -mt-8 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <img
                src={routeData.image}
                alt={routeData.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          )}

          <motion.div
            className="flex items-start gap-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
          >
            <span className="text-5xl flex-shrink-0">{route.icon}</span>
            <div>
              <h4 className="text-2xl font-bold">{route.name}</h4>
              <p className="text-white/80 mt-2">{route.description}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Botones de Acción */}
      <motion.div
        className="max-w-2xl mx-auto px-6 py-12 flex gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.button
          onClick={() => {
            const text = `Descubrí que soy ${profileLabels[dominantProfile]} 🎯 - Ruta: ${route.name}`;
            navigator.share?.({ text, title: 'DMI Quiz' });
          }}
          className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-icesi-blue text-icesi-blue font-bold rounded-2xl hover:bg-icesi-blue hover:text-white transition-all"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(84, 84, 233, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 size={20} />
          Compartir
        </motion.button>

        <motion.button
          onClick={onRestart}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-icesi text-white font-bold rounded-2xl shadow-glow hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(84, 84, 233, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCw size={20} />
          Hacer de nuevo
        </motion.button>
      </motion.div>

      {/* Mensaje inspirador */}
      <motion.p
        className="text-center text-icesi-gray-1 italic px-6 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Recuerda: lo mejor es combinar los 3 perfiles para crear experiencias digitales excepcionales.
      </motion.p>
    </motion.div>
  );
};

export default ResultScreen;
