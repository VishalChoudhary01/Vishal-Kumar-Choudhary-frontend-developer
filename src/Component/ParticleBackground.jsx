  // Particle animation background component
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {[...Array(50)].map((_, i) => (
        <span
          key={i}
          className="absolute bg-teal-200 rounded-full"
          style={{
            width: `${Math.random() * 4}px`,
            height: `${Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 20}s infinite linear`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
export default ParticleBackground