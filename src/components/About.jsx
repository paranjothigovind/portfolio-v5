import Reveal from "./Reveal";
import { about } from "@/lib/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="font-mono-label text-accent mb-4">01 / About</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
              Engineering as a systems discipline.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <blockquote className="mt-8 pl-6 border-l-2 border-accent">
              <p className="font-heading text-xl sm:text-2xl text-foreground leading-snug">
                {about.philosophy}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}