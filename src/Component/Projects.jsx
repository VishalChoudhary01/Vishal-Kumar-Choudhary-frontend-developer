import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="Project" className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-40}} 
        transition={{duration:0.8,delay:0.5}} 
        className="my-20 heading text-center text-2xl md:text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      
      <section className="">
        {PROJECTS.map((project,index) => (
          <section key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.section 
              whileInView={{opacity:1,x:10}} 
              initial={{opacity:0,x:-100}} 
              transition={{duration:0.8,delay:1}} 
              className="w-full lg:w-1/4 lg:pr-8"
            >               
              <img 
                className="mb-5 rounded lg:hover:scale-150 cursor-pointer transition-all" 
                src={project.image} 
                width={250} 
                height={250} 
                alt={project.title} 
              />
            </motion.section>
            
            <motion.section 
              whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:100}} 
              transition={{duration:0.8,delay:1}} 
              className="w-full max-w-xl lg:3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              
              {project.technologies.map((tech,index) => (
                <span 
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-300"
                >
                  {tech}
                </span>
              ))}
              
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a 
                  href={project.repo} 
                  className="text-teal-100 flex items-center px-2 py-1 bg-[#101d16] rounded-lg gap-x-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub/> Github Repo
                </a>
                
                <a 
                  href={project.live} 
                  className="text-[#fff] flex items-center px-2 py-1 hover:bg-sky-400 hover:text-black font-semibold active:bg-sky-200 active:text-black transition-all bg-[#07290d] rounded-lg gap-x-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GrDeploy/> Live
                </a>
                
                {project.Figma && (
                  <a 
                    href={project.Figma} 
                    className="text-[#fff] flex items-center px-2 py-1 hover:bg-purple-400 hover:text-black font-semibold active:bg-purple-200 active:text-black transition-all bg-[#f25425] rounded-lg gap-x-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaFigma/> Figma
                  </a>
                )}
              </div>
            </motion.section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Projects;