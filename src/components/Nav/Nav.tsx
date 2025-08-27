import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="header_main px-4 sticky top-0 flex justify-between items-center">
      <div className=" gap-2 items-center hidden md:flex">
        <p className="text-sm">Philemon Forson</p>
        <p className="px-2 py-1 text-xs bg-[var(--muted)] rounded-md">
          Software Developer And Data Engineer
        </p>
      </div>
      <div className="flex space-x-5 justify-around md:justify-start items-center text-sm w-full md:w-auto">
        <Link href="/" className="hover:text-blue-500 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-500 transition-colors">
          About
        </Link>
        <Link
          href="/projects"
          className="hover:text-blue-500 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/guestbook"
          className="hover:text-blue-500 transition-colors"
        >
          Guestbook
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Nav;
