"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Nav from "@/components/Nav/Nav";
import Projects from "@/components/Projects/Projects";
import HomeExperience from "@/components/Experience/HomeExperience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const element = document.getElementById(hash.substring(1));
      if (!element) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.setTimeout(() => {
        element.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }, 0);
    };

    const timeoutId = window.setTimeout(scrollToHash, 100);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-16">
          <header
            id="landing"
            className="py-12 lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:w-[22rem] lg:flex-shrink-0 lg:flex-col lg:py-16"
          >
            <Landing />
          </header>

          <div className="min-w-0 flex-1 pb-16">
            <HomeExperience />
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
