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
      title: "Apartment Prediction",
      description:
        "A Next.js application that predicts apartment prices using machine learning models. Features an interactive interface for users to input property details and receive price predictions.",
      technologies: ["Next.js", "TypeScript", "CSS", "JavaScript"],
      category: "Full-Stack",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/phil-forson/apartment-prediction",
      liveUrl: "https://apartment-prediction.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Stock Market Web App",
      description:
        "A modern web application for tracking and analyzing stock market data. Built with Vite and React, featuring real-time market data visualization and interactive charts.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "Frontend",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/phil-forson/stock-market-web-app",
      featured: true,
    },
    {
      id: 3,
      title: "E-commerce Backend",
      description:
        "A robust backend API for e-commerce applications built with NestJS. Features user authentication, product management, order processing, and comprehensive testing suite.",
      technologies: ["NestJS", "TypeScript", "Node.js"],
      category: "Backend",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/phil-forson/ecommerce-backend",
      featured: true,
    },
    {
      id: 4,
      title: "Algorithmic Trading Data Science",
      description:
        "A comprehensive data science project focused on algorithmic trading strategies. Features financial data analysis, trading algorithms, and market prediction models using Python.",
      technologies: ["Python", "Data Science", "Machine Learning"],
      category: "Machine Learning",
      image: "/api/placeholder/400/250",
      githubUrl:
        "https://github.com/phil-forson/Algorithmic-Trading-Data-Science-Project",
      featured: true,
    },
    {
      id: 5,
      title: "Shoprite Inventory Management",
      description:
        "A comprehensive Windows Forms application for managing Shoprite's inventory system. Features user authentication, inventory tracking, and business management tools built with C#.",
      technologies: ["C#", ".NET", "Windows Forms"],
      category: "Desktop",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/phil-forson/Shoprite-Inventory-Management",
      featured: true,
    },
    {
      id: 6,
      title: "CropApp",
      description:
        "A React Native mobile application for crop management and agricultural assistance. Features user authentication, data management, and Firebase integration for real-time updates.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      category: "Mobile",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/phil-forson/CropApp",
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Full-Stack",
    "Frontend",
    "Backend",
    "Desktop",
    "Mobile",
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
      case "Mobile":
        return <FaMobile className="text-indigo-500" />;
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
                ? "bg-blue-500 text-white"
                : "bg-[rgba(var(--color-background))] text-[var(--ds-gray-900)] border border-[var(--ds-gray-200-value)] hover:border-blue-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="flex-1 bg-[var(--ds-gray-100-value)] text-[rgb(var(--color-foreground))] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[var(--ds-gray-200-value)] transition-all duration-300 flex items-center justify-center gap-2 border border-[var(--ds-gray-200-value)]"
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
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
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
