import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  websiteLink: string;
  sourceCode: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Dynamically import the JSON file
    import("../data/projects.json")
      .then((data) => {
        setProjects(data); // Assuming `projects.json` is an array
      })
      .catch((error) => {
        console.error("Error loading projects data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          startDate={project.startDate}
          endDate={project.endDate}
          description={project.description}
          techStack={project.techStack}
          websiteLink={project.websiteLink}
          sourceCode={project.sourceCode}
        />
      ))}
    </div>
  );
};

export default Projects;
