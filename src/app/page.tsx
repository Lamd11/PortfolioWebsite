import Landing from "./components/Landing/Landing";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <div id="home">
        <Landing />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
