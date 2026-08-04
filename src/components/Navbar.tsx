import { useEffect, useState } from "react";
import { profile } from "@/data/resume";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-navy-100 shadow-[0_2px_18px_rgba(10,22,38,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative w-9 h-9 rounded-lg bg-navy-900 grid place-items-center overflow-hidden ring-1 ring-sky-400/40">
            <span className="font-display font-bold text-sky-300 text-sm tracking-tight">{profile.initials}</span>
            <span className="absolute inset-0 bg-gradient-to-tr from-sky-500/0 via-sky-400/30 to-transparent group-hover:opacity-100 opacity-0 transition-opacity" />
          </span>
          <span className={`font-display font-semibold tracking-tight ${scrolled ? "text-navy-900" : "text-white"}`}>
            {profile.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-navy-600 hover:text-sky-600" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all ${
            scrolled
              ? "bg-navy-900 text-white hover:bg-sky-600"
              : "bg-white/10 text-white border border-white/25 hover:bg-white/20"
          }`}
        >
          Let's talk
        </a>

        <button
          className="md:hidden w-9 h-9 grid place-items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 transition-transform ${scrolled ? "bg-navy-900" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-opacity ${scrolled ? "bg-navy-900" : "bg-white"} ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-transform ${scrolled ? "bg-navy-900" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-white border-t border-navy-100 px-6 py-4 space-y-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block text-navy-700 font-medium py-1" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
