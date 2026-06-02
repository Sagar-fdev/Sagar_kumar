import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav.jsx";
import { Hero } from "@/components/portfolio/Hero.jsx";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection.jsx";
import { ContactForm } from "@/components/portfolio/ContactForm.jsx";
import { ContactSection } from "@/components/portfolio/ContactSection.jsx";
import { Footer } from "@/components/portfolio/Footer.jsx";

export default function Home() {
  useEffect(() => {
    document.title = "Sagar Kumar Singh — Full-Stack Developer & Creative Designer";
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ProjectsSection />
        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
