"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Link from "next/link";

const Nav = () => {
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
        const offsetTop = element.offsetTop - navHeight - 12;
        const offsetBottom = offsetTop + element.offsetHeight + 12;

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
    <header className="header_main px-4 sticky top-0 flex justify-between items-center">
      <div className=" gap-2 items-center hidden md:flex">
        <Link href="/" className="text-sm">
          Philemon Forson
        </Link>
        <p className="px-2 py-1 text-xs bg-[var(--muted)] rounded-md">
          Software Developer And Data Engineer
        </p>
      </div>
      <div className="flex space-x-5 justify-around md:justify-start items-center text-sm w-full md:w-auto">
        <button
          onClick={() => scrollToSection("landing")}
          className={`hover:text-blue-500 transition-colors cursor-pointer ${getActiveClass(
            "section",
            "landing"
          )}`}
        >
          Home
        </button>
        <Link
          href="/about"
          className={`hover:text-blue-500 transition-colors cursor-pointer ${getActiveClass(
            "page",
            "/about"
          )}`}
        >
          About
        </Link>
        <button
          onClick={handleContactClick}
          className={`hover:text-blue-500 transition-colors cursor-pointer ${getActiveClass(
            "section",
            "contact"
          )}`}
        >
          Contact
        </button>
        <Link
          href="/projects"
          className={`hover:text-blue-500 transition-colors cursor-pointer ${getActiveClass(
            "page",
            "/projects"
          )}`}
        >
          Projects
        </Link>
        <Link
          href="/guestbook"
          className={`hover:text-blue-500 transition-colors cursor-pointer ${getActiveClass(
            "page",
            "/guestbook"
          )}`}
        >
          Guestbook
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Nav;
