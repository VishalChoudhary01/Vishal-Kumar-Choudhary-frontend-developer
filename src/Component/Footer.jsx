import React from 'react';
import Logo from './Logo';
import Resume from '../../src/assets/File/Vishal Kumar MERN Stack.pdf'
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  

  return (
    <footer className="relative bg-neutral-950 mt-20 pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-white">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Logo />
            <p className="text-neutral-400 text-sm max-w-xs">
              Crafting digital experiences through innovative web solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-5">
              <a 
                href={import.meta.env.VITE_LINKEDIN} 
                target="_blank"
                className="text-teal-300 hover:text-teal-400 transition-colors duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href={import.meta.env.VITE_GITHUB_PROFILE} 
                target="_blank"
                className="text-teal-300 hover:text-teal-400 transition-colors duration-300"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-300">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiMapPin className="flex-shrink-0 mt-1 text-teal-300" />
                <p className="text-neutral-300">Patna, Bihar, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="flex-shrink-0 text-teal-300" />
                <a href="tel:+918083561822" className="text-neutral-300 hover:text-teal-300 transition-colors">
                  +91 808 356 1822
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaRegEnvelope className="flex-shrink-0 text-teal-300" />
                <a href="mailto:vishal.bhumca21@gmail.com" className="text-neutral-300 hover:text-teal-300 transition-colors break-all">
                  vishal.bhumca21@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-300">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              <a href="#About" className="text-neutral-300 cursor-pointer hover:text-teal-300 transition-colors">About Me</a>
              <a href="#Projects" className="text-neutral-300 cursor-pointer hover:text-teal-300 transition-colors">Projects</a>
              <a href="#Technologies" className="text-neutral-300 cursor-pointer hover:text-teal-300 transition-colors">Skills</a>
              {/* <a href="#Contact" className="text-neutral-300 cursor-pointer hover:text-teal-300 transition-colors">Contact</a> */}
              <a  href={Resume} className="text-neutral-300 cursor-pointer hover:text-teal-300 transition-colors">Resume</a>
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-sm text-neutral-400 flex flex-col">
           <span>© {currentYear} Vishal Kumar Choudhary. All rights reserved.</span> 
            <span className="block sm:inline mt-2 sm:mt-0 text-neutral-500"> Crafted with React & Tailwind CSS</span>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-50vw, 50vh) rotate(180deg); }
          100% { transform: translate(100vw, -50vh) rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;