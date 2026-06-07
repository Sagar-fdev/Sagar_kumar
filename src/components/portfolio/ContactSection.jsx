import { Mail, Instagram, Facebook, MessageCircle, Github } from "lucide-react";
import { TiltCard } from "../TiltCard.jsx";
import { profile } from "@/lib/portfolio-data.js";

const links = [
  { name: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, color: "from-emerald-400 to-teal-500" },
  { name: "Instagram", value: "@yourhandle", href: profile.instagram, Icon: Instagram, color: "from-pink-500 to-fuchsia-500" },
  { name: "WhatsApp", value: "Chat with me", href: profile.whatsapp, Icon: MessageCircle, color: "from-green-400 to-emerald-500" },
  { name: "GitHub", value: "@yourhandle", href: profile.github, Icon: Github, color: "from-slate-400 to-slate-600" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
           Pick your favorite way to contact.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="block animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <TiltCard className="h-full rounded-2xl border border-border p-6 shadow-elegant hover:shadow-glow transition-smooth">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${l.color} mb-4`}>
                  <l.Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{l.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{l.value}</p>
              </TiltCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
