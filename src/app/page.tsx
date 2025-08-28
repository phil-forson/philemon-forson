"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Nav from "@/components/Nav/Nav";
import Works from "@/components/Works/Works";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation (e.g., when coming from guestbook page)
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const navHeight = 64;
          const elementPosition = element.offsetTop - navHeight;

          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    }
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <section id="landing">
        <Landing />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* <Works /> */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
