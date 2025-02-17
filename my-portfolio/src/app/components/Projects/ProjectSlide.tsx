import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { SiTypescript } from "react-icons/si";

// Define the Project interface
interface Project {
  name: string;
  date: string;
  description: string;
  techStack: string[];
  websiteLink: string;
  sourceCode: string;
  image: string;
}

// Map tech stack to corresponding FontAwesome and React icons
const techIcons: { [key: string]: any } = {
  TypeScript: SiTypescript,
  JavaScript: faJs,
  ReactJS: faReact,
  TailwindCSS: faCss3,
  NodeJS: faNodeJs,
  NextJS: faCode,
};

const ProjectSlide: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative flex h-[100vh] w-11/12 flex-col items-center justify-center space-y-6 rounded-lg p-8 text-white shadow-lg md:flex-row md:space-x-10 md:space-y-0">

      {/* Project Details */}
      <div className="flex w-full flex-col justify-center md:w-1/2">
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <p className="mt-2 text-gray-400">{project.date}</p>
        <p className="mt-4 text-lg">{project.description}</p>

        {/* Tech Stack Icons */}
        <div className="mt-4 flex flex-wrap gap-4">
          {project.techStack.map((tech: string, index: number) => {
            const Icon = techIcons[tech];
            return (
              <div key={index} className="flex items-center space-x-2 rounded-lg bg-gray-800 px-3 py-1 text-white shadow-md">
                {typeof Icon === "object" ? (
                  <FontAwesomeIcon icon={Icon} size="2x" />
                ) : (
                  <Icon size={32} />
                )}
                <span className="text-lg">{tech}</span>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-md transition hover:bg-blue-600"
          >
            Visit Site
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-700 px-6 py-3 text-white shadow-md transition hover:bg-gray-600"
          >
            View Code
          </a>
        </div>
      </div>
      {/* Clickable Image */}
      <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2">
        <div className="relative h-[350px] w-full overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 md:h-[500px]">
          <Image 
            src={project.image} 
            alt={project.name} 
            layout="fill"
            objectFit="contain" 
            className="w-full transition-transform hover:scale-[1.05]"
          />
        </div>
      </a>
    </div>
  );
};

export default ProjectSlide;
