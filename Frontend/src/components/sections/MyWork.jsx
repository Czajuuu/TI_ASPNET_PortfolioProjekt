import React, { useState, useEffect } from 'react';
import { WorkCard } from '../ui/WorkCard';

// ─────────────────────────────────────────────────────────────────────────────
// MY WORK SECTION
// ─────────────────────────────────────────────────────────────────────────────
export function MyWork() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5259/api/portfolio/projects')
      .then(res => {
        if (!res.ok) throw new Error('Błąd pobierania danych');
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Nie udało się załadować projektów.');
        setIsLoading(false);
      });
  }, []);

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
            <div>{projects.length} pozycji</div>
            <div>2023–2026</div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20 text-zinc-500 font-mono">Ładowanie projektów z bazy...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500 font-mono">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
            {projects.map((item, i) => (
              <div key={item.id} className="bg-zinc-950">
                <WorkCard item={item} index={i} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
