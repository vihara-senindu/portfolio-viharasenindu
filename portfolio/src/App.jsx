import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education"; // Create this like the others
import Projects from "./components/Projects";   // Create this like the others
import OpenSource from "./components/OpenSource";
import Achievements from "./components/Achievements"; // Create this like the others
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Education /> 
      {/* <Experiences /> Uncomment if you create this component */}
      <OpenSource />
      <Projects />
      {/* <Achievements /> */}
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;