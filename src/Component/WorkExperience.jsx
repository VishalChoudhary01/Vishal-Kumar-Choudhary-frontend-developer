import { WORK_EXPERIENCE } from '../constants/index'
import { motion } from 'framer-motion'

const WorkExperience = () => {
  return (
    <section id='WorkExperience' className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='my-20 heading text-center text-2xl md:text-3xl lg:text-4xl'
      >
        Work Experience
      </motion.h2>

      <section className='lg:flex block w-full'>
        <section className='w-full items-center lg:flex lg:flex-col'>
          {WORK_EXPERIENCE.map((experience, index) => (
            <section 
              className='lg:mb-8 flex w-full lg:w-[80%] md:w-[90%] flex-wrap lg:items-center' 
              key={index}
            >
              {/* Duration Section */}
              <motion.section 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='lg:flex-1 md:flex-1 block w-full'
              >
                <p className='mb-2 text-[10px] md:text-[16px] text-neutral-400 lg:text-xl tracking-wide font-semibold'>
                  {experience.duration}
                </p>
              </motion.section>

              {/* Details Section */}
              <motion.section 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='max-w-xl md:w-[40%] w-60%'
              >
                <div className='space-y-2'>
                  <p className='text-[10px] font-bold lg:text-[18px] md:text-[16px] text-teal-200'>
                    {experience.company}
                  </p>
                  <p className='text-[10px] font-semibold lg:text-[16px] md:text-[14px]'>
                    {experience.role}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {experience.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className='text-[8px] md:text-[10px] px-2 py-1 bg-neutral-800 rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className='text-neutral-400 text-[10px] md:text-[12px] lg:text-[14px] leading-relaxed'>
                    {experience.description}
                  </p>
                </div>
              </motion.section>
            </section>
          ))}
        </section>
      </section>
    </section>
  )
}

export default WorkExperience