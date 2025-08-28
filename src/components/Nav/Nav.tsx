"use client";

import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Nav = () => {
  const scrollToSection = (sectionId: string) => {
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

  return (
    <header className="header_main px-4 sticky top-0 flex justify-between items-center">
      <div className=" gap-2 items-center hidden md:flex">
        <p className="text-sm">Philemon Forson</p>
        <p className="px-2 py-1 text-xs bg-[var(--muted)] rounded-md">
          Software Developer And Data Engineer
        </p>
      </div>
      <div className="flex space-x-5 justify-around md:justify-start items-center text-sm w-full md:w-auto">
        <button
          onClick={() => scrollToSection("landing")}
          className="hover:text-blue-500 transition-colors cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-blue-500 transition-colors cursor-pointer"
        >
          Contact
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-blue-500 transition-colors cursor-pointer"
        >
          Projects
        </button>
        <a
          href="/guestbook"
          className="hover:text-blue-500 transition-colors cursor-pointer"
        >
          Guestbook
        </a>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Nav;
