import { motion } from 'framer-motion';

/**
 * Componente de formas flotantes abstractas
 * Crea elementos visuales dinámicos de fondo
 */
const FloatingShapes = () => {
  const shapes = [
    { id: 1, size: 200, x: -100, y: -100, color: '#5454E9', opacity: 0.1 },
    { id: 2, size: 150, x: '80%', y: '10%', color: '#865CF0', opacity: 0.08 },
    { id: 3, size: 180, x: '10%', y: '80%', color: '#4CB979', opacity: 0.08 },
    { id: 4, size: 130, x: '70%', y: '70%', color: '#E9683B', opacity: 0.1 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            opacity: shape.opacity,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6 + shape.id * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
