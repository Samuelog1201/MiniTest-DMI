import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';

const profiles = [
  {
    key: 'ux',
    label: 'UX',
    name: 'Experiencia de Usuario',
    barColor: 'bg-gradient-to-r from-emerald-400 to-teal-500',
    dotColor: 'bg-emerald-500',
  },
  {
    key: 'ui',
    label: 'UI',
    name: 'Interfaz Visual',
    barColor: 'bg-gradient-to-r from-purple-400 to-pink-500',
    dotColor: 'bg-purple-500',
  },
  {
    key: 'dev',
    label: 'DEV',
    name: 'Desarrollo de Interfaces',
    barColor: 'bg-gradient-to-r from-orange-400 to-amber-500',
    dotColor: 'bg-orange-500',
  },
];

function getBarAccent(key) {
  switch (key) {
    case 'ux': return 'shadow-emerald-500/25';
    case 'ui': return 'shadow-purple-500/25';
    case 'dev': return 'shadow-orange-500/25';
    default: return '';
  }
}

export const ScoresSection = ({ scores }) => {
  const total = (scores.ux || 0) + (scores.ui || 0) + (scores.dev || 0);

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-2.5 bg-icesi-blue/10 rounded-xl">
            <BarChart3 size={22} className="text-icesi-blue" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Tu Perfil DMI</h2>
            <p className="text-xs md:text-sm text-gray-500">Así se distribuye tu puntuación</p>
          </div>
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {profiles.map((profile, index) => {
            const value = scores[profile.key] || 0;
            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

            return (
              <motion.div
                key={profile.key}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 1) + 0.3, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className={`w-3 h-3 rounded-full ${profile.dotColor} flex-shrink-0`} />
                    <span className="font-bold text-gray-900 text-sm md:text-base truncate">{profile.label}</span>
                    <span className="text-xs text-gray-400 hidden sm:inline truncate">{profile.name}</span>
                  </div>
                  <AnimatedCounter
                    value={percentage}
                    suffix="%"
                    delay={0.2 * (index + 1) + 0.5}
                    className="font-bold text-lg md:text-2xl text-icesi-blue tabular-nums flex-shrink-0 ml-3"
                  />
                </div>

                <div className="relative w-full h-3 md:h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full ${profile.barColor}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 * (index + 1) + 0.4,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                  <motion.div
                    className={`absolute inset-y-0 right-0 w-2 bg-white opacity-40 blur-sm rounded-full ${getBarAccent(profile.key)}`}
                    animate={{
                      boxShadow: [
                        '0 0 2px rgba(255,255,255,0.3)',
                        '0 0 12px rgba(255,255,255,0.6)',
                        '0 0 2px rgba(255,255,255,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.2 * index,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-6 md:mt-8 p-4 md:p-5 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border border-blue-100/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-center text-xs md:text-sm text-gray-600 italic leading-relaxed">
            Lo mejor es combinar los tres perfiles para crear experiencias digitales excepcionales.
            ¡Todas las habilidades suman!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScoresSection;
