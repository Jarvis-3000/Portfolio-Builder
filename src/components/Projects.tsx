"use client";
import ProjectCard from "./ProjectCard";
import ProjectView from "./ProjectView";
import projects from "../../resources/projects.json";

interface ProjectsProps {
  type?: string;
}

const Projects: React.FC<ProjectsProps> = ({ type = "card" }) => {
  return (
    <section id="projects" className="my-8 w-full px-6 lg:px-20">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>

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
