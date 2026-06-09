interface SectionHeaderProps {
  title: string;
  id?: string;
}

export function SectionHeader({ title, id }: SectionHeaderProps) {
  return (
    <h2 id={id} className="text-2xl font-bold mb-8">
      <span className="text-accent font-mono">&gt; </span>
      {title}
    </h2>
  );
}
