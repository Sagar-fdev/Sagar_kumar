import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav.jsx";
import { Footer } from "@/components/portfolio/Footer.jsx";
import { About as AboutSection } from "@/components/portfolio/About.jsx";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — Sagar Kumar Singh";
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-16">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
