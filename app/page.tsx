import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden mx-auto ">
      <div className="max-w-8xl w-full mx-auto ">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Projects", link: "/", icon: <FaHome /> },
            { name: "Blogs", link: "/", icon: <FaHome /> },
            { name: "Contact Me", link: "/", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
