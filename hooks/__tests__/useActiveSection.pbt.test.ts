// Feature: portfolio-website, Property 2: Active section is the one with ≥50% viewport coverage
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { computeActiveSection } from "@/hooks/useActiveSection";

describe("computeActiveSection - Property 2: active section has ≥50% viewport coverage", () => {
  it("returns an ID from the input array and satisfies the coverage rule", () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.string({ minLength: 1 }),
            top: fc.nat(),
            height: fc.nat({ max: 10000 }),
          }),
          { minLength: 1 }
        ),
        fc.nat({ max: 2000 }),   // viewportHeight
        fc.nat({ max: 10000 }), // scrollY
        (sections, viewportHeight, scrollY) => {
          // Ensure unique IDs to keep the test unambiguous
          const seen = new Set<string>();
          const uniqueSections = sections.filter((s) => {
            if (seen.has(s.id)) return false;
            seen.add(s.id);
            return true;
          });
          if (uniqueSections.length === 0) return;

          const result = computeActiveSection(uniqueSections, viewportHeight, scrollY);

          // Property: result must be one of the input IDs
          expect(uniqueSections.some((s) => s.id === result)).toBe(true);

          // Property: if a section has ≥50% viewport coverage, it should be returned
          // (first one found in the list order)
          if (viewportHeight > 0) {
            const viewportTop = scrollY;
            const viewportBottom = scrollY + viewportHeight;

            for (const section of uniqueSections) {
              const sectionBottom = section.top + section.height;
              const intersectTop = Math.max(section.top, viewportTop);
              const intersectBottom = Math.min(sectionBottom, viewportBottom);
              const intersectHeight = Math.max(0, intersectBottom - intersectTop);

              if (intersectHeight >= viewportHeight * 0.5) {
                // This section has ≥50% coverage, it should be the result
                expect(result).toBe(section.id);
                return; // First qualifying section wins
              }
            }
          }
          // If no section has ≥50% coverage, result is still a valid ID (fallback)
          expect(uniqueSections.some((s) => s.id === result)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
});
