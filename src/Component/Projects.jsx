import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <section id="Projects" className="border-b border-neutral-900 py-20 px-4 md:px-8">
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-30}} transition={{duration:0.8,delay:0.5}} className="my-20 heading  text-center text-2xl md:text-3xl lg:text-4xl ">Projects </motion.h1>

      <div className="max-w-7xl mx-auto space-y-24">
        {PROJECTS.map((project, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col gap-12 lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            <div className="lg:w-1/2">
              <Carousel images={project.screenshots} />
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold font-OpenSans  text-neutral-100/80">
                {project.title}
              </h3>
              
              <p className="text-lg text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-full bg-neutral-800/50 text-teal-300 border border-teal-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.repo}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg" />
                  <span>Repository</span>
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrDeploy className="text-lg" />
                  <span>Live Demo</span>
                </a>

                {project.Figma && (
                  <a
                    href={project.Figma}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFigma className="text-lg" />
                    <span>Figma</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;