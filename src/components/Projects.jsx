import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/portfolioData";

export default function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <div className="font-mono-label text-accent mb-4">02 / Selected Work</div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
                Products, systems, and AI work — built end to end.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-sm">
              Each project opens to a full case study: context, architecture, decisions, and stack.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {projects.map((p, i) => (
            <div key={p.slug} className="bg-background">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}