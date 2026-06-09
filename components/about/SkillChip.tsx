interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="border border-accent font-mono text-sm px-3 py-1 text-accent transition-shadow duration-200 hover:shadow-glow cursor-default">
      {label}
    </span>
  );
}
