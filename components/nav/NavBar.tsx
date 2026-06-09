"use client";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { Marquee } from "./Marquee";
import { MobileDrawer } from "./MobileDrawer";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-mono text-accent font-bold text-lg">Bharath MM</span>

        {/* Desktop links - hidden below 768px */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_SECTIONS.map((section) => (
            <NavLink
              key={section.id}
              href={`#${section.id}`}
              label={section.label}
              isActive={activeSection === section.id}
            />
          ))}
        </div>

        {/* Hamburger button - visible below 768px */}
        <button
          className="md:hidden text-muted hover:text-accent font-mono text-xl"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      <Marquee />

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sections={NAV_SECTIONS}
      />
    </header>
  );
}
