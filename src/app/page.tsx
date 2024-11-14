import Landing from "@/components/Landing/Landing";
import Nav from "@/components/Nav/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <Landing />
    </div>
  );
}
