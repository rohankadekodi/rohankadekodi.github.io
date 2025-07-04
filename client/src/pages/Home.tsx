import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Publications from "@/components/sections/Publications";
import Projects from "@/components/sections/Projects";
import Teaching from "@/components/sections/Teaching";
import Talks from "@/components/sections/Talks";
import Experience from "@/components/sections/Experience";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      threshold: 0.3,
      rootMargin: "-100px 0px -50% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-white font-sans text-academic-dark">
      <Header activeSection={activeSection} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <Sidebar />
          
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            <About />
            <Education />
            <Publications />
            <Projects />
            <Teaching />
            <Talks />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}
