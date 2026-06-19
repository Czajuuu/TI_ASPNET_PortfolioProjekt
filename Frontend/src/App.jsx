import React from "react";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { MyWork } from "./components/sections/MyWork";
import { Cameraman } from "./components/sections/Cameraman";
import { Contact } from "./components/sections/Contact";

// ─────────────────────────────────────────────────────────────────────────────
// APP ROOT
// font-sans  → Inter (set in tailwind.config.js + Google Fonts)
// font-mono  → JetBrains Mono (set in tailwind.config.js + Google Fonts)
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-orange-500/30">
      <Nav />
      <Hero />
      <MyWork />
      <Cameraman />
      <Contact />
      <Footer />
    </div>
  );
}