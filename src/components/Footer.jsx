import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-sm tracking-widest">
            {profile.name.split(" ").map((w) => w[0]).join("")}
            <span className="text-muted-foreground">/DEV</span>
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & care.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-2 font-mono-label text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}