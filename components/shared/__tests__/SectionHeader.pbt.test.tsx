// Feature: portfolio-website, Property 5: SectionHeader always renders the > prompt prefix
import { render } from "@testing-library/react";
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { SectionHeader } from "../SectionHeader";

/**
 * Validates: Requirements 4.4, 5.4, 6.4, 7.4, 8.6
 *
 * Property 5: For any non-empty title string, SectionHeader always renders
 * a `>` prompt span with the `text-accent` class, and that span appears
 * before the title text in the h2 DOM order.
 */
describe("SectionHeader - Property 5: always renders > prefix with accent color", () => {
  it("renders > element with text-accent class before the title text", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }),
        (title) => {
          const { container, unmount } = render(<SectionHeader title={title} />);

          // Find the span carrying the > prompt
          const spans = container.querySelectorAll("span");
          const promptSpan = Array.from(spans).find(
            (span) =>
              span.textContent?.includes(">") &&
              (span.classList.contains("text-accent") || span.classList.contains("text-[#00ff88]"))
          );

          if (!promptSpan) {
            unmount();
            throw new Error(
              `SectionHeader with title "${title}" does not render a > prompt span with text-accent class`
            );
          }

          // The > must appear before the title text in DOM order
          const h2 = container.querySelector("h2");
          if (!h2) {
            unmount();
            throw new Error("SectionHeader did not render an h2 element");
          }

          const h2Text = h2.textContent ?? "";
          const promptIndex = h2Text.indexOf(">");
          const titleIndex = h2Text.indexOf(title);

          if (promptIndex === -1 || titleIndex === -1 || promptIndex > titleIndex) {
            unmount();
            throw new Error(
              `> prompt (at ${promptIndex}) should appear before title "${title}" (at ${titleIndex}) in h2 text content`
            );
          }

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });
});
