import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                <a
                  href="#landing"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-500 transition-colors"
                >
                  Projects
                </a>
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
                  href="https://github.com/username"
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
                  href="https://linkedin.com/in/username"
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
