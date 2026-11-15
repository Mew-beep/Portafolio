import CustomCursor from "./components/CustomCursor.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import SparkleIntro from "./components/SparkleIntro.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import "./styles/App.css";

function App() {
  return (
    <>
      <SparkleIntro />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
