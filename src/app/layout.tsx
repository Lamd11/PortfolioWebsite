import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./globals.css";

const Layout = () => {
  return (
    <html lang="en" className="h-full w-full">
      <body className="z-20 min-h-screen w-full bg-black outline">
        <div id="landing">
          <Landing />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </body>
    </html>
  );
};

export default Layout;
