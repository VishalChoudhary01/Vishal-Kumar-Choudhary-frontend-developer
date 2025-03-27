import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// import { FaBarsStaggered } from "react-icons/fa6";
import Logo from './Logo';
const Navbar = () => {
  const Linkedin=import.meta.env.VITE_LINKEDIN
  const Github=import.meta.env.VITE_GITHUB_PROFILE
  return (
    <nav className='mb-8  flex items-center justify-between py-6'>
        <section className='flex flex-shrink-0 items-center'>
          <Logo/>
        </section>
        <section className='lg:block md:hidden landscape hidden'>
          <ul className='flex justify-center font-[RobotoSlab] lg:text-[22px] md:text-[20px] items-center gap-x-5  '>
            <li><a className='border_bottom' href="#">Home</a></li>
            <li><a className='border_bottom' href="#About">About</a></li>
            <li><a className='border_bottom' href="#Project">Project</a></li>
            <li><a className='border_bottom' href="#Techonogies">Technology</a></li>
            <li><a className='border_bottom' href="#footerContact">Contact</a></li>
          </ul>
        </section>
        <section className='lg:m-8  relative flex items-center justify-center lg:gap-5 gap-x-2 lg:text-2xl text-xl '>
        <a className='hireMe lg:px-3 lg:py-2 md:px-[18px] md:py-[8px] px-[14px] py-1 lg:text-lg md:text-[15px] text-[12px] ' href="#Contact">Hire Me</a>
        <a className='hover:text-white   hover:scale-125 transition-all active:text-teal-300' href={Linkedin} target='_blank'><FaLinkedin/></a>  
         <a className='transition-all hover:scale-125 hover:text-white active:text-teal-300' href={Github}><FaGithub/></a> 
          {/* <FaBarsStaggered className='lg:hidden  absolute -right-7 text-[#3cbcf3] md:hidden block'/> */}
        </section>
    </nav>
  )
}

export default Navbar
