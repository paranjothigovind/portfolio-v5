import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block h-full border border-border p-7 sm:p-8 transition-colors duration-300 hover:border-accent/60 bg-card/30"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <span className="font-mono-label text-muted-foreground">{project.category}</span>
          <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="font-mono text-[11px] px-2.5 py-1 border border-border text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono-label text-foreground pt-4 border-t border-border group-hover:text-accent transition-colors">
          View case study
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </Link>
    </Reveal>
  );
}