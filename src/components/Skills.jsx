import Reveal from "./Reveal";
import { skillGroups } from "@/lib/portfolioData";

export default function Skills() {
  return (
    <section id="expertise" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono-label text-accent mb-4">03 / Expertise</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl mb-14">
            Grouped by domain, weighted by where I'm strongest.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {skillGroups.map((g, i) => (
            <Reveal key={g.domain} delay={(i % 3) * 0.08}>
              <div className="bg-background p-7 h-full flex flex-col">
                <div className="font-mono-label text-muted-foreground mb-5">{g.domain}</div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {g.primary.map((s) => (
                    <span key={s} className="text-sm text-foreground border-b border-accent/70 pb-0.5">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {g.secondary.map((s) => (
                    <span key={s} className="text-sm text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}