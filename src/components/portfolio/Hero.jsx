import {Sparkles, Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "../Button.jsx";
import { profile } from "@/lib/portfolio-data.js";
import { SupportDialog } from "../SupportDialog.jsx";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow px-6 pt-24">
      {/* Floating quick-contact buttons */}
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        <a href={`tel:${profile.phone}`} aria-label="Call"
          className="h-11 w-11 rounded-full flex items-center justify-center bg-card/80 backdrop-blur-md border border-primary/30 text-primary shadow-glow hover:bg-primary hover:text-primary-foreground transition-smooth">
          <Phone className="h-4 w-4" />
        </a>
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="h-11 w-11 rounded-full flex items-center justify-center bg-card/80 backdrop-blur-md border border-primary/30 text-primary shadow-glow hover:bg-primary hover:text-primary-foreground transition-smooth">
          <MessageCircle className="h-4 w-4" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email"
          className="h-11 w-11 rounded-full flex items-center justify-center bg-card/80 backdrop-blur-md border border-primary/30 text-primary shadow-glow hover:bg-primary hover:text-primary-foreground transition-smooth">
          <Mail className="h-4 w-4" />
        </a>
      </div>

      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-primary/10 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-accent/10 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center" style={{ perspective: "1000px" }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary mb-8 animate-fade-up backdrop-blur-md">
          <Sparkles className="h-3 w-3" />
          <span>Available for freelance work</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hey, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up" style={{ animationDelay: "0.2s" }}>{profile.role}</p>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground/80 animate-fade-up" style={{ animationDelay: "0.3s" }}>{profile.bio}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#projects">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-smooth">
              View my work
            </Button>
          </a>
          <SupportDialog />
        </div>
      </div>
    </section>
  );
}
