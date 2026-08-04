import { useEffect } from "react";
import { useTilt } from "@/hooks/useTilt";
import type { certifications } from "@/data/resume";

type Cert = (typeof certifications)[number];

export default function CertificateModal({
  cert,
  onClose,
}: {
  cert: Cert;
  onClose: () => void;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(5);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-navy-950/80 backdrop-blur-sm animate-[cert-fade_0.25s_ease-out]"
      onClick={onClose}
    >
      <div className="tilt-wrap w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="tilt-card bg-white rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] animate-[cert-flip-in_0.5s_cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="tilt-inner">
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-navy-100 bg-navy-50/60">
              <div>
                <h3 className="font-display font-semibold text-navy-900 leading-snug">{cert.name}</h3>
                <p className="text-sm text-navy-500 mt-0.5">
                  {cert.org}
                  {cert.date ? ` · ${cert.date}` : ""}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 w-9 h-9 rounded-full bg-white border border-navy-100 text-navy-500 hover:text-navy-900 hover:border-navy-200 grid place-items-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-navy-950 p-3 sm:p-6">
              <img
                src={cert.image}
                alt={`${cert.name} certificate`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {cert.verifyUrl && (
              <div className="px-6 py-4 flex justify-end bg-white">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700"
                >
                  Verify credential
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
