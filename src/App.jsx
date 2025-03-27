import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Technologies from './Component/Technologies'
import Education from './Component/Education'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import WorkExperience from './Component/WorkExperience'
import Footer from './Component/Footer'
function App() {

  return (
    <>
    <section className='overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-sky-300 selection:text-[#222]'>
      <section className='fixed top-0 -z-10 h-full w-full'>

    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </section>
    <section className='container mx-auto px-8'>
    <Navbar/>
    <Hero/>
    <About/>
    <WorkExperience/>
    <Technologies/>
    <Education/>
    <Projects/>
    <Contact/>
    </section>
    <Footer/>
    </section>
    </>
  )
}

export default App
