interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 font-mono text-sm text-muted hover:text-accent hover:shadow-glow transition-all duration-200"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
