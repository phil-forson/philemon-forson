"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLaptop,
  FaMobile,
  FaBrain,
  FaServer,
  FaDesktop,
} from "react-icons/fa";

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
      technologies: [
        "Next.js",
        "TypeScript",
        "R",
        "Machine Learning",
        "Python",
      ],
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
        return <FaLaptop className="text-green-500" />;
      case "Backend":
        return <FaServer className="text-purple-500" />;
      case "Mobile":
        return <FaMobile className="text-orange-500" />;
      case "Machine Learning":
        return <FaBrain className="text-red-500" />;
      case "Desktop":
        return <FaDesktop className="text-gray-500" />;
      default:
        return <FaCode className="text-gray-500" />;
    }
  };

  return (
    <section
      id="projects"
      className="w-full h-auto lg:px-36 px-4 py-8 lg:py-16"
    >
      <div className="text-center mb-12 ">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4 tracking-[-0.98px]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredProjects.map((project: any) => (
          <div
            key={project.id}
            className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Project Header */}
            <div className="flex items-start mb-4">
              <div className="flex items-center gap-3">
                {getCategoryIcon(project.category)}
                <div>
                  <h3 className="font-bold text-lg text-[var(--ds-gray-900)]">
                    {project.title}
                  </h3>
                  <span className="text-sm text-[var(--ds-gray-600)]">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-[var(--ds-gray-900)] text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[var(--ds-gray-100-value)] text-[var(--ds-gray-700)] text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex gap-3">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-[var(--ds-gray-700)] hover:text-[var(--ds-gray-900)] transition-colors"
              >
                <FaGithub className="text-lg" />
                Code
              </Link>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More Projects Link */}
      <div className="text-right">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          View All Projects
          <FaExternalLinkAlt className="text-sm" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
