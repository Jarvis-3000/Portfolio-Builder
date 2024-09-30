"use client";
import ProjectCard from "./ProjectCard";
import ProjectView from "./ProjectView";
import projects from "../../resources/projects.json";

import { DashboardIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface ProjectsProps {
  type?: string;
}

const Projects: React.FC<ProjectsProps> = ({ type = "card" }) => {
  return (
    <section id="projects" className="w-full px-6 lg:px-20 text-slate-800 dark:text-white">
      <h2 className="flex group items-center justify-center gap-2 text-3xl font-semibold mb-6 text-center">
        <DashboardIcon className="w-6 h-6"/>
        Projects
      </h2>

      <div className="w-full flex justify-end items-center mb-2 sm:mb-5">
        <a
          href={"https://github.com/jarvis-3000"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-normal sm:text-lg text-blue-700 dark:text-white font-semibold text-lg hover:underline hover:underline-offset-2"
        >
          <GitHubLogoIcon  /> See More...
        </a>
      </div>

      {type === "card" && (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      )}

      {type === "view" && (
        <div className="flex flex-col gap-4 max-w-xl mx-auto lg:max-w-full">
          {projects.map((project, index) => (
            <ProjectView
              key={project.title}
              {...project}
              classname={`${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
