import { useState } from 'react';
import aboutMe from '../assets/AboutMe/laptopCode.jpg';
import { ABOUT_TEXT, ABOUT_AIM } from '../constants/index';
import { motion } from 'framer-motion';
import Particle from './Particle/Particle';

const About = () => {
  const [expanded, setExpanded] = useState({
    text: false,
    aim: false
  });

  const MAX_LENGTH = 300;

  const toggleExpanded = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section id='About' className="border-b border-neutral-900 pb-4 relative">
      <div className="absolute inset-0 -z-10">
        <Particle/>
      </div>

      <motion.h1 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-30}} 
        transition={{duration:0.8,delay:0.5}} 
        className="my-20 heading font-Poppins text-center text-2xl md:text-3xl lg:text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <section className="flex flex-wrap">
        <motion.section 
          whileInView={{opacity:1,x:0}} 
          initial={{opacity:0,x:-100}} 
          transition={{duration:0.8}} 
          className="w-full lg:w-1/2 lg:p-8"
        >
          <section className="flex justify-center items-center">
            <img className='rounded-xl' src={aboutMe} alt="About me" />
          </section>  
        </motion.section>

        <section className='w-full lg:w-1/2 lg:p-8'>
          <motion.section 
            whileInView={{opacity:1,x:0}} 
            initial={{opacity:0,x:100}} 
            transition={{duration:0.8}} 
            className='flex lg:items-start flex-col gap-y-8 items-center'
          >
            <motion.div 
              layout 
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <p className='lg:text-lg max-w-xl my-2'>
                {expanded.text ? ABOUT_TEXT : `${ABOUT_TEXT.slice(0, MAX_LENGTH)}...`}
                {ABOUT_TEXT.length > MAX_LENGTH && (
                  <motion.button
                    onClick={() => toggleExpanded('text')}
                    className="text-teal-400/80 hover:text-teal-300 ml-2 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expanded.text ? 'Show Less' : 'Read More'}
                  </motion.button>
                )}
              </p>
            </motion.div>

            <motion.div 
              layout 
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <p className='lg:text-lg max-w-xl my-2'>
                {expanded.aim ? ABOUT_AIM : `${ABOUT_AIM.slice(0, MAX_LENGTH)}...`}
                {ABOUT_AIM.length > MAX_LENGTH && (
                  <motion.button
                    onClick={() => toggleExpanded('aim')}
                    className="text-teal-400 hover:text-teal-300 ml-2 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expanded.aim ? 'Show Less' : 'Read More'}
                  </motion.button>
                )}
              </p>
            </motion.div>
          </motion.section>        
        </section>
      </section>
    </section>
  );
};

export default About;