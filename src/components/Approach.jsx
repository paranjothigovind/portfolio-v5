import Reveal from "./Reveal";
import { approach } from "@/lib/portfolioData";

export default function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="font-mono-label text-accent mb-4">04 / Approach</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
              How I work.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.08}>
                <div className="py-7 flex gap-6 group">
                  <span className="font-mono text-xs text-muted-foreground pt-1 shrink-0 w-8">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{a.body}</p>
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