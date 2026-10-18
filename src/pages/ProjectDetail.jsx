
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, BookOpen, CheckCircle2, Circle } from "lucide-react";
import { projects, profile } from "@/lib/portfolioData";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-5">
          <div className="text-center">
            <p className="font-mono-label text-accent mb-4">404</p>
            <h1 className="font-heading text-3xl font-semibold mb-6">Project not found.</h1>
            <Link to="/" className="font-mono-label text-foreground border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors">
              ← Back home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const linkItems = [
    { key: "github", label: "GitHub", icon: Github, href: project.links.github },
    { key: "demo", label: "Live Demo", icon: ExternalLink, href: project.links.demo },
    { key: "docs", label: "Docs", icon: BookOpen, href: project.links.docs },
  ].filter((l) => l.href);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <article className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono-label text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            All work
          </Link>

          <Reveal>
            <div className="font-mono-label text-accent mb-4">{project.category}</div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[11px] px-2.5 py-1 border border-border text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {linkItems.length > 0 && (
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                {linkItems.map((l) => (
                  <a
                    key={l.key}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border border-border px-4 py-2 font-mono-label text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    <l.icon size={14} />
                    {l.label}
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </Reveal>
          )}

          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-14">
              <Section title="Overview">
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </Section>
              <Section title="Problem & Context">
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </Section>
              <Section title="My Role">
                <p className="text-muted-foreground leading-relaxed">{project.role}</p>
              </Section>
              <Section title="Technical Architecture">
                <ul className="space-y-3">
                  {project.architecture.map((a, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title="Key Engineering Decisions">
                <ul className="space-y-3">
                  {project.decisions.map((d, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title="Challenges & Solutions">
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 self-start">
              <div className="border border-border p-6">
                <div className="font-mono-label text-muted-foreground mb-4">Status</div>
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3 text-sm text-foreground">
                    <CheckCircle2 size={15} className="text-accent" /> Implemented
                  </div>
                  <ul className="space-y-1.5 pl-7">
                    {project.status.implemented.map((s, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{s}</li>
                    ))}
                  </ul>
                </div>
                {project.status.planned.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-sm text-foreground">
                      <Circle size={15} className="text-muted-foreground" /> Planned
                    </div>
                    <ul className="space-y-1.5 pl-7">
                      {project.status.planned.map((s, i) => (
                        <li key={i} className="text-sm text-muted-foreground">{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="border border-border p-6">
                <div className="font-mono-label text-muted-foreground mb-4">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] px-2.5 py-1 border border-border text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <Reveal>
      <section>
        <h2 className="font-mono-label text-accent mb-4">{title}</h2>
        <div className="space-y-3">{children}</div>
      </section>
    </Reveal>
  );
}