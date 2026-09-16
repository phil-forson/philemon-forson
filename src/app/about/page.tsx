import type { Metadata } from "next";
import React from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { professionalExperience } from "@/data/experience";
import { mailtoHref, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.seoDescription,
};

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "TypeScript / JavaScript"],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "OpenCV",
      "YOLO",
      "Computer Vision",
      "RAG",
      "LangChain",
      "SentenceTransformers",
    ],
  },
  {
    title: "Data & Backend",
    skills: [
      "pandas",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    title: "Engineering, MLOps & Cloud",
    skills: ["Docker", "MLflow", "AWS", "Git / GitHub", "CI/CD"],
  },
];

const About = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />

      <main className="min-h-screen px-4 lg:px-36 py-8 lg:py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto">
            I&apos;ve always been interested in understanding how things work,
            how they can be improved, and how technology can be used to create
            real value for people.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                &quot;I like building systems
                <br />
                <span className="text-blue-500">people can actually use.&quot;</span>
              </div>
              <div className="text-sm text-[var(--ds-gray-900)]">
                - PHILEMON FORSON
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-[var(--ds-gray-900)] leading-relaxed">
                My work has moved through data analytics, data engineering,
                software engineering, and now AI/ML. Each stage gave me a
                different way of looking at problems: understanding the data,
                building the software around it, and developing intelligent
                systems people can actually use.
              </p>
              <p className="text-lg text-[var(--ds-gray-900)] leading-relaxed">
                I studied Computer Science at the University of Ghana, then
                completed an M.S. in Business Analytics &amp; AI at The
                University of Texas at Dallas (GPA 3.9, May 2026).
              </p>
              <p className="text-lg text-[var(--ds-gray-900)] leading-relaxed">
                What I enjoy most is working on problems where I can combine
                technical depth with practical impact. I like asking questions,
                figuring things out, taking ownership, and continuing to improve
                until the solution is genuinely useful rather than just
                technically interesting.
              </p>
              <p className="text-lg text-[var(--ds-gray-900)] leading-relaxed">
                I&apos;m especially interested in the engineering side of AI —
                taking an idea from data and experimentation through APIs,
                applications, deployment, and ultimately something that delivers
                value to users.
              </p>
              <div className="pt-4">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-center">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">
                Master of Science, Business Analytics &amp; AI
              </h3>
              <a
                href="https://www.utdallas.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors mb-2 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
              >
                The University of Texas at Dallas
              </a>
              <p className="text-[var(--ds-gray-900)] mb-3">
                Graduated: May 2026 • GPA: 3.9
              </p>
              <p className="text-sm">Dean&apos;s Excellence Scholarship</p>
            </div>

            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science, Computer Science
              </h3>
              <a
                href="https://www.ug.edu.gh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors mb-2 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
              >
                University of Ghana
              </a>
              <p className="text-[var(--ds-gray-900)]">
                Graduated: January 2024
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Certifications
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Data Analyst Associate
              </h3>
              <a
                href="https://www.datacamp.com/certificate/DAA0019703549776"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
              >
                View Certificate
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {professionalExperience.map((job) => (
              <article
                key={`${job.company}-${job.dates}`}
                className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
                      >
                        {job.company}, {job.location}
                      </a>
                    ) : (
                      <p className="text-[var(--ds-gray-900)]">
                        {job.company}, {job.location}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-[var(--ds-gray-900)] sm:text-right sm:flex-shrink-0 sm:ml-4">
                    {job.dates}
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Let&apos;s build something useful.
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I&apos;m open to AI/ML, software engineering, and data-focused
              opportunities where I can contribute, keep learning, and build
              systems that create real value.
            </p>
            <a
              href={mailtoHref}
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
