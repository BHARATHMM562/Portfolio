"use client";
import { useState } from "react";
import { BootSequence } from "./BootSequence";
import { RoleTitle } from "./RoleTitle";
import { ScrollIndicator } from "./ScrollIndicator";
import { BlinkCursor } from "@/components/shared/BlinkCursor";
import { PORTFOLIO } from "@/data/portfolio";

export function HeroSection() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start px-4 py-20 max-w-4xl mx-auto relative"
      style={{ background: "#0a0a0a" }}
    >
      {/* Name heading */}
      <h1 className="text-4xl md:text-6xl font-bold font-mono text-white mb-6">
        Bharath MM
      </h1>

      {/* Boot sequence */}
      <div className="mb-6 w-full max-w-2xl">
        <BootSequence
          lines={PORTFOLIO.bootLines as string[]}
          onComplete={() => setBootComplete(true)}
        />
        {bootComplete && <BlinkCursor char="_" />}
      </div>

      {/* Role title */}
      <div className="mb-8">
        <RoleTitle />
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href="#projects"
          className="border border-accent text-accent font-mono px-6 py-2 hover:bg-accent hover:text-black transition-colors duration-200"
        >
          View My Work
        </a>
        <a
          href="/Bharath_MM.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-muted text-muted font-mono px-6 py-2 hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Download Resume
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}
