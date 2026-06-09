// Feature: portfolio-website, Property 9: Form validation rejects any input with an invalid field
import * as fc from "fast-check";
import { describe, it, expect } from "vitest";
import { validateForm } from "../ContactForm";

/**
 * Validates: Requirements 8.2, 8.3
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

describe("validateForm - Property 9: rejects any input with an invalid field", () => {
  it("returns at least one error when any field is invalid", () => {
    fc.assert(
      fc.property(
        fc.record({
          name:    fc.string(),
          email:   fc.string(),
          message: fc.string(),
        }),
        ({ name, email, message }) => {
          const hasInvalidName    = name.trim() === "";
          const hasInvalidEmail   = !EMAIL_REGEX.test(email);
          const hasInvalidMessage = message.trim() === "";

          const errors = validateForm(name, email, message);

          if (hasInvalidName || hasInvalidEmail || hasInvalidMessage) {
            // At least one error key with a non-empty string value
            const errorValues = Object.values(errors).filter(
              (v) => typeof v === "string" && v.length > 0
            );
            expect(errorValues.length).toBeGreaterThan(0);
          } else {
            // All valid — errors object should be empty
            expect(errors).toEqual({});
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
