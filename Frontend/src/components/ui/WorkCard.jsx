import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { motion, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// WORK CARD
// Clicking the play overlay expands the video inline (replaces the thumbnail).
// Web-type projects show the thumbnail without a play button.
// If the project has an external link, we provide a button to visit it.
// If the project has dual language support (videoSrcEn), we provide a toggle.
// ─────────────────────────────────────────────────────────────────────────────
export function WorkCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lang, setLang] = useState('pl'); // 'pl' or 'en'

  const hasPlayableVideo =
    (item.videoType === "local" && item.videoSrc) ||
    (item.videoType === "youtube" && item.videoSrc);

  let currentVideoSrc = item.videoSrc;
  if (lang === 'en' && item.videoSrcEn) currentVideoSrc = item.videoSrcEn;
  if (lang === 'de' && item.videoSrcDe) currentVideoSrc = item.videoSrcDe;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors duration-150 group h-full flex flex-col"
    >
      {/* ── Media area ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden shrink-0 aspect-video w-full bg-black">
        {!expanded ? (
          <>
            {/* Thumbnail */}
            <img
              src={item.thumb}
              alt={item.title}
              className="w-full h-full object-cover opacity-55 group-hover:opacity-75 transition-opacity duration-300"
            />

            {/* Play button — only for playable video items */}
            {hasPlayableVideo && (
              <button
                onClick={() => {
                  setExpanded(true);
                  setIsPlaying(true); // Automatically starts playing
                }}
                aria-label="Odtwórz wideo"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-14 h-14 border-2 border-orange-500 flex items-center justify-center
                                bg-zinc-950 bg-opacity-70 hover:bg-orange-500 transition-colors duration-150 group/btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                       className="group-hover/btn:fill-zinc-950 transition-colors duration-150">
                    <polygon points="6,3 20,12 6,21" fill="#f97316" />
                  </svg>
                </div>
              </button>
            )}
          </>
        ) : (
          /* Expanded video fills the card media area */
          <div className="absolute inset-0">
            <VideoPlayer 
              videoType={item.videoType} 
              videoSrc={currentVideoSrc} 
              thumb={item.thumb} 
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-3 left-3 font-mono text-xs uppercase tracking-widest
                        px-2 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-500 z-10 flex gap-2">
          <span>{item.type === "web" ? "Strona Internetowa" : "VIDEO"}</span>
          
          {/* Language Toggle */}
          {(item.videoSrcEn || item.videoSrcDe) && (
            <div className="flex gap-1 ml-2 border-l border-zinc-800 pl-2">
              <button 
                onClick={(e) => { e.stopPropagation(); setLang('pl'); }}
                className={`transition-colors ${lang === 'pl' ? 'text-orange-500 font-bold' : 'text-zinc-600 hover:text-zinc-400'}`}
              >
                PL
              </button>
              
              {item.videoSrcEn && (
                <>
                  <span className="text-zinc-700">|</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setLang('en'); }}
                    className={`transition-colors ${lang === 'en' ? 'text-orange-500 font-bold' : 'text-zinc-600 hover:text-zinc-400'}`}
                  >
                    EN
                  </button>
                </>
              )}

              {item.videoSrcDe && (
                <>
                  <span className="text-zinc-700">|</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setLang('de'); }}
                    className={`transition-colors ${lang === 'de' ? 'text-orange-500 font-bold' : 'text-zinc-600 hover:text-zinc-400'}`}
                  >
                    DE
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Card index */}
        <div className="absolute top-3 right-3 font-mono text-xs text-zinc-700 z-10 bg-zinc-950/80 px-2 py-1 border border-zinc-800">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Text content ───────────────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {!isPlaying && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col"
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-2">
                {item.subtitle}
              </div>
              <h3 className="font-mono font-bold text-white text-lg uppercase tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-zinc-400 text-sm leading-relaxed mb-5 flex-grow">
                {item.description}
              </p>

              {/* Action / Link area (if it's a web project) */}
              {item.link && (
                <div className="mb-5">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-300 hover:text-orange-500 transition-colors border border-zinc-800 hover:border-orange-500 px-4 py-2"
                  >
                    Odwiedź stronę
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {(item.tags ? item.tags.split(',') : []).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-zinc-500 border border-zinc-800 px-2 py-0.5"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
