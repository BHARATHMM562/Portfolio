interface MarqueeProps {
  text?: string;
  speed?: number;
}

export function Marquee({ text = "Bharath MM", speed = 30 }: MarqueeProps) {
  const content = Array(10).fill(`${text} · `).join("");
  return (
    <div className="overflow-hidden border-t border-gray-800 py-1 bg-background">
      <div
        className="flex w-max animate-marquee text-accent font-mono text-xs"
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
