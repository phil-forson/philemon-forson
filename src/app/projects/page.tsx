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
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const allProjects = [
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
      status: "Live",
      icon: <FaBrain className="text-purple-500" />,
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
      status: "Live",
      icon: <FaLaptop className="text-green-500" />,
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
      status: "Completed",
      icon: <FaServer className="text-blue-500" />,
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
      status: "Completed",
      icon: <FaBrain className="text-red-500" />,
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
      status: "Completed",
      icon: <FaDesktop className="text-gray-500" />,
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
      status: "In Development",
      icon: <FaMobile className="text-orange-500" />,
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
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

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
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      {/* Hero Section */}
      <section className="text-center pt-16 px-4 lg:px-36">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto leading-relaxed">
            A collection of my latest work showcasing full-stack development,
            mobile applications, and machine learning projects.
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="px-4 lg:px-36 py-4">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Projects</h2>
            <p className="text-[var(--ds-gray-900)] max-w-2xl mx-auto">
              A comprehensive collection of my projects showcasing skills across
              different technologies and domains.
            </p>
          </div> */}

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
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
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="px-4 lg:px-36 py-16 bg-gradient-to-br from-[rgba(var(--color-background))] to-[rgba(var(--ds-gray-100-value))]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-[var(--ds-gray-900)] max-w-2xl mx-auto">
              My projects span across various technologies and frameworks,
              demonstrating versatility in full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-6 mb-4">
                <FaCode className="text-3xl text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-[var(--ds-gray-900)]">
                  Frontend
                </h3>
              </div>
              <p className="text-sm text-[var(--ds-gray-900)]">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-6 mb-4">
                <FaServer className="text-3xl text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-[var(--ds-gray-900)]">
                  Backend
                </h3>
              </div>
              <p className="text-sm text-[var(--ds-gray-900)]">
                Node.js, NestJS, Python, PostgreSQL
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-6 mb-4">
                <FaMobile className="text-3xl text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-[var(--ds-gray-900)]">
                  Mobile
                </h3>
              </div>
              <p className="text-sm text-[var(--ds-gray-900)]">
                React Native, Flutter, Mobile APIs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/20 rounded-lg p-6 mb-4">
                <FaBrain className="text-3xl text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-[var(--ds-gray-900)]">
                  AI/ML
                </h3>
              </div>
              <p className="text-sm text-[var(--ds-gray-900)]">
                TensorFlow, Scikit-learn, Data Analysis
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
