import { useState, useEffect } from "react";

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
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ContentProtection />
          <ChatBot />
          <ScrollToTop />

          <Navbar />
          <Hero />
          <Skills />
          <Education />
          <OpenSource />
          <Projects />
          {/* <Achievements /> */}
          <Blogs />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
