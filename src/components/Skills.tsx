import { useReveal } from "@/hooks/useReveal";
import { useTilt } from "@/hooks/useTilt";
import { skillGroups } from "@/data/resume";

function SkillCard({ group, big }: { group: (typeof skillGroups)[number]; big?: boolean }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(6);
  return (
    <div className={`tilt-wrap ${big ? "sm:col-span-2" : ""}`}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="tilt-card h-full bg-navy-900 rounded-2xl p-6 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-sky-500/10 blur-2xl" />
        <div className="tilt-inner relative">
          <h3 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="text-sm text-sky-200 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="bg-[radial-gradient(circle_at_top,#0a1626,#060d17)] py-24 sm:py-28">
      <div ref={reveal} className="reveal max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-sky-400">Skills</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            Toolkit I build with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} group={g} big={i === 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
