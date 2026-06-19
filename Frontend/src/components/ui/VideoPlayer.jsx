import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// UNIVERSAL VIDEO COMPONENT
// Handles: local file  → <video autoPlay loop muted playsInline>
//          youtube     → <iframe> with clean embed params
//          placeholder → styled "file unavailable" widget
// ─────────────────────────────────────────────────────────────────────────────
export function VideoPlayer({ videoType, videoSrc, thumb, onPlay, onPause }) {
  // ── YouTube ────────────────────────────────────────────────────────────────
  if (videoType === "youtube" && videoSrc) {
    return (
      <div className="relative w-full h-full bg-zinc-950 aspect-video">
        <iframe
          src={videoSrc}
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded video"
          onPlay={onPlay} // Iframe doesn't natively support this without API, but we provide it just in case
        />
      </div>
    );
  }

  // ── Local file ─────────────────────────────────────────────────────────────
  if (videoType === "local" && videoSrc) {
    return (
      <div className="relative w-full h-full bg-black aspect-video">
        <video
          key={videoSrc} // Force re-render/reload when src changes (e.g., language switch)
          src={videoSrc}
          autoPlay
          controls
          playsInline
          onPlay={onPlay}
          onPause={onPause}
          onEnded={onPause}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    );
  }

  // ── Placeholder ────────────────────────────────────────────────────────────
  return (
    <div className="relative w-full h-full bg-zinc-900 border border-zinc-800 aspect-video">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        {/* Dimmed thumbnail if provided */}
        {thumb && (
          <img
            src={thumb}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
        )}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-2 border-orange-500 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <polygon points="6,3 20,12 6,21" fill="#f97316" />
            </svg>
          </div>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest text-center px-4">
            Plik wideo niedostępny w podglądzie
          </span>
        </div>
      </div>
    </div>
  );
}
