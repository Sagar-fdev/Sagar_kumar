import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme.jsx";
import { Button } from "./Button.jsx";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-full border border-border/50 backdrop-blur-md hover:bg-primary/10 transition-smooth"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
