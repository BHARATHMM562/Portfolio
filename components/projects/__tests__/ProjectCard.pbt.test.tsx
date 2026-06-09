// Feature: portfolio-website, Property 8: ProjectCard renders conditional links matching data
import { render } from "@testing-library/react";
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { ProjectCard } from "../ProjectCard";
import { PORTFOLIO } from "@/data/portfolio";

describe("ProjectCard - Property 8: conditional links and description length", () => {
  it("renders liveUrl anchor only when defined, with target=_blank", () => {
    fc.assert(
      fc.property(
        fc.record({
          id:          fc.string(),
          title:       fc.string({ minLength: 1 }),
          description: fc.string({ maxLength: 150 }),
          techStack:   fc.array(fc.string()),
          liveUrl:     fc.option(fc.webUrl()),
          githubUrl:   fc.option(fc.webUrl()),
        }),
        (project) => {
          const { container, unmount } = render(
            <ProjectCard
              project={{
                ...project,
                liveUrl:   project.liveUrl   ?? undefined,
                githubUrl: project.githubUrl ?? undefined,
              }}
              index={0}
            />
          );

          const allAnchors = Array.from(container.querySelectorAll("a"));

          // liveUrl assertion
          const liveAnchors = allAnchors.filter(
            (a) => a.textContent?.toLowerCase().includes("live")
          );

          if (project.liveUrl) {
            // Should have exactly one Live anchor
            if (liveAnchors.length !== 1) {
              unmount();
              throw new Error(
                `Expected 1 Live anchor when liveUrl is "${project.liveUrl}", found ${liveAnchors.length}`
              );
            }
            if (liveAnchors[0].getAttribute("target") !== "_blank") {
              unmount();
              throw new Error('Live anchor should have target="_blank"');
            }
          } else {
            // Should have no Live anchor
            if (liveAnchors.length !== 0) {
              unmount();
              throw new Error(
                `Expected 0 Live anchors when liveUrl is absent, found ${liveAnchors.length}`
              );
            }
          }

          // githubUrl assertion
          const githubAnchors = allAnchors.filter(
            (a) => a.textContent?.toLowerCase().includes("github")
          );

          if (project.githubUrl) {
            if (githubAnchors.length !== 1) {
              unmount();
              throw new Error(
                `Expected 1 GitHub anchor when githubUrl is "${project.githubUrl}", found ${githubAnchors.length}`
              );
            }
          } else {
            if (githubAnchors.length !== 0) {
              unmount();
              throw new Error(
                `Expected 0 GitHub anchors when githubUrl is absent, found ${githubAnchors.length}`
              );
            }
          }

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });

  it("all PORTFOLIO.projects descriptions are ≤150 characters", () => {
    for (const project of PORTFOLIO.projects) {
      expect(project.description.length).toBeLessThanOrEqual(150);
    }
  });
});
