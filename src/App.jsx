import Header from "./comps/header";
import About from "./comps/about";
import Credentials from "./comps/cred";
import Projects from "./comps/projects";
import Contact from "./comps/contact";




function App() {

  return (
    <div className="h-screen w-screen bg-white">
      <Header/>
      <About/>
      <Credentials/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
