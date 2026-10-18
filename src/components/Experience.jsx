import Reveal from "./Reveal";
import { experience } from "@/lib/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono-label text-accent mb-4">05 / Experience</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-14">
            A timeline of the work.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 sm:left-[7.5rem] top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative grid sm:grid-cols-[7rem_1fr] gap-x-8 gap-y-2 pl-6 sm:pl-0">
                  <div className="absolute left-0 sm:left-[7.5rem] top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background" />
                  <div className="font-mono-label text-muted-foreground sm:text-right sm:pt-1">
                    {e.period}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                      {e.role}
                      <span className="text-muted-foreground font-normal"> — {e.company}</span>
                    </h3>
                    <div className="font-mono text-xs text-muted-foreground mt-1 mb-3">
                      {e.location}
                    </div>
                    <p className="text-muted-foreground mb-4">{e.summary}</p>
                    <ul className="space-y-2">
                      {e.points.map((p, j) => (
                        <li key={j} className="flex gap-3 text-sm text-foreground/80">
                          <span className="text-accent shrink-0">—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}