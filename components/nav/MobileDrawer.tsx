"use client";

interface NavSection {
  id: string;
  label: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sections: NavSection[];
}

export function MobileDrawer({ isOpen, onClose, sections }: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-muted hover:text-accent font-mono text-2xl"
        aria-label="Close menu"
      >
        ×
      </button>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={onClose}
          className="text-white hover:text-accent font-mono text-xl transition-colors"
        >
          &gt; {section.label}
        </a>
      ))}
    </div>
  );
}
