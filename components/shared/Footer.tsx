export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 text-center">
      <p className="font-mono text-muted text-sm">
        &copy; {new Date().getFullYear()} <span className="text-accent">Bharath MM</span>. All rights reserved.
      </p>
    </footer>
  );
}
