import { render, screen } from "@testing-library/react";
import { SectionHeader } from "../SectionHeader";
import { describe, it, expect } from "vitest";

describe("SectionHeader", () => {
  it("renders the > prefix before the title", () => {
    render(<SectionHeader title="About" />);
    const prefix = screen.getByText(">", { exact: false });
    expect(prefix).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
