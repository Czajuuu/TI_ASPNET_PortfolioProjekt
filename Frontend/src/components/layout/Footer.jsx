import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-700">
          Portfolio. Jan Czajkowski &copy; {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-2">
          {/* Opcjonalne miejsce na dodatkowe linki / ikony w stopce */}
        </div>
      </div>
    </footer>
  );
}
