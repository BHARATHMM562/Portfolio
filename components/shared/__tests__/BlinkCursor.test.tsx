import { render } from "@testing-library/react";
import { BlinkCursor } from "../BlinkCursor";
import { describe, it, expect } from "vitest";

describe("BlinkCursor", () => {
  it("renders with the animate-blink CSS class", () => {
    const { container } = render(<BlinkCursor />);
    const span = container.querySelector("span");
    expect(span).toHaveClass("animate-blink");
  });
});
