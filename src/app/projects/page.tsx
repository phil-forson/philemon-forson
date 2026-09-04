"use client";

import React, { useState } from "react";
import {
  FaCode,
  FaMobile,
  FaBrain,
  FaServer,
} from "react-icons/fa";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/Projects/ProjectCard";
import { PROJECT_CATEGORIES, projects } from "@/data/projects";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] =
    useState<(typeof PROJECT_CATEGORIES)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <section className="text-center pt-16 px-4 lg:px-36">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-600">
            My Projects
          </h1>
          <p className="text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto leading-relaxed">
            Full-stack, backend, desktop, mobile, and machine learning work.
            Featured pieces are on the home page; everything else lives here.
          </p>
        </div>
      </section>

      <section className="px-4 lg:px-36 py-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-wrap justify-center gap-3 mb-8"
            role="group"
            aria-label="Filter projects by category"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                aria-pressed={activeFilter === category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                  activeFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-[rgba(var(--color-background))] text-[var(--ds-gray-900)] border border-[var(--ds-gray-200-value)] hover:border-blue-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <p className="text-center text-[var(--ds-gray-900)] py-12">
              No projects in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 lg:px-36 py-16 bg-[rgba(var(--color-background))]">
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
                <FaCode className="text-3xl text-blue-600 mx-auto mb-2" aria-hidden="true" />
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
                <FaServer className="text-3xl text-green-600 mx-auto mb-2" aria-hidden="true" />
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
                <FaMobile className="text-3xl text-purple-600 mx-auto mb-2" aria-hidden="true" />
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
                <FaBrain className="text-3xl text-red-600 mx-auto mb-2" aria-hidden="true" />
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
