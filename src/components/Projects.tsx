import { useReveal } from "@/hooks/useReveal";
import { projects as PROJECTS } from "@/data/resume";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  return (
    <div className="group tilt-wrap h-[380px]">
      <div
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-navy-100 rounded-2xl p-8 flex flex-col shadow-[0_1px_2px_rgba(10,22,38,0.05)]">
          <span className="font-mono text-xs text-sky-600 tracking-widest">0{index + 1}</span>
          <h3 className="font-display font-bold text-2xl text-navy-900 mt-3 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-navy-400 mt-2">{project.tagline}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="text-xs font-medium text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs font-medium text-navy-400 px-2.5 py-1">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
          <p className="text-xs text-navy-300 mt-4 uppercase tracking-wide">Hover to see details →</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-navy-900 rounded-2xl p-8 flex flex-col overflow-y-auto">
          <h4 className="font-display font-semibold text-white text-lg mb-3">{project.title}</h4>
          <ul className="space-y-3">
            {project.points.map((p, i) => (
              <li key={i} className="text-sm text-navy-100/80 leading-relaxed flex gap-2.5">
                <span className="text-sky-400 mt-1.5 w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] text-sky-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="bg-navy-50 py-24 sm:py-28">
      <div ref={reveal} className="reveal max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-sky-600">Projects</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-3">
            Things I've built
          </h2>
          <p className="text-navy-500 mt-3">Hover a card to flip it and see the full breakdown.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
