
import { ReactNode } from "react";
import Landing from './components/Landing/Landing'
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Head from "next/head";
import "./globals.css";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
      </Head>
      <body className="z-20 max-h-screen w-full bg-black outline">
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