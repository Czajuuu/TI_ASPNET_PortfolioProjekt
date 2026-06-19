import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

// ─────────────────────────────────────────────────────────────────────────────
// PHOTO GRID + LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────
export function PhotoGrid() {
  const [lightbox, setLightbox] = useState(null);

  // Close on Escape key
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-800">
        {portfolioData.cameramanPhotos.map((photo, i) => (
          <motion.button
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => setLightbox(photo)}
            className="relative overflow-hidden group bg-zinc-950 block w-full text-left"
            style={{ paddingBottom: "66.66%" }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-65
                         group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Caption slides in on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-zinc-950 bg-opacity-85 px-3 py-2
                            translate-y-full group-hover:translate-y-0 transition-transform duration-200">
              <span className="font-mono text-xs text-zinc-400">{photo.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 font-mono text-xs text-zinc-500
                           hover:text-white uppercase tracking-widest transition-colors"
              >
                [ESC] Zamknij ✕
              </button>

              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full object-contain border border-zinc-800"
                style={{ maxHeight: "80vh" }}
              />

              <div className="border border-t-0 border-zinc-800 px-4 py-3 bg-zinc-900">
                <span className="font-mono text-xs text-zinc-400">{lightbox.caption}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
