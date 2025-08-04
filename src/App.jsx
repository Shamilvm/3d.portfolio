import About from "./sections/About";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className="max-w-7xl mx-auto font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <WorkExperience /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
