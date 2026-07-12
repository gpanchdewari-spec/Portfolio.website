import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-cream selection:bg-electric selection:text-ink">
      <CursorGlow />
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <div className="fixed inset-0 -z-10 bg-radial-premium" />
      <div className="noise-layer" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
