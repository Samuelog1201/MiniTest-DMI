import { motion } from 'framer-motion';

/**
 * Avatar dinámico generado basado en el perfil
 */
export const DynamicAvatar = ({ profile, animated = true }) => {
  const avatarConfigs = {
    ux: {
      gradient: 'from-green-400 via-cyan-400 to-blue-500',
      shapes: [
        { type: 'circle', size: 120, opacity: 0.8, x: 0, y: 0 },
        { type: 'circle', size: 80, opacity: 0.6, x: 30, y: -40 },
        { type: 'circle', size: 60, opacity: 0.4, x: -35, y: 35 },
      ],
      icon: '👥',
      label: 'Eres UX',
      description: 'Centrado en usuarios',
    },
    ui: {
      gradient: 'from-purple-400 via-pink-400 to-rose-500',
      shapes: [
        { type: 'square', size: 120, opacity: 0.8, x: 0, y: 0 },
        { type: 'square', size: 80, opacity: 0.6, x: 30, y: -40, rotate: 45 },
        { type: 'square', size: 60, opacity: 0.4, x: -35, y: 35 },
      ],
      icon: '🎨',
      label: 'Eres UI',
      description: 'Creador Visual',
    },
    dev: {
      gradient: 'from-orange-400 via-yellow-400 to-amber-500',
      shapes: [
        { type: 'triangle', size: 120, opacity: 0.8, x: 0, y: 0 },
        { type: 'triangle', size: 80, opacity: 0.6, x: 30, y: -40, rotate: 60 },
        { type: 'triangle', size: 60, opacity: 0.4, x: -35, y: 35 },
      ],
      icon: '⚙️',
      label: 'Eres DEV',
      description: 'Constructor Digital',
    },
  };

  const config = avatarConfigs[profile] || avatarConfigs.ux;

  const renderShape = (shape, index) => {
    const ShapeComponent = shape.type === 'circle' 
      ? 'circle' 
      : shape.type === 'square'
      ? 'rect'
      : 'polygon';

    return (
      <motion.g
        key={index}
        animate={animated ? {
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 10, 0],
        } : {}}
        transition={{
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        }}
      >
        {shape.type === 'circle' && (
          <circle
            cx={shape.x}
            cy={shape.y}
            r={shape.size / 2}
            opacity={shape.opacity}
            className={`fill-current`}
            style={{ filter: `blur(${shape.size / 40}px)` }}
          />
        )}
        {shape.type === 'square' && (
          <rect
            x={shape.x - shape.size / 2}
            y={shape.y - shape.size / 2}
            width={shape.size}
            height={shape.size}
            opacity={shape.opacity}
            className="fill-current"
            style={{
              transform: `rotate(${shape.rotate || 0}deg)`,
              filter: `blur(${shape.size / 40}px)`,
            }}
          />
        )}
        {shape.type === 'triangle' && (
          <polygon
            points={`${shape.x},${shape.y - shape.size / 2} ${shape.x + shape.size / 2},${shape.y + shape.size / 2} ${shape.x - shape.size / 2},${shape.y + shape.size / 2}`}
            opacity={shape.opacity}
            className="fill-current"
            style={{
              transform: `rotate(${shape.rotate || 0}deg)`,
              filter: `blur(${shape.size / 40}px)`,
            }}
          />
        )}
      </motion.g>
    );
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Avatar SVG */}
      <div className="relative w-64 h-64">
        <svg
          viewBox="-150 -150 300 300"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(84, 84, 233, 0.3))',
          }}
        >
          {/* Fondo circular */}
          <motion.circle
            cx="0"
            cy="0"
            r={140}
            className="fill-black"
            style={{
              fill: `url(#gradient-${profile})`,
            }}
            animate={animated ? {
              r: [140, 145, 140],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Definición de gradiente */}
          <defs>
            <linearGradient id={`gradient-${profile}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={config.gradient.split(' ')[1]} />
              <stop offset="100%" stopColor={config.gradient.split(' ')[2]} />
            </linearGradient>
          </defs>

          {/* Formas dinámicas */}
          <g className={`text-${profile}-500`}>
            {config.shapes.map((shape, idx) => renderShape(shape, idx))}
          </g>
        </svg>

        {/* Icono en el centro */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-8xl"
          animate={animated ? {
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {config.icon}
        </motion.div>
      </div>

      {/* Información */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-black mb-2">{config.label}</h3>
        <p className="text-icesi-gray-1 font-medium">{config.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default DynamicAvatar;
