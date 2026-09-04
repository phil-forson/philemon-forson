import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "@/components/Button/Button";

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm";

const Landing = () => {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.98px] text-[var(--receive-text)]">
          Philemon Forson
        </h1>
        <p className="mt-3 text-lg font-semibold text-[rgb(var(--color-foreground))]">
          Full-Stack Developer & Data Engineer
        </p>
        <p className="mt-3 text-sm text-[var(--ds-gray-900)]">
          M.S. Business Analytics & AI, The University of Texas at Dallas.
          Based in Dallas.
        </p>

        <nav aria-label="Page sections" className="mt-8">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <Link
                href="/about"
                className={`hover:text-blue-500 transition-colors ${focusClass}`}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#experience"
                className={`hover:text-blue-500 transition-colors ${focusClass}`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`hover:text-blue-500 transition-colors ${focusClass}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:text-blue-500 transition-colors ${focusClass}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            text="View projects"
            customlink="#projects"
          />
          <Button
            variant="secondary"
            text="Get in touch"
            customlink="#contact"
          />
        </div>
      </div>

      <ul className="flex gap-4 items-center">
        <li>
          <a
            href="https://github.com/phil-forson"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`text-[var(--ds-gray-900)] hover:text-blue-500 transition-colors ${focusClass} inline-flex p-2`}
          >
            <FaGithub className="text-xl" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/forson-philemon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`text-[var(--ds-gray-900)] hover:text-blue-500 transition-colors ${focusClass} inline-flex p-2`}
          >
            <FaLinkedin className="text-xl" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="mailto:simplelogin-newsletter.contour409@simplelogin.com"
            aria-label="Email"
            className={`text-[var(--ds-gray-900)] hover:text-blue-500 transition-colors ${focusClass} inline-flex p-2`}
          >
            <FaEnvelope className="text-xl" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
