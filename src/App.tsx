import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./App.css"


export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}