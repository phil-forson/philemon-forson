import React from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />

      <main className="min-h-screen px-4 lg:px-36 py-8 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto">
            I'm a passionate software developer and data engineer who loves
            turning complex problems into elegant solutions.
          </p>
        </section>

        {/* Main Content Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Quote */}
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                "I create solutions
                <br />
                <span className="text-blue-500">that matter."</span>
              </div>
              <div className="text-sm text-[var(--ds-gray-900)]">
                - PHILEMON FORSON
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-[var(--ds-gray-900)] leading-relaxed">
                I believe in building technology that makes a real difference in
                people's lives. With expertise in full-stack development and
                data engineering, I transform complex challenges into elegant,
                scalable solutions that drive innovation and growth.
              </p>
              <p className="text-lg text-[var(--ds-gray-900)] leading-relaxed">
                Based in Accra, Ghana, I work with modern technologies like
                React, Node.js, Python, and cloud platforms to create
                applications that are not just functional, but truly impactful
                for users and businesses alike.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:forsonphilemon1@gmail.com"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Frontend
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">React</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Backend
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Express.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">REST APIs</span>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Data & ML
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Pandas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">NumPy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Scikit-learn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">SQL</span>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Tools</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Git</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Docker</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">AWS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">
                Master of Science, Business Analytics
              </h3>
              <p className="text-blue-500 mb-2">
                The University of Texas at Dallas
              </p>
              <p className="text-[var(--ds-gray-900)] mb-3">
                Expected Graduation: 2026 • GPA: 4.0
              </p>
              <p className="text-sm mb-2">
                Dean's Excellence Scholarship Recipient
              </p>
              <div className="text-sm text-[var(--ds-gray-900)]">
                <p className="mb-1">Relevant Courses:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Advanced Statistics For Data Science</li>
                  <li>Business Analytics With R</li>
                  <li>Applied Machine Learning</li>
                  <li>Big Data</li>
                  <li>Applied Econometrics And Time Series Analysis</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
            </div>

            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science, Computer Science
              </h3>
              <p className="text-blue-500 mb-2">
                University of Ghana, Legon, Accra, Ghana
              </p>
              <p className="text-[var(--ds-gray-900)] mb-3">
                Graduated: January 2024
              </p>
              <p className="text-sm">
                Focused on software engineering, data structures, and algorithms
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
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
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                View Certificate
              </a>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Developer</h3>
                  <p className="text-blue-500">
                    Logiciel Ghana Limited, Accra, Ghana
                  </p>
                </div>
                <span className="text-sm text-[var(--ds-gray-900)]">
                  November 2023 – January 2025
                </span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Engineered a scalable Clean Architecture framework, cutting
                    onboarding time by 30% and code defects by 40%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Developed the project from Next.js 13 to Next.js 15 and
                    implemented Turbopack, increasing local development speed by
                    40%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Assessed frontend with Figma prototypes, reducing design
                    rework by 25%
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Software Developer Intern
                  </h3>
                  <p className="text-blue-500">Grundfos, Accra, Ghana</p>
                </div>
                <span className="text-sm text-[var(--ds-gray-900)]">
                  January 2022 – April 2023
                </span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Designed and built a ticket booking system with Angular,
                    improving efficiency by 30% and lowering churn by 20%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Constructed scalable microservices with NestJS, reducing
                    response times by 40%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Analyzed raw data with Tableau, driving 25% faster
                    performance and 15% higher user engagement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="mb-6">
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <a
              href="mailto:forsonphilemon1@gmail.com"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
