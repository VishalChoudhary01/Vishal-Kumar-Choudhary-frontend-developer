import { HERO_CONTENT } from "../constants"
import heroImage from '../assets/AboutMe/bwPic.jpg'
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa6";
import ResumePdf from '../assets/File/Vishal Kumar MERN Stack.pdf'
const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  }
})
const Hero = () => {
  return (
    <section id="Home" className="border-b border-neutral-900 pb-4 lg:mb-35">
      
        <section className="flex flex-wrap">
            <section className="w-full lg:w-1/2">
            <section className="flex flex-col items-center lg:items-start">
                <motion.h1  variants={container(0.8)} initial="hidden" animate="visible" className="lg:pb-8 pb-2 md:text-5xl text-[1.8em] tracking-tight lg:mt-1 lg:text-6xl">Vishal Kumar <span className="tracking-normal lg:font-thin font-normal   lg:text-neutral-200" >Choudhary</span> </motion.h1>
                {/* <motion.span variants={container(0.5)} initial="hidden" animate="visible" className=" font-[Poppins] bg-gradient-to-r from-sky-400 font-semibold via-green-600 to-lime-400 bg-clip-text text-xl md:text-2xl lg:text-3xl tracking-tight text-transparent">Front-End Developer</motion.span> */}
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className=" text_Hue_Animation bg font-semibold  text-xl md:text-2xl lg:text-3xl font-roboto tracking-tight flex lg:flex-row flex-col items-center lg:gap-x-[1.5rem]">Frontend Developer <span className="text-[0.8em] md:text-xl lg:text-2xl"> [MERN]</span> </motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl tracking-wide lg:text-lg py-2">{HERO_CONTENT}</motion.p>
            <section className="flex w-full lg:justify-start md:justify-center pb-4 ">
         <motion.a href={ResumePdf} target="_blank" download initial={{y:35,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8,delay:2}} className='bg-black hueButtonHover uppercase lg:text-lg md:text-[15px] text-[14px]  lg:w-[32%] border-neutral-300 gap-x-2 flex justify-center items-center border-2 md:p-[1.5%] py-[5px] px-[6px] rounded-md md:rounded-lg' >Download Resume {<FaDownload/>}</motion.a>  
            </section>
            </section>
            </section>
            <section className="w-full lg:w-1/2 lg:p-8">
            <section className="flex justify-center ">
            <motion.img initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}} className="rounded-2xl filter grayscale" src={heroImage} alt="" />
            </section>
            </section>
        </section>
      
    </section>
  )
}

export default Hero
