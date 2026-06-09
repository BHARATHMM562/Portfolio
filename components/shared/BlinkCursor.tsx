interface BlinkCursorProps {
  char?: "_" | "|";
}

export function BlinkCursor({ char = "_" }: BlinkCursorProps) {
  return (
    <span className="animate-blink text-accent" aria-hidden="true">
      {char}
    </span>
  );
}
