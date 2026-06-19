import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { WorkCard } from '../ui/WorkCard';

// ─────────────────────────────────────────────────────────────────────────────
// MY WORK SECTION
// ─────────────────────────────────────────────────────────────────────────────
export function MyWork() {
  return (
    <section id="my-work" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <div className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-3">
              Moje Realizacje
            </div>
            <h2 className="font-mono font-extrabold text-white text-4xl uppercase tracking-tight">
              Projekty i Produkcje
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-600 text-right leading-loose">
            <div>{portfolioData.myWork.length} pozycji</div>
            <div>2023–2026</div>
          </div>
        </div>

        {/* 2-column grid separated by 1 px zinc-800 lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
          {portfolioData.myWork.map((item, i) => (
            <div key={item.id} className="bg-zinc-950">
              <WorkCard item={item} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
