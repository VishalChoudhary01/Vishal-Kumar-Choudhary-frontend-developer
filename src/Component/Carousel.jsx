// import { motion, AnimatePresence } from 'framer-motion';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setDirection('next');
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    enter: (direction) => ({
      x: direction === 'next' ? '100%' : '-100%',
      opacity: 0.7,
      scale: 0.92,
      filter: 'blur(2px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction === 'next' ? '-30%' : '30%',
      opacity: 0,
      scale: 0.85,
      filter: 'blur(2px)',
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border-neutral-700/80 border group  md:p-4 px-3 py-1 flex items-center justify-center">
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={images[activeIndex]}
            className="w-full h-full object-contain object-center cursor-pointer  rounded-md"
            alt="Project screenshot"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 md:h-1 h-[0.1rem] bg-neutral-800/50">
            <motion.div
              className="h-full bg-teal-400/70"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              key={activeIndex}
            />
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 'next' : 'prev');
                  setActiveIndex(index);
                }}
                className={`md:w-3 md:h-3 h-2 w-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-teal-400/75 scale-110'
                    : 'bg-neutral-600 hover:bg-neutral-400 scale-90'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
