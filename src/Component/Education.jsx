import {EDUCATION} from '../constants/index'
import { motion } from 'framer-motion'
const Education = () => {
  return (
    <section id='Education' className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.8,delay:0.5}} className='my-20 heading text-center font-Poppins text-2xl md:text-3xl lg:text-4xl'>Education</motion.h2>
        <section className='lg:flex  block  w-full'>
        <section className=' w-full   items-center  lg:flex lg:flex-col'>
            {EDUCATION.map((education,index)=>(
                <section className='lg:mb-8 flex w-full  lg:w-[80%]  md:w-[90%] flex-wrap lg:items-center' key={index}>
                    <motion.section whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7,delay:0.5}} className='lg:flex-1 md:flex-1 block  w-full  '>
        <p className='mb-2 text-[10px] md:text-[16px] text-neutral-400 lg:text-xl tracking-wide font-semibold' >{education.year}</p>
            </motion.section>
            <motion.section whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7,delay:0.5}} className='max-w-xl md:w-[40%] w-60%'>
                <p className='lg:mb-1 text-[10px] font-semibold lg:text-[16px] md:text-[14px]'>{education.degree}</p>
                <p className='text-teal-200 lg:text-[14px] md:text-[12px] lg:mb-0 md:mb-0 mb-4 font-semibold text-[10px]'>{education.insitute}</p>
            </motion.section>
                </section>
            ))}
            </section>
            </section>
    </section>
  )
}

export default Education
