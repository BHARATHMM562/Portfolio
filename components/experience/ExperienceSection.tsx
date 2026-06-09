import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { TerminalCard } from "./TerminalCard";
import { PORTFOLIO } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <SectionHeader title="Experience" />
      <div className="flex flex-col gap-6">
        {PORTFOLIO.experience.map((entry, index) => (
          <RevealWrapper key={index} delay={index * 0.1}>
            <TerminalCard
              title={entry.title}
              subtitle={entry.company}
              date={entry.date}
              index={index}
            />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
