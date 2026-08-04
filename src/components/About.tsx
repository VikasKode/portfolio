import { useReveal } from "@/hooks/useReveal";
import { useTilt } from "@/hooks/useTilt";
import { profile, strengths, languages } from "@/data/resume";
import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  "Fast Learner": <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  "Detail-Oriented": (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  Adaptability: <path d="M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6M17 4v4h-4M7 20v-4h4" />,
};

function StrengthCard({ item }: { item: (typeof strengths)[number] }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(8);
  return (
    <div className="tilt-wrap">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="tilt-card bg-white border border-navy-100 rounded-2xl p-6 h-full shadow-[0_1px_2px_rgba(10,22,38,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(10,22,38,0.18)]"
      >
        <div className="tilt-inner">
          <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 grid place-items-center mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              {ICONS[item.title]}
            </svg>
          </div>
          <h3 className="font-display font-semibold text-navy-900 mb-1.5">{item.title}</h3>
          <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div ref={reveal} className="reveal max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-sky-600">About</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-3 mb-6">
              Building with code, curiosity, and AI
            </h2>
            {profile.summary.map((p, i) => (
              <p key={i} className="text-navy-600 leading-relaxed mt-4 first:mt-0">
                {p}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              {languages.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 text-sm font-medium px-3.5 py-2 rounded-full border border-navy-100"
                >
                  {l.name} — {l.level}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {strengths.map((s) => (
              <StrengthCard key={s.title} item={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
