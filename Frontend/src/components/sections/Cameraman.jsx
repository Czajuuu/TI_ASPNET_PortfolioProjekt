import React from 'react';
import { PhotoGrid } from '../ui/PhotoGrid';
import { VideoPlayer } from '../ui/VideoPlayer';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// CAMERAMAN SECTION
// ─────────────────────────────────────────────────────────────────────────────
export function Cameraman() {
  return (
    <section id="cameraman" className="bg-zinc-950 py-24 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <div className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-3">
              § 02 – Usługi Dodatkowe
            </div>
            <h2 className="font-mono font-extrabold text-white text-4xl uppercase tracking-tight">
              Portfolio Kamerzysty
            </h2>
          </div>
        </div>

        {/* Information about videos */}
        <div className="mb-16 border border-zinc-800 p-6 md:p-8 bg-zinc-900 border-l-2 border-l-orange-500">
          <h3 className="font-mono text-sm text-white uppercase tracking-widest mb-3 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            Realizacja i Montaż Wideo
          </h3>
          <p className="font-sans text-zinc-400 leading-relaxed max-w-4xl">
            Wszystkie produkcje filmowe zaprezentowane powyżej w sekcji <strong>§ 01 – Projekty i Produkcje</strong> (oznaczone jako <em>Produkcja Wideo</em> lub <em>Ujęcia z Drona</em>) stanowią moje autorskie realizacje. Odpowiadam w nich kompleksowo za nagrania wideo w terenie, ujęcia lotnicze oraz pełny montaż postprodukcyjny.
          </p>
        </div>

        {/* Photos */}
        <div>
          <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-4">
            — Fotografia
          </div>
          <PhotoGrid />
        </div>

      </div>
    </section>
  );
}
