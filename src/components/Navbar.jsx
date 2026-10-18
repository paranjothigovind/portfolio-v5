import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/portfolioData";

const sections = [
  { label: "Work", path: "/#work" },
  { label: "About", path: "/#about" },
  { label: "Expertise", path: "/#expertise" },
  { label: "Approach", path: "/#approach" },
  { label: "Experience", path: "/#experience" },
  { label: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const go = (path) => {
    setOpen(false);
    const [route, hash] = path.split("#");
    if (hash) {
      if (location.pathname !== route) {
        navigate(path);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(route || "/");
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
          <span className="font-mono text-sm tracking-widest text-foreground">
            PG<span className="text-muted-foreground">/DEV</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.label}
              onClick={() => go(s.path)}
              className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
            >
              {s.label}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="font-mono-label text-foreground border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
          >
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-1">
            {sections.map((s) => (
              <button
                key={s.label}
                onClick={() => go(s.path)}
                className="text-left py-3 font-mono-label text-muted-foreground hover:text-foreground border-b border-border/50"
              >
                {s.label}
              </button>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 text-center py-3 font-mono-label text-foreground border border-border"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}