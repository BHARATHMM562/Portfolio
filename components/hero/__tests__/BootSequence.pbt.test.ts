// Feature: portfolio-website, Property 4: Boot sequence output is a prefix of the expected concatenation
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import {
  stepBootSequence,
  type BootSequenceState,
} from "@/components/hero/BootSequence";

/** Reconstruct what the displayed output looks like given a BootSequenceState */
function getDisplayedOutput(state: BootSequenceState, lines: string[]): string {
  let output = "";
  for (let i = 0; i < state.lineIndex; i++) {
    output += lines[i];
  }
  if (state.lineIndex < lines.length) {
    output += lines[state.lineIndex].slice(0, state.charIndex);
  }
  return output;
}

describe("stepBootSequence - Property 4: output is a prefix of full concatenation", () => {
  it("at every tick, combined output is a prefix of the full concatenation of all lines", () => {
    fc.assert(
      fc.property(
        fc.array(fc.string(), { minLength: 1 }),
        (lines) => {
          const fullText = lines.join("");
          let state: BootSequenceState = {
            lineIndex: 0,
            charIndex: 0,
            completed: false,
          };

          // Step until complete, checking prefix invariant at each step
          let safetyCounter = 0;
          const maxSteps = fullText.length + lines.length + 10;

          while (!state.completed && safetyCounter < maxSteps) {
            const output = getDisplayedOutput(state, lines);
            expect(fullText.startsWith(output)).toBe(true);
            state = stepBootSequence(state, lines);
            safetyCounter++;
          }

          // After completion, output equals full concatenation
          const finalOutput = getDisplayedOutput(state, lines);
          expect(finalOutput).toBe(fullText);
        }
      ),
      { numRuns: 100 }
    );
  });
});
