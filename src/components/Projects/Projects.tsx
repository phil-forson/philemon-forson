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
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
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
                : "bg-[rgba(var(--color-background))] text-[rgb(var(--muted-foreground))] border border-[var(--ds-gray-200-value)] hover:border-blue-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              project.featured ? "ring-2 ring-blue-500" : ""
            }`}
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-gray-400 mb-2">
                  {getCategoryIcon(project.category)}
                </div>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
              {project.featured && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[rgb(var(--muted-foreground))] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[var(--ds-gray-100-value)] text-xs rounded-md text-[rgb(var(--muted-foreground))]"
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
                    className="flex-1 bg-[var(--ds-gray-100-value)] text-[rgb(var(--color-foreground))] px-3 py-2 rounded-md text-sm font-medium hover:bg-[var(--ds-gray-200-value)] transition-colors flex items-center justify-center gap-2"
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
                    className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
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

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Have a Project in Mind?
          </h3>
          <p className="mb-6">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:forsonphilemon1@gmail.com"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Let's Discuss
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
