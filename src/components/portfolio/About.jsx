import { Code2, Sparkles, Rocket } from "lucide-react";
import { profile } from "@/lib/portfolio-data.js";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const highlights = [
  { Icon: Code2, title: "Clean Code", text: "I write maintainable, well-tested code that scales with your product." },
  { Icon: Sparkles, title: "Thoughtful Design", text: "I sweat the details — motion, spacing, typography — so the experience feels right." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">


      <div className="max-w-5xl mx-auto flex justify-between items-center mb-8">

          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <a href="./public/resumee.pdf" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-8">Download Resume</a> 
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">About me</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          </h2>
        </div>
         

        <div className="grid gap-10 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
               Hi I'm Sagar Kumar Singh a <span className="text-foreground font-medium">{profile.role}</span>.
               who have done masters in computer Application.
              I love turning ambiguous ideas into polished products that people actually enjoy using.
            </p>
            <p>
             A motivated and detail-oriented developer who has developed responsive, user-friendly interfaces using
            HTML, CSS, JavaScript, and React.js. Skilled at creating responsive, user-friendly interfaces and adept at applying
            UI/UX principles to build visually appealing, functional web applications. Proficient in debugging and collaborating
            in dynamic, fast-paced team environments.
            </p>
            <p>
              When I'm not coding, you'll find me sketching UI ideas, exploring new music,
              or experimenting with side projects. I'm always open to a good conversation —
              feel free to reach out.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="rounded-2xl border border-border p-5 shadow-elegant animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 mb-3">
                  <h.Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">{h.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
