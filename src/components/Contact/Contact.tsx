import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "forsonphilemon1@gmail.com",
      link: "mailto:forsonphilemon1@gmail.com",
      description:
        "Send me an email for any inquiries or collaboration opportunities.",
      color: "text-[var(--ds-gray-900)]",
      hoverColor: "hover:text-[var(--ds-gray-700)]",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      value: "github.com/phil-forson",
      link: "https://github.com/phil-forson",
      description: "Check out my open-source projects and contributions.",
      color: "text-[var(--ds-gray-900)]",
      hoverColor: "hover:text-[var(--ds-gray-700)]",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/forson-philemon",
      link: "https://www.linkedin.com/in/forson-philemon/",
      description: "Connect with me professionally and view my experience.",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Dallas, Texas",
      link: null,
      description: "Based in the vibrant tech hub of Dallas, Texas.",
      color: "text-[var(--ds-gray-900)]",
      hoverColor: "",
    },
  ];

  return (
    <section id="contact" className="w-full h-auto lg:px-36 px-4 py-8 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 tracking-[-0.98px]">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 ${method.color} ${method.hoverColor} transition-colors`}
                >
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--ds-gray-900)]">
                    {method.title}
                  </h3>
                  {method.link ? (
                    <Link
                      href={method.link}
                      target={method.title === "Email" ? "_self" : "_blank"}
                      rel={
                        method.title === "Email" ? "" : "noopener noreferrer"
                      }
                      className={`transition-colors font-medium ${method.color} ${method.hoverColor}`}
                    >
                      {method.value}
                    </Link>
                  ) : (
                    <p className={`font-medium ${method.color}`}>
                      {method.value}
                    </p>
                  )}
                  <p className="text-sm text-[var(--ds-gray-700)] mt-2 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Start a Project CTA */}
        <div className="mt-12">
          <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--ds-gray-900)]">
                Ready to Start a Project?
              </h3>
              <p className="text-[var(--ds-gray-700)] mb-6 max-w-md mx-auto">
                Let's discuss how we can work together to bring your ideas to
                life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:forsonphilemon1@gmail.com"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <FaEnvelope className="text-sm" />
                  Send Message
                </Link>
                <Link
                  href="/guestbook"
                  className="inline-flex items-center gap-2 border border-[var(--ds-gray-200-value)] text-[var(--ds-gray-900)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--ds-gray-100-value)] transition-colors"
                >
                  Leave a Note
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-[var(--ds-gray-700)] text-sm">
            I typically respond to emails within 2 hours. For urgent matters,
            feel free to reach out on LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
