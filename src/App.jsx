import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Achievements from "./components/Achievements";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContentProtection from "./components/ContentProtection"; 

function App() {
  return (
    <div className="App">
      <ContentProtection /> 
      <Navbar />
      <Hero />
      <Skills />
      <Education /> 
      <OpenSource />
      <Projects />
      <Achievements />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;