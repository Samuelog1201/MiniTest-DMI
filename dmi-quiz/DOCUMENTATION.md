# ¿Qué perfil DMI vibra más contigo?

Una web app interactiva tipo personality quiz desarrollada en React + Vite + TailwindCSS, diseñada para estudiantes de la Universidad Icesi que desean descubrir si su perfil se acerca más a **UX**, **UI** o **DEV**.

## 🎨 Características Principales

- ✨ **Experiencia moderna y fluida** - Animaciones suaves con Framer Motion
- 📱 **Mobile first** - Completamente responsivo y optimizado para dispositivos móviles
- 🎯 **Interfaz minimalista** - Diseño limpio inspired en Linear, Stripe, Vercel
- 🎭 **Personalización dinámica** - Resultados únicos basados en respuestas del usuario
- 🌈 **Manual de marca Icesi** - Colores y tipografía oficial de la universidad
- ⚡ **Rendimiento optimizado** - Carga rápida y smooth performance
- 🔄 **Transiciones elegantes** - Navegación fluida entre pantallas

## 🚀 Quick Start

### Requisitos Previos
- Node.js v18+ (idealmente v20+)
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
cd dmi-quiz

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Compilar para Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── WelcomeScreen.jsx      # Pantalla de bienvenida con animaciones
│   ├── QuestionCard.jsx        # Tarjeta de preguntas interactiva
│   ├── ProgressBar.jsx         # Barra de progreso animada
│   ├── ResultScreen.jsx        # Pantalla de resultados personalizada
│   └── FloatingShapes.jsx      # Formas decorativas flotantes
│
├── data/
│   └── questions.js            # Preguntas del quiz (8 preguntas)
│
├── styles/
│   └── global.css              # Estilos globales y animaciones
│
├── App.jsx                     # Componente principal - lógica del quiz
├── main.jsx                    # Punto de entrada
└── index.css                   # Tailwind + estilos base
```

## 🎯 Flujo del Quiz

1. **Welcome Screen** - Presentación atractiva con animaciones
2. **8 Preguntas** - Progresión visual con barra de progreso
3. **Cálculo de Perfil** - Sistema de puntuación automático
4. **Result Screen** - Perfil personalizado con:
   - Icono representativo (👥 UX, 🎨 UI, ⚙️ DEV)
   - Descripción motivadora
   - Fortalezas principales
   - Gráfico de puntuaciones

## 🎨 Identidad Visual

### Colores Principales
- **Azul Icesi**: `#5454E9` (primario)
- **Morado Icesi**: `#865CF0` (UI)
- **Verde Icesi**: `#4CB979` (UX)
- **Naranja Icesi**: `#E9683B` (DEV)
- **Blanco**: `#FFFFFF`

### Tipografía
- **Plus Jakarta Sans** - Fuente principal de Google Fonts

## 🧠 Lógica del Test

Cada respuesta suma puntos en tres categorías:
- **UX** - Enfoque en experiencia y usuarios
- **UI** - Enfoque en estética y diseño visual
- **DEV** - Enfoque en desarrollo y funcionalidad

El perfil ganador es determinado por la categoría con mayor puntuación.

## 🎬 Animaciones Incluidas

- ✨ Fade In Up - Aparición de elementos
- 🎯 Scale In - Escala progresiva
- 📍 Float - Formas flotantes de fondo
- 🔄 Pulse - Indicadores de carga
- ↔️ Smooth Transitions - Transiciones suaves entre pantallas

## 🔧 Tecnologías Utilizadas

- **React 19** - Librería UI
- **Vite 5** - Build tool ultrarrápido
- **TailwindCSS 3** - Utility-first CSS
- **Framer Motion** - Animaciones profesionales
- **PostCSS** - Post-procesador CSS
- **AutoPrefixer** - Compatibilidad cross-browser

## 📦 Dependencias Principales

```json
{
  "react": "^19.2.6",
  "react-dom": "^19.2.6",
  "framer-motion": "^11.0.0",
  "tailwindcss": "^3.4.1",
  "vite": "^5.0.0"
}
```

## 💡 Características de UX

- **Progress tracking visual** - Barra animada mostrando avance
- **Respuestas intuitivas** - Botones grandes y accesibles
- **Microinteracciones** - Hover effects y feedback visual
- **Carga animada** - Indicadores suaves durante procesamiento
- **Resultados personalizados** - Mensajes únicos por perfil
- **Reinicio fácil** - Botón para repetir el test

## 🌟 Mejoras Futuras

- [ ] Compartir resultados en redes sociales
- [ ] Guardado de historial local
- [ ] Análisis de tendencias de respuestas
- [ ] Backend para estadísticas
- [ ] Más preguntas con dificultad progresiva
- [ ] Recomendaciones de recursos por perfil
- [ ] Dark mode
- [ ] Múltiples idiomas

## 👨‍💻 Desarrollo

El proyecto usa Vite HMR (Hot Module Replacement) para desarrollo ultrarrápido:

```bash
npm run dev
```

Cualquier cambio en los archivos se refleja instantáneamente en el navegador.

## 📝 Notas de Configuración

### Tailwind Custom Config
- Colores personalizados de Icesi
- Gradientes preconfigurados
- Sombras con efecto glow
- Animaciones custom

### PostCSS
- Autoprefixer para compatibilidad
- Tailwind CSS processor

## 🎓 Contexto Educativo

Esta aplicación fue diseñada específicamente para la Universidad Icesi y el programa DMI (Digital Media and Innovation), proporcionando a los estudiantes una forma interactiva y atractiva de descubrir su perfil profesional dentro del ecosistema digital.

## 📄 Licencia

Desarrollado para Universidad Icesi - Todos los derechos reservados.

---

**Desenvolvido con ❤️ para estudiantes de DMI**

Para preguntas o sugerencias, contacta al equipo de desarrollo digital de Icesi.
