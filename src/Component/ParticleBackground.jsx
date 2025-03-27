import React, { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  const colors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-purple-200",
    "bg-orange-200",
    "bg-teal-200",
    "bg-indigo-200",
    "bg-pink-200",
    "bg-gray-200",
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = 2 + Math.random() * 5;
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomRight = Math.random() * 100;
        const randomBottom = Math.random() * 100;
        const randomOpacity = 0.1 + Math.random() * 0.6;
        const randomAnimationDuration = 5 + Math.random() * 35;
        const randomAnimationDelay = Math.random() * 10;

        return (
          <span
            key={i}
            className={`absolute ${randomColor} rounded-full ${isMounted ? 'animate-float' : ''}`}
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              right:`${randomRight}%`,
              bottom:`${randomBottom}%`,
              opacity: randomOpacity,
              animationDuration: `${randomAnimationDuration}s`,
              animationDelay: `${randomAnimationDelay}s`,
            }}
          />
        );
      })}

      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-50vw, 50vh) rotate(180deg); }
          100% { transform: translate(100vw, -50vh) rotate(360deg); }
        }
        .animate-float {
          animation: float infinite linear;
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;