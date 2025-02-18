export const metadata = {
  title: "Daniel Lam",
  description: "Daniel Lam's personal portfolio website showcasing projects, skills, and contact information.",
  keywords: [
    "Daniel Lam",
    "portfolio",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
  ],
  authors: [{ name: "Daniel Lam" }],
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Daniel Lam - Portfolio",
    description: "Explore Daniel Lam's projects, skills, and contact details in this modern portfolio website.",
    url: "https://portfolio-website-git-main-lamd11s-projects.vercel.app/", 
    type: "website",
    images: ["/images/preview-image.png"], 
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Lam - Portfolio",
    description: "Check out Daniel Lam's projects and skills in this sleek portfolio.",
    images: ["/images/preview-image.png"], 
  },
};

import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
