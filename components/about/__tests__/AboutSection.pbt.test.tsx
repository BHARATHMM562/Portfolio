// Feature: portfolio-website, Property 6: Skill chips render in the same order as the data array
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { SkillChip } from "../SkillChip";

// Helper: renders a list of SkillChip components from an array of labels
function SkillChipList({ skills }: { skills: string[] }) {
  return (
    <>
      {skills.map((skill, i) => (
        <SkillChip key={i} label={skill} />
      ))}
    </>
  );
}

describe("SkillChips - Property 6: chips render in the same order as the data array", () => {
  it("extracted chip labels match the input array in exact order", () => {
    fc.assert(
      fc.property(
        fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
        (skills) => {
          const { container, unmount } = render(<SkillChipList skills={skills} />);

          // Extract all rendered chip labels in DOM order
          const chips = Array.from(container.querySelectorAll("span"));
          const renderedLabels = chips.map((chip) => chip.textContent ?? "");

          // Must match input array in length and order
          if (renderedLabels.length !== skills.length) {
            unmount();
            throw new Error(
              `Expected ${skills.length} chips, got ${renderedLabels.length}`
            );
          }

          for (let i = 0; i < skills.length; i++) {
            if (renderedLabels[i] !== skills[i]) {
              unmount();
              throw new Error(
                `Chip at index ${i}: expected "${skills[i]}", got "${renderedLabels[i]}"`
              );
            }
          }

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });
});
