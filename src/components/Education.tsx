import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useTilt } from "@/hooks/useTilt";
import { education as TIMELINE, certifications as CERTS } from "@/data/resume";
import CertificateModal from "./CertificateModal";

function CertCard({ cert, onOpen }: { cert: (typeof CERTS)[number]; onOpen: () => void }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(7);

  return (
    <div className="tilt-wrap">
      <button
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onOpen}
        className="tilt-card w-full text-left flex items-center gap-4 border border-navy-100 rounded-2xl p-5 hover:border-sky-200 hover:bg-sky-50/40 hover:shadow-[0_16px_36px_-16px_rgba(10,22,38,0.2)] transition-colors"
      >
        <div className="tilt-inner flex items-center gap-4 w-full">
          <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden ring-1 ring-navy-100 bg-navy-900 relative">
            <img src={cert.image} alt="" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/40 to-navy-900/60" />
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 m-auto w-5 h-5">
              <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
              <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-semibold text-navy-900 leading-snug">{cert.name}</h3>
            <p className="text-sm text-navy-500 mt-0.5">
              {cert.org}
              {cert.date ? ` · ${cert.date}` : ""}
            </p>
          </div>
          <span className="shrink-0 text-xs font-semibold text-sky-600 flex items-center gap-1">
            View
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>
      </button>
    </div>
  );
}

export default function Education() {
  const reveal = useReveal<HTMLDivElement>();
  const [activeCert, setActiveCert] = useState<(typeof CERTS)[number] | null>(null);

  return (
    <section id="education" className="bg-white py-24 sm:py-28">
      <div ref={reveal} className="reveal max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education timeline */}
          <div>
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-sky-600">Education</span>
            <h2 className="font-display font-bold text-3xl text-navy-900 mt-3 mb-10">Academic path</h2>

            <ol className="relative border-l border-navy-100 pl-8 space-y-10">
              {TIMELINE.map((t) => (
                <li key={t.degree} className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-sky-100" />
                  <p className="font-mono text-xs text-navy-400 tracking-wide mb-1">{t.period}</p>
                  <h3 className="font-display font-semibold text-navy-900 leading-snug">{t.degree}</h3>
                  <p className="text-sm text-navy-500 mt-1">{t.school}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-gold-600 bg-gold-300/20 px-2.5 py-1 rounded-full">
                    {t.metric}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div>
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-sky-600">Certifications</span>
            <h2 className="font-display font-bold text-3xl text-navy-900 mt-3 mb-2">Credentials</h2>
            <p className="text-sm text-navy-400 mb-8">Click a certificate to view it.</p>

            <div className="space-y-4">
              {CERTS.map((c) => (
                <CertCard key={c.name} cert={c} onOpen={() => setActiveCert(c)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeCert && <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />}
    </section>
  );
}
