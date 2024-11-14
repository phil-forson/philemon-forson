import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Nav = () => {
  return (
    <header
      className="header_main sticky top-0 flex justify-between items-center "
    >
      <div className=" gap-2 items-center hidden md:flex">
        <p className="text-lg ">Philemon Forson</p>
        <p className="px-2 py-1 text-xs bg-[hsl(var(--muted))] rounded-md">
          Software Developer And Data Engineer
        </p>
      </div>
      <div className="flex space-x-5 justify-around  items-center text-sm w-full">
      <div className="">Home</div>
        <div className="">About</div>
        <div className="">Projects</div>
        <div className="">Guestbook</div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Nav;
