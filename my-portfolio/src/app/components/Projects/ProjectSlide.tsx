// src/app/components/projects/ProjectSlide.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import dynamic from "next/dynamic";


// Define the Project interface inside this file
interface Project {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  websiteLink: string;
  sourceCode: string;
}

// Map tech stack to corresponding FontAwesome icons
const techIcons: { [key: string]: any } = {
  TypeScript: faCode,
  ReactJS: faReact,
  TailwindCSS: faCss3,
  NodeJS: faNodeJs,
};

const ProjectSlide: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative flex h-[90vh] w-full flex-col items-center justify-center rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-white">{project.name}</h2>
      <p className="mt-2 text-white">
        {project.startDate} - {project.endDate}
      </p>
      <p className="mt-4 max-w-2xl text-center text-lg text-gray-300">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex space-x-6">
        {project.techStack.map((tech: string, index: number) => (
          <div key={index} className="flex items-center space-x-2 text-white">
            <FontAwesomeIcon icon={techIcons[tech] || faCode} size="2x" />
            <span className="text-lg">{tech}</span>
          </div>
        ))}
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
