const ParticleBackground = () => {
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
  
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          const randomSize = 2 + Math.random() * 5; // Size from 2 to 8 pixels
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomOpacity = 0.1 + Math.random() * 0.6; // Opacity from 0.1 to 1
          const randomAnimationDuration = 5 + Math.random() * 35; // Duration from 5 to 40 seconds
          const randomAnimationDelay = Math.random() * 10; // Delay from 0 to 10 seconds
  
          return (
            <span
              key={i}
              className={`absolute ${randomColor} rounded-full`}
              style={{
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                opacity: randomOpacity,
                animation: `float ${randomAnimationDuration}s infinite linear`,
                animationDelay: `${randomAnimationDelay}s`,
              }}
            />
          );
        })}
      </div>
    );
  };
  export default ParticleBackground