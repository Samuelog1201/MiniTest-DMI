/**
 * Configuración de resultados
 * Perfiles y rutas vocacionales con imágenes
 */

// =========================
// IMPORTAR IMÁGENES
// =========================

import uxImg from "../assets/avatars/ux.jpg";
import uiImg from "../assets/avatars/ui.jpg";
import devImg from "../assets/avatars/dev.jpg";

import videojuegosImg from "../assets/results/videojuegos.jpg";
import productManagementImg from "../assets/results/product-management.jpg";
import hipermediaImg from "../assets/results/hipermedia.jpg";
import iaImg from "../assets/results/ia-generativa.jpg";
import innovacionImg from "../assets/results/innovacion.jpg";

// =========================
// RESULTADOS DE PERFILES
// =========================

// =========================
// RESULTADOS DE PERFILES
// =========================

export const profileResults = {
  ux: {
    title: "UX Design",
    heading: "El perfil DMI que más vibra contigo es",
    subtitle: "Diseñador/a de Experiencias de Usuario",
    description: "Te interesa crear experiencias intuitivas y entender cómo interactúan las personas con la tecnología. Tu superpoder es la empatía y tu misión es hacer que lo digital sea humano.",
    emoji: "👥",
    image: uxImg,
    color: "from-green-400 via-emerald-500 to-teal-600",
    gradient: "from-green-500 to-emerald-700",
    progressColor: "bg-gradient-to-r from-emerald-400 to-teal-500",
    accent: "emerald"
  },

  ui: {
    title: "UI Design",
    heading: "El perfil DMI que más vibra contigo es",
    subtitle: "Creador/a Visual de Interfaces",
    description: "Te apasiona lo visual, la estética y construir interfaces memorables. Cada color, tipografía y animación es una oportunidad para crear emociones.",
    emoji: "🎨",
    image: uiImg,
    color: "from-purple-400 via-pink-500 to-rose-600",
    gradient: "from-purple-600 to-pink-700",
    progressColor: "bg-gradient-to-r from-purple-400 to-pink-500",
    accent: "purple"
  },

  dev: {
    title: "Desarrollo de Interfaces",
    heading: "El perfil DMI que más vibra contigo es",
    subtitle: "Constructor/a Digital",
    description: "Disfrutas construir experiencias digitales funcionales y hacer que las ideas cobren vida. El código es tu lienzo y la lógica tu musa.",
    emoji: "⚙️",
    image: devImg,
    color: "from-orange-400 via-yellow-500 to-amber-600",
    gradient: "from-orange-500 to-amber-700",
    progressColor: "bg-gradient-to-r from-orange-400 to-amber-500",
    accent: "orange"
  }
};

// =========================
// RESULTADOS VOCACIONALES
// =========================

export const routeResults = {
  videojuegos: {
    title: "Videojuegos",
    subtitle: "Crea mundos que emocionan",
    emoji: "🎮",
    description: "Diseña experiencias interactivas, narrativas épicas y gameplay que atrapen a millones. Tu creatividad no tiene límites cuando se trata de contar historias jugables.",
    color: "from-violet-600 to-fuchsia-600",
    image: videojuegosImg
  },

  "product-management": {
    title: "Product Management",
    subtitle: "Lidera productos que transforman",
    emoji: "🚀",
    description: "Conecta tecnología, usuarios y negocio para crear productos digitales que impacten vidas. Eres el puente entre una idea genial y una realidad exitosa.",
    color: "from-emerald-600 to-teal-600",
    image: productManagementImg
  },

  hipermedia: {
    title: "HipermedIA",
    subtitle: "Narrativa sin fronteras",
    emoji: "🎬",
    description: "Combina imagen, sonido e interactividad para crear experiencias multimedia inmersivas. El storytelling digital es tu superpoder.",
    color: "from-sky-600 to-indigo-600",
    image: hipermediaImg
  },

  "ia-generativa": {
    title: "IA Generativa",
    subtitle: "Construye el futuro inteligente",
    emoji: "🤖",
    description: "Domina la inteligencia artificial para crear soluciones que generen contenido, automaticen procesos y transformen industrias enteras.",
    color: "from-orange-600 to-amber-600",
    image: iaImg
  },

  "innovacion-emprendimiento": {
    title: "Innovación y Emprendimiento",
    subtitle: "Convierte ideas en imperio",
    emoji: "💡",
    description: "Identifica oportunidades, crea startups y transforma industrias. Tu mentalidad disruptiva es el motor del cambio.",
    color: "from-rose-600 to-red-600",
    image: innovacionImg
  }
};