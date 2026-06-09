"use client";
import { useTypewriter } from "@/hooks/useTypewriter";
import { BlinkCursor } from "@/components/shared/BlinkCursor";
import { PORTFOLIO } from "@/data/portfolio";

export function RoleTitle() {
  const { displayedText, phase } = useTypewriter(PORTFOLIO.roles as string[]);

  return (
    <div className="font-mono text-lg md:text-xl text-accent min-h-[2rem] flex items-center gap-0">
      <span>{displayedText}</span>
      {(phase === "TYPING" || phase === "HOLDING") && <BlinkCursor char="|" />}
    </div>
  );
}
