import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { mailtoHref, profile } from "@/data/profile";

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" aria-hidden="true" />,
      title: "Email",
      value: profile.email,
      link: mailtoHref,
      description: "The best way to reach me about opportunities or projects.",
      color: "text-[var(--ds-gray-900)]",
      hoverColor: "hover:text-[var(--ds-gray-700)]",
    },
    {
      icon: <FaGithub className="text-2xl" aria-hidden="true" />,
      title: "GitHub",
      value: profile.githubLabel,
      link: profile.githubUrl,
      description: "Code, experiments, and public repositories.",
      color: "text-[var(--ds-gray-900)]",
      hoverColor: "hover:text-[var(--ds-gray-700)]",
    },
    {
      icon: <FaLinkedin className="text-2xl" aria-hidden="true" />,
      title: "LinkedIn",
      value: profile.linkedinLabel,
      link: profile.linkedinUrl,
      description: "Professional background and experience.",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" aria-hidden="true" />,
      title: "Location",
      value: profile.location,
      link: null,
      description: "Based in Dallas, Texas.",
      color: "text-[var(--ds-gray-900)]",
      hoverColor: "",
    },
  ];

  return (
    <section className="w-full py-8 lg:py-16">
      <div>
        <div className="mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 tracking-[-0.98px]">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-[var(--ds-gray-900)] max-w-2xl">
            I&apos;m open to AI/ML, software engineering, and data-focused
            opportunities where I can contribute, keep learning, and build
            systems that create real value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 ${method.color} ${method.hoverColor} transition-colors`}
                >
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--ds-gray-900)]">
                    {method.title}
                  </h3>
                  {method.link ? (
                    <Link
                      href={method.link}
                      target={method.title === "Email" ? "_self" : "_blank"}
                      rel={
                        method.title === "Email" ? undefined : "noopener noreferrer"
                      }
                      className={`transition-colors font-medium break-all ${method.color} ${method.hoverColor} ${focusClass}`}
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

        <div className="mt-12">
          <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--ds-gray-900)]">
                Let&apos;s build something useful.
              </h3>
              <p className="text-[var(--ds-gray-700)] mb-6 max-w-md mx-auto">
                If you&apos;re working on something in AI/ML, software, or data
                and think I could help, I&apos;d like to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={mailtoHref}
                  className={`inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${focusClass}`}
                >
                  <FaEnvelope className="text-sm" aria-hidden="true" />
                  Send Message
                </Link>
                <Link
                  href="/guestbook"
                  className={`inline-flex items-center justify-center gap-2 border border-[var(--ds-gray-200-value)] text-[var(--ds-gray-900)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--ds-gray-100-value)] transition-colors ${focusClass}`}
                >
                  Leave a Note
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
