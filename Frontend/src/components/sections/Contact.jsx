import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
export function Contact() {
  const links = [
    { label: "E-mail",    value: "janek.lego@gmail.com",    href: "mailto:janek.lego@gmail.com" },
    { label: "LinkedIn",  value: "https://www.linkedin.com/in/jan-czajkowski-711037265/", href: "https://www.linkedin.com/in/jan-czajkowski-711037265/" },
    { label: "GitHub",    value: "https://github.com/Czajuuu",      href: "https://github.com/Czajuuu" },
  ];

  const services = [
    "Aplikacje webowe / Strony Internetowe",
    "Produkcja wideo (dokumentacja, promocyjne)",
    "Fotografia przemysłowa i techniczna",
    "Profesjonalne ujęcia z drona",
  ];

  return (
    <section id="contact" className="bg-zinc-950 py-24 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <div className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-3">
              § 03 – Kontakt
            </div>
            <h2 className="font-mono font-extrabold text-white text-4xl uppercase tracking-tight">
              Nawiąż Współpracę
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left — intro + links */}
          <div>
            <p className="font-sans text-zinc-400 text-lg leading-relaxed mb-8">
              Nowoczesny wizerunek wymaga inżynieryjnego podejścia do designu i wideo. Porozmawiajmy o tym, jak możemy połączyć siły przy Twoim nowym projekcie.
            </p>

            <div className="border border-zinc-800">
              {links.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 border-b border-zinc-800
                             last:border-b-0 hover:bg-zinc-900 transition-colors duration-150 group"
                >
                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                    {label}
                  </span>
                  <span className="font-mono text-sm text-zinc-300 group-hover:text-white transition-colors duration-150 text-right max-w-[200px] sm:max-w-none truncate">
                    {value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — availability panel */}
          <div className="border border-zinc-800 p-8 bg-zinc-900 h-fit">
            <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-6">
              — Status dostępności
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-2.5 h-2.5 bg-orange-500 animate-pulse" />
              <span className="font-mono text-sm text-white">Dostępny na nowe projekty – 2026</span>
            </div>

            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 shrink-0" />
                  <span className="font-sans text-sm text-zinc-400">{service}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
