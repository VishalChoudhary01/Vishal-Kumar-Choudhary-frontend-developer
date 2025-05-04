import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import Carousel from "./Carousel";

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (projectIndex) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }));
  };

  return (
    <section id="Projects" className="border-b border-neutral-900 py-20 px-4 md:px-8">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -30 }} 
        transition={{ duration: 0.8, delay: 0.5 }} 
        className="my-20 heading text-center text-2xl md:text-3xl lg:text-4xl"
      >
        Projects
      </motion.h1>

      <div className="max-w-7xl mx-auto space-y-24">
        {PROJECTS.map((project, index) => {
          const MAX_DESCRIPTION_LENGTH = 200;
          const shouldTruncate = project.description.length > MAX_DESCRIPTION_LENGTH;
          const isExpanded = expandedDescriptions[index] || false;
          
          let displayedDescription = project.description;
          if (!isExpanded && shouldTruncate) {
            displayedDescription = `${project.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`;
          }

          return (
            <motion.article 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col gap-8  lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Carousel Section */}
              <div className="lg:w-1/2">
                <Carousel images={project.screenshots} />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                <h3 className="text-xl md:text-3xl font-semibold font-Poppins text-neutral-100/80">
                  {project.title}
                </h3>

                {/* Animated Description Section */}
                <motion.div
                  layout
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative overflow-hidden"
                >
                  <motion.p
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="md:text-lg text-[0.88rem] text-neutral-400 leading-relaxed"
                  >
                    {displayedDescription}
                    {shouldTruncate && (
                      <motion.button
                        onClick={() => toggleDescription(index)}
                        className="text-teal-400/80 hover:text-teal-300 ml-1.5 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isExpanded ? " Show Less" : " Read More"}
                      </motion.button>
                    )}
                  </motion.p>
                </motion.div>

                {/* Technology Tags */}
                <motion.div 
                  layout
                  className="flex flex-wrap md:gap-2 gap-x-1 gap-y-2"
                >
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="md:px-3 px-2 md:py-1.5 py-1 md:text-sm text-[0.8rem] rounded-full bg-neutral-800/50 text-teal-300 border border-teal-400/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Project Links */}
                <motion.div 
                  layout
                  className="flex flex-wrap md:justify-start justify-center md:gap-4 gap-y-3 gap-x-2 mt-4"
                >
                  <motion.a
                    href={project.repo}
                    className="flex items-center gap-2 md:px-6 md:py-2.5 px-3 py-2 md:text-[1rem] text-[0.88rem] rounded-lg bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="md:text-lg text-[1rem]" />
                    <span>Repository</span>
                  </motion.a>

                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 md:px-6 md:py-2.5 px-3 py-2 md:text-[1rem] text-[0.88rem] rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GrDeploy className="md:text-lg text-[1rem]" />
                    <span>Live Demo</span>
                  </motion.a>

                  {project.Figma && (
                    <motion.a
                      href={project.Figma}
                      className="flex items-center gap-2 md:px-6 md:py-2.5 px-3 py-2 md:text-[1rem] text-[0.88rem] rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFigma className="md:text-lg text-[1rem]" />
                      <span>Figma</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;