import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { ProjectCard } from "./ProjectCard";
import { PORTFOLIO } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO.projects.map((project, index) => (
          <RevealWrapper key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} index={index} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
