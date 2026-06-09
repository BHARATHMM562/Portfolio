"use client";
import { useState, useEffect, useRef } from "react";

export type TypewriterPhase = "TYPING" | "HOLDING" | "ERASING";

export interface TypewriterState {
  displayedText: string;
  phase: TypewriterPhase;
  roleIndex: number;
  charIndex: number;
}

// Pure step function — exported for testing (Task 17)
export function stepTypewriter(
  state: TypewriterState,
  roles: string[]
): TypewriterState {
  const role = roles[state.roleIndex % roles.length];
  if (state.phase === "TYPING") {
    if (state.charIndex < role.length) {
      return {
        ...state,
        displayedText: role.slice(0, state.charIndex + 1),
        charIndex: state.charIndex + 1,
      };
    } else {
      return { ...state, phase: "HOLDING" };
    }
  } else if (state.phase === "HOLDING") {
    return { ...state, phase: "ERASING" };
  } else {
    // ERASING
    if (state.charIndex > 0) {
      return {
        ...state,
        displayedText: role.slice(0, state.charIndex - 1),
        charIndex: state.charIndex - 1,
      };
    } else {
      return {
        displayedText: "",
        phase: "TYPING",
        roleIndex: (state.roleIndex + 1) % roles.length,
        charIndex: 0,
      };
    }
  }
}

export function useTypewriter(
  roles: string[],
  charIntervalMs = 50,
  holdMs = 2000
): { displayedText: string; phase: TypewriterPhase } {
  const [state, setState] = useState<TypewriterState>({
    displayedText: "",
    phase: "TYPING",
    roleIndex: 0,
    charIndex: 0,
  });
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (state.phase === "HOLDING") {
      holdTimerRef.current = setTimeout(() => {
        setState((s) => ({ ...s, phase: "ERASING" }));
      }, holdMs);
      return () => {
        if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      };
    }

    const timer = setInterval(() => {
      setState((s) => {
        const role = roles[s.roleIndex % roles.length];
        if (s.phase === "TYPING") {
          if (s.charIndex < role.length) {
            return {
              ...s,
              displayedText: role.slice(0, s.charIndex + 1),
              charIndex: s.charIndex + 1,
            };
          } else {
            clearInterval(timer);
            return { ...s, phase: "HOLDING" };
          }
        } else {
          // ERASING
          if (s.charIndex > 0) {
            return {
              ...s,
              displayedText: role.slice(0, s.charIndex - 1),
              charIndex: s.charIndex - 1,
            };
          } else {
            return {
              displayedText: "",
              phase: "TYPING",
              roleIndex: (s.roleIndex + 1) % roles.length,
              charIndex: 0,
            };
          }
        }
      });
    }, charIntervalMs);

    return () => clearInterval(timer);
  }, [state.phase, state.roleIndex, roles, charIntervalMs, holdMs]);

  return { displayedText: state.displayedText, phase: state.phase };
}
