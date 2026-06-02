import { profile } from "@/lib/portfolio-data.js";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p>Developer & Designer</p>
      </div>
    </footer>
  );
}
