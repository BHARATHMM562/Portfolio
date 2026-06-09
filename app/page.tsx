import { NavBar }            from "@/components/nav/NavBar";
import { HeroSection }       from "@/components/hero/HeroSection";
import { AboutSection }      from "@/components/about/AboutSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ProjectsSection }   from "@/components/projects/ProjectsSection";
import { EducationSection }  from "@/components/education/EducationSection";
import { ContactSection }    from "@/components/contact/ContactSection";
import { Footer }            from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
