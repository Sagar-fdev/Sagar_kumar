import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data.js";
import { Nav } from "@/components/portfolio/Nav.jsx";
import { Footer } from "@/components/portfolio/Footer.jsx";
import { Button } from "@/components/Button.jsx";
import NotFound from "./NotFound.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) document.title = `${project.title} — Sagar Kumar Singh`;
  }, [project]);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </Link>

          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">{project.tag}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{project.description}</p>

          <div className="mt-12 aspect-video rounded-3xl overflow-hidden shadow-glow relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white/40,transparent_50%)]" />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold mb-3">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-sm px-3 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">About this project</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.about}
              </p>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button className="mt-4 bg-gradient-primary text-primary-foreground">
                  Visit project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
