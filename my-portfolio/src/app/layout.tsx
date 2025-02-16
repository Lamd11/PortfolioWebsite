import { ReactNode } from "react";
import Landing from './components/Landing/Landing';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Head from "next/head";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className="h-full w-full">
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="z-20 min-h-screen w-screen bg-black outline">
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
