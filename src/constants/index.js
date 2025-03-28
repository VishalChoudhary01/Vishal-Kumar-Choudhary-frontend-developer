import urifry from "../assets/projects/uifry.jpg";
import Amurtam from "../assets/projects/Amurtam.png";
import portfolio from "../assets/projects/portfolio.png";



// Project github repo
const uifryGithub=import.meta.env.VITE_UIFRY_REPO

const portfolioGithub=import.meta.env.VITE_PORTFOLIO_REACT_REPO
const AmuratmGithub=import.meta.env.VITE_AMURTAM_REPO

// Project Live Link
const uifryLive=import.meta.env.VITE_UIFRY_LIVE
const portfolioLive=import.meta.env.VITE_PORTFOLIO_LIVE
const amurtamLive=import.meta.env.VITE_AMURTAM_LIVE

// Figma
const amurtamFigma=import.meta.env.VITE_AMURTAM_FIGMA
const urifyFigma=import.meta.env.VITE_URIFY_FIGMA

export const HERO_CONTENT = `I am a passionate front-end developer with a keen eye for crafting visually stunning and artistic web applications. Over the past six months as an intern, I have developed strong skills in HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js. I’ve had hands-on experience in developing functionality and recreating the exact UI from Figma designs, ensuring a seamless user experience that matches the vision. My love for creating eye-catching and innovative designs drives me to deliver exceptional user experiences. I am detail-oriented and dedicated to making websites not only functional but also aesthetically pleasing.`;

export const ABOUT_TEXT = `I am a passionate front-end developer dedicated to crafting visually captivating and highly functional web applications. My experience centers around transforming Figma designs into pixel-perfect, responsive interfaces, ensuring every detail aligns with the envisioned user experience. I am committed to creating designs that are not only aesthetically stunning but also intuitive and engaging.

I thrive in environments that push my creative boundaries and demand meticulous attention to detail. Continuously seeking growth, I am passionate about exploring new technologies and frameworks to build innovative and interactive web experiences. My goal is to leverage cutting-edge tools to deliver applications that captivate users and elevate digital interactions.`;
export const ABOUT_AIM =`Aspiring to become a senior front-end developer, I am eager to expand my expertise by learning new technologies such as Next.js, Three.js, GSAP, and Babylon.js. My goal is to leverage these advanced tools to create even more dynamic and immersive web applications.`;


export const WORK_EXPERIENCE = [
  {
    company: "Cling Multi Solution Pvt Ltd",
    role: "Software Developer Intern",
    duration: "September 2024 - December 2024",
    technologies: ["Next.js", "Tailwind CSS", "CSS"],
    description: "Focused on building dynamic and responsive web applications using Next.js and Tailwind CSS. Developed and optimized components while ensuring clean, maintainable code and user-friendly designs."
  },
  {
    company: "Cloudly Scripts Pvt Ltd",
    role: "Web Developer",
    duration: "May 2024 - June 2024",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    description: "Worked on developing interactive user interfaces using Vue.js and Nuxt.js, ensuring high performance and clean UI using Tailwind CSS. Collaborated with the design team to implement pixel-perfect UI designs from Figma."
  },
  
];

export const EDUCATION=[{
  year:"2021-2023",
  degree:"Master of Computer Application (MCA)",
  insitute:"Banaras Hindu University"
},{
  year:"2017-2020",
  degree:"Bachelor in Computer Application (BCA)",
  insitute:"Anugrah Narayan College"
},{
  year:"2015-2017",
  degree:"Intermediate Science (I. Sc)",
  insitute:"College of Commerce Arts & Science"
},{
  year:"2014-2015",
  degree:"Matric",
  insitute:"St. Xavier's High School"
}
]


export const PROJECTS = [
  {
    title: "Uifry - Financial Decisions App Landing Page",
    image: urifry,
    description:
      "A modern, fully responsive landing page for a financial decisions app. The page features a clean and professional design, showcasing the app's interface and key features.Clean, user-friendly interface designed to attract and engage visitors.",
    technologies: ["HTML", "CSS", "Javascript"],
    repo:uifryGithub,
    live:uifryLive,
    Figma:urifyFigma,
  },
  {
    title: "Amurtam -Book Consultation with certified Experts",
    image: Amurtam,
    description:"Amuratm is a website designed to provide an efficient and user-friendly doctor booking system. It is built using React.js and Tailwind CSS, ensuring both functionality and responsiveness. The design is a precise implementation of Figma designs, delivering a visually appealing and consistent user experience across all devices. The website is fully responsive and incorporates shuttle animations where needed to enhance user interactions",
    technologies: ["HTML", "CSS", "ReactJs","React-Router","TailwindCSS","ExpressJS","MongoDB"],
    repo:AmuratmGithub,
    live:amurtamLive,
    Figma:amurtamFigma
  },
  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A professional and visually stunning personal portfolio website showcasing my skills, projects, and experience as a front-end developer.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS","Framer Motion"],
    repo:portfolioGithub,
    live:portfolioLive
  },
  
  
];

export const CONTACT = {
  address: "Patna,Bihar India. ",
  phoneNo: "+91 8083561822 ",
  email: "vishal.bhumca21@gmail.com",
};
