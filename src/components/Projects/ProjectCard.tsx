import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaBrain,
  FaServer,
  FaDesktop,
  FaMobile,
  FaEye,
  FaRobot,
  FaChartBar,
} from "react-icons/fa";
import type { Project, ProjectCategory } from "@/data/projects";
import { getPrimaryCategory } from "@/data/projects";

const getCategoryIcon = (category: ProjectCategory) => {
  switch (category) {
    case "Full-Stack":
      return <FaCode className="text-blue-500" aria-hidden="true" />;
    case "Backend":
      return <FaServer className="text-purple-500" aria-hidden="true" />;
    case "AI / ML":
      return <FaBrain className="text-red-500" aria-hidden="true" />;
    case "Computer Vision":
      return <FaEye className="text-teal-500" aria-hidden="true" />;
    case "GenAI / RAG":
      return <FaRobot className="text-indigo-500" aria-hidden="true" />;
    case "Data Science":
      return <FaChartBar className="text-green-500" aria-hidden="true" />;
    case "Desktop":
      return <FaDesktop className="text-gray-500" aria-hidden="true" />;
    case "Mobile":
      return <FaMobile className="text-orange-500" aria-hidden="true" />;
    default:
      return <FaCode className="text-gray-500" aria-hidden="true" />;
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  const primaryCategory = getPrimaryCategory(project);

  return (
    <article className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-6 flex flex-col">
      <div className="flex items-start mb-4">
        <div className="flex items-center gap-3">
          {getCategoryIcon(primaryCategory)}
          <div>
            <h3 className="font-bold text-lg text-[var(--ds-gray-900)]">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--ds-gray-600)]">
              {primaryCategory}
              {project.status ? ` · ${project.status}` : ""}
            </p>
          </div>
        </div>
      </div>

      <p className="text-[var(--ds-gray-900)] text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="mb-4">
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="px-2 py-1 bg-[var(--ds-gray-100-value)] text-[var(--ds-gray-700)] text-xs rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 items-center justify-between">
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--ds-gray-700)] hover:text-[var(--ds-gray-900)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
          >
            <FaGithub className="text-lg" aria-hidden="true" />
            Code
          </Link>
        ) : (
          <span />
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
          >
            <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
            Live Demo
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
