import HeroScene from "./HeroScene";
import { profile, stats } from "@/data/resume";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] bg-navy-950 overflow-hidden flex items-center">
      {/* Three.js animated background */}
      <HeroScene />

      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/70 to-navy-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <p className="font-mono text-sky-300 text-xs sm:text-sm tracking-[0.25em] uppercase mb-5">
          {profile.location} &middot; {profile.status}
        </p>

        <h1 className="font-display font-bold text-white leading-[1.04] text-5xl sm:text-6xl lg:text-7xl max-w-3xl">
          {profile.name}
        </h1>

        <p className="mt-4 font-display text-xl sm:text-2xl text-sky-300 max-w-2xl">
          {profile.title}
        </p>

        <p className="mt-6 text-navy-100/80 max-w-xl text-base sm:text-lg leading-relaxed">
          {profile.heroTagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-navy-950 font-semibold px-6 py-3 rounded-full transition-colors shadow-[0_8px_30px_rgba(14,165,233,0.35)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-bold text-white">{s.value}</div>
              <div className="text-navy-300 text-xs uppercase tracking-wide mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-navy-300 hover:text-sky-300 transition-colors flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
      >
        Scroll
        <span className="w-px h-8 bg-gradient-to-b from-sky-400 to-transparent" />
      </a>
    </section>
  );
}
