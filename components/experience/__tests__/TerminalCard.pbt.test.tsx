// Feature: portfolio-website, Property 7: TerminalCard renders all required fields from its data entry
import { render } from "@testing-library/react";
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { TerminalCard } from "../TerminalCard";

describe("TerminalCard - Property 7: renders all required fields", () => {
  it("title, subtitle, and date each appear as a non-empty substring in the rendered output", () => {
    fc.assert(
      fc.property(
        fc.record({
          title:    fc.string({ minLength: 1 }),
          subtitle: fc.string({ minLength: 1 }),
          date:     fc.string({ minLength: 1 }),
          badge:    fc.option(fc.string({ minLength: 1 })),
        }),
        ({ title, subtitle, date, badge }) => {
          const { container, unmount } = render(
            <TerminalCard
              title={title}
              subtitle={subtitle}
              date={date}
              badge={badge ?? undefined}
            />
          );

          const html = container.textContent ?? "";

          if (!html.includes(title)) {
            unmount();
            throw new Error(`title "${title}" not found in rendered output`);
          }

          if (!html.includes(subtitle)) {
            unmount();
            throw new Error(`subtitle "${subtitle}" not found in rendered output`);
          }

          if (!html.includes(date)) {
            unmount();
            throw new Error(`date "${date}" not found in rendered output`);
          }

          if (badge !== null && badge !== undefined && !html.includes(badge)) {
            unmount();
            throw new Error(`badge "${badge}" not found when it should be present`);
          }

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });
});
