interface TerminalCardProps {
  title: string;
  subtitle: string;
  date: string;
  badge?: string;
  index?: number;
}

export function TerminalCard({ title, subtitle, date, badge }: TerminalCardProps) {
  return (
    <div className="bg-terminal border border-gray-800 rounded p-5">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
      </div>

      {/* Title with > prompt */}
      <div className="font-mono mb-2">
        <span className="text-accent">&gt; </span>
        <span className="text-white font-semibold">{title}</span>
      </div>

      {/* Subtitle */}
      <div className="text-muted text-sm mb-1">{subtitle}</div>

      {/* Date */}
      <div className="text-muted text-sm">{date}</div>

      {/* Badge (optional) */}
      {badge && (
        <div className="mt-2">
          <span className="border border-accent text-accent font-mono text-xs px-2 py-1">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}
