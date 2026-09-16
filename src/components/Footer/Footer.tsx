"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { mailtoHref, profile } from "@/data/profile";

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");

  const getActiveSection = () => {
    if (!isHomePage) return "";

    const sections = ["landing", "contact"];
    const navHeight = 64;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - navHeight;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
          return sectionId;
        }
      }
    }
    return "landing";
  };

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setActiveSection(getActiveSection());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const getActiveClass = (linkType: "page" | "section", value: string) => {
    if (linkType === "page") {
      return pathname === value ? "text-blue-500 font-semibold" : "";
    } else {
      return activeSection === value ? "text-blue-500 font-semibold" : "";
    }
  };

  return (
    <footer className="h-auto md:px-36 md:py-16 px-4 py-8 border-t border-[var(--ds-gray-200-value)] w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">{profile.name}</h3>
            <p className="text-sm text-[var(--ds-gray-900)] mb-4">
              AI/ML Engineer and Data Scientist with software-engineering and
              data-engineering foundations.
            </p>
            <div className="px-3 py-1 text-xs bg-[var(--muted)] rounded-md inline-block">
              {profile.title}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className={`hover:text-blue-500 transition-colors ${focusClass}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={isHomePage ? "#contact" : "/#contact"}
                  className={`hover:text-blue-500 transition-colors ${focusClass} ${getActiveClass(
                    "section",
                    "contact"
                  )}`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`hover:text-blue-500 transition-colors ${focusClass}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/guestbook"
                  className={`hover:text-blue-500 transition-colors ${focusClass}`}
                >
                  Guestbook
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold mb-3">Connect</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2 min-w-0">
                <FaEnvelope className="text-blue-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href={mailtoHref}
                  className={`hover:text-blue-500 transition-colors break-all ${focusClass}`}
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaGithub className="text-gray-600" aria-hidden="true" />
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-blue-500 transition-colors ${focusClass}`}
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaLinkedin className="text-blue-600" aria-hidden="true" />
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-blue-500 transition-colors ${focusClass}`}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--ds-gray-200-value)] pt-6 text-center">
          <p className="text-sm text-[var(--ds-gray-900)]">
            © {currentYear} {profile.name}. Made with{" "}
            <span className="sr-only">love</span>
            <FaHeart className="inline text-red-500 mx-1" aria-hidden="true" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
