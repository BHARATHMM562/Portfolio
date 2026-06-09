interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

export function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`font-mono text-sm transition-colors duration-200 ${
        isActive
          ? "text-accent underline underline-offset-4"
          : "text-muted hover:text-accent"
      }`}
    >
      {label}
    </a>
  );
}
