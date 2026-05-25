import { motion } from 'framer-motion';
import { Sparkles, Maximize2 } from 'lucide-react';
import { profileResults } from '../../data/results';

export const ResultCard = ({ profile, scores, onImageClick }) => {
  const data = profileResults[profile];

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className={`bg-gradient-to-br ${data.color} rounded-3xl p-6 md:p-12 text-white overflow-hidden relative shadow-2xl`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-8 items-center relative z-10">
          <motion.div
            className="md:col-span-2 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {data.image ? (
              <motion.button
                onClick={() => onImageClick?.(data.image, data.title)}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  src={data.image}
                  alt={data.title}
                  className="w-36 h-36 md:w-52 md:h-52 rounded-2xl object-cover shadow-2xl ring-4 ring-white/20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <Maximize2 size={18} className="text-white" />
                  </div>
                </div>
              </motion.button>
            ) : (
              <div className="w-36 h-36 md:w-52 md:h-52 rounded-2xl bg-white/20 flex items-center justify-center text-6xl md:text-7xl backdrop-blur-sm">
                {data.emoji}
              </div>
            )}
            <span className="text-white/50 text-xs mt-2 md:hidden">Toca para ampliar</span>
          </motion.div>

          <motion.div
            className="md:col-span-3 space-y-4 md:space-y-5 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm mx-auto md:mx-0">
              <Sparkles size={14} className="text-yellow-300" />
              <span className="text-xs md:text-sm font-medium text-white/90">{data.heading}</span>
            </div>

            <motion.h1
              className="text-3xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {data.title}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg font-medium text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {data.subtitle}
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-white/70 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {data.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResultCard;
