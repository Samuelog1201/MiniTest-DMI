/**
 * Preguntas oficiales del DMI Quiz
 * Las primeras 5 preguntas determinan:
 * UX / UI / DEV
 *
 * La última pregunta determina:
 * Ruta vocacional
 */

export const questions = [
  {
    id: 1,
    question: "Cuando usas una app nueva, ¿qué notas primero?",
    answers: [
      {
        text: "Si es fácil entenderla o te perdió en 3 segundos.",
        type: "ux"
      },
      {
        text: "Si se ve brutal visualmente.",
        type: "ui"
      },
      {
        text: "Cómo funciona internamente.",
        type: "dev"
      }
    ]
  },

  {
    id: 2,
    question:
      "Si fueras parte del equipo que diseña esa app ¿qué sería más emocionante?",
    answers: [
      {
        text: "Diseñar cómo se ve, comunica y conecta.",
        type: "ui"
      },
      {
        text: "Programar las interacciones y funcionalidades.",
        type: "dev"
      },
      {
        text: "Mejorar cómo las personas la usan.",
        type: "ux"
      }
    ]
  },

  {
    id: 3,
    question: "¿Qué plan te suena más divertido?",
    answers: [
      {
        text:
          "Probar ideas y convertirlas en experiencias interactivas reales.",
        type: "dev"
      },
      {
        text: "Crear pantallas, visuales y contenidos.",
        type: "ui"
      },
      {
        text: "Descubrir cómo piensa la gente y qué necesita.",
        type: "ux"
      }
    ]
  },

  {
    id: 4,
    question:
      "Cuando trabajes creando productos digitales: videojuegos, apps, redes sociales o páginas web ¿En qué rol te ves?",
    answers: [
      {
        text: "Diseñando la experiencia de uso e interacción.",
        type: "ux"
      },
      {
        text: "Creando su universo visual y de contenidos.",
        type: "ui"
      },
      {
        text: "Desarrollando cómo funcionan las interfaces.",
        type: "dev"
      }
    ]
  },

  {
    id: 5,
    question: "¿Qué frase te describe mejor?",
    answers: [
      {
        text:
          "Me gusta más el código y entender cómo funciona todo por dentro.",
        type: "dev"
      },
      {
        text:
          "Me obsesiona que todo se vea increíble visualmente.",
        type: "ui"
      },
      {
        text:
          "Me encanta hacer que las apps sean fáciles para todos.",
        type: "ux"
      }
    ]
  },

  {
    id: 6,
    question: "¿Cuál sería tu dream job? 👀🔥",
    answers: [
      {
        text: "Diseñar tu propio videojuego 🎮",
        route: "videojuegos"
      },
      {
        text: "Crear el próximo producto digital que todos quieran usar 🚀",
        route: "product-management"
      },
      {
        text: "Lanzar una experiencia interactiva llena de narrativa, imagen y sonido 🎬",
        route: "hipermedia"
      },
      {
        text: "Construir una solución con IA que sorprenda a todos 🤖",
        route: "ia-generativa"
      },
      {
        text: "Convertir una idea en negocio real 💡",
        route: "innovacion-emprendimiento"
      }
    ]
  },
];

/**
 * Rutas vocacionales por respuesta
 */
export const vocationalRoutes = {
  "videojuegos": {
    name: "Videojuegos",
    description: "Crea mundos interactivos, narrativas épicas y experiencias de juego revolucionarias. Diseña mecánicas innovadoras y universos digitales cautivadores.",
    icon: "🎮",
    color: "from-purple-600 to-pink-600"
  },
  "product-management": {
    name: "Product Management",
    description: "Lidera productos digitales desde la idea hasta el lanzamiento. Conecta tecnología con usuarios y estrategia empresarial para crear soluciones que impacten.",
    icon: "🚀",
    color: "from-green-600 to-emerald-600"
  },
  "hipermedia": {
    name: "HipermedIA",
    description: "Produce experiencias multimedia que combinan narrativa, imagen y sonido en un universo digital inmersivo. Mezcla arte, tecnología y storytelling.",
    icon: "🎬",
    color: "from-blue-600 to-cyan-600"
  },
  "ia-generativa": {
    name: "IA Generativa",
    description: "Construye soluciones con inteligencia artificial que generan contenido, automatización y nuevas posibilidades. Diseña el futuro con algoritmos avanzados.",
    icon: "🤖",
    color: "from-orange-600 to-yellow-600"
  },
  "innovacion-emprendimiento": {
    name: "Innovación y Emprendimiento",
    description: "Convierte ideas en negocios reales. Crea startups disruptivas que resuelven problemas y transforman industrias con pensamiento innovador.",
    icon: "💡",
    color: "from-red-600 to-pink-600"
  }
};