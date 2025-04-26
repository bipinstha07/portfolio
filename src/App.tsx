import Connect from "./component/connect"
import ContentFirst from "./component/content-first"
import Education from "./component/education"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Project from "./component/project"
import Skills from "./component/skills-second"
import './index.css'

function App() {
  return (
    <>

      <div className="relative overflow-x-hidden  selection:bg-purple-500  selection:text-white text-white  h-full w-full bg-slate-950">

        <div className="absolute pointer-events-none bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        </div>

        <div className="container z-10 px-8 text-white mx-auto">
          <Header />
          <ContentFirst />
          <Skills />
          <Project />
          <Education />
          <Connect />
          <Footer />
        </div>
      </div>





    </>

  )
}

export default App
