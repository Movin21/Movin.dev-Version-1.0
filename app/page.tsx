import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden mx-auto ">
      <div className="max-w-8xl w-full mx-auto ">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#Hero", icon: <FaHome /> },
            { name: "Projects", link: "#Projects", icon: <FaLaptopCode /> },
            { name: "Blogs", link: "#Blogs", icon: <BsMedium /> },
            { name: "Contact Me", link: "#Contact", icon: <MdMarkEmailRead /> },
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
