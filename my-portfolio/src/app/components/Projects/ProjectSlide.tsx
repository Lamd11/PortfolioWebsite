import React from "react";
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
    <div className="relative flex h-[90vh] w-full flex-col items-center justify-center rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-white">{project.name}</h2>
      <p className="mt-2 text-white">{project.date}</p>
      <p className="mt-4 max-w-2xl text-center text-lg text-gray-300">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex space-x-6">
        {project.techStack.map((tech: string, index: number) => {
          const Icon = techIcons[tech];
          return (
            <div key={index} className="flex items-center space-x-2 text-white">
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
          className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          Visit Site
        </a>
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-600"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectSlide;
