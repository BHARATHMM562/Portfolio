"use client";
import { useState, useEffect } from "react";

// Pure function exported for testing (Task 16)
export function computeActiveSection(
  sections: { id: string; top: number; height: number }[],
  viewportHeight: number,
  scrollY: number
): string {
  if (sections.length === 0) return "";

  // Find section with ≥50% viewport coverage
  for (const section of sections) {
    const sectionBottom = section.top + section.height;
    const viewportTop = scrollY;
    const viewportBottom = scrollY + viewportHeight;

    // intersection
    const intersectTop = Math.max(section.top, viewportTop);
    const intersectBottom = Math.min(sectionBottom, viewportBottom);
    const intersectHeight = Math.max(0, intersectBottom - intersectTop);

    if (intersectHeight >= viewportHeight * 0.5) {
      return section.id;
    }
  }

  // Fallback: last section whose top is above viewport midpoint
  const midpoint = scrollY + viewportHeight / 2;
  let fallback = sections[0].id;
  for (const section of sections) {
    if (section.top <= midpoint) {
      fallback = section.id;
    }
  }
  return fallback;
}

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? ""
  );

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
