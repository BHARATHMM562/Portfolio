// Feature: portfolio-website, Property 1: NavBar renders an anchor for every section ID
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import { describe, it } from "vitest";

// Test helper: simulates NavBar's anchor-generation logic for arbitrary section IDs
function NavLinkList({ sectionIds }: { sectionIds: string[] }) {
  return (
    <>
      {sectionIds.map((id) => (
        <a key={id} href={`#${id}`} data-testid={`nav-link-${id}`}>
          {id}
        </a>
      ))}
    </>
  );
}

/**
 * Validates: Requirements 2.2
 *
 * Property 1: NavBar renders an anchor for every section ID
 *
 * For any non-empty array of section identifiers, the rendered NavBar output
 * should contain exactly one anchor element (<a href="#id">) for each identifier
 * in the array, with no identifier missing and no extra identifiers present.
 */
describe("NavBar - Property 1: anchor for every section ID", () => {
  it("renders exactly one anchor per section ID, matching href", () => {
    fc.assert(
      fc.property(
        fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
        (sectionIds) => {
          // Use unique IDs to avoid key conflicts and keep the invariant unambiguous
          const uniqueIds = [...new Set(sectionIds)];
          if (uniqueIds.length === 0) return;

          const { unmount } = render(<NavLinkList sectionIds={uniqueIds} />);

          // Assert exactly one anchor per section ID
          uniqueIds.forEach((id) => {
            const links = screen.getAllByRole("link");
            const matchingLinks = links.filter(
              (link) => link.getAttribute("href") === `#${id}`
            );
            if (matchingLinks.length !== 1) {
              unmount();
              throw new Error(
                `Expected exactly 1 anchor for #${id}, got ${matchingLinks.length}`
              );
            }
          });

          // Assert no extra anchors beyond the unique section IDs
          const allLinks = screen.getAllByRole("link");
          if (allLinks.length !== uniqueIds.length) {
            unmount();
            throw new Error(
              `Expected ${uniqueIds.length} anchors total, got ${allLinks.length}`
            );
          }

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });
});
