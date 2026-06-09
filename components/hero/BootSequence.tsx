"use client";
import { useState, useEffect, useRef } from "react";

export interface BootSequenceState {
  lineIndex: number;
  charIndex: number;
  completed: boolean;
}

/** Pure step function — one tick of the boot sequence state machine */
export function stepBootSequence(
  state: BootSequenceState,
  lines: string[]
): BootSequenceState {
  if (state.completed || lines.length === 0) return state;

  if (state.lineIndex >= lines.length) {
    return { ...state, completed: true };
  }

  const currentLine = lines[state.lineIndex];

  if (state.charIndex < currentLine.length) {
    // Append one char
    return { ...state, charIndex: state.charIndex + 1 };
  } else {
    // Move to next line
    const nextLineIndex = state.lineIndex + 1;
    return {
      lineIndex: nextLineIndex,
      charIndex: 0,
      completed: nextLineIndex >= lines.length,
    };
  }
}

interface BootSequenceProps {
  lines: string[];
  charIntervalMs?: number;
  lineDelayMs?: number;
  onComplete?: () => void;
}

export function BootSequence({
  lines,
  charIntervalMs = 50,
  lineDelayMs = 400,
  onComplete,
}: BootSequenceProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      onCompleteRef.current?.();
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          if (next.length <= currentLineIndex) {
            next.push(currentLine[currentCharIndex]);
          } else {
            next[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          }
          return next;
        });
        setCurrentCharIndex((c) => c + 1);
      }, charIntervalMs);
      return () => clearTimeout(timer);
    } else {
      // Line complete, wait then move to next
      const timer = setTimeout(() => {
        setCurrentLineIndex((i) => i + 1);
        setCurrentCharIndex(0);
      }, lineDelayMs);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines, charIntervalMs, lineDelayMs]);

  return (
    <div className="font-mono text-sm text-left space-y-1">
      {displayedLines.map((line, i) => (
        <div key={i} className="text-gray-300">
          {line}
        </div>
      ))}
    </div>
  );
}
