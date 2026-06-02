import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle.jsx";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 md:flex items-center md:justify-between">
        <Link to="/" className="flex flex-col leading-none tracking-tight justify-self-start">
          <span
            className="text-gradient font-black text-2xl"
            style={{
              textShadow:
                "0 0 12px oklch(0.82 0.2 165 / 0.6), 0 0 24px oklch(0.9 0.22 155 / 0.4)",
            }}
          >
            SD
          </span>
          <span className="text-[10px] font-medium text-muted-foreground mt-0.5">
            sagar.dev
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#projects" className="hover:text-foreground transition-smooth">Work</a>
          <a href="/#contact" className="hover:text-foreground transition-smooth">Contact</a>
          <Link to="/about" className="hover:text-foreground transition-smooth">About</Link>
        </nav>
        <div className="md:hidden justify-self-center">
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 justify-self-end">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent transition-smooth"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/90 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="/#projects" onClick={() => setOpen(false)} className="hover:text-foreground transition-smooth">Work</a>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-foreground transition-smooth">About</Link>
            <a href="/#contact" onClick={() => setOpen(false)} className="hover:text-foreground transition-smooth">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
