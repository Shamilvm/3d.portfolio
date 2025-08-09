import About from "./sections/About";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import LoaderWrapper from "./components/LoaderWrapper";

function App() {
  return (
    <LoaderWrapper>
      <main className="max-w-7xl mx-auto font-poppins">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* <WorkExperience /> */}
        <Contact />
        <Footer />
      </main>
    </LoaderWrapper>
  );
}

export default App;
