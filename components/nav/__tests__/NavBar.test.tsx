import { render, screen } from "@testing-library/react";
import { NavBar } from "../NavBar";
import { describe, it, expect, vi } from "vitest";

// Mock useActiveSection to avoid IntersectionObserver dependency in jsdom
vi.mock("@/hooks/useActiveSection", () => ({
  useActiveSection: () => "hero",
}));

describe("NavBar", () => {
  it("renders all six nav links with correct href attributes", () => {
    render(<NavBar />);
    const sectionIds = ["hero", "about", "experience", "projects", "education", "contact"];
    sectionIds.forEach((id) => {
      const allLinks = screen.getAllByRole("link");
      const found = allLinks.some((l) => l.getAttribute("href") === `#${id}`);
      expect(found).toBe(true);
    });
  });
});
