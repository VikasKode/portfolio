import { contact } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-navy-400 text-sm">© 2026 Vikas K. Built with React &amp; Three.js.</p>
        <div className="flex items-center gap-5 text-navy-400 text-sm">
          <a href={`mailto:${contact.email}`} className="hover:text-sky-300 transition-colors">Email</a>
          <a href={contact.linkedinHref} target="_blank" rel="noreferrer" className="hover:text-sky-300 transition-colors">LinkedIn</a>
          <a href="#top" className="hover:text-sky-300 transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
