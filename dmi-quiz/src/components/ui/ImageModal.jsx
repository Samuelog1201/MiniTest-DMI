import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
};

export const ImageModal = ({ image, title, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center max-w-[95vw] max-h-[90vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              onClick={onClose}
              className="absolute -top-12 right-0 md:-top-14 md:right-0 p-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Cerrar"
            >
              <X size={22} />
            </motion.button>

            {title && (
              <motion.p
                className="text-white/80 text-sm font-medium mb-3 text-center max-w-[80vw] truncate"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {title}
              </motion.p>
            )}

            <motion.div
              className="bg-black/30 rounded-2xl p-2 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={image}
                alt={title || ''}
                className="max-w-[85vw] max-h-[70vh] w-auto h-auto object-contain rounded-xl"
                style={{ maxHeight: '70vh' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
