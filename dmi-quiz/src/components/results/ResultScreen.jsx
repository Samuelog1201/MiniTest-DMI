import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, RotateCw, PartyPopper } from 'lucide-react';
import { profileResults } from '../../data/results';
import ResultCard from './ResultCard';
import RouteCard from './RouteCard';
import ScoresSection from './ScoresSection';
import ImageModal from '../ui/ImageModal';

export const ResultScreen = ({ scores, dominantProfile, vocationalRoute, onRestart }) => {
  const data = profileResults[dominantProfile];

  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const openImage = (image, title) => {
    setModalImage(image);
    setModalTitle(title || '');
    setModalOpen(true);
  };

  const closeImage = () => {
    setModalOpen(false);
  };

  return (
    <>
      <motion.div
        className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white py-8 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12 md:space-y-24">
          <motion.section
            className="space-y-8 md:space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-icesi-blue/10 px-4 py-2 md:px-5 md:py-2.5 rounded-full mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <PartyPopper size={16} className="text-icesi-blue" />
                <span className="text-xs md:text-sm font-semibold text-icesi-blue">
                  ¡Descubriste tu perfil!
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Tu Resultado DMI
              </motion.h1>
              <motion.p
                className="text-sm md:text-lg text-gray-500 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Basado en tus respuestas, este es el perfil que más se alinea contigo
              </motion.p>
            </motion.div>

            <ResultCard profile={dominantProfile} scores={scores} onImageClick={openImage} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <ScoresSection scores={scores} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <RouteCard route={vocationalRoute} onImageClick={openImage} />
          </motion.section>

          <motion.section
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              onClick={() => {
                const shareText = `Descubrí mi perfil DMI 🎯\n\nSoy ${data?.title || dominantProfile} y mi ruta vocacional es ${vocationalRoute}. ¿Y tú? https://mini-test-dmi.vercel.app`;
                if (navigator.share) {
                  navigator.share({ text: shareText, title: 'DMI Quiz - Universidad Icesi' });
                } else {
                  navigator.clipboard.writeText(shareText);
                  alert('¡Texto copiado al portapapeles! Comparte tu resultado ✨');
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 md:px-8 md:py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold text-sm md:text-base rounded-2xl hover:border-icesi-blue hover:text-icesi-blue transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Share2 size={18} />
              <span>Compartir Resultado</span>
            </motion.button>

            <motion.button
              onClick={onRestart}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-icesi-blue to-icesi-purple text-white font-bold text-sm md:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2, boxShadow: '0 0 40px rgba(84, 84, 233, 0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              <RotateCw size={18} />
              <span>Hacer Test de Nuevo</span>
            </motion.button>
          </motion.section>

          <motion.div
            className="text-center px-4 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xs md:text-base text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
              Tu perfil DMI no te define, pero te inspira a descubrir todo tu potencial.
              Sigue aprendiendo, creciendo y transformando ideas en realidad.
            </p>
            <p className="text-xs md:text-sm text-gray-300 mt-3 md:mt-4 font-medium">
              Universidad Icesi — Diseño de Medios Interactivos
            </p>
          </motion.div>
        </div>
      </motion.div>

      <ImageModal
        image={modalImage}
        title={modalTitle}
        isOpen={modalOpen}
        onClose={closeImage}
      />
    </>
  );
};

export default ResultScreen;
