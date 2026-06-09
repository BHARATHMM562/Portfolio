import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { SkillChip } from "./SkillChip";
import { PORTFOLIO } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <RevealWrapper>
        <SectionHeader title="About" />

        {/* Bio terminal container */}
        <div className="bg-terminal rounded border border-gray-800 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          </div>
          <p className="text-gray-300 leading-relaxed font-sans">
            {PORTFOLIO.personal.bio}
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3">
          {PORTFOLIO.skills.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
