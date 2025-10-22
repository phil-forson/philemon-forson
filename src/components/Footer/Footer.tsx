"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");

  // Function to determine if a section is active based on scroll position
  const getActiveSection = () => {
    if (!isHomePage) return "";

    const sections = ["landing", "contact"];
    const navHeight = 64;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = element.offsetTop - navHeight;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
          return sectionId;
        }
      }
    }
    return "landing"; // Default to landing if no section is active
  };

  // Update active section on scroll
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setActiveSection(getActiveSection());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = "/";
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of the navigation bar
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = () => {
    if (isHomePage) {
      // If on home page, scroll to contact section
      scrollToSection("contact");
    } else {
      // If on guestbook page, navigate to home page and scroll to contact
      window.location.href = "/#contact";
    }
  };

  // Helper function to get active class
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
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Philemon Forson</h3>
            <p className="text-sm text-[var(--ds-gray-900)] mb-4">
              Software Developer & Data Engineer passionate about creating
              impactful solutions.
            </p>
            <div className="px-3 py-1 text-xs bg-[var(--muted)] rounded-md inline-block">
              Software Developer And Data Engineer
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className={`hover:text-blue-500 transition-colors cursor-pointer ${getActiveClass(
                    "section",
                    "contact"
                  )}`}
                >
                  Contact
                </button>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="/guestbook"
                  className="hover:text-blue-500 transition-colors"
                >
                  Guestbook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold mb-3">Connect</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-blue-500" />
                <a
                  href="mailto:forsonphilemon1@gmail.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  forsonphilemon1@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaGithub className="text-gray-600" />
                <a
                  href="https://github.com/phil-forson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaLinkedin className="text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/forson-philemon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--ds-gray-200-value)] pt-6 text-center">
          <p className="text-sm text-[var(--ds-gray-900)]">
            © {currentYear} Philemon Forson. Made with{" "}
            <FaHeart className="inline text-red-500 mx-1" /> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
