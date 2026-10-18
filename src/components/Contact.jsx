import { useState } from "react";
import { Mail, Linkedin, Github, FileDown, ArrowUpRight, Send } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/portfolioData";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? `\n${email}` : ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", value: "in/paranjothigovind", href: profile.links.linkedin, icon: Linkedin },
    { label: "GitHub", value: "github.com/paranjothigovind", href: profile.links.github, icon: Github },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono-label text-accent mb-4">06 / Contact</div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.05] text-balance">
            Have an interesting problem? Let's build something meaningful.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="space-y-px bg-border">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-background px-5 py-5 hover:bg-card transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <l.icon size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="font-mono-label text-muted-foreground">{l.label}</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground">
                    {l.value}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
              {profile.links.resume && (
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-background px-5 py-5 hover:bg-card transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <FileDown size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="font-mono-label text-muted-foreground">Resume</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground">
                    Download
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              )}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Based in {profile.location}. The form sends via your email client — no server, no fake sends.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.2}>
            <form onSubmit={handleSubmit} className="border border-border p-7 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="c-name" className="font-mono-label text-muted-foreground block mb-2">
                    Name
                  </label>
                  <input
                    id="c-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-accent focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="font-mono-label text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-accent focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="c-msg" className="font-mono-label text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono-label px-5 py-3 hover:gap-3 transition-all"
              >
                Send Message
                <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}