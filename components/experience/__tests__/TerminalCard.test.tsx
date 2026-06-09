import { render, screen } from "@testing-library/react";
import { TerminalCard } from "../TerminalCard";
import { describe, it, expect } from "vitest";

describe("TerminalCard", () => {
  it("renders title, subtitle, and date", () => {
    render(
      <TerminalCard
        title="Software Engineer"
        subtitle="Acme Corp"
        date="Jan 2024 – Present"
      />
    );
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.getByText("Jan 2024 – Present")).toBeInTheDocument();
  });
});
