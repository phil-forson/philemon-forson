import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Nav from "@/components/Nav/Nav";
import Works from "@/components/Works/Works";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <Landing />
      <Projects />
      {/* <Works /> */}
      <Contact />
      <Footer />
    </div>
  );
}
