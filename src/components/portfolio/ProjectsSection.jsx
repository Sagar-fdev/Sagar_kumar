import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TiltCard } from "../TiltCard.jsx";
import { projects } from "@/lib/portfolio-data.js";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A handful of products and experiments I'm proud of.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="block animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <TiltCard className="h-full rounded-2xl border border-border p-6 shadow-elegant hover:shadow-glow transition-smooth">
                <div className="mt-12 aspect-video rounded-3xl overflow-hidden shadow-glow relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white/30,transparent_50%)]" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-wider text-white/90 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">{p.tag}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-card-foreground">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth shrink-0" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border bg-muted/50 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </TiltCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
