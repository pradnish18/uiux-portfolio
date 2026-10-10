import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import DesignProcess from "./components/DesignProcess";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyTemplate from "./components/CaseStudyTemplate";

function MainPortfolio() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-obsidian">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <DesignProcess />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/work/:id" element={<CaseStudyTemplate />} />
      {/* 404 Fallback: Redirect any unrecognized routes to main portfolio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
