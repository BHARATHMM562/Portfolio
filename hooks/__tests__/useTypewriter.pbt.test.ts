// Feature: portfolio-website, Property 3: Typewriter display is always a prefix of the current role
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { stepTypewriter, type TypewriterState } from "@/hooks/useTypewriter";

describe("stepTypewriter - Property 3: display is always a prefix of current role", () => {
  it("displayedText is always a prefix of current role during TYPING", () => {
    fc.assert(
      fc.property(
        fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
        (roles) => {
          // Start in TYPING phase at role 0
          let state: TypewriterState = {
            displayedText: "",
            phase: "TYPING",
            roleIndex: 0,
            charIndex: 0,
          };

          const currentRole = roles[0];

          // Step through the full TYPING phase (charIndex goes 0..length-1)
          // At each step before we call stepTypewriter, displayedText is a prefix of currentRole
          for (let i = 0; i < currentRole.length; i++) {
            expect(state.phase).toBe("TYPING");
            // displayedText must be a prefix of currentRole
            expect(currentRole.startsWith(state.displayedText)).toBe(true);
            state = stepTypewriter(state, roles);
          }

          // At this point charIndex === role.length, still TYPING — one more step triggers HOLDING
          expect(state.phase).toBe("TYPING");
          expect(state.displayedText).toBe(currentRole);
          state = stepTypewriter(state, roles);

          // After typing the full role, should transition to HOLDING
          expect(state.phase).toBe("HOLDING");
          expect(state.displayedText).toBe(currentRole);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("roleIndex advances to (i + 1) % roles.length after a full type→hold→erase cycle", () => {
    fc.assert(
      fc.property(
        fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
        (roles) => {
          const initialRoleIndex = 0;
          let state: TypewriterState = {
            displayedText: "",
            phase: "TYPING",
            roleIndex: initialRoleIndex,
            charIndex: 0,
          };

          // TYPING: step until holding
          while (state.phase === "TYPING") {
            state = stepTypewriter(state, roles);
          }
          expect(state.phase).toBe("HOLDING");

          // HOLDING: one step transitions to ERASING
          state = stepTypewriter(state, roles);
          expect(state.phase).toBe("ERASING");

          // ERASING: step until back to TYPING
          while (state.phase === "ERASING") {
            state = stepTypewriter(state, roles);
          }
          expect(state.phase).toBe("TYPING");

          // roleIndex should have advanced by 1 (mod roles.length)
          expect(state.roleIndex).toBe((initialRoleIndex + 1) % roles.length);
        }
      ),
      { numRuns: 100 }
    );
  });
});
