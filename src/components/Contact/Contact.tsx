import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-green-500" />,
      title: "Email",
      value: "forsonphilemon1@gmail.com",
      link: "mailto:forsonphilemon1@gmail.com",
      description:
        "Send me an email for any inquiries or collaboration opportunities.",
    },
    {
      icon: <FaGithub className="text-2xl text-red-500" />,
      title: "GitHub",
      value: "github.com/phil-forson",
      link: "https://github.com/phil-forson",
      description: "Check out my open-source projects and contributions.",
    },
    {
      icon: <FaLinkedin className="text-2xl text-blue-500" />,
      title: "LinkedIn",
      value: "linkedin.com/in/philemon-forson",
      link: "https://linkedin.com/in/philemon-forson",
      description: "Connect with me professionally and view my experience.",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-yellow-500" />,
      title: "Location",
      value: "Dallas, Texas",
      link: null,
      description: "Based in the vibrant tech hub of Dallas, Texas.",
    },
  ];

  return (
    <section className="w-full h-auto lg:px-36 px-4 py-8 lg:py-16 bg-gradient-to-br from-[rgba(var(--color-background))] to-[rgba(var(--ds-gray-100-value))]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 tracking-[-0.98px]">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  {method.link ? (
                    <a
                      href={method.link}
                      target={method.title === "Email" ? "_self" : "_blank"}
                      rel={
                        method.title === "Email" ? "" : "noopener noreferrer"
                      }
                      className={`transition-colors font-medium ${
                        method.title === "Email"
                          ? "text-green-500 hover:text-green-600"
                          : method.title === "GitHub"
                          ? "text-red-500 hover:text-red-600"
                          : method.title === "LinkedIn"
                          ? "text-blue-500 hover:text-blue-600"
                          : "text-blue-500 hover:text-blue-600"
                      }`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-yellow-500 font-medium">
                      {method.value}
                    </p>
                  )}
                  <p className="text-sm text-[var(--ds-gray-900)] mt-2">
                    {method.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start a Project?
            </h3>
            <p className="mb-6 text-lg">
              Let's discuss how we can work together to bring your ideas to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:forsonphilemon1@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <MdOutlineEmail />
                Send Message
              </a>
              <a
                href="/guestbook"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Leave a Note
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-[var(--ds-gray-900)]">
            I typically respond to emails within 2 hours. For urgent matters,
            feel free to reach out on LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
