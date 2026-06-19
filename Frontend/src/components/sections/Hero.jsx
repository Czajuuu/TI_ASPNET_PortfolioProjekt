import React from 'react';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// Full-screen background video with a 60 % dark overlay so text stays readable.
// ─────────────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden">

      {/* ── Background video ───────────────────────────────────────────────── */}
      <video
        src="/media/HeroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ── Dark overlay: 60 % opacity ────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-zinc-950"
        style={{ opacity: 0.9, zIndex: 1 }}
      />

      {/* ── Engineering grid pattern (on top of overlay) ──────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), " +
            "linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Top accent line ────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 bg-orange-500"
        style={{ height: "1px", opacity: 0.7, zIndex: 3 }}
      />

      {/* ── Corner metadata ────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-14 right-6 font-mono text-xs text-zinc-500 uppercase tracking-widest text-right leading-loose"
        style={{ zIndex: 3 }}
      >
        <div>Projektowanie Rozwiązań Webowych</div>
        <div>Produkcja Wideo</div>
        <div>Fotografia</div>
        <div>Ujęcia z Drona</div>
      </motion.div>

      {/* ── Hero content ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full relative" style={{ zIndex: 3 }}>
        {/* Section index */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-8"
        >
          § 00 – Wprowadzenie
        </motion.div>

        {/* Main headline — Rajdhani via font-mono */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-mono font-extrabold text-white leading-none tracking-tight uppercase"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          KODUJĘ.<br />
          <span className="text-zinc-500">MONTUJĘ.</span><br />
          UWIECZNIAM.
        </motion.h1>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mt-12 pt-8 border-t border-zinc-800 gap-6"
        >
          <p className="font-sans text-zinc-400 text-lg max-w-xl leading-relaxed">
            Połączenie zaawansowanych technologii webowych, wieloletniego doświadczenia w montażu filmowym i profesjonalnego oka kamery.
          </p>

          <button
            onClick={() => document.getElementById("my-work")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 border border-orange-500 text-orange-500
                       hover:bg-orange-500 hover:text-zinc-950 transition-colors duration-150
                       px-6 py-3 font-mono text-xs uppercase tracking-widest whitespace-nowrap"
          >
            Zobacz realizacje
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
