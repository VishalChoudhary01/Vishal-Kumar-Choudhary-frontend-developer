import { useMemo } from "react";
import "./Particle.css";

const Particle = () => {
  const colors = ['#7dd3fc', '#2dd4bf', '#ffffff', '#A0F1BE', '#F7C548', '#F9A8D4', '#FBBF24'];
  
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 8 + 3), // 3-10px
      top: Math.random() * 100, // 0-100% vertical position
      left: Math.random() * 100, // 0-100% horizontal position
      duration: Math.random() * 20 + 10, // 10-30s
      delay: Math.random() * -30,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.3 + 0.1, // 10-40% opacity
      translateX: (Math.random() - 0.5) * 200, // -100 to 100px
      translateY: (Math.random() - 0.5) * 200 // -100 to 100px
    }));
  },);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animation: `float ${particle.duration}s ${particle.delay}s infinite both`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `translate(${particle.translateX}px, ${particle.translateY}px)`
          }}
        />
      ))}
    </div>
  );
};
export default Particle