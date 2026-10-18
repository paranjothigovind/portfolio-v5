import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, techStrip } from "@/lib/portfolioData";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const reduce = useReducedMotion();
  const reveal = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div
        className="absolute -top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div {...reveal(0)} className="flex items-center gap-2.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono-label text-muted-foreground">{profile.status}</span>
          </motion.div>

          <motion.h1
            {...reveal(0.1)}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-balance"
          >
            {profile.headline}
          </motion.h1>

          <motion.p {...reveal(0.2)} className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {profile.intro}
          </motion.p>

          <motion.div {...reveal(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("work")}
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono-label px-5 py-3 hover:gap-3 transition-all"
            >
              Explore My Work
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 border border-border text-foreground font-mono-label px-5 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              Let's Talk
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          <motion.div {...reveal(0.4)} className="mt-12 pt-6 border-t border-border">
            <div className="font-mono-label text-muted-foreground mb-4">Tech stack</div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {techStrip.map((t) => (
                <span key={t} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={reduce ? {} : { opacity: 0, scale: 0.96 }}
            animate={reduce ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}