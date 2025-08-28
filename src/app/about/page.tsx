import React from "react";
import {
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import {
  MdOutlineSchool,
  MdOutlineWork,
  MdOutlineLocationOn,
} from "react-icons/md";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express.js", "FastAPI", "REST APIs"],
    },
    {
      category: "Data & ML",
      items: ["Pandas", "NumPy", "Scikit-learn", "SQL", "Data Visualization"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Ghana",
      year: "2019 - 2023",
      description:
        "Focused on software engineering, data structures, and algorithms",
    },
  ];

  const interests = [
    "Machine Learning & AI",
    "Data Engineering",
    "Web Development",
    "Open Source",
    "Problem Solving",
    "Continuous Learning",
  ];

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />

      <main className="min-h-screen px-4 lg:px-36 py-8 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <FaCode className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            I'm a passionate software developer and data engineer who loves
            turning complex problems into elegant solutions. When I'm not
            coding, you'll find me exploring new technologies or contributing to
            open-source projects.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <FaCode className="text-blue-500" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-4 text-center">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <FaGraduationCap className="text-green-500" />
            Education
          </h2>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-blue-500 mb-2">{edu.school}</p>
                <p className="text-[rgb(var(--muted-foreground))] mb-3">
                  {edu.year}
                </p>
                <p className="text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Info Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <FaHeart className="text-red-500" />
            Personal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MdOutlineLocationOn className="text-green-500" />
                Location
              </h3>
              <p>Accra, Ghana</p>
            </div>
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaGlobe className="text-blue-500" />
                Languages
              </h3>
              <p>English (Native), Twi (Native)</p>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <FaChartLine className="text-purple-500" />
            Interests & Goals
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Let's Work Together!
            </h2>
            <p className="mb-6">
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <a
              href="mailto:forsonphilemon1@gmail.com"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;


