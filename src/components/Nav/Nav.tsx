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

  const getActiveClass = (linkType: "page" | "section", value: string) => {
    if (linkType === "page") {
      return pathname === value ? "text-blue-500 font-semibold" : "";
    } else {
      return activeSection === value ? "text-blue-500 font-semibold" : "";
    }
  };

  const navLinkClass = (active: string) =>
    `hover:text-blue-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm ${active}`;

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
        <Link
          href={isHomePage ? "#landing" : "/"}
          className={navLinkClass(getActiveClass("section", "landing"))}
          aria-current={isHomePage && activeSection === "landing" ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={navLinkClass(getActiveClass("page", "/about"))}
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
        <Link
          href={isHomePage ? "#contact" : "/#contact"}
          className={navLinkClass(getActiveClass("section", "contact"))}
          aria-current={isHomePage && activeSection === "contact" ? "page" : undefined}
        >
          Contact
        </Link>
        <Link
          href="/projects"
          className={navLinkClass(getActiveClass("page", "/projects"))}
          aria-current={pathname === "/projects" ? "page" : undefined}
        >
          Projects
        </Link>
        <Link
          href="/guestbook"
          className={navLinkClass(getActiveClass("page", "/guestbook"))}
          aria-current={pathname === "/guestbook" ? "page" : undefined}
        >
          Guestbook
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Nav;
