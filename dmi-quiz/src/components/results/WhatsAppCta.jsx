import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { profileResults, routeResults } from '../../data/results';

export const WhatsAppCta = ({ profile, route }) => {
  const profileData = profileResults[profile];
  const routeData = routeResults[route];

  const profileTitle = profileData?.title || profile;
  const routeTitle = routeData?.title || route;

  const message = `
Hola. Acabo de realizar el test de Diseño de Medios Interactivos (DMI) de la Universidad Icesi.

Mi resultado fue:
• Perfil: ${profileTitle}
• Ruta vocacional: ${routeTitle}

Me gustaría conocer más sobre la carrera, las oportunidades profesionales, el plan de estudios y cómo podría desarrollar este perfil dentro de DMI.

Quedo atento(a) a tu orientación. ¡Muchas gracias!
  `.trim();

  const whatsappUrl = `https://wa.me/573177071165?text=${encodeURIComponent(message)}`;

  return (
    <motion.section
      className="w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl p-8 md:p-12">
        <div className="absolute top-0 -right-20 w-72 h-72 bg-green-100/60 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-green-50/80 rounded-full mix-blend-multiply filter blur-2xl" />

        <div className="relative z-10 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            ¿Quieres llevar este perfil al siguiente nivel?
          </h3>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            Conversa con una asesora de la Universidad Icesi y descubre cómo puedes desarrollar este perfil dentro de Diseño de Medios Interactivos.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2, boxShadow: '0 8px 30px rgba(37, 211, 102, 0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={22} />
            <span>Quiero conocer más sobre DMI</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatsAppCta;
