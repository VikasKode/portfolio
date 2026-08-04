import { useReveal } from "@/hooks/useReveal";
import { useTilt } from "@/hooks/useTilt";
import { contact } from "@/data/resume";

const CHANNELS = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Phone",
    value: contact.phone,
    href: contact.phoneHref,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    label: "LinkedIn",
    value: contact.linkedin,
    href: contact.linkedinHref,
    icon: (
      <>
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
        <path d="M10 9v12M10 13a4 4 0 0 1 8 0v8" />
      </>
    ),
  },
  {
    label: "Location",
    value: contact.location,
    href: undefined,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Contact() {
  const reveal = useReveal<HTMLDivElement>();
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(4);

  return (
    <section id="contact" className="relative bg-navy-950 py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-[0.15]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[100px]" />

      <div ref={reveal} className="reveal relative max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-sky-400">Contact</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
          Let's build something together
        </h2>
        <p className="text-navy-300 mt-4 max-w-xl mx-auto">
          Open to entry-level Software Engineer and AI/Automation roles. Reach out —
          I usually reply within a day.
        </p>

        <div className="tilt-wrap mt-12">
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="tilt-card bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm"
          >
            <div className="tilt-inner grid sm:grid-cols-2 gap-6 text-left">
              {CHANNELS.map((c) => {
                const content = (
                  <div className="flex items-center gap-4 group">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-500/10 text-sky-300 grid place-items-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        {c.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-navy-400 uppercase tracking-wide">{c.label}</p>
                      <p className="text-white font-medium mt-0.5 break-all">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>

        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 mt-10 bg-sky-500 hover:bg-sky-400 text-navy-950 font-semibold px-7 py-3.5 rounded-full transition-colors shadow-[0_8px_30px_rgba(14,165,233,0.35)]"
        >
          Say hello
        </a>
      </div>
    </section>
  );
}
