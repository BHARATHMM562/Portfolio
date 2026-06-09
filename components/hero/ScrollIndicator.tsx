export function ScrollIndicator() {
  return (
    <div className="flex justify-center">
      <div className="animate-bounce-slow text-muted" style={{ width: 32, height: 32 }}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
