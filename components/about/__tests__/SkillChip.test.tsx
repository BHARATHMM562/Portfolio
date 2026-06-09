import { render, screen } from "@testing-library/react";
import { SkillChip } from "../SkillChip";
import { describe, it, expect } from "vitest";

describe("SkillChip", () => {
  it("renders the correct label text", () => {
    render(<SkillChip label="TypeScript" />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
