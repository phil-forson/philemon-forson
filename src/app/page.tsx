import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Nav from "@/components/Nav/Nav";
import Works from "@/components/Works/Works";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <Landing />
      <Works />
      <Footer />
    </div>
  );
}
