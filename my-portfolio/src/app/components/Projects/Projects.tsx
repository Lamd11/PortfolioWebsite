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
        <section id="projects" className="h-screen w-full">
            <h1 className="mb-6 text-4xl font-bold">PROJECTS</h1>
            <div className="space-y-10">
                {projects.map((project, index) => (
                    <ProjectSlide key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;