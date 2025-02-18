"use client";
import { useState, useEffect } from 'react';
import ProjectSlide from './ProjectSlide';

interface Project {
    name: string;
    date: string;
    description: string;
    techStack: string[];
    websiteLink: string;
    sourceCode: string;
    image: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/data/projects.json");
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects data file", error)
            }
        }
        fetchProjects();
    }, []);
    return (
        <section id="projects" className="h-full w-full">
            <div> 
                <h1 className="mb-6 text-4xl font-bold">PROJECTS</h1>
                <div className="flex flex-col items-center justify-center space-y-10">
                    {projects.map((project, index) => (
                        <ProjectSlide key={index} project={project} />
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Projects;