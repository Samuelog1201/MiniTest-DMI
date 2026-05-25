import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Maximize2 } from 'lucide-react';
import { routeResults } from '../../data/results';

export const RouteCard = ({ route, onImageClick }) => {
  const data = routeResults[route];

  if (!data) return null;

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
    >
      <motion.div
        className={`bg-gradient-to-br ${data.color} rounded-3xl overflow-hidden shadow-2xl group`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {data.image && (
          <motion.button
            onClick={() => onImageClick?.(data.image, data.title)}
            className="relative w-full h-48 md:h-72 bg-black/20 flex items-center justify-center overflow-hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-contain p-4 md:p-6 transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white/20 backdrop-blur-sm rounded-full pointer-events-none">
              <Maximize2 size={16} className="text-white" />
            </div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 text-xs md:hidden">
              Toca para ampliar
            </span>
          </motion.button>
        )}

        <motion.div
          className="p-6 md:p-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="p-2 bg-white/15 rounded-xl backdrop-blur-sm">
              <MapPin size={20} className="text-white/90" />
            </div>
            <span className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-wider">
              Tu Ruta Vocacional
            </span>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-4xl md:text-6xl leading-none">{data.emoji}</span>
            <div className="flex-1 min-w-0">
              <motion.h2
                className="text-2xl md:text-4xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {data.title}
              </motion.h2>
              {data.subtitle && (
                <motion.p
                  className="text-base md:text-lg text-white/80 font-medium mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  {data.subtitle}
                </motion.p>
              )}
            </div>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-white/85 leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {data.description}
          </motion.p>

          <motion.div
            className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/20 flex items-center gap-2 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span className="text-xs md:text-sm italic">Este es tu camino</span>
            <ArrowRight size={14} className="animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RouteCard;
