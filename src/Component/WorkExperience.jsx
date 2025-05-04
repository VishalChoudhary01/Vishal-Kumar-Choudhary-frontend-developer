import { WORK_EXPERIENCE } from '../constants/index'
import { motion } from 'framer-motion'

const WorkExperience = () => {
  return (
    <section id='WorkExperience' className='border-b border-neutral-900 pb-4 relative'>
      
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='my-20 heading text-center font-Poppins text-2xl md:text-3xl lg:text-4xl'
      >
        Work Experience
      </motion.h2>

      <div className='relative mx-auto max-w-7xl px-4'>
        {/* Desktop layout */}
        <div className='hidden lg:block'>
          {/* Timeline line */}
          <div className='absolute left-1/2 h-full w-0.5 bg-neutral-800 transform -translate-x-1/2' />

          {WORK_EXPERIENCE.map((experience, index) => (
            <motion.div
              key={index}
              className='relative mb-16 flex items-center justify-between'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Year - Left aligned */}
              <motion.div
                className='w-1/4 pr-8 text-right'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className='text-neutral-400 text-sm font-medium'>
                  {experience.duration}
                </p>
              </motion.div>

              {/* Timeline dot */}
              <div className='absolute left-1/2 w-3 h-3 bg-teal-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg' />

              {/* Experience card - Right aligned */}
              <div className='w-1/2 pl-8'>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className='bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 backdrop-blur-sm hover:border-teal-500/30 transition-all'
                >
                  <div className='space-y-4'>
                    <div>
                      <p className='text-teal-300 font-bold text-lg'>
                        {experience.company}
                      </p>
                      <p className='text-neutral-300 font-medium text-sm'>
                        {experience.role}
                      </p>
                    </div>

                    <p className='text-neutral-400 text-sm leading-relaxed'>
                      {experience.description}
                    </p>

                    <div className='flex flex-wrap gap-2'>
                      {experience.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: 'spring', delay: i * 0.05 }}
                          className='px-3 py-1 bg-neutral-900 rounded-full text-xs text-teal-300 border border-teal-500/30'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className='lg:hidden'>
          {WORK_EXPERIENCE.map((experience, index) => (
            <motion.div
              key={index}
              className='relative mb-12'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className='bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 backdrop-blur-sm'>
                <div className='mb-4'>
                  <p className='text-neutral-400 text-xs font-medium'>
                    {experience.duration}
                  </p>
                </div>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-teal-300 font-bold text-lg'>
                      {experience.company}
                    </p>
                    <p className='text-neutral-300 font-medium text-sm'>
                      {experience.role}
                    </p>
                  </div>

                  <p className='text-neutral-400 text-sm leading-relaxed'>
                    {experience.description}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {experience.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: 'spring', delay: i * 0.05 }}
                        className='px-3 py-1 bg-neutral-900 rounded-full text-xs text-teal-300 border border-teal-500/30'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience