import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* About Section */}
      <AboutMe />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
