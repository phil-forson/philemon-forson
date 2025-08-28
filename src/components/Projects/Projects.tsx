"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaMobile,
} from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full-Stack",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description:
        "Interactive dashboard for visualizing business metrics with real-time data updates and custom reporting.",
      technologies: ["Python", "Dash", "PostgreSQL", "Redis"],
      category: "Data",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/username/dashboard",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      category: "Full-Stack",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/username/taskmanager",
      featured: false,
    },
    {
      id: 4,
      title: "ML Recommendation Engine",
      description:
        "Machine learning-based recommendation system for personalized content suggestions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "FastAPI"],
      category: "Machine Learning",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/username/recommender",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "Frontend",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://philemonforson.com",
      featured: true,
    },
    {
      id: 6,
      title: "API Gateway Service",
      description:
        "Microservices API gateway with authentication, rate limiting, and request routing.",
      technologies: ["Node.js", "Express", "Redis", "JWT"],
      category: "Backend",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/username/gateway",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Full-Stack",
    "Frontend",
    "Backend",
    "Data",
    "Machine Learning",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return <FaCode className="text-blue-500" />;
      case "Frontend":
        return <MdOutlineWeb className="text-green-500" />;
      case "Backend":
        return <FaDatabase className="text-purple-500" />;
      case "Data":
        return <FaChartLine className="text-orange-500" />;
      case "Machine Learning":
        return <FaChartLine className="text-red-500" />;
      default:
        return <FaCode className="text-gray-500" />;
    }
  };

  return (
    <section
      id="projects"
      className="w-full h-auto lg:px-36 px-4 py-8 lg:py-16"
    >
      <div className="text-center mb-12 tracking-[-0.98px]">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a
          unique challenge and learning opportunity.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === category
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-[rgba(var(--color-background))] text-[var(--ds-gray-900)] border border-[var(--ds-gray-200-value)] hover:border-blue-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="window-card">
            {/* Mac Window Header with Three Dots */}
            <div className="flex justify-between items-center w-full mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
              </div>

              <div></div>
            </div>

            {/* Project Content */}
            <div className="bg-[var(--ds-background-100)]">
              {/* Category Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-gray-400">
                  {getCategoryIcon(project.category)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-tight text-[rgb(var(--color-foreground))]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--ds-gray-900)] uppercase">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 text-[var(--ds-gray-900)]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[var(--ds-gray-100-value)] text-xs rounded-full text-[var(--ds-gray-900)] border border-[var(--ds-gray-200-value)] font-medium hover:bg-[var(--ds-gray-200-value)] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[var(--ds-gray-100-value)] text-[rgb(var(--color-foreground))] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[var(--ds-gray-200-value)] transition-all duration-300 flex items-center justify-center gap-2 border border-[var(--ds-gray-200-value)] hover:shadow-md"
                  >
                    <FaGithub />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
