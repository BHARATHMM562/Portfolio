import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { TerminalCard } from "@/components/experience/TerminalCard";
import { PORTFOLIO } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 max-w-4xl mx-auto">
      <SectionHeader title="Education" />
      <div className="flex flex-col gap-6">
        {PORTFOLIO.education.map((entry, index) => (
          <RevealWrapper key={index} delay={index * 0.1}>
            <TerminalCard
              title={entry.qualification}
              subtitle={entry.institution}
              date={entry.date}
              badge={entry.grade}
              index={index}
            />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
