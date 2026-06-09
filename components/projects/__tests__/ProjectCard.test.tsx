import { render, screen } from "@testing-library/react";
import { ProjectCard } from "../ProjectCard";
import { describe, it, expect } from "vitest";

const baseProject = {
  id: "000.001",
  title: "TestProject",
  description: "A test project",
  techStack: ["React"],
  liveUrl: undefined,
  githubUrl: undefined,
} as const;

describe("ProjectCard", () => {
  it("renders Live link when liveUrl is present", () => {
    render(
      <ProjectCard
        project={{ ...baseProject, liveUrl: "https://example.com" }}
        index={0}
      />
    );
    const liveLink = screen.getByRole("link", { name: /live/i });
    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute("href", "https://example.com");
  });

  it("omits Live link when liveUrl is absent", () => {
    render(<ProjectCard project={baseProject} index={0} />);
    expect(screen.queryByRole("link", { name: /live/i })).not.toBeInTheDocument();
  });

  it("renders GitHub link when githubUrl is present", () => {
    render(
      <ProjectCard
        project={{ ...baseProject, githubUrl: "https://github.com/test" }}
        index={0}
      />
    );
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/test");
  });

  it("omits GitHub link when githubUrl is absent", () => {
    render(<ProjectCard project={baseProject} index={0} />);
    expect(screen.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();
  });
});
