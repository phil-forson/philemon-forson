import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full py-8 lg:py-16">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-8 tracking-[-0.98px]">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
        >
          View all projects
          <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
