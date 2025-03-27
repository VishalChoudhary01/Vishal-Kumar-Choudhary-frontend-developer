import aboutMe from '../assets/AboutMe/laptopCode.jpg'
import {ABOUT_TEXT} from '../constants/index'
import {ABOUT_AIM} from '../constants/index'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section id='About' className="border-b border-neutral-900 pb-4">

      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-30}} transition={{duration:0.8,delay:0.5}} className="my-20 heading  text-center text-2xl md:text-3xl lg:text-4xl ">About <span className="text-neutral-500">Me</span> </motion.h1>
    <section className="flex flex-wrap">
        <motion.section whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.8}} className="w-full lg:w-1/2 lg:p-8">
          <section className="flex justify-center items-center">
            <img className='rounded-xl' src={aboutMe} alt="" /></section>  
        </motion.section>
        <section className='w-full   lg:w-1/2 lg:p-8'>
        <motion.section whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.8}} className='flex lg:items-start flex-col gap-y-8 items-center'>
        <p className='lg:text-lg max-w-xl my-2' >{ABOUT_TEXT}</p>
        <p className='lg:text-lg max-w-xl my-2'>{ABOUT_AIM}</p>
        </motion.section>        
        </section>
        </section>
    </section>
  )
}

export default About
