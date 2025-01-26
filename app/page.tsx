import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Main Layout */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section id="hero">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="bg-white">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
